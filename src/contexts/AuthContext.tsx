import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userRole: 'staff' | 'patient' | 'doctor' | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone: string, role?: string, additionalData?: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<'staff' | 'patient' | 'doctor' | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      setUserRole(data?.role || 'patient');
    } catch (error) {
      console.error('Error fetching user role:', error);
      setUserRole('patient');
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Defer fetching user role
        if (session?.user) {
          setTimeout(() => {
            fetchUserRole(session.user.id);
          }, 0);
        } else {
          setUserRole(null);
        }
        
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserRole(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string, phone: string, role: string = 'patient', additionalData: any = {}) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data: authData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          phone: phone,
          role: role,
          ...additionalData,
        },
      },
    });
    
    if (error) {
      toast({
        title: 'Signup Error',
        description: error.message,
        variant: 'destructive',
      });
      return { error };
    }
    
    // If doctor role, create doctor record
    if (role === 'doctor' && authData.user && additionalData.specialization && additionalData.licenseNumber) {
      try {
        // First, update profile with avatar_url if provided
        if (additionalData.avatarUrl) {
          await supabase
            .from('profiles')
            .update({ avatar_url: additionalData.avatarUrl })
            .eq('user_id', authData.user.id);
        }
        
        // Insert into user_roles
        await supabase
          .from('user_roles')
          .insert({
            user_id: authData.user.id,
            role: 'doctor'
          });
        
        // Then, insert into doctors table
        const { error: doctorError } = await supabase
          .from('doctors')
          .insert({
            user_id: authData.user.id,
            specialization: additionalData.specialization,
            license_number: additionalData.licenseNumber
          });
        
        if (doctorError) {
          console.error('Error creating doctor record:', doctorError);
        }
      } catch (err) {
        console.error('Error in doctor signup process:', err);
      }
    }
    
    toast({
      title: 'Success',
      description: 'Account created successfully!',
    });
    
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      toast({
        title: 'Login Error',
        description: error.message,
        variant: 'destructive',
      });
    }
    
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setUserRole(null);
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully.',
    });
  };

  return (
    <AuthContext.Provider value={{ user, session, userRole, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
