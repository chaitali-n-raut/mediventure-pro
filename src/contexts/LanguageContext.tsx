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
  doctorDashboard: { en: 'Doctor Dashboard', hi: 'डॉक्टर डैशबोर्ड', mr: 'डॉक्टर डॅशबोर्ड' },
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
  
  // Hero - Home Page
  heroTitle: { en: 'Your Health, Our Priority', hi: 'आपका स्वास्थ्य, हमारी प्राथमिकता', mr: 'तुमचे आरोग्य, आमची प्राथमिकता' },
  heroSubtitle: { en: 'Experience world-class healthcare with compassion and cutting-edge technology. We\'re here for you 24/7.', hi: 'करुणा और अत्याधुनिक तकनीक के साथ विश्वस्तरीय स्वास्थ्य सेवा का अनुभव करें। हम आपके लिए 24/7 उपलब्ध हैं।', mr: 'करुणा आणि अत्याधुनिक तंत्रज्ञानासह जागतिक दर्जाच्या आरोग्यसेवेचा अनुभव घ्या. आम्ही आपल्यासाठी 24/7 उपलब्ध आहोत.' },
  bookNow: { en: 'Book Appointment Now', hi: 'अभी अपॉइंटमेंट बुक करें', mr: 'आता भेट बुक करा' },
  emergencyCall: { en: 'Emergency', hi: 'आपातकालीन कॉल', mr: 'आणीबाणी कॉल' },
  
  // Features
  service247: { en: '24/7 Service', hi: '24/7 सेवा', mr: '24/7 सेवा' },
  service247Desc: { en: 'Round-the-clock emergency care and medical support', hi: 'चौबीसों घंटे आपातकालीन देखभाल और चिकित्सा सहायता', mr: 'चोवीस तास आपत्कालीन सेवा आणि वैद्यकीय सहाय्य' },
  expertDoctors: { en: 'Expert Doctors', hi: 'विशेषज्ञ डॉक्टर', mr: 'तज्ञ डॉक्टर' },
  expertDoctorsDesc: { en: 'Highly qualified and experienced medical professionals', hi: 'उच्च योग्य और अनुभवी चिकित्सा पेशेवर', mr: 'उच्च पात्र आणि अनुभवी वैद्यकीय व्यावसायिक' },
  modernLabs: { en: 'Modern Labs', hi: 'आधुनिक प्रयोगशालाएं', mr: 'आधुनिक प्रयोगशाळा' },
  modernLabsDesc: { en: 'State-of-the-art diagnostic and testing facilities', hi: 'अत्याधुनिक नैदानिक ​​और परीक्षण सुविधाएं', mr: 'अत्याधुनिक निदान आणि चाचणी सुविधा' },
  
  // Home Page Sections
  quickAccess: { en: 'Quick Access', hi: 'त्वरित पहुंच', mr: 'द्रुत प्रवेश' },
  quickAccessDesc: { en: 'Everything you need at your fingertips', hi: 'आपकी उंगलियों पर सब कुछ', mr: 'आपल्या बोटांच्या टोकावर सर्व काही' },
  emergencyNumbers: { en: 'Emergency Numbers', hi: 'आपातकालीन नंबर', mr: 'आणीबाणी क्रमांक' },
  callUsAnytime: { en: 'Call us anytime', hi: 'कभी भी कॉल करें', mr: 'कधीही कॉल करा' },
  findDoctor: { en: 'Find Doctor', hi: 'डॉक्टर खोजें', mr: 'डॉक्टर शोधा' },
  bookYourAppointment: { en: 'Book your appointment', hi: 'अपना अपॉइंटमेंट बुक करें', mr: 'तुमची भेट बुक करा' },
  payBill: { en: 'Pay Bill', hi: 'बिल भुगतान', mr: 'बिल भरा' },
  quickPayment: { en: 'Quick payment options', hi: 'त्वरित भुगतान विकल्प', mr: 'द्रुत पेमेंट पर्याय' },
  whyChooseSmartCare: { en: 'Why Choose SmartCare?', hi: 'स्मार्टकेयर क्यों चुनें?', mr: 'स्मार्टकेअर का निवडावे?' },
  whyChooseDesc: { en: 'With over 20 years of excellence in healthcare, SmartCare Hospital combines advanced medical technology with compassionate care. Our team of expert doctors and state-of-the-art facilities ensure you receive the best treatment possible.', hi: 'स्वास्थ्य सेवा में 20 से अधिक वर्षों की उत्कृष्टता के साथ, स्मार्टकेयर अस्पताल उन्नत चिकित्सा प्रौद्योगिकी को दयालु देखभाल के साथ जोड़ता है। हमारे विशेषज्ञ डॉक्टरों की टीम और अत्याधुनिक सुविधाएं यह सुनिश्चित करती हैं कि आपको सर्वोत्तम उपचार मिले।', mr: 'आरोग्यसेवेत 20 वर्षांच्या उत्कृष्टतेसह, स्मार्टकेअर हॉस्पिटल प्रगत वैद्यकीय तंत्रज्ञानाला दयाळू सेवेसोबत एकत्र करते. आमची तज्ञ डॉक्टरांची टीम आणि अत्याधुनिक सुविधा तुम्हाला सर्वोत्तम उपचार मिळतील याची खात्री करतात.' },
  experiencedTeam: { en: 'Experienced Medical Team', hi: 'अनुभवी चिकित्सा टीम', mr: 'अनुभवी वैद्यकीय टीम' },
  experiencedTeamDesc: { en: 'Board-certified doctors with years of expertise', hi: 'वर्षों के विशेषज्ञता वाले बोर्ड-प्रमाणित डॉक्टर', mr: 'अनेक वर्षांच्या तज्ञतेसह बोर्ड-प्रमाणित डॉक्टर' },
  advancedTech: { en: 'Advanced Technology', hi: 'उन्नत प्रौद्योगिकी', mr: 'प्रगत तंत्रज्ञान' },
  advancedTechDesc: { en: 'Latest medical equipment and diagnostic tools', hi: 'नवीनतम चिकित्सा उपकरण और नैदानिक ​​उपकरण', mr: 'नवीनतम वैद्यकीय उपकरणे आणि निदान साधने' },
  patientCare: { en: 'Patient-Centered Care', hi: 'रोगी-केंद्रित देखभाल', mr: 'रुग्ण-केंद्रित सेवा' },
  patientCareDesc: { en: 'Your comfort and recovery are our top priorities', hi: 'आपकी सुविधा और रिकवरी हमारी प्राथमिकताएं हैं', mr: 'तुमची सोय आणि पुनर्प्राप्ती आमच्या प्राथमिकता आहेत' },
  learnMore: { en: 'Learn More About Us', hi: 'हमारे बारे में और जानें', mr: 'आमच्याबद्दल अधिक जाणून घ्या' },
  whatPatientsSay: { en: 'What Our Patients Say', hi: 'हमारे मरीज क्या कहते हैं', mr: 'आमचे रुग्ण काय म्हणतात' },
  realExperiences: { en: 'Real experiences from real people', hi: 'वास्तविक लोगों से वास्तविक अनुभव', mr: 'वास्तविक लोकांकडून वास्तविक अनुभव' },
  readyForHealth: { en: 'Ready to Take Care of Your Health?', hi: 'अपने स्वास्थ्य का ध्यान रखने के लिए तैयार हैं?', mr: 'तुमच्या आरोग्याची काळजी घेण्यास तयार आहात?' },
  scheduleVisit: { en: 'Schedule Your Visit', hi: 'अपनी यात्रा शेड्यूल करें', mr: 'तुमची भेट शेड्यूल करा' },
  bookTodayDesc: { en: 'Book an appointment today and experience quality healthcare', hi: 'आज ही अपॉइंटमेंट बुक करें और गुणवत्तापूर्ण स्वास्थ्य सेवा का अनुभव करें', mr: 'आज भेट बुक करा आणि दर्जेदार आरोग्यसेवेचा अनुभव घ्या' },
  
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
  
  // About Page
  aboutTitle: { en: 'About SmartCare Hospital', hi: 'स्मार्टकेयर अस्पताल के बारे में', mr: 'स्मार्टकेअर हॉस्पिटलबद्दल' },
  aboutSubtitle: { en: 'Where compassionate care meets cutting-edge medical technology', hi: 'जहां दयालु देखभाल अत्याधुनिक चिकित्सा प्रौद्योगिकी से मिलती है', mr: 'जिथे दयाळू सेवा अत्याधुनिक वैद्यकीय तंत्रज्ञानाशी भेटते' },
  ourVision: { en: 'Our Vision', hi: 'हमारा दृष्टिकोण', mr: 'आमची दृष्टी' },
  visionText: { en: 'To be the leading healthcare provider in the region, recognized for excellence in patient care, medical innovation, and compassionate service. We envision a future where quality healthcare is accessible to all.', hi: 'क्षेत्र में अग्रणी स्वास्थ्य सेवा प्रदाता बनना, रोगी देखभाल, चिकित्सा नवाचार और दयालु सेवा में उत्कृष्टता के लिए मान्यता प्राप्त करना। हम एक ऐसे भविष्य की कल्पना करते हैं जहां गुणवत्तापूर्ण स्वास्थ्य सेवा सभी के लिए सुलभ हो।', mr: 'प्रदेशातील आघाडीची आरोग्यसेवा प्रदाता होणे, रुग्ण सेवा, वैद्यकीय नवीनता आणि दयाळू सेवेत उत्कृष्टतेसाठी ओळखले जाणे. आम्ही अशा भविष्याची कल्पना करतो जिथे दर्जेदार आरोग्यसेवा सर्वांसाठी उपलब्ध असेल.' },
  ourMission: { en: 'Our Mission', hi: 'हमारा मिशन', mr: 'आमचे ध्येय' },
  missionText: { en: 'To provide comprehensive, patient-centered healthcare services with integrity, respect, and excellence. We are committed to improving the health and well-being of our community through advanced medical care and continuous innovation.', hi: 'ईमानदारी, सम्मान और उत्कृष्टता के साथ व्यापक, रोगी-केंद्रित स्वास्थ्य सेवाएं प्रदान करना। हम उन्नत चिकित्सा देखभाल और निरंतर नवाचार के माध्यम से अपने समुदाय के स्वास्थ्य और कल्याण में सुधार के लिए प्रतिबद्ध हैं।', mr: 'प्रामाणिकपणे, आदराने आणि उत्कृष्टतेने सर्वसमावेशक, रुग्ण-केंद्रित आरोग्यसेवा प्रदान करणे. प्रगत वैद्यकीय सेवा आणि सतत नावीन्यतेद्वारे आमच्या समुदायाच्या आरोग्य आणि कल्याणात सुधारणा करण्यास आम्ही वचनबद्ध आहोत.' },
  ourAchievements: { en: 'Our Achievements', hi: 'हमारी उपलब्धियां', mr: 'आमची उपलब्धी' },
  yearsOfService: { en: '20+ Years', hi: '20+ वर्ष', mr: '20+ वर्षे' },
  healthcareExcellence: { en: 'Of Healthcare Excellence', hi: 'स्वास्थ्य सेवा उत्कृष्टता का', mr: 'आरोग्यसेवा उत्कृष्टतेची' },
  expertDoctorsCount: { en: '50+ Doctors', hi: '50+ डॉक्टर', mr: '50+ डॉक्टर' },
  medicalProfessionals: { en: 'Expert Medical Professionals', hi: 'विशेषज्ञ चिकित्सा पेशेवर', mr: 'तज्ञ वैद्यकीय व्यावसायिक' },
  departmentsCount: { en: '10 Departments', hi: '10 विभाग', mr: '10 विभाग' },
  specializedCare: { en: 'Specialized Care Units', hi: 'विशेष देखभाल इकाइयां', mr: 'विशेष काळजी युनिट्स' },
  patientsServed: { en: '50,000+', hi: '50,000+', mr: '50,000+' },
  happyPatients: { en: 'Happy Patients Served', hi: 'खुश मरीजों की सेवा की', mr: 'आनंदी रुग्णांची सेवा केली' },
  directorMessage: { en: 'Director\'s Message', hi: 'निदेशक का संदेश', mr: 'संचालकांचा संदेश' },
  certifications: { en: 'Certifications & Accreditations', hi: 'प्रमाणपत्र और मान्यताएं', mr: 'प्रमाणपत्रे आणि मान्यता' },
  
  // Departments Page
  ourDepartments: { en: 'Our Departments', hi: 'हमारे विभाग', mr: 'आमचे विभाग' },
  comprehensiveServices: { en: 'Comprehensive healthcare services across multiple specialties, all under one roof for your convenience', hi: 'आपकी सुविधा के लिए एक ही छत के नीचे कई विशेषज्ञताओं में व्यापक स्वास्थ्य सेवाएं', mr: 'तुमच्या सोयीसाठी एका छताखाली अनेक विशेषतांमध्ये सर्वसमावेशक आरोग्यसेवा' },
  viewDoctors: { en: 'View Doctors', hi: 'डॉक्टर देखें', mr: 'डॉक्टर पहा' },
  specializedDepartments: { en: 'Specialized Departments', hi: 'विशेष विभाग', mr: 'विशेष विभाग' },
  emergencyServices247: { en: 'Emergency Services', hi: 'आपातकालीन सेवाएं', mr: 'आणीबाणी सेवा' },
  
  // Doctors Page
  findYourDoctor: { en: 'Find Your Doctor', hi: 'अपना डॉक्टर खोजें', mr: 'तुमचा डॉक्टर शोधा' },
  searchByName: { en: 'Search by name or specialization', hi: 'नाम या विशेषज्ञता से खोजें', mr: 'नाव किंवा विशेषज्ञतेनुसार शोधा' },
  filterByDept: { en: 'Filter by Department', hi: 'विभाग द्वारा फ़िल्टर करें', mr: 'विभागानुसार फिल्टर करा' },
  allDepartments: { en: 'All Departments', hi: 'सभी विभाग', mr: 'सर्व विभाग' },
  noDoctorsFound: { en: 'No doctors found', hi: 'कोई डॉक्टर नहीं मिला', mr: 'डॉक्टर सापडले नाहीत' },
  experience: { en: 'Experience', hi: 'अनुभव', mr: 'अनुभव' },
  years: { en: 'years', hi: 'साल', mr: 'वर्षे' },
}

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
