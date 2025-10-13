import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, Phone, Calendar, CreditCard, Heart, Stethoscope, Activity } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import doctorsTeam from "@/assets/doctors-team.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock emergency care and medical support"
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Highly qualified and experienced medical professionals"
    },
    {
      icon: Award,
      title: "Modern Labs",
      description: "State-of-the-art diagnostic and testing facilities"
    }
  ];

  const quickLinks = [
    {
      icon: Phone,
      title: "Emergency Numbers",
      description: "Call us anytime",
      link: "/emergency"
    },
    {
      icon: Calendar,
      title: "Find Doctor",
      description: "Book your appointment",
      link: "/doctors"
    },
    {
      icon: CreditCard,
      title: "Pay Bill",
      description: "Quick payment options",
      link: "/billing"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Excellent care and attention from the medical staff. The facilities are modern and clean.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Quick appointment scheduling and professional doctors. Highly recommend SmartCare!",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "The emergency department was incredibly efficient. They saved my life!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Your Health, <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience world-class healthcare with compassion and cutting-edge technology. 
              We're here for you 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment">
                <Button size="lg" className="shadow-lg hover:shadow-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment Now
                </Button>
              </Link>
              <Link to="/emergency">
                <Button size="lg" variant="outline" className="shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: +1 (234) 567-890
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-muted-foreground">Everything you need at your fingertips</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="border border-border hover:border-primary transition-all cursor-pointer group">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose SmartCare?</h2>
              <p className="text-muted-foreground mb-6">
                With over 20 years of excellence in healthcare, SmartCare Hospital combines 
                advanced medical technology with compassionate care. Our team of expert doctors 
                and state-of-the-art facilities ensure you receive the best treatment possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Stethoscope className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Experienced Medical Team</h4>
                    <p className="text-sm text-muted-foreground">Board-certified doctors with years of expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Advanced Technology</h4>
                    <p className="text-sm text-muted-foreground">Latest medical equipment and diagnostic tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Patient-Centered Care</h4>
                    <p className="text-sm text-muted-foreground">Your comfort and recovery are our top priorities</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="mt-6">Learn More About Us</Button>
              </Link>
            </div>
            <div>
              <img 
                src={doctorsTeam} 
                alt="Medical team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground">Real experiences from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-lg mb-8 opacity-90">Book an appointment today and experience quality healthcare</p>
          <Link to="/appointment">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Schedule Your Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
