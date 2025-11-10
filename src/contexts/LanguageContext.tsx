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
    profileImageUrl: { en: 'Profile Image URL', hi: 'प्रोफाइल छवि URL', mr: 'प्रोफाइल प्रतिमा URL' },
    optional: { en: 'Optional', hi: 'वैकल्पिक', mr: 'पर्यायी' },
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
    inCaseOfEmergency: { en: 'In case of medical emergency, call us immediately', hi: 'चिकित्सा आपातकाल की स्थिति में, तुरंत हमें कॉल करें', mr: 'वैद्यकीय आणीबाणीच्या बाबतीत, तात्काळ आम्हाला कॉल करा' },
    emergencyContacts247: { en: '24/7 Emergency Contacts', hi: '24/7 आपातकालीन संपर्क', mr: '24/7 आणीबाणी संपर्क' },
    emergencyContacts: { en: '24/7 Emergency Contacts', hi: '24/7 आपातकालीन संपर्क', mr: '24/7 आणीबाणी संपर्क' },
    emergencyHotline: { en: 'Emergency Hotline', hi: 'आपातकालीन हॉटलाइन', mr: 'आणीबाणी हॉटलाइन' },
    emergencyCareDesc: { en: '24/7 Emergency Care', hi: '24/7 आपातकालीन देखभाल', mr: '24/7 आणीबाणी काळजी' },
    ambulanceService: { en: 'Ambulance Service', hi: 'एम्बुलेंस सेवा', mr: 'रुग्णवाहिका सेवा' },
    quickResponseTeam: { en: 'Quick Response Team', hi: 'त्वरित प्रतिक्रिया टीम', mr: 'जलद प्रतिसाद टीम' },
    traumaCenter: { en: 'Trauma Center', hi: 'ट्रॉमा सेंटर', mr: 'ट्रॉमा सेंटर' },
    criticalCareUnit: { en: 'Critical Care Unit', hi: 'गंभीर देखभाल इकाई', mr: 'गंभीर काळजी युनिट' },
    needAmbulance: { en: 'Need an Ambulance?', hi: 'एम्बुलेंस चाहिए?', mr: 'रुग्णवाहिका हवी आहे?' },
    rapidResponseTeam: { en: 'Our rapid response team is ready to assist you 24/7', hi: 'हमारी त्वरित प्रतिक्रिया टीम 24/7 आपकी सहायता के लिए तैयार है', mr: 'आमची जलद प्रतिसाद टीम 24/7 तुम्हाला मदत करण्यासाठी तयार आहे' },
    rapidResponse: { en: 'Our rapid response team is ready to assist you 24/7', hi: 'हमारी त्वरित प्रतिक्रिया टीम 24/7 आपकी सहायता के लिए तैयार है', mr: 'आमची जलद प्रतिसाद टीम 24/7 तुम्हाला मदत करण्यासाठी तयार आहे' },
    callAmbulanceNow: { en: 'Call Ambulance Now', hi: 'अभी एम्बुलेंस कॉल करें', mr: 'आता रुग्णवाहिका कॉल करा' },
    nearbyHospitals: { en: 'Nearby Hospitals & Blood Banks', hi: 'पास के अस्पताल और रक्त बैंक', mr: 'जवळपासची रुग्णालये आणि रक्त बँका' },
    away: { en: 'away', hi: 'दूर', mr: 'दूर' },
    emergencyTips: { en: 'Emergency Tips', hi: 'आपातकालीन सुझाव', mr: 'आणीबाणी टिप्स' },
    tip1: { en: 'Stay calm and call emergency services immediately', hi: 'शांत रहें और तुरंत आपातकालीन सेवाओं को कॉल करें', mr: 'शांत रहा आणि तात्काळ आणीबाणी सेवांना कॉल करा' },
    tip2: { en: 'Provide clear location and nature of emergency', hi: 'स्पष्ट स्थान और आपातकाल की प्रकृति प्रदान करें', mr: 'स्पष्ट स्थान आणि आणीबाणीचे स्वरूप प्रदान करा' },
    tip3: { en: "Don't move the patient unless absolutely necessary", hi: 'अत्यावश्यक न हो तो मरीज को न हिलाएं', mr: 'अत्यंत आवश्यक असल्याशिवाय रुग्णाला हलवू नका' },
    tip4: { en: 'Keep important medical information and medications ready', hi: 'महत्वपूर्ण चिकित्सा जानकारी और दवाएं तैयार रखें', mr: 'महत्त्वाची वैद्यकीय माहिती आणि औषधे तयार ठेवा' },
    tip5: { en: 'If possible, have someone meet the ambulance at the entrance', hi: 'यदि संभव हो, तो किसी को एम्बुलेंस से प्रवेश द्वार पर मिलने दें', mr: 'शक्य असल्यास, प्रवेशद्वाराजवळ कोणीतरी रुग्णवाहिकेला भेटावे' },
    
    // Testimonials
    testimonial1Name: { en: 'Sarah Johnson', hi: 'सारा जॉनसन', mr: 'सारा जॉन्सन' },
    testimonial1Text: { en: 'Excellent care and attention from the medical staff. The facilities are modern and clean.', hi: 'चिकित्सा कर्मचारियों से उत्कृष्ट देखभाल और ध्यान। सुविधाएं आधुनिक और स्वच्छ हैं।', mr: 'वैद्यकीय कर्मचार्‍यांकडून उत्कृष्ट काळजी आणि लक्ष. सुविधा आधुनिक आणि स्वच्छ आहेत.' },
    testimonial2Name: { en: 'Michael Chen', hi: 'माइकल चेन', mr: 'मायकेल चेन' },
    testimonial2Text: { en: 'Quick appointment scheduling and professional doctors. Highly recommend SmartCare!', hi: 'त्वरित अपॉइंटमेंट शेड्यूलिंग और पेशेवर डॉक्टर। स्मार्टकेयर की अत्यधिक अनुशंसा करते हैं!', mr: 'जलद भेट नियोजन आणि व्यावसायिक डॉक्टर. स्मार्टकेअरची शिफारस करतो!' },
    testimonial3Name: { en: 'Emily Davis', hi: 'एमिली डेविस', mr: 'एमिली डेव्हिस' },
    testimonial3Text: { en: 'The emergency department was incredibly efficient. They saved my life!', hi: 'आपातकालीन विभाग अविश्वसनीय रूप से कुशल था। उन्होंने मेरी जान बचाई!', mr: 'आणीबाणी विभाग आश्चर्यकारकपणे कार्यक्षम होता. त्यांनी माझा जीव वाचवला!' },
    
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
    
    // Footer
    caringWithTechnology: { en: 'Caring With Technology. Providing world-class healthcare services with compassion and excellence.', hi: 'प्रौद्योगिकी के साथ देखभाल। करुणा और उत्कृष्टता के साथ विश्व स्तरीय स्वास्थ्य सेवाएं प्रदान करना।', mr: 'तंत्रज्ञानासह काळजी. करुणा आणि उत्कृष्टतेसह जागतिक दर्जाच्या आरोग्य सेवा प्रदान करणे.' },
    quickLinks: { en: 'Quick Links', hi: 'त्वरित लिंक', mr: 'द्रुत दुवे' },
    aboutUs: { en: 'About Us', hi: 'हमारे बारे में', mr: 'आमच्याबद्दल' },
    ourDoctors: { en: 'Our Doctors', hi: 'हमारे डॉक्टर', mr: 'आमचे डॉक्टर' },
    services: { en: 'Services', hi: 'सेवाएं', mr: 'सेवा' },
    emergencyCare: { en: 'Emergency Care', hi: 'आपातकालीन देखभाल', mr: 'आणीबाणी काळजी' },
    patientPortal: { en: 'Patient Portal', hi: 'रोगी पोर्टल', mr: 'रुग्ण पोर्टल' },
    allRightsReserved: { en: '© 2024 SmartCare Hospital. All rights reserved. | Built with care and technology', hi: '© 2024 स्मार्टकेयर अस्पताल। सर्वाधिकार सुरक्षित। | देखभाल और प्रौद्योगिकी के साथ निर्मित', mr: '© 2024 स्मार्टकेअर हॉस्पिटल. सर्व हक्क राखीव. | काळजी आणि तंत्रज्ञानासह तयार' },
    
    // Home Page Additional
    service247Desc: { en: 'Round-the-clock medical care and support for all emergencies', hi: 'सभी आपातकालीन स्थितियों के लिए 24 घंटे चिकित्सा देखभाल और सहायता', mr: 'सर्व आणीबाणींसाठी चोवीस तास वैद्यकीय सेवा आणि समर्थन' },
    expertDoctorsDesc: { en: 'Highly qualified specialists with years of experience', hi: 'वर्षों के अनुभव वाले अत्यधिक योग्य विशेषज्ञ', mr: 'वर्षांच्या अनुभवासह उच्च पात्र तज्ञ' },
    modernLabsDesc: { en: 'State-of-the-art diagnostic and testing facilities', hi: 'अत्याधुनिक निदान और परीक्षण सुविधाएं', mr: 'अत्याधुनिक निदान आणि चाचणी सुविधा' },
    quickAccess: { en: 'Quick Access', hi: 'त्वरित पहुंच', mr: 'जलद प्रवेश' },
    quickAccessDesc: { en: 'Get quick access to our most used services', hi: 'हमारी सबसे अधिक उपयोग की जाने वाली सेवाओं तक त्वरित पहुंच प्राप्त करें', mr: 'आमच्या सर्वाधिक वापरल्या जाणाऱ्या सेवांमध्ये जलद प्रवेश मिळवा' },
    emergencyNumbers: { en: 'Emergency Numbers', hi: 'आपातकालीन नंबर', mr: 'आणीबाणी क्रमांक' },
    callUsAnytime: { en: 'Call us anytime 24/7', hi: '24/7 कभी भी हमें कॉल करें', mr: '24/7 कधीही आम्हाला कॉल करा' },
    findDoctor: { en: 'Find a Doctor', hi: 'डॉक्टर खोजें', mr: 'डॉक्टर शोधा' },
    bookYourAppointment: { en: 'Book your appointment', hi: 'अपनी अपॉइंटमेंट बुक करें', mr: 'तुमची भेट बुक करा' },
    payBill: { en: 'Pay Bill', hi: 'बिल भुगतान', mr: 'बिल भरा' },
    quickPayment: { en: 'Quick & secure payment', hi: 'त्वरित और सुरक्षित भुगतान', mr: 'जलद आणि सुरक्षित पेमेंट' },
    experiencedTeam: { en: 'Experienced Team', hi: 'अनुभवी टीम', mr: 'अनुभवी टीम' },
    experiencedTeamDesc: { en: 'Board-certified doctors with extensive expertise', hi: 'व्यापक विशेषज्ञता वाले बोर्ड-प्रमाणित डॉक्टर', mr: 'व्यापक तज्ञतेसह बोर्ड-प्रमाणित डॉक्टर' },
    advancedTech: { en: 'Advanced Technology', hi: 'उन्नत प्रौद्योगिकी', mr: 'प्रगत तंत्रज्ञान' },
    advancedTechDesc: { en: 'Latest medical equipment and treatment methods', hi: 'नवीनतम चिकित्सा उपकरण और उपचार विधियां', mr: 'नवीनतम वैद्यकीय उपकरणे आणि उपचार पद्धती' },
    patientCare: { en: 'Patient-Centered Care', hi: 'रोगी-केंद्रित देखभाल', mr: 'रुग्ण-केंद्रित काळजी' },
    patientCareDesc: { en: 'Personalized treatment plans for every individual', hi: 'प्रत्येक व्यक्ति के लिए व्यक्तिगत उपचार योजनाएं', mr: 'प्रत्येक व्यक्तीसाठी वैयक्तिक उपचार योजना' },
    whatPatientsSay: { en: 'What Our Patients Say', hi: 'हमारे मरीज क्या कहते हैं', mr: 'आमचे रुग्ण काय म्हणतात' },
    realExperiences: { en: 'Real experiences from real people', hi: 'वास्तविक लोगों के वास्तविक अनुभव', mr: 'वास्तविक लोकांकडून वास्तविक अनुभव' },
    readyForHealth: { en: 'Ready to Take Care of Your Health?', hi: 'अपने स्वास्थ्य का ध्यान रखने के लिए तैयार हैं?', mr: 'तुमच्या आरोग्याची काळजी घेण्यासाठी तयार आहात?' },
    bookTodayDesc: { en: 'Book an appointment with our specialists today', hi: 'आज ही हमारे विशेषज्ञों के साथ अपॉइंटमेंट बुक करें', mr: 'आजच आमच्या तज्ञांसोबत भेट बुक करा' },
    scheduleVisit: { en: 'Schedule Your Visit', hi: 'अपनी यात्रा निर्धारित करें', mr: 'तुमची भेट शेड्यूल करा' },
    
    // About Page Additional
    visionText: { en: 'To be the leading healthcare provider in the region, recognized for excellence in patient care, medical innovation, and compassionate service. We envision a future where quality healthcare is accessible to all.', hi: 'रोगी देखभाल, चिकित्सा नवाचार और दयालु सेवा में उत्कृष्टता के लिए मान्यता प्राप्त, क्षेत्र में अग्रणी स्वास्थ्य सेवा प्रदाता बनना। हम एक ऐसे भविष्य की कल्पना करते हैं जहां गुणवत्तापूर्ण स्वास्थ्य सेवा सभी के लिए सुलभ हो।', mr: 'रुग्ण काळजी, वैद्यकीय नवकल्पना आणि दयाळू सेवेत उत्कृष्टतेसाठी ओळखले जाणारे प्रदेशातील आघाडीचे आरोग्य सेवा प्रदाते बनणे. आम्ही अशा भविष्याची कल्पना करतो जिथे दर्जेदार आरोग्य सेवा सर्वांसाठी प्रवेशयोग्य असेल.' },
    missionText: { en: 'To provide comprehensive, patient-centered healthcare services with integrity, respect, and excellence. We are committed to improving the health and well-being of our community through advanced medical care and continuous innovation.', hi: 'ईमानदारी, सम्मान और उत्कृष्टता के साथ व्यापक, रोगी-केंद्रित स्वास्थ्य सेवाएं प्रदान करना। हम उन्नत चिकित्सा देखभाल और निरंतर नवाचार के माध्यम से अपने समुदाय के स्वास्थ्य और कल्याण में सुधार के लिए प्रतिबद्ध हैं।', mr: 'सचोटी, आदर आणि उत्कृष्टतेसह सर्वसमावेशक, रुग्ण-केंद्रित आरोग्य सेवा प्रदान करणे. आम्ही प्रगत वैद्यकीय सेवा आणि सतत नवकल्पनेद्वारे आमच्या समुदायाचे आरोग्य आणि कल्याण सुधारण्यासाठी वचनबद्ध आहोत.' },
    directorWelcome: { en: 'Welcome to SmartCare Hospital. For over two decades, we have been at the forefront of healthcare excellence, combining advanced medical technology with compassionate, patient-centered care.', hi: 'स्मार्टकेयर अस्पताल में आपका स्वागत है। दो दशकों से अधिक समय से, हम उन्नत चिकित्सा प्रौद्योगिकी को दयालु, रोगी-केंद्रित देखभाल के साथ जोड़ते हुए स्वास्थ्य सेवा उत्कृष्टता में अग्रणी रहे हैं।', mr: 'स्मार्टकेअर हॉस्पिटलमध्ये आपले स्वागत आहे. दोन दशकांहून अधिक काळ, आम्ही प्रगत वैद्यकीय तंत्रज्ञानाला दयाळू, रुग्ण-केंद्रित सेवेसोबत एकत्र करून आरोग्यसेवा उत्कृष्टतेत आघाडीवर आहोत.' },
    directorText1: { en: 'Our team of highly skilled medical professionals is dedicated to providing the highest standard of care across all our specialized departments. We believe in treating not just the illness, but the whole person, ensuring that each patient receives personalized attention and comprehensive care.', hi: 'हमारे अत्यधिक कुशल चिकित्सा पेशेवरों की टीम हमारे सभी विशेष विभागों में सर्वोच्च मानक की देखभाल प्रदान करने के लिए समर्पित है। हम केवल बीमारी का नहीं, बल्कि पूरे व्यक्ति का इलाज करने में विश्वास करते हैं, यह सुनिश्चित करते हुए कि प्रत्येक रोगी को व्यक्तिगत ध्यान और व्यापक देखभाल प्राप्त हो।', mr: 'आमची उच्च कुशल वैद्यकीय व्यावसायिकांची टीम आमच्या सर्व विशेष विभागांमध्ये सर्वोच्च दर्जाची सेवा प्रदान करण्यासाठी समर्पित आहे. आम्ही केवळ आजाराचाच नव्हे तर संपूर्ण व्यक्तीचे उपचार करण्यावर विश्वास ठेवतो, प्रत्येक रुग्णाला वैयक्तिक लक्ष आणि सर्वसमावेशक सेवा मिळते याची खात्री करतो.' },
    directorText2: { en: 'As we continue to grow and evolve, our commitment remains unchanged: to be your trusted partner in health, providing world-class medical services with warmth and compassion.', hi: 'जैसे-जैसे हम बढ़ते और विकसित होते रहते हैं, हमारी प्रतिबद्धता अपरिवर्तित रहती है: स्वास्थ्य में आपके विश्वसनीय साथी बनना, गर्मजोशी और करुणा के साथ विश्व स्तरीय चिकित्सा सेवाएं प्रदान करना।', mr: 'आम्ही वाढत आणि विकसित होत असताना, आमची वचनबद्धता अपरिवर्तित राहते: आरोग्यात तुमचा विश्वासू भागीदार असणे, उबदारपणा आणि करुणेसह जागतिक दर्जाच्या वैद्यकीय सेवा प्रदान करणे.' },
    drJamesAnderson: { en: 'Dr. James Anderson', hi: 'डॉ. जेम्स एंडरसन', mr: 'डॉ. जेम्स अँडरसन' },
    medicalDirector: { en: 'Medical Director', hi: 'चिकित्सा निदेशक', mr: 'वैद्यकीय संचालक' },
    isoCertified: { en: 'ISO 9001:2015 Certified', hi: 'आईएसओ 9001:2015 प्रमाणित', mr: 'आयएसओ 9001:2015 प्रमाणित' },
    nabhAccredited: { en: 'NABH Accredited', hi: 'NABH मान्यता प्राप्त', mr: 'NABH मान्यताप्राप्त' },
    jciAccredited: { en: 'JCI Accredited', hi: 'JCI मान्यता प्राप्त', mr: 'JCI मान्यताप्राप्त' },
    greenHospital: { en: 'Green Hospital', hi: 'हरित अस्पताल', mr: 'हरित रुग्णालय' },
    
    // Departments Additional
    generalMedicineDesc: { en: 'Comprehensive care for common health conditions and preventive medicine', hi: 'सामान्य स्वास्थ्य स्थितियों और निवारक दवा के लिए व्यापक देखभाल', mr: 'सामान्य आरोग्य स्थिती आणि प्रतिबंधात्मक औषधांसाठी सर्वसमावेशक सेवा' },
    pediatricsDesc: { en: 'Specialized healthcare for infants, children, and adolescents', hi: 'शिशुओं, बच्चों और किशोरों के लिए विशेष स्वास्थ्य सेवा', mr: 'अर्भकं, मुले आणि पौगंडावस्थेतील मुलांसाठी विशेष आरोग्य सेवा' },
    gynecologyDesc: { en: 'Women\'s health, pregnancy care, and reproductive services', hi: 'महिलाओं का स्वास्थ्य, गर्भावस्था देखभाल, और प्रजनन सेवाएं', mr: 'महिलांचे आरोग्य, गर्भधारणा सेवा आणि प्रजनन सेवा' },
    ophthalmologyDesc: { en: 'Complete eye care including vision tests and eye surgery', hi: 'दृष्टि परीक्षण और आंखों की सर्जरी सहित पूर्ण नेत्र देखभाल', mr: 'दृष्टी चाचण्या आणि नेत्र शस्त्रक्रियेसह संपूर्ण नेत्र सेवा' },
    surgeryDesc: { en: 'Advanced surgical procedures with expert surgeons', hi: 'विशेषज्ञ सर्जनों के साथ उन्नत सर्जिकल प्रक्रियाएं', mr: 'तज्ञ शल्यचिकित्सकांसह प्रगत शस्त्रक्रिया प्रक्रिया' },
    physiotherapyDesc: { en: 'Rehabilitation and physical therapy for recovery', hi: 'पुनर्वास और शारीरिक चिकित्सा पुनर्प्राप्ति के लिए', mr: 'पुनर्वसन आणि पुनर्प्राप्तीसाठी शारीरिक उपचार' },
    dermatologyDesc: { en: 'Skin care, treatment of skin conditions and cosmetic procedures', hi: 'त्वचा की देखभाल, त्वचा की स्थिति का उपचार और कॉस्मेटिक प्रक्रियाएं', mr: 'त्वचेची काळजी, त्वचा स्थितींचे उपचार आणि कॉस्मेटिक प्रक्रिया' },
    laboratoryDesc: { en: 'Comprehensive diagnostic tests and pathology services', hi: 'व्यापक निदान परीक्षण और पैथोलॉजी सेवाएं', mr: 'सर्वसमावेशक निदान चाचण्या आणि पॅथॉलॉजी सेवा' },
    operationTheatresDesc: { en: 'State-of-the-art surgical facilities with modern equipment', hi: 'आधुनिक उपकरणों के साथ अत्याधुनिक सर्जिकल सुविधाएं', mr: 'आधुनिक उपकरणांसह अत्याधुनिक शस्त्रक्रिया सुविधा' },
    pharmacyDesc: { en: '24/7 pharmacy with all essential medications and supplies', hi: 'सभी आवश्यक दवाओं और आपूर्ति के साथ 24/7 फार्मेसी', mr: 'सर्व आवश्यक औषधे आणि पुरवठ्यासह 24/7 फार्मसी' },
    
    // Contact Page
    contactThankYou: { en: 'Thank you for contacting us! We\'ll get back to you soon.', hi: 'हमसे संपर्क करने के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।', mr: 'आमच्याशी संपर्क साधल्याबद्दल धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.' },
    main: { en: 'Main', hi: 'मुख्य', mr: 'मुख्य' },
    emergencyPhone: { en: 'Emergency', hi: 'आपातकाल', mr: 'आणीबाणी' },
    fax: { en: 'Fax', hi: 'फैक्स', mr: 'फॅक्स' },
    general: { en: 'General', hi: 'सामान्य', mr: 'सामान्य' },
    appointments: { en: 'Appointments', hi: 'अपॉइंटमेंट', mr: 'भेटी' },
    support: { en: 'Support', hi: 'समर्थन', mr: 'समर्थन' },
    mondayFriday: { en: 'Monday - Friday: 8:00 AM - 8:00 PM', hi: 'सोमवार - शुक्रवार: सुबह 8:00 - रात 8:00', mr: 'सोमवार - शुक्रवार: सकाळी 8:00 - रात्री 8:00' },
    saturday: { en: 'Saturday: 9:00 AM - 5:00 PM', hi: 'शनिवार: सुबह 9:00 - शाम 5:00', mr: 'शनिवार: सकाळी 9:00 - संध्याकाळी 5:00' },
    sunday: { en: 'Sunday: 10:00 AM - 4:00 PM', hi: 'रविवार: सुबह 10:00 - शाम 4:00', mr: 'रविवार: सकाळी 10:00 - संध्याकाळी 4:00' },
    emergency247: { en: 'Emergency: 24/7', hi: 'आपातकाल: 24/7', mr: 'आणीबाणी: 24/7' },
    firstNamePlaceholder: { en: 'John', hi: 'राम', mr: 'राम' },
    lastNamePlaceholder: { en: 'Doe', hi: 'कुमार', mr: 'कुमार' },
    emailPlaceholder: { en: 'john@example.com', hi: 'ram@example.com', mr: 'ram@example.com' },
    phonePlaceholder: { en: '+1 234 567 890', hi: '+91 12345 67890', mr: '+91 12345 67890' },
    subjectPlaceholder: { en: 'How can we help you?', hi: 'हम आपकी कैसे मदद कर सकते हैं?', mr: 'आम्ही तुम्हाला कशी मदत करू शकतो?' },
    messagePlaceholder: { en: 'Tell us more about your inquiry...', hi: 'अपनी पूछताछ के बारे में अधिक बताएं...', mr: 'तुमच्या चौकशीबद्दल अधिक सांगा...' },
    mapLocation: { en: 'Map Location', hi: 'मानचित्र स्थान', mr: 'नकाशा स्थान' },
    
    // Laboratory Page  
    advancedDiagnosticTests: { en: 'Advanced diagnostic tests with quick results', hi: 'त्वरित परिणामों के साथ उन्नत नैदानिक परीक्षण', mr: 'जलद परिणामांसह प्रगत निदान चाचण्या' },
    completeCBC: { en: 'Complete Blood Count (CBC)', hi: 'पूर्ण रक्त गणना (CBC)', mr: 'संपूर्ण रक्त गणना (CBC)' },
    lipidProfile: { en: 'Lipid Profile', hi: 'लिपिड प्रोफाइल', mr: 'लिपिड प्रोफाइल' },
    thyroidTest: { en: 'Thyroid Function Test', hi: 'थायराइड फ़ंक्शन टेस्ट', mr: 'थायरॉईड कार्य चाचणी' },
    bloodSugarTest: { en: 'Blood Sugar Test', hi: 'रक्त शर्करा परीक्षण', mr: 'रक्त साखर चाचणी' },
    liverTest: { en: 'Liver Function Test', hi: 'यकृत कार्य परीक्षण', mr: 'यकृत कार्य चाचणी' },
    kidneyTest: { en: 'Kidney Function Test', hi: 'गुर्दा कार्य परीक्षण', mr: 'मूत्रपिंड कार्य चाचणी' },
    hours: { en: 'hours', hi: 'घंटे', mr: 'तास' },
    bloodTestReport: { en: 'Blood Test Report', hi: 'रक्त परीक्षण रिपोर्ट', mr: 'रक्त चाचणी अहवाल' },
    xrayReport: { en: 'X-Ray Report', hi: 'एक्स-रे रिपोर्ट', mr: 'एक्स-रे अहवाल' },
    ecgReport: { en: 'ECG Report', hi: 'ईसीजी रिपोर्ट', mr: 'ईसीजी अहवाल' },
    ready: { en: 'Ready', hi: 'तैयार', mr: 'तयार' },
    notificationServiceDesc: { en: 'Get instant notifications via SMS and email when your lab results are ready. Enable notifications in your account settings.', hi: 'जब आपके प्रयोगशाला परिणाम तैयार हों तो एसएमएस और ईमेल के माध्यम से तत्काल सूचनाएं प्राप्त करें। अपनी खाता सेटिंग में सूचनाएं सक्षम करें।', mr: 'तुमचे प्रयोगशाळा निकाल तयार असताना एसएमएस आणि ईमेलद्वारे त्वरित सूचना मिळवा. तुमच्या खाते सेटिंग्जमध्ये सूचना सक्षम करा.' },
    
    // Pharmacy Page
    orderMedicinesDesc: { en: 'Order medicines and healthcare products', hi: 'दवाएं और स्वास्थ्य उत्पाद ऑर्डर करें', mr: 'औषधे आणि आरोग्य उत्पादने ऑर्डर करा' },
    searchMedicinesPlaceholder: { en: 'Search medicines...', hi: 'दवाएं खोजें...', mr: 'औषधे शोधा...' },
    uploadPrescriptionText: { en: 'Upload Prescription', hi: 'प्रिस्क्रिप्शन अपलोड करें', mr: 'प्रिस्क्रिप्शन अपलोड करा' },
    chooseFileText: { en: 'Choose File', hi: 'फ़ाइल चुनें', mr: 'फाइल निवडा' },
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
