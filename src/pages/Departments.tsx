import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Baby, 
  Users, 
  Eye, 
  Activity, 
  Dumbbell,
  Sparkles,
  TestTube,
  Building2,
  Pill
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: Heart,
      name: "General Medicine",
      description: "Comprehensive care for common health conditions and preventive medicine",
      color: "text-red-500"
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents",
      color: "text-pink-500"
    },
    {
      icon: Users,
      name: "Gynecology & Obstetrics",
      description: "Women's health, pregnancy care, and reproductive services",
      color: "text-purple-500"
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Complete eye care including vision tests and eye surgery",
      color: "text-blue-500"
    },
    {
      icon: Activity,
      name: "Surgery",
      description: "Advanced surgical procedures with expert surgeons",
      color: "text-orange-500"
    },
    {
      icon: Dumbbell,
      name: "Physiotherapy",
      description: "Rehabilitation and physical therapy for recovery",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      name: "Dermatology",
      description: "Skin care, treatment of skin conditions and cosmetic procedures",
      color: "text-yellow-500"
    },
    {
      icon: TestTube,
      name: "Laboratory",
      description: "Comprehensive diagnostic tests and pathology services",
      color: "text-cyan-500"
    },
    {
      icon: Building2,
      name: "Operation Theatres",
      description: "State-of-the-art surgical facilities with modern equipment",
      color: "text-indigo-500"
    },
    {
      icon: Pill,
      name: "Pharmacy",
      description: "24/7 pharmacy with all essential medications and supplies",
      color: "text-teal-500"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties, 
            all under one roof for your convenience
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="border border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              <CardContent className="pt-6">
                <div className="bg-secondary w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <dept.icon className={`h-7 w-7 ${dept.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-muted-foreground text-sm">{dept.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link to="/doctors" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    View Doctors
                  </Button>
                </Link>
                <Link to="/appointment" className="flex-1">
                  <Button size="sm" className="w-full">
                    Book Appointment
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-secondary/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
              <p className="text-muted-foreground">Specialized Departments</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Emergency Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
