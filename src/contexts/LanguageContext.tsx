import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Common
    'home': 'Home',
    'about': 'About',
    'departments': 'Departments',
    'doctors': 'Doctors',
    'appointment': 'Book Appointment',
    'contact': 'Contact',
    'emergency': 'Emergency',
    'login': 'Login',
    'logout': 'Logout',
    'register': 'Register',
    'dashboard': 'Dashboard',
    'pharmacy': 'Pharmacy',
    'laboratory': 'Laboratory',
    'billing': 'Billing',
    
    // Home
    'tagline': 'Caring With Technology 💙',
    'book_now': 'Book Appointment Now',
    'emergency_numbers': 'Emergency Numbers',
    'find_doctor': 'Find Doctor',
    'pay_bill': 'Pay Bill',
    '24_7_service': '24×7 Service',
    'experienced_doctors': 'Experienced Doctors',
    'modern_labs': 'Modern Labs',
    
    // Auth
    'full_name': 'Full Name',
    'email': 'Email',
    'password': 'Password',
    'phone': 'Phone Number',
    'sign_in': 'Sign In',
    'sign_up': 'Sign Up',
    'already_account': 'Already have an account?',
    'no_account': "Don't have an account?",
    'patient_login': 'Patient Login',
    'staff_login': 'Staff Login',
    'welcome_back': 'Welcome Back',
    'create_account': 'Create Account',
  },
  hi: {
    // Common
    'home': 'होम',
    'about': 'हमारे बारे में',
    'departments': 'विभाग',
    'doctors': 'डॉक्टर',
    'appointment': 'अपॉइंटमेंट बुक करें',
    'contact': 'संपर्क',
    'emergency': 'आपातकाल',
    'login': 'लॉगिन',
    'logout': 'लॉगआउट',
    'register': 'रजिस्टर',
    'dashboard': 'डैशबोर्ड',
    'pharmacy': 'फार्मेसी',
    'laboratory': 'लैबोरेटरी',
    'billing': 'बिलिंग',
    
    // Home
    'tagline': 'टेक्नोलॉजी के साथ देखभाल 💙',
    'book_now': 'अभी अपॉइंटमेंट बुक करें',
    'emergency_numbers': 'आपातकालीन नंबर',
    'find_doctor': 'डॉक्टर खोजें',
    'pay_bill': 'बिल भुगतान',
    '24_7_service': '24×7 सेवा',
    'experienced_doctors': 'अनुभवी डॉक्टर',
    'modern_labs': 'आधुनिक लैब',
    
    // Auth
    'full_name': 'पूरा नाम',
    'email': 'ईमेल',
    'password': 'पासवर्ड',
    'phone': 'फोन नंबर',
    'sign_in': 'साइन इन',
    'sign_up': 'साइन अप',
    'already_account': 'पहले से खाता है?',
    'no_account': 'खाता नहीं है?',
    'patient_login': 'रोगी लॉगिन',
    'staff_login': 'स्टाफ लॉगिन',
    'welcome_back': 'वापसी पर स्वागत है',
    'create_account': 'खाता बनाएं',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
