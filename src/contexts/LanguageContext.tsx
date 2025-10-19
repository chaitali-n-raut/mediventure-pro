import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ' },
  about: { en: 'About', hi: 'हमारे बारे में', mr: 'आमच्याबद्दल' },
  departments: { en: 'Departments', hi: 'विभाग', mr: 'विभाग' },
  doctors: { en: 'Doctors', hi: 'डॉक्टर', mr: 'डॉक्टर' },
  emergency: { en: 'Emergency', hi: 'आपातकाल', mr: 'आणीबाणी' },
  contact: { en: 'Contact', hi: 'संपर्क करें', mr: 'संपर्क' },
  bookAppointment: { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें', mr: 'भेट बुक करा' },
  
  // Auth
  login: { en: 'Login', hi: 'लॉगिन', mr: 'लॉगिन' },
  signup: { en: 'Sign Up', hi: 'साइन अप', mr: 'साइन अप' },
  logout: { en: 'Logout', hi: 'लॉगआउट', mr: 'लॉगआउट' },
  email: { en: 'Email', hi: 'ईमेल', mr: 'ईमेल' },
  password: { en: 'Password', hi: 'पासवर्ड', mr: 'पासवर्ड' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम', mr: 'पूर्ण नाव' },
  phone: { en: 'Phone', hi: 'फोन', mr: 'फोन' },
  patient: { en: 'Patient', hi: 'रोगी', mr: 'रुग्ण' },
  doctor: { en: 'Doctor', hi: 'डॉक्टर', mr: 'डॉक्टर' },
  specialization: { en: 'Specialization', hi: 'विशेषज्ञता', mr: 'विशेषज्ञता' },
  licenseNumber: { en: 'License Number', hi: 'लाइसेंस नंबर', mr: 'परवाना क्रमांक' },
  
  // Dashboard
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', mr: 'डॅशबोर्ड' },
  patientDashboard: { en: 'Patient Dashboard', hi: 'रोगी डैशबोर्ड', mr: 'रुग्ण डॅशबोर्ड' },
  adminDashboard: { en: 'Admin Dashboard', hi: 'प्रशासन डैशबोर्ड', mr: 'प्रशासन डॅशबोर्ड' },
  myAppointments: { en: 'My Appointments', hi: 'मेरी अपॉइंटमेंट', mr: 'माझ्या भेटी' },
  pharmacy: { en: 'Pharmacy', hi: 'फार्मेसी', mr: 'फार्मसी' },
  laboratory: { en: 'Laboratory', hi: 'प्रयोगशाला', mr: 'प्रयोगशाळा' },
  billing: { en: 'Billing', hi: 'बिलिंग', mr: 'बिलिंग' },
  
  // Common
  welcome: { en: 'Welcome', hi: 'स्वागत है', mr: 'स्वागत आहे' },
  submit: { en: 'Submit', hi: 'जमा करें', mr: 'सबमिट करा' },
  cancel: { en: 'Cancel', hi: 'रद्द करें', mr: 'रद्द करा' },
  save: { en: 'Save', hi: 'सहेजें', mr: 'जतन करा' },
  edit: { en: 'Edit', hi: 'संपादित करें', mr: 'संपादित करा' },
  delete: { en: 'Delete', hi: 'हटाएं', mr: 'हटवा' },
  view: { en: 'View', hi: 'देखें', mr: 'पहा' },
  search: { en: 'Search', hi: 'खोजें', mr: 'शोधा' },
  
  // Hero
  heroTitle: { en: 'Your Health, Our Priority', hi: 'आपका स्वास्थ्य, हमारी प्राथमिकता', mr: 'तुमचे आरोग्य, आमची प्राथमिकता' },
  heroSubtitle: { en: 'Experience world-class healthcare with compassion and cutting-edge technology. We\'re here for you 24/7.', hi: 'करुणा और अत्याधुनिक तकनीक के साथ विश्वस्तरीय स्वास्थ्य सेवा का अनुभव करें। हम आपके लिए 24/7 उपलब्ध हैं।', mr: 'करुणा आणि अत्याधुनिक तंत्रज्ञानासह जागतिक दर्जाच्या आरोग्यसेवेचा अनुभव घ्या. आम्ही आपल्यासाठी 24/7 उपलब्ध आहोत.' },
  bookNow: { en: 'Book Appointment Now', hi: 'अभी अपॉइंटमेंट बुक करें', mr: 'आता भेट बुक करा' },
  emergencyCall: { en: 'Emergency', hi: 'आपातकालीन कॉल', mr: 'आणीबाणी कॉल' },
  
  // Features
  service247: { en: '24/7 Service', hi: '24/7 सेवा', mr: '24/7 सेवा' },
  expertDoctors: { en: 'Expert Doctors', hi: 'विशेषज्ञ डॉक्टर', mr: 'तज्ञ डॉक्टर' },
  modernLabs: { en: 'Modern Labs', hi: 'आधुनिक प्रयोगशालाएं', mr: 'आधुनिक प्रयोगशाळा' },
  
  // Appointment
  appointmentDetails: { en: 'Appointment Details', hi: 'अपॉइंटमेंट विवरण', mr: 'भेट तपशील' },
  personalInfo: { en: 'Personal Information', hi: 'व्यक्तिगत जानकारी', mr: 'वैयक्तिक माहिती' },
  selectDepartment: { en: 'Select Department', hi: 'विभाग चुनें', mr: 'विभाग निवडा' },
  selectDoctor: { en: 'Select Doctor', hi: 'डॉक्टर चुनें', mr: 'डॉक्टर निवडा' },
  selectDate: { en: 'Select Date', hi: 'तारीख चुनें', mr: 'तारीख निवडा' },
  timeSlot: { en: 'Time Slot', hi: 'समय स्लॉट', mr: 'वेळ स्लॉट' },
  paymentMethod: { en: 'Payment Method', hi: 'भुगतान विधि', mr: 'पेमेंट पद्धत' },
  confirmAppointment: { en: 'Confirm Appointment', hi: 'अपॉइंटमेंट की पुष्टि करें', mr: 'भेटीची पुष्टी करा' },
  consultationFee: { en: 'Consultation fee', hi: 'परामर्श शुल्क', mr: 'सल्लामसलत शुल्क' },
  
  // Messages
  appointmentSuccess: { en: 'Appointment booked successfully!', hi: 'अपॉइंटमेंट सफलतापूर्वक बुक हुई!', mr: 'भेट यशस्वीरित्या बुक झाली!' },
  loginSuccess: { en: 'Login successful! Welcome back.', hi: 'लॉगिन सफल! वापस स्वागत है।', mr: 'लॉगिन यशस्वी! परत स्वागत आहे.' },
  signupSuccess: { en: 'Account created successfully! Welcome to SmartCare.', hi: 'खाता सफलतापूर्वक बनाया गया! स्मार्टकेयर में आपका स्वागत है।', mr: 'खाते यशस्वीरित्या तयार केले! स्मार्टकेअरमध्ये आपले स्वागत आहे.' },
  fillAllFields: { en: 'Please fill all required fields', hi: 'कृपया सभी आवश्यक फ़ील्ड भरें', mr: 'कृपया सर्व आवश्यक फील्ड भरा' },
  paymentDetails: { en: 'Payment Details', hi: 'भुगतान विवरण', mr: 'पेमेंट तपशील' },
  proceedPayment: { en: 'Proceed to Payment', hi: 'भुगतान के लिए आगे बढ़ें', mr: 'पेमेंटसाठी पुढे जा' },
  bookAnother: { en: 'Book Another Appointment', hi: 'एक और अपॉइंटमेंट बुक करें', mr: 'दुसरी भेट बुक करा' },
};

export type { Language };

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
