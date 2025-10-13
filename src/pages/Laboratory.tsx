import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestTube, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Laboratory = () => {
  const tests = [
    { name: "Complete Blood Count (CBC)", price: "$45", duration: "4-6 hours" },
    { name: "Lipid Profile", price: "$55", duration: "6-8 hours" },
    { name: "Thyroid Function Test", price: "$65", duration: "24 hours" },
    { name: "Blood Sugar Test", price: "$25", duration: "2-3 hours" },
    { name: "Liver Function Test", price: "$50", duration: "6-8 hours" },
    { name: "Kidney Function Test", price: "$50", duration: "6-8 hours" }
  ];

  const reports = [
    { name: "Blood Test Report", date: "2024-09-15", status: "Ready" },
    { name: "X-Ray Report", date: "2024-09-10", status: "Ready" },
    { name: "ECG Report", date: "2024-08-25", status: "Ready" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Laboratory Services</h1>
          <p className="text-muted-foreground">Advanced diagnostic tests with quick results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Book Tests */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Tests</h2>
            <div className="space-y-4">
              {tests.map((test, index) => (
                <Card key={index} className="border border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <TestTube className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{test.name}</h3>
                          <p className="text-sm text-muted-foreground">Results in {test.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg mb-2">{test.price}</p>
                        <Link to="/appointment">
                          <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Reports */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Reports</h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{report.name}</h3>
                        <p className="text-sm text-muted-foreground">{report.date}</p>
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-accent/10 text-accent">
                          {report.status}
                        </span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-secondary/30 border-none">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">📬 Notification Service</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant notifications via SMS and email when your lab results are ready. 
                  Enable notifications in your account settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
