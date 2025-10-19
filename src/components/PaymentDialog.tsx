import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, CreditCard, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaymentDialogProps {
  open: boolean;
  onClose: () => void;
  appointmentDetails: {
    name: string;
    date: string;
    doctor: string;
    department: string;
    timeSlot: string;
    paymentMethod: string;
  };
}

const PaymentDialog = ({ open, onClose, appointmentDetails }: PaymentDialogProps) => {
  const { t } = useLanguage();
  const amount = 500;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            {t('appointmentSuccess')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('patient')}:</span>
                <span className="font-semibold">{appointmentDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('doctor')}:</span>
                <span className="font-semibold">{appointmentDetails.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('department')}:</span>
                <span className="font-semibold">{appointmentDetails.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('selectDate')}:</span>
                <span className="font-semibold">{appointmentDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('timeSlot')}:</span>
                <span className="font-semibold">{appointmentDetails.timeSlot}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t('paymentDetails')}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('consultationFee')}:</span>
                  <span className="font-semibold">₹{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('paymentMethod')}:</span>
                  <span className="font-semibold">{appointmentDetails.paymentMethod}</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="font-bold text-lg text-primary">₹{amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {appointmentDetails.paymentMethod.startsWith('Online') && (
            <Button className="w-full" size="lg">
              <Smartphone className="mr-2 h-5 w-5" />
              {t('proceedPayment')}
            </Button>
          )}

          <Button variant="outline" className="w-full" onClick={onClose}>
            {t('bookAnother')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;