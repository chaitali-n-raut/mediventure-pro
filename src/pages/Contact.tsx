import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contactThankYou'));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('contactUs')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('address')}</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Medical Center Drive<br />
                      Healthcare City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('phone')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('main')}: +1 (234) 567-890<br />
                      {t('emergencyPhone')}: +1 (234) 567-999<br />
                      {t('fax')}: +1 (234) 567-891
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('email')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('general')}: info@smartcare.com<br />
                      {t('appointments')}: appointments@smartcare.com<br />
                      {t('support')}: support@smartcare.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('workingHours')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('mondayFriday')}<br />
                      {t('saturday')}<br />
                      {t('sunday')}<br />
                      <span className="text-accent font-medium">{t('emergency247')}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t('firstName')} *</Label>
                      <Input id="firstName" placeholder={t('firstNamePlaceholder')} required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t('lastName')} *</Label>
                      <Input id="lastName" placeholder={t('lastNamePlaceholder')} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input id="email" type="email" placeholder={t('emailPlaceholder')} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('phone')} *</Label>
                      <Input id="phone" type="tel" placeholder={t('phonePlaceholder')} required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">{t('subject')} *</Label>
                    <Input id="subject" placeholder={t('subjectPlaceholder')} required />
                  </div>

                  <div>
                    <Label htmlFor="message">{t('message')} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t('messagePlaceholder')}
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {t('sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">{t('mapLocation')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
