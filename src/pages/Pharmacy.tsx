import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload } from "lucide-react";

const Pharmacy = () => {
  const medicines = [
    { name: "Paracetamol 500mg", price: "$5.00", stock: "In Stock" },
    { name: "Amoxicillin 250mg", price: "$12.00", stock: "In Stock" },
    { name: "Ibuprofen 400mg", price: "$8.00", stock: "In Stock" },
    { name: "Cetirizine 10mg", price: "$6.00", stock: "In Stock" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Pharmacy</h1>
          <p className="text-muted-foreground">Order medicines and healthcare products</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search medicines..." className="pl-10" />
              </div>
              
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Upload Prescription</p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {medicines.map((medicine, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{medicine.name}</h3>
                    <p className="text-sm text-muted-foreground">{medicine.stock}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg mb-2">{medicine.price}</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
