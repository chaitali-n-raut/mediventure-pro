import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorPhone, setDoctorPhone] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    if (!error) {
      toast.success(t('loginSuccess'));
      navigate('/');
    } else {
      toast.error(error.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signUp(signupEmail, signupPassword, fullName, phone);
    if (!error) {
      toast.success(t('signupSuccess'));
      navigate('/');
    } else {
      toast.error(error.message || 'Signup failed');
    }
    setLoading(false);
  };

  const handleDoctorSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signUp(doctorEmail, doctorPassword, `Dr. ${doctorName}`, doctorPhone);
    if (!error) {
      toast.success(t('signupSuccess'));
      navigate('/');
    } else {
      toast.error(error.message || 'Signup failed');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">SmartCare Hospital</CardTitle>
          <CardDescription>Caring With Technology 💙</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">{t('login')}</TabsTrigger>
              <TabsTrigger value="patient">{t('patient')}</TabsTrigger>
              <TabsTrigger value="doctor">{t('doctor')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">{t('email')}</Label>
                  <Input id="login-email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">{t('password')}</Label>
                  <Input id="login-password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Loading...' : t('login')}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="patient">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">{t('fullName')}</Label>
                  <Input id="signup-name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-phone">{t('phone')}</Label>
                  <Input id="signup-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">{t('email')}</Label>
                  <Input id="signup-email" type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">{t('password')}</Label>
                  <Input id="signup-password" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required minLength={6} />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Loading...' : t('signup')}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="doctor">
              <form onSubmit={handleDoctorSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="doctor-name">{t('fullName')}</Label>
                  <Input id="doctor-name" type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialization">{t('specialization')}</Label>
                  <Input id="specialization" type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">{t('licenseNumber')}</Label>
                  <Input id="license" type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-phone">{t('phone')}</Label>
                  <Input id="doctor-phone" type="tel" value={doctorPhone} onChange={(e) => setDoctorPhone(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">{t('email')}</Label>
                  <Input id="doctor-email" type="email" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">{t('password')}</Label>
                  <Input id="doctor-password" type="password" value={doctorPassword} onChange={(e) => setDoctorPassword(e.target.value)} required minLength={6} />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Loading...' : t('signup')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
