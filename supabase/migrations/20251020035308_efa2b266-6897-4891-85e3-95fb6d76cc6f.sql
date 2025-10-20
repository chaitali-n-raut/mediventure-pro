-- Add 'doctor' to app_role enum
ALTER TYPE app_role ADD VALUE IF NOT EXISTS 'doctor';

-- Create doctors table to store doctor-specific information
CREATE TABLE IF NOT EXISTS public.doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  specialization text NOT NULL,
  license_number text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on doctors table
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;

-- Doctors can view their own profile
CREATE POLICY "Doctors can view their own profile"
ON public.doctors
FOR SELECT
USING (auth.uid() = user_id);

-- Doctors can update their own profile
CREATE POLICY "Doctors can update their own profile"
ON public.doctors
FOR UPDATE
USING (auth.uid() = user_id);

-- Staff can view all doctors
CREATE POLICY "Staff can view all doctors"
ON public.doctors
FOR SELECT
USING (has_role(auth.uid(), 'staff'::app_role));

-- Anyone can view doctor information (for appointment booking)
CREATE POLICY "Anyone can view doctor list"
ON public.doctors
FOR SELECT
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_doctors_updated_at
BEFORE UPDATE ON public.doctors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update appointments table to link to doctors table
ALTER TABLE public.appointments 
ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES public.doctors(id);

-- Add policy for doctors to view their own appointments
CREATE POLICY "Doctors can view their appointments"
ON public.appointments
FOR SELECT
USING (doctor_id IN (SELECT id FROM public.doctors WHERE user_id = auth.uid()));