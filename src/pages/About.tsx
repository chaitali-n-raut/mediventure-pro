import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building2, Heart } from "lucide-react";
import doctorsTeam from "@/assets/doctors-team.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const achievements = [
    { icon: Award, title: t('yearsExperience'), description: t('healthcareExcellence') },
    { icon: Users, title: t('expertDoctorsCount'), description: t('medicalProfessionals') },
    { icon: Building2, title: t('specializedDepartments'), description: t('specializedCareUnits') },
    { icon: Heart, title: t('happyPatients'), description: t('patientsServed') }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t('ourVision')}</h2>
              <p className="text-muted-foreground">
                {t('visionText')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t('ourMission')}</h2>
              <p className="text-muted-foreground">
                {t('missionText')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">{t('ourAchievements')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="border border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Director's Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={doctorsTeam}
              alt="Medical Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{t('directorsMessage')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('directorWelcome')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('directorText1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('directorText2')}
            </p>
            <p className="font-semibold">
              {t('drJamesAnderson')}<br />
              <span className="text-sm text-muted-foreground">{t('medicalDirector')}</span>
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-secondary/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">{t('certificationsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">{t('isoCertified')}</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">{t('nabhAccredited')}</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">{t('jciAccredited')}</p>
            </div>
            <div>
              <div className="bg-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm font-medium">{t('greenHospital')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;