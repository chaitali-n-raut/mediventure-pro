import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Calendar, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Doctors = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("all");

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      department: "General Medicine",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Pediatrician",
      department: "Pediatrics",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Emily Davis",
      specialization: "Gynecologist",
      department: "Gynecology & Obstetrics",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Robert Williams",
      specialization: "Orthopedic Surgeon",
      department: "Surgery",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Lisa Anderson",
      specialization: "Dermatologist",
      department: "Dermatology",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. James Martinez",
      specialization: "Ophthalmologist",
      department: "Ophthalmology",
      experience: "14 years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
    }
  ];

  const departments = ["all", "General Medicine", "Pediatrics", "Gynecology & Obstetrics", "Surgery", "Dermatology", "Ophthalmology"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "all" || doctor.department === filterDept;
    return matchesSearch && matchesDept;
  });

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
                  <p className="text-sm text-muted-foreground mb-3">{doctor.department}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-accent" />
                    <span>{doctor.experience} {t('experience')}</span>
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