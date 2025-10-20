import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Clock, FileText } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface Appointment {
  id: string;
  appointment_date: string;
  time_slot: string;
  status: string;
  patient_id: string;
  amount: number;
  department: string;
  profiles?: {
    full_name: string;
    phone: string;
  };
}

const DoctorDashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [doctorInfo, setDoctorInfo] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchDoctorInfo();
      fetchAppointments();
    }
  }, [user]);

  const fetchDoctorInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) throw error;
      setDoctorInfo(data);
    } catch (error: any) {
      console.error('Error fetching doctor info:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const { data: doctorData } = await supabase
        .from('doctors')
        .select('id')
        .eq('user_id', user?.id)
        .single();

      if (!doctorData) return;

      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          profiles:patient_id (
            full_name,
            phone
          )
        `)
        .eq('doctor_id', doctorData.id)
        .order('appointment_date', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error: any) {
      toast.error('Failed to fetch appointments');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const upcomingAppointments = appointments.filter(apt => 
    new Date(apt.appointment_date) >= new Date() && apt.status !== 'completed'
  );

  const completedAppointments = appointments.filter(apt => 
    apt.status === 'completed'
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('doctorDashboard')}</h1>
          <p className="text-muted-foreground">
            {t('welcome')}, Dr. {doctorInfo?.specialization || 'Doctor'}
          </p>
          {doctorInfo && (
            <p className="text-sm text-muted-foreground">
              {t('specialization')}: {doctorInfo.specialization}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{upcomingAppointments.length}</h3>
              <p className="text-sm text-muted-foreground">Upcoming Appointments</p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{completedAppointments.length}</h3>
              <p className="text-sm text-muted-foreground">Completed Consultations</p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{appointments.length}</h3>
              <p className="text-sm text-muted-foreground">Total Patients</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">Loading...</p>
              ) : upcomingAppointments.length === 0 ? (
                <p className="text-muted-foreground">No upcoming appointments</p>
              ) : (
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold">{apt.profiles?.full_name || 'Patient'}</p>
                        <p className="text-sm text-muted-foreground">{apt.department}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">{apt.appointment_date}</p>
                          <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                          <p className="text-sm text-muted-foreground">{apt.time_slot}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Contact: {apt.profiles?.phone || 'N/A'}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">Loading...</p>
              ) : completedAppointments.length === 0 ? (
                <p className="text-muted-foreground">No completed consultations yet</p>
              ) : (
                <div className="space-y-4">
                  {completedAppointments.slice(0, 5).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold">{apt.profiles?.full_name || 'Patient'}</p>
                        <p className="text-sm text-muted-foreground">{apt.department}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">{apt.appointment_date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{apt.amount}</p>
                        <span className="text-xs text-accent">Completed</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;