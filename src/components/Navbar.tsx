import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Globe, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

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

  const staffNavLinks = [
    { name: t('adminDashboard'), path: "/admin-dashboard" },
    { name: t('pharmacy'), path: "/pharmacy" },
    { name: t('laboratory'), path: "/laboratory" },
  ];

  const navLinks = user 
    ? (userRole === 'staff' ? [...publicNavLinks, ...staffNavLinks] : [...publicNavLinks, ...patientNavLinks])
    : publicNavLinks;

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

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
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Button size="sm" variant="ghost" onClick={toggleLanguage} className="gap-2">
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'हिन्दी' : 'English'}
            </Button>
            
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
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
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
            
            <Button size="sm" variant="ghost" onClick={toggleLanguage} className="mt-2 w-full gap-2">
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'हिन्दी' : 'English'}
            </Button>
            
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
