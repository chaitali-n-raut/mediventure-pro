import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import Auth from "./pages/Auth";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Pharmacy from "./pages/Pharmacy";
import Laboratory from "./pages/Laboratory";
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/emergency" element={<Emergency />} />
                  <Route path="/auth" element={<Auth />} />
                  
                  {/* Protected Patient Routes */}
                  <Route 
                    path="/appointment" 
                    element={
                      <ProtectedRoute requireRole="patient">
                        <Appointment />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/patient-dashboard" 
                    element={
                      <ProtectedRoute requireRole="patient">
                        <PatientDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/billing" 
                    element={
                      <ProtectedRoute requireRole="patient">
                        <Billing />
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Protected Staff Routes */}
                  <Route 
                    path="/admin-dashboard" 
                    element={
                      <ProtectedRoute requireRole="staff">
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/pharmacy" 
                    element={
                      <ProtectedRoute requireRole="staff">
                        <Pharmacy />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/laboratory" 
                    element={
                      <ProtectedRoute requireRole="staff">
                        <Laboratory />
                      </ProtectedRoute>
                    } 
                  />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
