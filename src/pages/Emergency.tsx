import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Ambulance, AlertCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Emergency = () => {
  const { t } = useLanguage();
  
  const emergencyContacts = [
    { title: t('emergencyHotline'), number: "+1 (234) 567-999", description: t('emergencyCareDesc') },
    { title: t('ambulanceService'), number: "+1 (234) 567-911", description: t('quickResponseTeam') },
    { title: t('traumaCenter'), number: "+1 (234) 567-888", description: t('criticalCareUnit') }
  ];

  const nearbyHospitals = [
    { name: "SmartCare Main Hospital", distance: "0 km", phone: "+1 (234) 567-890" },
    { name: "City Medical Center", distance: "2.5 km", phone: "+1 (234) 567-800" },
    { name: "Community Hospital", distance: "4 km", phone: "+1 (234) 567-700" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold mb-1">{t('emergencyServices')}</h2>
              <p className="text-sm">{t('inCaseOfEmergency')}</p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('emergencyContacts247')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-2xl font-bold text-primary hover:text-primary/80 block mb-2"
                  >
                    {contact.number}
                  </a>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call Ambulance Button */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-12">
          <Ambulance className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">{t('needAmbulance')}</h3>
          <p className="mb-6 opacity-90">{t('rapidResponseTeam')}</p>
          <a href="tel:+1234567911">
            <Button size="lg" variant="secondary" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              {t('callAmbulanceNow')}
            </Button>
          </a>
        </div>

        {/* Nearby Hospitals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('nearbyHospitals')}</h2>
          <div className="space-y-4">
            {nearbyHospitals.map((hospital, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{hospital.name}</h3>
                        <p className="text-sm text-muted-foreground">{hospital.distance} {t('away')}</p>
                      </div>
                    </div>
                    <a href={`tel:${hospital.phone}`}>
                      <Button variant="outline" size="sm">
                        <Phone className="mr-2 h-4 w-4" />
                        {t('call')}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Tips */}
        <Card className="bg-secondary/30 border-none">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">{t('emergencyTips')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{t('tip1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{t('tip2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{t('tip3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{t('tip4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{t('tip5')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;
