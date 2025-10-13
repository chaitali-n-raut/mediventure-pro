import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, DollarSign, Activity } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { icon: Users, title: "Total Patients", value: "1,234", change: "+12%", color: "text-blue-500" },
    { icon: Calendar, title: "Appointments Today", value: "48", change: "+5%", color: "text-green-500" },
    { icon: DollarSign, title: "Revenue (Month)", value: "$45,678", change: "+18%", color: "text-purple-500" },
    { icon: Activity, title: "Active Staff", value: "156", change: "+2%", color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Hospital Management Overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-secondary p-3 rounded-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-sm text-accent font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">Patient #{i}001</p>
                      <p className="text-sm text-muted-foreground">Dr. Johnson • 10:00 AM</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Cardiology", "Pediatrics", "Surgery", "Dermatology"].map((dept, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{dept}</span>
                      <span className="text-sm text-muted-foreground">{85 + index * 3}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${85 + index * 3}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
