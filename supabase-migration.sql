-- Create leads table for Contact page enquiries
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  organization_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  designation TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  institution_type TEXT,
  number_of_meals TEXT,
  meal_type TEXT DEFAULT 'veg',
  budget TEXT,
  expected_start_date TEXT,
  message TEXT,
  preferred_contact_time TEXT
);

-- Create proposals table
CREATE TABLE IF NOT EXISTS proposals (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  institution_type TEXT NOT NULL,
  city TEXT,
  state TEXT,
  people_count TEXT,
  meal_types TEXT[],
  frequency TEXT,
  budget TEXT,
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT NOT NULL
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT,
  cover_letter TEXT,
  resume_url TEXT
);

-- RLS policies for anonymous inserts
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on leads"
  ON leads FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on proposals"
  ON proposals FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on applications"
  ON applications FOR INSERT TO anon WITH CHECK (true);
