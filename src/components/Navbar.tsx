import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Menu, X, Globe, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, userRole, signOut } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const publicNavLinks = [
    { name: t('home'), path: "/" },
    { name: t('about'), path: "/about" },
    { name: t('departments'), path: "/departments" },
    { name: t('doctors'), path: "/doctors" },
    { name: t('emergency'), path: "/emergency" },
    { name: t('contact'), path: "/contact" },
  ];

  const patientNavLinks = [
    { name: t('myAppointments'), path: "/patient-dashboard" },
    { name: t('pharmacy'), path: "/pharmacy" },
    { name: t('laboratory'), path: "/laboratory" },
    { name: t('billing'), path: "/billing" },
  ];

  const doctorNavLinks = [
    { name: t('doctorDashboard'), path: "/doctor-dashboard" },
    { name: t('myAppointments'), path: "/doctor-dashboard" },
  ];

  const staffNavLinks = [
    { name: t('adminDashboard'), path: "/admin-dashboard" },
    { name: t('pharmacy'), path: "/pharmacy" },
    { name: t('laboratory'), path: "/laboratory" },
  ];

  const getNavLinks = () => {
    if (!user) return publicNavLinks;
    if (userRole === 'staff') return [...publicNavLinks, ...staffNavLinks];
    if (userRole === 'doctor') return [...publicNavLinks, ...doctorNavLinks];
    return [...publicNavLinks, ...patientNavLinks];
  };

  const navLinks = getNavLinks();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-2">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">SmartCare Hospital</span>
              <span className="text-xs text-muted-foreground">Caring With Technology 💙</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
              </SelectContent>
            </Select>
            
            {user ? (
              <>
                {userRole === 'patient' && (
                  <Link to="/appointment">
                    <Button size="sm">{t('bookAppointment')}</Button>
                  </Link>
                )}
                <Button size="sm" variant="outline" onClick={signOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  {t('logout')}
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {t('login')}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mt-2">
              <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी</SelectItem>
                  <SelectItem value="mr">मराठी</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {user ? (
              <>
                {userRole === 'patient' && (
                  <Link to="/appointment" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="mt-2 w-full">{t('bookAppointment')}</Button>
                  </Link>
                )}
                <Button size="sm" variant="outline" onClick={() => { signOut(); setIsOpen(false); }} className="mt-2 w-full gap-2">
                  <LogOut className="h-4 w-4" />
                  {t('logout')}
                </Button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="mt-2 w-full gap-2">
                  <User className="h-4 w-4" />
                  {t('login')}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
