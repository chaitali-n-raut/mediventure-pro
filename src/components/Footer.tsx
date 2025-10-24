import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">SmartCare</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('caringWithTechnology')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('aboutUs')}</Link></li>
              <li><Link to="/departments" className="text-muted-foreground hover:text-primary transition-colors">{t('departments')}</Link></li>
              <li><Link to="/doctors" className="text-muted-foreground hover:text-primary transition-colors">{t('ourDoctors')}</Link></li>
              <li><Link to="/appointment" className="text-muted-foreground hover:text-primary transition-colors">{t('bookAppointment')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pharmacy" className="text-muted-foreground hover:text-primary transition-colors">{t('pharmacy')}</Link></li>
              <li><Link to="/laboratory" className="text-muted-foreground hover:text-primary transition-colors">{t('laboratory')}</Link></li>
              <li><Link to="/emergency" className="text-muted-foreground hover:text-primary transition-colors">{t('emergencyCare')}</Link></li>
              <li><Link to="/patient-dashboard" className="text-muted-foreground hover:text-primary transition-colors">{t('patientPortal')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Medical Center Dr, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@smartcare.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@smartcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
