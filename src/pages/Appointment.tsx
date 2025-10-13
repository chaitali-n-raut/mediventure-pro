import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    timeSlot: "",
    paymentMethod: ""
  });

  const departments = ["General Medicine", "Pediatrics", "Gynecology", "Ophthalmology", "Surgery", "Dermatology"];
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const paymentMethods = ["Online - UPI", "Online - Card", "Online - Net Banking", "Offline - Cash at Hospital"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.name || !formData.email || !formData.phone || 
        !formData.department || !formData.doctor || !formData.timeSlot || !formData.paymentMethod) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Appointment booked successfully! Confirmation sent to your email.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      timeSlot: "",
      paymentMethod: ""
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book Appointment</h1>
          <p className="text-muted-foreground">Schedule your visit with our expert doctors</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 234 567 890"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Appointment Details</h3>
                
                <div>
                  <Label>Select Department *</Label>
                  <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Select Doctor *</Label>
                  <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose doctor" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
                      <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                      <SelectItem value="dr-davis">Dr. Emily Davis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Select Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-popover z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="pointer-events-auto"
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>Time Slot *</Label>
                    <Select value={formData.timeSlot} onValueChange={(value) => setFormData({...formData, timeSlot: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="prescription">Upload Prescription (Optional)</Label>
                  <div className="mt-1">
                    <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Payment Method</h3>
                <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({...formData, paymentMethod: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {paymentMethods.map((method) => (
                      <SelectItem key={method} value={method}>{method}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-secondary/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Consultation fee: ₹500. You will receive a confirmation 
                  email with appointment details and payment instructions.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Confirm Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appointment;
