import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations: { [key: string]: { [key in Language]: string } } = {
    // Navigation
    home: { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ' },
    about: { en: 'About', hi: 'हमारे बारे में', mr: 'आमच्याबद्दल' },
    departments: { en: 'Departments', hi: 'विभाग', mr: 'विभाग' },
    doctors: { en: 'Doctors', hi: 'डॉक्टर', mr: 'डॉक्टर' },
    appointment: { en: 'Appointment', hi: 'अपॉइंटमेंट', mr: 'भेट' },
    emergency: { en: 'Emergency', hi: 'आपातकाल', mr: 'आणीबाणी' },
    laboratory: { en: 'Laboratory', hi: 'प्रयोगशाला', mr: 'प्रयोगशाळा' },
    pharmacy: { en: 'Pharmacy', hi: 'फार्मेसी', mr: 'फार्मसी' },
    contact: { en: 'Contact', hi: 'संपर्क करें', mr: 'संपर्क' },
    patientDashboard: { en: 'Patient Dashboard', hi: 'रोगी डैशबोर्ड', mr: 'रुग्ण डॅशबोर्ड' },
    doctorDashboard: { en: 'Doctor Dashboard', hi: 'डॉक्टर डैशबोर्ड', mr: 'डॉक्टर डॅशबोर्ड' },
    adminDashboard: { en: 'Admin Dashboard', hi: 'प्रशासन डैशबोर्ड', mr: 'प्रशासन डॅशबोर्ड' },
    monthlyAppointments: { en: 'Monthly Appointments', hi: 'मासिक अपॉइंटमेंट', mr: 'मासिक भेटी' },
    myPatients: { en: 'My Patients', hi: 'मेरे मरीज', mr: 'माझे रुग्ण' },
    myAppointments: { en: 'My Appointments', hi: 'मेरी अपॉइंटमेंट', mr: 'माझ्या भेटी' },
    billing: { en: 'Billing', hi: 'बिलिंग', mr: 'बिलिंग' },
    logout: { en: 'Logout', hi: 'लॉगआउट', mr: 'लॉगआउट' },
    
    // Auth
    login: { en: 'Login', hi: 'लॉगिन', mr: 'लॉगिन' },
    signup: { en: 'Sign Up', hi: 'साइन अप', mr: 'साइन अप' },
    email: { en: 'Email', hi: 'ईमेल', mr: 'ईमेल' },
    password: { en: 'Password', hi: 'पासवर्ड', mr: 'पासवर्ड' },
    fullName: { en: 'Full Name', hi: 'पूरा नाम', mr: 'पूर्ण नाव' },
    phone: { en: 'Phone', hi: 'फोन', mr: 'फोन' },
    patient: { en: 'Patient', hi: 'रोगी', mr: 'रुग्ण' },
    doctor: { en: 'Doctor', hi: 'डॉक्टर', mr: 'डॉक्टर' },
    specialization: { en: 'Specialization', hi: 'विशेषज्ञता', mr: 'विशेषज्ञता' },
    licenseNumber: { en: 'License Number', hi: 'लाइसेंस नंबर', mr: 'परवाना क्रमांक' },
    consultationFee: { en: 'Consultation Fee', hi: 'परामर्श शुल्क', mr: 'सल्लामसलत शुल्क' },
    
    // Common
    welcome: { en: 'Welcome', hi: 'स्वागत है', mr: 'स्वागत आहे' },
    bookAppointment: { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें', mr: 'भेट बुक करा' },
    viewDoctors: { en: 'View Doctors', hi: 'डॉक्टर देखें', mr: 'डॉक्टर पहा' },
    learnMore: { en: 'Learn More', hi: 'और जानें', mr: 'अधिक जाणून घ्या' },
    submit: { en: 'Submit', hi: 'जमा करें', mr: 'सबमिट करा' },
    cancel: { en: 'Cancel', hi: 'रद्द करें', mr: 'रद्द करा' },
    save: { en: 'Save', hi: 'सहेजें', mr: 'जतन करा' },
    download: { en: 'Download', hi: 'डाउनलोड', mr: 'डाउनलोड' },
    upload: { en: 'Upload', hi: 'अपलोड', mr: 'अपलोड' },
    search: { en: 'Search', hi: 'खोजें', mr: 'शोधा' },
    filter: { en: 'Filter', hi: 'फ़िल्टर', mr: 'फिल्टर' },
    book: { en: 'Book', hi: 'बुक करें', mr: 'बुक करा' },
    payNow: { en: 'Pay Now', hi: 'अभी भुगतान करें', mr: 'आता भुगतान करा' },
    totalAmount: { en: 'Total Amount', hi: 'कुल राशि', mr: 'एकूण रक्कम' },
    status: { en: 'Status', hi: 'स्थिति', mr: 'स्थिती' },
    experience: { en: 'experience', hi: 'अनुभव', mr: 'अनुभव' },
    call: { en: 'Call', hi: 'कॉल करें', mr: 'कॉल करा' },
    
    // Home Page
    heroTitle: { en: 'Your Health, Our Priority', hi: 'आपका स्वास्थ्य, हमारी प्राथमिकता', mr: 'तुमचे आरोग्य, आमची प्राथमिकता' },
    heroSubtitle: { en: 'Experience world-class healthcare with compassion and cutting-edge technology. We\'re here for you 24/7.', hi: 'करुणा और अत्याधुनिक तकनीक के साथ विश्वस्तरीय स्वास्थ्य सेवा का अनुभव करें। हम आपके लिए 24/7 उपलब्ध हैं।', mr: 'करुणा आणि अत्याधुनिक तंत्रज्ञानासह जागतिक दर्जाच्या आरोग्यसेवेचा अनुभव घ्या. आम्ही आपल्यासाठी 24/7 उपलब्ध आहोत.' },
    bookNow: { en: 'Book Appointment Now', hi: 'अभी अपॉइंटमेंट बुक करें', mr: 'आता भेट बुक करा' },
    emergencyCall: { en: 'Emergency Call', hi: 'आपातकालीन कॉल', mr: 'आणीबाणी कॉल' },
    whyChooseSmartCare: { en: 'Why Choose SmartCare?', hi: 'स्मार्टकेयर क्यों चुनें?', mr: 'स्मार्टकेअर का निवडावे?' },
    whyChooseDesc: { en: 'With over 20 years of excellence in healthcare, SmartCare Hospital combines advanced medical technology with compassionate care.', hi: 'स्वास्थ्य सेवा में 20 से अधिक वर्षों की उत्कृष्टता के साथ, स्मार्टकेयर अस्पताल उन्नत चिकित्सा प्रौद्योगिकी को दयालु देखभाल के साथ जोड़ता है।', mr: 'आरोग्यसेवेत 20 वर्षांच्या उत्कृष्टतेसह, स्मार्टकेअर हॉस्पिटल प्रगत वैद्यकीय तंत्रज्ञानाला दयाळू सेवेसोबत एकत्र करते.' },
    service247: { en: '24/7 Service', hi: '24/7 सेवा', mr: '24/7 सेवा' },
    expertDoctors: { en: 'Expert Doctors', hi: 'विशेषज्ञ डॉक्टर', mr: 'तज्ञ डॉक्टर' },
    modernLabs: { en: 'Modern Labs', hi: 'आधुनिक प्रयोगशालाएं', mr: 'आधुनिक प्रयोगशाळा' },
    
    // About Page
    aboutTitle: { en: 'About SmartCare Hospital', hi: 'स्मार्टकेयर अस्पताल के बारे में', mr: 'स्मार्टकेअर हॉस्पिटलबद्दल' },
    aboutSubtitle: { en: 'Where compassionate care meets cutting-edge medical technology', hi: 'जहां दयालु देखभाल अत्याधुनिक चिकित्सा प्रौद्योगिकी से मिलती है', mr: 'जिथे दयाळू सेवा अत्याधुनिक वैद्यकीय तंत्रज्ञानाशी भेटते' },
    ourVision: { en: 'Our Vision', hi: 'हमारा दृष्टिकोण', mr: 'आमची दृष्टी' },
    ourMission: { en: 'Our Mission', hi: 'हमारा मिशन', mr: 'आमचे ध्येय' },
    ourAchievements: { en: 'Our Achievements', hi: 'हमारी उपलब्धियां', mr: 'आमची उपलब्धी' },
    directorsMessage: { en: 'Director\'s Message', hi: 'निदेशक का संदेश', mr: 'संचालकाचा संदेश' },
    certificationsTitle: { en: 'Certifications & Accreditations', hi: 'प्रमाणपत्र और मान्यताएं', mr: 'प्रमाणपत्रे आणि मान्यता' },
    yearsExperience: { en: '20+ Years', hi: '20+ वर्ष', mr: '20+ वर्षे' },
    healthcareExcellence: { en: 'Of Healthcare Excellence', hi: 'स्वास्थ्य सेवा उत्कृष्टता का', mr: 'आरोग्यसेवा उत्कृष्टता' },
    expertDoctorsCount: { en: '50+ Doctors', hi: '50+ डॉक्टर', mr: '50+ डॉक्टर' },
    medicalProfessionals: { en: 'Expert Medical Professionals', hi: 'विशेषज्ञ चिकित्सा पेशेवर', mr: 'तज्ञ वैद्यकीय व्यावसायिक' },
    specializedDepartments: { en: '10 Departments', hi: '10 विभाग', mr: '10 विभाग' },
    specializedCareUnits: { en: 'Specialized Care Units', hi: 'विशेष देखभाल इकाइयां', mr: 'विशेष काळजी युनिट्स' },
    happyPatients: { en: '50,000+', hi: '50,000+', mr: '50,000+' },
    patientsServed: { en: 'Happy Patients Served', hi: 'खुश रोगियों की सेवा की', mr: 'आनंदी रुग्णांची सेवा केली' },
    
    // Departments Page
    ourDepartments: { en: 'Our Departments', hi: 'हमारे विभाग', mr: 'आमचे विभाग' },
    departmentsSubtitle: { en: 'Comprehensive healthcare services across multiple specialties, all under one roof for your convenience', hi: 'आपकी सुविधा के लिए सभी विशेषज्ञताओं में व्यापक स्वास्थ्य सेवाएं', mr: 'तुमच्या सोयीसाठी अनेक विशेषज्ञतांमध्ये सर्वसमावेशक आरोग्यसेवा' },
    generalMedicine: { en: 'General Medicine', hi: 'सामान्य चिकित्सा', mr: 'सामान्य औषध' },
    pediatrics: { en: 'Pediatrics', hi: 'बाल रोग', mr: 'बालरोग' },
    gynecology: { en: 'Gynecology & Obstetrics', hi: 'स्त्री रोग और प्रसूति', mr: 'स्त्रीरोग आणि प्रसूती' },
    ophthalmology: { en: 'Ophthalmology', hi: 'नेत्र विज्ञान', mr: 'नेत्रविज्ञान' },
    surgery: { en: 'Surgery', hi: 'शल्य चिकित्सा', mr: 'शस्त्रक्रिया' },
    physiotherapy: { en: 'Physiotherapy', hi: 'फिजियोथेरेपी', mr: 'फिजिओथेरपी' },
    dermatology: { en: 'Dermatology', hi: 'त्वचा विज्ञान', mr: 'त्वचाविज्ञान' },
    operationTheatres: { en: 'Operation Theatres', hi: 'ऑपरेशन थियेटर', mr: 'ऑपरेशन थिएटर्स' },
    
    // Doctors Page
    ourMedicalExperts: { en: 'Our Medical Experts', hi: 'हमारे चिकित्सा विशेषज्ञ', mr: 'आमचे वैद्यकीय तज्ञ' },
    medicalExpertsSubtitle: { en: 'Meet our team of highly qualified and experienced doctors dedicated to your health', hi: 'आपके स्वास्थ्य के लिए समर्पित उच्च योग्य और अनुभवी डॉक्टरों की हमारी टीम से मिलें', mr: 'तुमच्या आरोग्यासाठी समर्पित उच्च पात्र आणि अनुभवी डॉक्टरांची आमची टीम भेटा' },
    searchPlaceholder: { en: 'Search by name or specialization...', hi: 'नाम या विशेषज्ञता से खोजें...', mr: 'नाव किंवा विशेषज्ञतेनुसार शोधा...' },
    filterByDepartment: { en: 'Filter by department', hi: 'विभाग द्वारा फ़िल्टर करें', mr: 'विभागानुसार फिल्टर करा' },
    allDepartments: { en: 'All Departments', hi: 'सभी विभाग', mr: 'सर्व विभाग' },
    noDoctorsFound: { en: 'No doctors found matching your criteria.', hi: 'आपके मानदंडों से मेल खाने वाला कोई डॉक्टर नहीं मिला।', mr: 'तुमच्या निकषांशी जुळणारे कोणतेही डॉक्टर आढळले नाहीत.' },
    errorFetchingDoctors: { en: 'Error fetching doctors', hi: 'डॉक्टर प्राप्त करने में त्रुटि', mr: 'डॉक्टर मिळवताना त्रुटी' },
    
    // Emergency Page
    emergencyServices: { en: 'Emergency Services', hi: 'आपातकालीन सेवाएं', mr: 'आणीबाणी सेवा' },
    emergencyAlert: { en: 'In case of medical emergency, call immediately or visit our emergency department', hi: 'चिकित्सा आपातकाल की स्थिति में, तुरंत कॉल करें या हमारे आपातकालीन विभाग पर जाएं', mr: 'वैद्यकीय आणीबाणीच्या बाबतीत, त्वरित कॉल करा किंवा आमच्या आणीबाणी विभागाला भेट द्या' },
    emergencyContacts: { en: '24/7 Emergency Contacts', hi: '24/7 आपातकालीन संपर्क', mr: '24/7 आणीबाणी संपर्क' },
    emergencyHotline: { en: 'Emergency Hotline', hi: 'आपातकालीन हॉटलाइन', mr: 'आणीबाणी हॉटलाइन' },
    ambulanceService: { en: 'Ambulance Service', hi: 'एम्बुलेंस सेवा', mr: 'रुग्णवाहिका सेवा' },
    traumaCenter: { en: 'Trauma Center', hi: 'ट्रॉमा सेंटर', mr: 'ट्रॉमा सेंटर' },
    needAmbulance: { en: 'Need an Ambulance?', hi: 'एम्बुलेंस चाहिए?', mr: 'रुग्णवाहिका हवी आहे?' },
    rapidResponse: { en: 'Our rapid response team is ready to assist you 24/7', hi: 'हमारी त्वरित प्रतिक्रिया टीम 24/7 आपकी सहायता के लिए तैयार है', mr: 'आमची जलद प्रतिसाद टीम 24/7 तुम्हाला मदत करण्यासाठी तयार आहे' },
    callAmbulanceNow: { en: 'Call Ambulance Now', hi: 'अभी एम्बुलेंस कॉल करें', mr: 'आता रुग्णवाहिका कॉल करा' },
    nearbyHospitals: { en: 'Nearby Hospitals & Blood Banks', hi: 'पास के अस्पताल और रक्त बैंक', mr: 'जवळपासची रुग्णालये आणि रक्त बँका' },
    emergencyTips: { en: 'Emergency Tips', hi: 'आपातकालीन सुझाव', mr: 'आणीबाणी टिप्स' },
    
    // Laboratory Page
    laboratoryServices: { en: 'Laboratory Services', hi: 'प्रयोगशाला सेवाएं', mr: 'प्रयोगशाळा सेवा' },
    advancedDiagnostic: { en: 'Advanced diagnostic tests with quick results', hi: 'त्वरित परिणामों के साथ उन्नत नैदानिक परीक्षण', mr: 'जलद परिणामांसह प्रगत निदान चाचण्या' },
    availableTests: { en: 'Available Tests', hi: 'उपलब्ध परीक्षण', mr: 'उपलब्ध चाचण्या' },
    yourReports: { en: 'Your Reports', hi: 'आपकी रिपोर्ट', mr: 'तुमचे अहवाल' },
    resultsIn: { en: 'Results in', hi: 'परिणाम में', mr: 'परिणाम मध्ये' },
    notificationService: { en: 'Notification Service', hi: 'सूचना सेवा', mr: 'सूचना सेवा' },
    
    // Pharmacy Page
    pharmacyTitle: { en: 'Pharmacy', hi: 'फार्मेसी', mr: 'फार्मसी' },
    orderMedicines: { en: 'Order medicines and healthcare products', hi: 'दवाएं और स्वास्थ्य उत्पाद ऑर्डर करें', mr: 'औषधे आणि आरोग्य उत्पादने ऑर्डर करा' },
    searchMedicines: { en: 'Search medicines...', hi: 'दवाएं खोजें...', mr: 'औषधे शोधा...' },
    uploadPrescription: { en: 'Upload Prescription', hi: 'प्रिस्क्रिप्शन अपलोड करें', mr: 'प्रिस्क्रिप्शन अपलोड करा' },
    chooseFile: { en: 'Choose File', hi: 'फ़ाइल चुनें', mr: 'फाइल निवडा' },
    inStock: { en: 'In Stock', hi: 'स्टॉक में', mr: 'स्टॉकमध्ये' },
    addToCart: { en: 'Add to Cart', hi: 'कार्ट में जोड़ें', mr: 'कार्टमध्ये जोडा' },
    
    // Contact Page
    contactUs: { en: 'Contact Us', hi: 'हमसे संपर्क करें', mr: 'आमच्याशी संपर्क साधा' },
    contactSubtitle: { en: 'Have questions? We\'re here to help. Reach out to us anytime.', hi: 'कोई प्रश्न हैं? हम यहां मदद के लिए हैं। किसी भी समय हमसे संपर्क करें।', mr: 'प्रश्न आहेत? आम्ही मदत करण्यासाठी येथे आहोत. कधीही आमच्याशी संपर्क साधा.' },
    address: { en: 'Address', hi: 'पता', mr: 'पत्ता' },
    workingHours: { en: 'Working Hours', hi: 'कार्य समय', mr: 'कामाचे तास' },
    firstName: { en: 'First Name', hi: 'पहला नाम', mr: 'पहिले नाव' },
    lastName: { en: 'Last Name', hi: 'अंतिम नाम', mr: 'आडनाव' },
    subject: { en: 'Subject', hi: 'विषय', mr: 'विषय' },
    message: { en: 'Message', hi: 'संदेश', mr: 'संदेश' },
    sendMessage: { en: 'Send Message', hi: 'संदेश भेजें', mr: 'संदेश पाठवा' },
    
    // Patient Dashboard
    upcomingAppointments: { en: 'Upcoming Appointments', hi: 'आगामी अपॉइंटमेंट', mr: 'आगामी भेटी' },
    medicalRecords: { en: 'Medical Records', hi: 'चिकित्सा रिकॉर्ड', mr: 'वैद्यकीय रेकॉर्ड' },
    activePrescriptions: { en: 'Active Prescriptions', hi: 'सक्रिय प्रिस्क्रिप्शन', mr: 'सक्रिय प्रिस्क्रिप्शन' },
    billingHistory: { en: 'Billing History', hi: 'बिलिंग इतिहास', mr: 'बिलिंग इतिहास' },
    medicalRecordsReports: { en: 'Medical Records & Reports', hi: 'चिकित्सा रिकॉर्ड और रिपोर्ट', mr: 'वैद्यकीय रेकॉर्ड आणि अहवाल' },
    
    // Doctor Dashboard
    completedConsultations: { en: 'Completed Consultations', hi: 'पूर्ण परामर्श', mr: 'पूर्ण सल्लामसलत' },
    totalPatients: { en: 'Total Patients', hi: 'कुल मरीज', mr: 'एकूण रुग्ण' },
    recentConsultations: { en: 'Recent Consultations', hi: 'हाल के परामर्श', mr: 'अलीकडील सल्लामसलत' },
    completed: { en: 'Completed', hi: 'पूर्ण', mr: 'पूर्ण' },
    
    // Billing Page
    billingPayments: { en: 'Billing & Payments', hi: 'बिलिंग और भुगतान', mr: 'बिलिंग आणि पेमेंट' },
    viewManageBills: { en: 'View and manage your bills', hi: 'अपने बिल देखें और प्रबंधित करें', mr: 'तुमची बिले पहा आणि व्यवस्थापित करा' },
    
    // Messages
    successfullyBooked: { en: 'Appointment booked successfully!', hi: 'अपॉइंटमेंट सफलतापूर्वक बुक हुई!', mr: 'भेट यशस्वीरित्या बुक झाली!' },
    bookingFailed: { en: 'Failed to book appointment', hi: 'अपॉइंटमेंट बुक करने में विफल', mr: 'भेट बुकिंग अयशस्वी' },
  };

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
