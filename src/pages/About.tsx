import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building2, Heart } from "lucide-react";
import doctorsTeam from "@/assets/doctors-team.jpg";

const About = () => {
  const achievements = [
    { icon: Award, title: "20+ Years", description: "Of Healthcare Excellence" },
    { icon: Users, title: "50+ Doctors", description: "Expert Medical Professionals" },
    { icon: Building2, title: "10 Departments", description: "Specialized Care Units" },
    { icon: Heart, title: "50,000+", description: "Happy Patients Served" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About SmartCare Hospital</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where compassionate care meets cutting-edge medical technology
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading healthcare provider in the region, recognized for excellence 
                in patient care, medical innovation, and compassionate service. We envision a 
                future where quality healthcare is accessible to all.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide comprehensive, patient-centered healthcare services with integrity, 
                respect, and excellence. We are committed to improving the health and well-being 
                of our community through advanced medical care and continuous innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="border border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Director's Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={doctorsTeam}
              alt="Medical Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Director's Message</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to SmartCare Hospital. For over two decades, we have been at the forefront 
              of healthcare excellence, combining advanced medical technology with compassionate, 
              patient-centered care.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of highly skilled medical professionals is dedicated to providing the 
              highest standard of care across all our specialized departments. We believe in 
              treating not just the illness, but the whole person, ensuring that each patient 
              receives personalized attention and comprehensive care.
            </p>
            <p className="text-muted-foreground mb-4">
              As we continue to grow and evolve, our commitment remains unchanged: to be your 
              trusted partner in health, providing world-class medical services with warmth 
              and compassion.
            </p>
            <p className="font-semibold">
              Dr. James Anderson<br />
              <span className="text-sm text-muted-foreground">Medical Director</span>
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-secondary/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">ISO 9001:2015 Certified</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">NABH Accredited</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">JCI Accredited</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">Green Hospital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
