-- Add avatar_url column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Update existing doctors in doctors table from user_roles
INSERT INTO doctors (user_id, specialization, license_number)
SELECT ur.user_id, 'General Physician', 'MD-' || SUBSTRING(ur.user_id::text, 1, 8)
FROM user_roles ur
INNER JOIN profiles p ON ur.user_id = p.user_id
WHERE ur.role = 'doctor'
AND NOT EXISTS (SELECT 1 FROM doctors d WHERE d.user_id = ur.user_id)
ON CONFLICT (user_id) DO NOTHING;