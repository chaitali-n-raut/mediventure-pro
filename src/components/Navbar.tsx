import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, LayoutDashboard, Globe, Heart } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userRole, signOut } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const getNavLinks = () => {
    if (userRole === 'staff') {
      return [
        { name: t('dashboard'), path: '/admin-dashboard' },
        { name: t('departments'), path: '/departments' },
        { name: t('doctors'), path: '/doctors' },
        { name: t('pharmacy'), path: '/pharmacy' },
        { name: t('laboratory'), path: '/laboratory' },
        { name: t('emergency'), path: '/emergency' },
      ];
    }
    
    return [
      { name: t('home'), path: '/' },
      { name: t('about'), path: '/about' },
      { name: t('departments'), path: '/departments' },
      { name: t('doctors'), path: '/doctors' },
      { name: t('appointment'), path: '/appointment' },
      { name: t('contact'), path: '/contact' },
      { name: t('emergency'), path: '/emergency' },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-card shadow-medium border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-accent rounded-full p-2 shadow-soft">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">SmartCare Hospital</span>
              <span className="text-xs text-muted-foreground">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {link.name}
                </Button>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hi')}>
                  हिन्दी {language === 'hi' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    {userRole === 'staff' ? 'Staff' : 'Patient'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to={userRole === 'staff' ? '/admin-dashboard' : '/patient-dashboard'}>
                      {t('dashboard')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    {t('logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button>{t('login')}</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-border pt-2 mt-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="w-full text-left py-2 text-foreground hover:text-primary flex items-center"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'en' ? 'हिन्दी' : 'English'}
              </button>
              
              {user ? (
                <>
                  <Link
                    to={userRole === 'staff' ? '/admin-dashboard' : '/patient-dashboard'}
                    className="block py-2 text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="w-full text-left py-2 text-foreground hover:text-primary flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t('logout')}
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block py-2 text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('login')}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
