import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CreditCard } from "lucide-react";

const Billing = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Billing & Payments</h1>
          <p className="text-muted-foreground">View and manage your bills</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="border-b border-border pb-4 mb-4">
              <h3 className="font-semibold text-lg mb-2">Invoice #INV-2024-001</h3>
              <p className="text-sm text-muted-foreground">Date: October 15, 2024</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-semibold">$500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lab Tests</span>
                <span className="font-semibold">$250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Medicines</span>
                <span className="font-semibold">$75</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-primary">$825</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
