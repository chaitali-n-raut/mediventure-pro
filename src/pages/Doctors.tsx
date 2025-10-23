import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Calendar, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Doctors = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("all");
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select(`
          id,
          user_id,
          specialization,
          license_number
        `);

      if (error) throw error;

      // Fetch profiles for all doctors
      const userIds = data?.map(d => d.user_id) || [];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, full_name, avatar_url')
        .in('user_id', userIds);

      const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);

      const formattedDoctors = data?.map((doctor: any) => {
        const profile = profileMap.get(doctor.user_id);
        return {
          id: doctor.id,
          name: profile?.full_name || 'Doctor',
          specialization: doctor.specialization,
          licenseNumber: doctor.license_number,
          image: profile?.avatar_url || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
        };
      }) || [];

      setDoctors(formattedDoctors);
    } catch (error: any) {
      console.error('Error fetching doctors:', error);
      toast.error(t('errorFetchingDoctors') || 'Error fetching doctors');
    } finally {
      setLoading(false);
    }
  };

  const departments = ["all", "Cardiologist", "Pediatrician", "Gynecologist", "Orthopedic Surgeon", "Dermatologist", "Ophthalmologist"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "all" || doctor.specialization === filterDept;
    return matchesSearch && matchesDept;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('ourMedicalExperts')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('medicalExpertsSubtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterDept} onValueChange={setFilterDept}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder={t('filterByDepartment')} />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept === "all" ? t('allDepartments') : dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/10"
                  />
                  <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialization}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-accent" />
                    <span>{t('licenseNumber')}: {doctor.licenseNumber}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/appointment" className="w-full">
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    {t('bookAppointment')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t('noDoctorsFound')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;