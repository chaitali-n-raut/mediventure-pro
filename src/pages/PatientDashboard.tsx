import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText, User } from "lucide-react";

const PatientDashboard = () => {
  const appointments = [
    { date: "2024-10-15", doctor: "Dr. Sarah Johnson", department: "Cardiology", status: "Upcoming" },
    { date: "2024-09-20", doctor: "Dr. Michael Chen", department: "Pediatrics", status: "Completed" }
  ];

  const billingHistory = [
    { date: "2024-09-20", description: "Consultation Fee", amount: "$500", status: "Paid" },
    { date: "2024-08-15", description: "Lab Tests", amount: "$250", status: "Paid" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Patient Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">2</h3>
              <p className="text-sm text-muted-foreground">Upcoming Appointments</p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-1">5</h3>
              <p className="text-sm text-muted-foreground">Medical Records</p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">3</h3>
              <p className="text-sm text-muted-foreground">Active Prescriptions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((apt, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">{apt.doctor}</p>
                      <p className="text-sm text-muted-foreground">{apt.department}</p>
                      <p className="text-sm text-muted-foreground">{apt.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      apt.status === "Upcoming" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((bill, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">{bill.description}</p>
                      <p className="text-sm text-muted-foreground">{bill.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{bill.amount}</p>
                      <span className="text-xs text-accent">{bill.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Medical Records & Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                <span>Lab Report - Blood Test (Sep 2024)</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Prescription - Dr. Johnson (Sep 2024)</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>X-Ray Report (Aug 2024)</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
