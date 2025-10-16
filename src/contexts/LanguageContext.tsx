import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', hi: 'होम' },
  about: { en: 'About', hi: 'हमारे बारे में' },
  departments: { en: 'Departments', hi: 'विभाग' },
  doctors: { en: 'Doctors', hi: 'डॉक्टर' },
  emergency: { en: 'Emergency', hi: 'आपातकाल' },
  contact: { en: 'Contact', hi: 'संपर्क करें' },
  bookAppointment: { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  
  // Auth
  login: { en: 'Login', hi: 'लॉगिन' },
  signup: { en: 'Sign Up', hi: 'साइन अप' },
  logout: { en: 'Logout', hi: 'लॉगआउट' },
  email: { en: 'Email', hi: 'ईमेल' },
  password: { en: 'Password', hi: 'पासवर्ड' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम' },
  phone: { en: 'Phone', hi: 'फोन' },
  
  // Dashboard
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड' },
  patientDashboard: { en: 'Patient Dashboard', hi: 'रोगी डैशबोर्ड' },
  adminDashboard: { en: 'Admin Dashboard', hi: 'प्रशासन डैशबोर्ड' },
  myAppointments: { en: 'My Appointments', hi: 'मेरी अपॉइंटमेंट' },
  pharmacy: { en: 'Pharmacy', hi: 'फार्मेसी' },
  laboratory: { en: 'Laboratory', hi: 'प्रयोगशाला' },
  billing: { en: 'Billing', hi: 'बिलिंग' },
  
  // Common
  welcome: { en: 'Welcome', hi: 'स्वागत है' },
  submit: { en: 'Submit', hi: 'जमा करें' },
  cancel: { en: 'Cancel', hi: 'रद्द करें' },
  save: { en: 'Save', hi: 'सहेजें' },
  edit: { en: 'Edit', hi: 'संपादित करें' },
  delete: { en: 'Delete', hi: 'हटाएं' },
  view: { en: 'View', hi: 'देखें' },
  search: { en: 'Search', hi: 'खोजें' },
  
  // Hero
  heroTitle: { en: 'Your Health, Our Priority', hi: 'आपका स्वास्थ्य, हमारी प्राथमिकता' },
  heroSubtitle: { en: 'Experience world-class healthcare with compassion and cutting-edge technology. We\'re here for you 24/7.', hi: 'करुणा और अत्याधुनिक तकनीक के साथ विश्वस्तरीय स्वास्थ्य सेवा का अनुभव करें। हम आपके लिए 24/7 उपलब्ध हैं।' },
  bookNow: { en: 'Book Appointment Now', hi: 'अभी अपॉइंटमेंट बुक करें' },
  emergencyCall: { en: 'Emergency', hi: 'आपातकालीन कॉल' },
  
  // Features
  service247: { en: '24/7 Service', hi: '24/7 सेवा' },
  expertDoctors: { en: 'Expert Doctors', hi: 'विशेषज्ञ डॉक्टर' },
  modernLabs: { en: 'Modern Labs', hi: 'आधुनिक प्रयोगशालाएं' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
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
