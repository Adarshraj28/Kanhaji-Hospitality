/* ─── Company Info ─────────────────────────────────────── */
export const COMPANY = {
  name: "Kanhaji Hospitality",
  tagline: "Corporate Hospitality & Catering",
  description:
    "A professional hospitality and food service company specializing in corporate catering, guest house management, central kitchen operations, and retail dining solutions across North India.",
  phone: "+91 73910 71017",
  altPhone: "+91 73910 71017",
  email: "info@kanhajihospitality.com",
  whatsapp: "+917391071017",
  address: {
    street: "Metropolis City, Plot 45, Industrial Area, Pant Nagar Road",
    city: "Rudrapur",
    state: "Uttarakhand",
    zip: "263153",
    country: "India",
  },
  workingHours: {
    weekdays: "9:00 AM – 6:00 PM",
    saturday: "9:00 AM – 2:00 PM",
    sunday: "Closed",
  },
  emergencyContact: "+91 73910 71017",
  founded: 2018,
  employees: "200+",
  social: {
    linkedin: "https://www.linkedin.com/in/kanhaji-hospitality-8a63652b5/",
    facebook: "https://facebook.com/kanhajihospitality",
    instagram: "https://www.instagram.com/kanhaji_hospitality/",
    youtube: "https://youtube.com/@kanhajihospitality",
    twitter: "https://twitter.com/kanhajihospitality",
  },
};

/* ─── Branch Offices ──────────────────────────────────── */
export const BRANCHES = [
  {
    city: "Rudrapur",
    state: "Uttarakhand",
    type: "Head Office",
    address: "Metropolis City, Plot 45, Industrial Area, Pant Nagar Road",
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "Regional Office",
    address: "Sector B, Gomti Nagar Extension, Lucknow",
  },
  {
    city: "Delhi",
    state: "Delhi",
    type: "Regional Office",
    address: "Nehru Place, New Delhi",
  },
  {
    city: "Patna",
    state: "Bihar",
    type: "Regional Office",
    address: "Boring Road, Patna",
  },

];

/* ─── Stats ────────────────────────────────────────────── */
export const STATS = [
  { label: "Meals Served Daily", value: "10,000+" },
  { label: "Years of Experience", value: "8+" },
  { label: "Trusted Partners", value: "50+" },
  { label: "Cities Served", value: "10+" },
  { label: "Total Meals Served", value: "15Lakh+" },
  { label: "Team Members", value: "200+" },
];

/* ─── Why Choose Us ────────────────────────────────────── */
export const WHY_CHOOSE_US = [
  {
    title: "Experienced Team",
    description:
      "Decades of collective expertise in institutional food service management across North India.",
    icon: "users",
  },
  {
    title: "FSSAI Compliance",
    description:
      "Fully licensed and compliant with all FSSAI regulations and food safety standards.",
    icon: "shield",
  },
  {
    title: "Timely Delivery",
    description:
      "Guaranteed on-time meal delivery across all shifts, every single day.",
    icon: "clock",
  },
  {
    title: "Nutrition Focused",
    description:
      "Meals designed by certified nutritionists to meet diverse dietary requirements.",
    icon: "apple",
  },
  {
    title: "Custom Menus",
    description:
      "Flexible menu planning tailored to regional preferences and dietary restrictions.",
    icon: "fileText",
  },
  {
    title: "Large Scale Ops",
    description:
      "Proven capability to manage 10,000+ meals daily across multiple locations.",
    icon: "building2",
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent pricing with bulk procurement advantages passed to clients.",
    icon: "indianRupee",
  },
  {
    title: "Food Safety",
    description:
      "Rigorous HACCP-based quality control at every stage from procurement to serving.",
    icon: "checkCircle",
  },
  {
    title: "Quality Assurance",
    description:
      "Regular internal audits, feedback collection, and continuous improvement.",
    icon: "award",
  },
  {
    title: "Professional Staff",
    description:
      "Well-trained, uniformed, and certified kitchen and service personnel.",
    icon: "briefcase",
  },
];

/* ─── Services ─────────────────────────────────────────── */
export const SERVICES = [
  {
    id: "guest-house-management",
    title: "Guest House Management",
    description:
      "Professional management of corporate guest houses, including accommodation, housekeeping, catering, maintenance, and hospitality services to ensure a comfortable stay for employees and guests.",
    features: [
      "Accommodation management",
      "Housekeeping services",
      "In-room dining",
      "Maintenance & upkeep",
      "Guest hospitality",
    ],
  },
  {
    id: "on-site-catering",
    title: "On-Site Catering",
    description:
      "End-to-end food service operations at client locations with hygienic preparation, timely delivery, and consistent quality for institutions and industries.",
    features: [
      "Hygienic food preparation",
      "Timely meal delivery",
      "Consistent quality",
      "Client location operations",
      "Customized menu planning",
    ],
  },
  {
    id: "central-kitchen",
    title: "Central Kitchen Operations",
    description:
      "Large-scale centralized food production with standardized recipes, strict quality control, efficient logistics, and timely distribution across multiple locations.",
    features: [
      "Standardized recipes",
      "Quality control systems",
      "Efficient logistics",
      "Multi-location distribution",
      "Bulk production capability",
    ],
  },
  {
    id: "buffet-catering",
    title: "Buffet Catering",
    description:
      "Premium buffet services for corporate events, conferences, educational institutions, hospitals, industrial gatherings, and special occasions with diverse menu options.",
    features: [
      "Corporate event catering",
      "Conference dining",
      "Educational institution buffets",
      "Special occasion menus",
      "Diverse cuisine options",
    ],
  },
  {
    id: "retail-management",
    title: "Retail Management",
    description:
      "Professional management of cafeterias, food courts, kiosks, canteens, and retail food outlets focused on customer satisfaction and operational efficiency.",
    features: [
      "Cafeteria management",
      "Food court operations",
      "Kiosk & outlet management",
      "Customer satisfaction focus",
      "Operational efficiency",
    ],
  },
];

/* ─── Industries ───────────────────────────────────────── */
export const INDUSTRIES = [
  {
    id: "schools",
    title: "Schools",
    description:
      "Healthy, nutritious meals for students of all ages. Our school programs support childhood nutrition and concentration in class.",
    icon: "graduationCap",
    stats: "50+ Schools Served",
  },
  {
    id: "colleges",
    title: "Colleges & Universities",
    description:
      "Comprehensive mess and cafeteria management for higher education institutions with diverse menus that keep students satisfied.",
    icon: "bookOpen",
    stats: "30+ Campuses Served",
  },
  {
    id: "hospitals",
    title: "Hospitals & Medical Colleges",
    description:
      "Specialized dietary services for patients, staff, and visitors. Therapeutic meal programs designed with dietitians and doctors.",
    icon: "heartPulse",
    stats: "25+ Healthcare Partners",
  },
  {
    id: "hostels",
    title: "Hostels & Residential Campuses",
    description:
      "Full mess management for residential facilities providing nutritious home-style meals that create a sense of community.",
    icon: "home",
    stats: "40+ Hostels Managed",
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description:
      "Premium corporate dining that boosts employee satisfaction and productivity. From executive dining to staff cafeterias.",
    icon: "building",
    stats: "60+ Corporate Clients",
  },
  {
    id: "industries",
    title: "Industries & Manufacturing",
    description:
      "Large-scale canteen operations for factories and industrial plants with emphasis on nutrition and worker satisfaction.",
    icon: "factory",
    stats: "35+ Industrial Units",
  },
  {
    id: "government",
    title: "Government Institutions",
    description:
      "Trusted partner for government institutions, PSUs, and public sector organizations with full compliance adherence.",
    icon: "landmark",
    stats: "20+ Government Clients",
  },
];

/* ─── Menus ────────────────────────────────────────────── */
export const MENU_CATEGORIES = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Start the day right with nutritious breakfast options",
    items: [
      "Aloo Paratha with Curd & Pickle",
      "Poha with Sev & Lemon",
      "Upma with Coconut Chutney",
      "Stuffed Paratha with Butter",
      "Idli Sambhar with Chutney",
      "Misal Pav",
      "Bread Butter Jam & Tea/Coffee",
      "Vegetable Sandwich",
      "Sprouts Chaat",
      "Oats Porridge with Fruits",
      "Cornflakes with Milk",
      "Dosa with Sambhar & Chutney",
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Complete, balanced meals for a productive day",
    items: [
      "Dal Tadka, Jeera Rice, Roti, Salad",
      "Paneer Butter Masala, Naan, Rice",
      "Chole Bhature, Rice, Onion Salad",
      "Dal Makhani, Butter Naan, Rice",
      "Mixed Veg Curry, Roti, Rice, Raita",
      "Rajma Chawal, Roti, Salad",
      "Kadhi Chawal, Aloo Sabzi, Roti",
      "Bhindi Masala, Dal, Roti, Rice",
      "Soya Chaap, Dal, Roti, Rice",
      "Veg Pulao, Raita, Papad",
      "Baingan Bharta, Dal, Roti, Rice",
      "Mushroom Matar, Dal, Roti, Rice",
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Light yet satisfying evening meals",
    items: [
      "Roti, Mix Veg, Dal, Rice, Salad",
      "Roti, Shahi Paneer, Rice, Raita",
      "Roti, Aloo Gobi, Dal, Rice",
      "Veg Biryani, Raita, Salad",
      "Roti, Malai Kofta, Rice, Raita",
      "Dal Bati Churma (Special)",
      "Roti, Bhindi, Dal, Rice, Salad",
      "Chana Masala, Puri, Rice, Halwa",
      "Veg Pulao, Dal, Papad, Pickle",
      "Roti, Lauki Kofta, Rice, Salad",
      "Roti, Mix Veg, Rice, Raita",
      "Stuffed Paratha, Dal, Rice, Pickle",
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Evening Tea",
    description: "Light refreshments for breaks",
    items: [
      "Samosa with Chutney",
      "Bread Pakora with Chutney",
      "Vada Pav",
      "Fruit Chat",
      "Vegetable Cutlet",
      "Kachori with Sabzi",
      "Dhokla with Green Chutney",
      "Pattice",
      "Biscuits & Tea/Coffee",
      "French Fries",
      "Pav Bhaji",
      "Spring Rolls",
    ],
  },
  {
    id: "special-diets",
    title: "Special Diet Meals",
    description: "Therapeutic and diet-specific meal options",
    items: [
      "Diabetic Diet – Low Sugar, High Fiber",
      "Cardiac Diet – Low Sodium, Low Fat",
      "Renal Diet – Controlled Potassium & Protein",
      "High Protein Diet – For Recovery & Athletes",
      "Low Calorie Diet – Weight Management",
      "Gluten-Free Options",
      "Jain Meal – No Onion, No Garlic",
      "Satvik Meal – Pure Vegetarian, Light Spices",
      "Liquid Diet – Soups, Juices, Broths",
      "Soft Diet – Easy to Chew & Swallow",
      "Post-Surgery Recovery Diet",
      "Pediatric Nutrition – For Children",
    ],
  },
  {
    id: "regional",
    title: "Regional & Festival Menu",
    description: "Celebrating India's diverse culinary heritage",
    items: [
      "Punjabi – Dal Makhani, Naan, Sarson Saag",
      "Kumaoni – Bhatt Ki Churkani, Jhangore Ki Kheer",
      "South Indian – Idli, Dosa, Uttapam, Sambhar",
      "Gujarati – Dhokla, Handvo, Undhiyu",
      "Maharashtrian – Misal, Puran Poli, Bhakri",
      "Bengali – Luchi, Alur Dom, Mishti",
      "Diwali Special – Assorted Sweets & Snacks",
      "Holi Special – Gujiya, Thandai, Puran Poli",
      "Eid Special – Biryani, Korma, Sewai",
      "Pongal / Makar Sankranti – Pongal, Til Laddoo",
      "Christmas – Cake, Plum Pudding",
      "Regional Thali – Weekly Rotation",
    ],
  },
];

/* ─── Quality & Hygiene Standards ──────────────────────── */
export const QUALITY_STANDARDS = [
  {
    title: "Food Safety",
    description:
      "Strict HACCP guidelines at every stage of food handling. All kitchens are FSSAI certified and regularly audited.",
    icon: "shieldCheck",
  },
  {
    title: "Kitchen Hygiene",
    description:
      "Industrial-grade cleaning protocols with daily sanitization schedules. Stainless steel surfaces and proper ventilation.",
    icon: "sparkles",
  },
  {
    title: "Quality Control",
    description:
      "Multi-level quality checks from raw material inspection to final serving. Regular random sampling and lab testing.",
    icon: "clipboardCheck",
  },
  {
    title: "Ingredient Selection",
    description:
      "Carefully sourced ingredients from verified suppliers. Prioritizing fresh, seasonal, and locally sourced produce.",
    icon: "wheat",
  },
  {
    title: "Storage & Cold Chain",
    description:
      "Temperature-controlled storage with separate sections for raw, cooked, and perishable items. Regular monitoring.",
    icon: "thermometerSnowflake",
  },
  {
    title: "Pest Control",
    description:
      "Regular professional pest control services with preventive measures. Integrated Pest Management approach.",
    icon: "bugOff",
  },
  {
    title: "RO Water System",
    description:
      "Multi-stage RO water purification for all cooking and drinking water. Regular quality testing at authorized labs.",
    icon: "droplets",
  },
  {
    title: "Temperature Control",
    description:
      "Digital temperature monitoring for all cooking, holding, and storage areas. Critical control points checked every 2 hours.",
    icon: "gauge",
  },
  {
    title: "Staff Hygiene",
    description:
      "Mandatory protocols including hand washing, hair nets, gloves, and uniforms. Regular health checkups.",
    icon: "hand",
  },
  {
    title: "Medical Checkups",
    description:
      "Quarterly medical examinations for all food handling staff. Food handler certification maintained.",
    icon: "stethoscope",
  },
  {
    title: "Food Testing",
    description:
      "Random food sample collection and lab analysis for nutritional content and contamination. Full traceability maintained.",
    icon: "flaskConical",
  },
];

/* ─── Clients ──────────────────────────────────────────── */
export const CLIENT_CATEGORIES = [
  {
    title: "Education",
    clients: [
      "Uttarakhand Technical University",
      "Pantnagar University",
      "St. Joseph's School, Rudrapur",
      "Delhi Public School, Rudrapur",
      "Kumaon University",
      "Graphic Era University",
    ],
  },
  {
    title: "Healthcare",
    clients: [
      "Uttarakhand Hospital, Rudrapur",
      "Krishna Hospital, Kashipur",
      "Sushila Tiwari Hospital, Haldwani",
      "Base Hospital, Pantnagar",
      "City Hospital, Rudrapur",
      "Aarogya Hospital, Rampur",
    ],
  },
  {
    title: "Corporate",
    clients: [
      "SIDCUL Industrial Area",
      "Bajaj Auto, Pantnagar",
      "Ashok Leyland, Rudrapur",
      "Tata Motors, Pantnagar",
      "Hindustan Unilever, Rudrapur",
      "Nestlé India, Pantnagar",
    ],
  },
  {
    title: "Government",
    clients: [
      "Uttarakhand Secretariat",
      "DRDO, Haldwani",
      "BHEL, Haridwar",
      "Indian Railways, Izzatnagar",
      "ONGC, Dehradun",
      "Uttarakhand Police HQ",
    ],
  },
  {
    title: "Industries",
    clients: [
      "Kichha Sugar Mill",
      "Bazpur Co-op Sugar Factory",
      "Hindalco, Renukoot",
      "Century Pulp & Paper, Lalkuan",
      "Parle Agro, Pantnagar",
      "Britannia, Rudrapur",
    ],
  },
];

/* ─── Testimonials ─────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Pandey",
    designation: "Director, Uttarakhand Hospital, Rudrapur",
    content:
      "Kanhaji Hospitality has been managing our patient meals for over 3 years. Their attention to dietary requirements, punctuality, and hygiene standards are exceptional.",
    rating: 5,
  },
  {
    name: "Prof. Sunita Rawat",
    designation: "Dean, Pantnagar University",
    content:
      "Managing food for thousands of students across multiple hostels is challenging. Kanhaji has exceeded expectations with their systematic approach and responsiveness.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    designation: "Plant Head, Bajaj Auto, Pantnagar",
    content:
      "Employee feedback has improved significantly since Kanhaji took over our canteen. The quality and cleanliness have made our campus dining experience excellent.",
    rating: 5,
  },
  {
    name: "Col. Anil Chauhan",
    designation: "Administrative Officer, DRDO Haldwani",
    content:
      "We needed a partner that understands the standards of a defense establishment. Kanhaji has demonstrated professionalism, security awareness, and service quality.",
    rating: 4,
  },
  {
    name: "Priya Verma",
    designation: "Principal, Delhi Public School, Rudrapur",
    content:
      "Children's nutrition is paramount, and Kanhaji understands this completely. Our parents are happy with the quality, and the kids love the tasty yet healthy meals.",
    rating: 5,
  },
  {
    name: "Ravi Mehta",
    designation: "VP Operations, SIDCUL Industries Association",
    content:
      "Managing canteens across multiple industrial units in SIDCUL requires robust systems. Kanhaji has delivered consistently with their 24/7 service capability.",
    rating: 5,
  },
];

/* ─── Case Studies ─────────────────────────────────────── */
export const CASE_STUDIES = [
  {
    id: "corporate-guest-house",
    title: "Streamlining Guest House Operations for a Leading Corporate",
    client: "Radico Khaitan, Sitapur",
    category: "Corporate",
    challenge:
      "Radico Khaitan needed professional management of their corporate guest house to accommodate visiting executives and partners. Inconsistent housekeeping, lack of in-room dining, and poor maintenance were affecting guest satisfaction and productivity.",
    solution:
      "We deployed a dedicated team for 24/7 guest house management including housekeeping, front desk, in-room dining, and maintenance. Introduced standardized check-in/check-out processes, linen management, and a curated menu for guests.",
    results: [
      "Guest satisfaction score increased from 3.0 to 4.7",
      "100% occupancy rate achieved for corporate bookings",
      "50% reduction in maintenance turnaround time",
      "Expanded from guest house to full cafeteria management",
      "Recognized as model facility by corporate HQ",
    ],
    image: "/images/case-studies/university-hostel.jpg",
  },
  {
    id: "central-kitchen-success",
    title: "Central Kitchen Driving Multi-Location Food Service",
    client: "SIDCUL Industries Association, Rudrapur",
    category: "Corporate",
    challenge:
      "Multiple industrial units in the SIDCUL complex required consistent, high-quality meals for shift workers across different locations. Each unit had its own kitchen leading to inconsistent quality, higher costs, and operational inefficiencies.",
    solution:
      "Established a centralized kitchen facility with standardized recipes and HACCP-compliant processes. Implemented a temperature-controlled logistics system for meal distribution across all units. Introduced batch cooking with quality holds.",
    results: [
      "30% reduction in operational costs through economies of scale",
      "Food quality consistency score improved to 96%",
      "40% faster meal delivery across all locations",
      "ISO 22000 certification achieved for central kitchen",
      "Model replicated for 3 additional industrial clusters",
    ],
    image: "/images/case-studies/industrial-canteen.jpg",
  },
  {
    id: "buffet-catering-events",
    title: "Premium Buffet Catering for Large-Scale Corporate Events",
    client: "Bharat Petroleum Corporation Limited (BPCL)",
    category: "Corporate",
    challenge:
      "BPCL needed a reliable catering partner for large-scale corporate events, conferences, and employee gatherings. They required diverse menu options, professional presentation, and seamless execution across multiple event types.",
    solution:
      "Designed customizable buffet packages with Indian, Continental, and regional cuisine options. Deployed experienced service teams with live cooking stations for events. Implemented efficient replenishment and waste management systems.",
    results: [
      "Successfully catered 50+ corporate events in first year",
      "95% event satisfaction rating from attendees",
      "40% reduction in event food waste through smart planning",
      "Dietary preference management for 500+ guests per event",
      "Named preferred catering partner for all BPCL events",
    ],
    image: "/images/case-studies/hospital-meals.jpg",
  },
];

/* ─── Blog Posts ───────────────────────────────────────── */
export const BLOG_POSTS = [
  {
    id: "nutrition-institutional-meals",
    title: "The Importance of Nutrition in Meals",
    excerpt:
      "Well-nourished individuals perform better. Learn how institutional meal programs can support health and productivity through balanced nutrition.",
    category: "Nutrition",
    author: "Dr. Priya Sharma",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "/images/blog/nutrition.jpg",
  },
  {
    id: "food-safety-standards",
    title: "Essential Food Safety Standards for Catering",
    excerpt:
      "From HACCP to FSSAI compliance, understand the critical food safety protocols every institutional kitchen must follow.",
    category: "Food Safety",
    author: "Chef Amit Verma",
    date: "2024-12-10",
    readTime: "7 min read",
    image: "/images/blog/food-safety.jpg",
  },
  {
    id: "choosing-catering-partner",
    title: "How to Choose the Right Catering Partner for Your Institution",
    excerpt:
      "Key factors institutions should consider when selecting a food service partner for quality, reliability, and value.",
    category: "Catering",
    author: "Rajesh Kumar",
    date: "2024-12-05",
    readTime: "6 min read",
    image: "/images/blog/catering-partner.jpg",
  },
  {
    id: "healthy-eating-young-adults",
    title: "Promoting Healthy Eating Habits Among Young Adults",
    excerpt:
      "Hostel and campus life often leads to poor dietary choices. Here's how institutional meal programs can encourage healthier eating.",
    category: "Healthy Eating",
    author: "Nutritionist Neha Gupta",
    date: "2024-11-28",
    readTime: "4 min read",
    image: "/images/blog/healthy-eating.jpg",
  },
  {
    id: "cost-effective-canteen-management",
    title: "Cost-Effective Canteen Management for Industrial Units",
    excerpt:
      "Balancing quality, nutrition, and budget in industrial canteens. Best practices for managing large-scale food operations efficiently.",
    category: "Catering",
    author: "Rohan Mehta",
    date: "2024-11-20",
    readTime: "6 min read",
    image: "/images/blog/canteen-management.jpg",
  },
  {
    id: "kitchen-tips-bulk-cooking",
    title: "Professional Kitchen Tips for Large-Scale Bulk Cooking",
    excerpt:
      "Behind the scenes of institutional kitchens: techniques, equipment, and processes that ensure quality at scale.",
    category: "Kitchen Tips",
    author: "Chef Amit Verma",
    date: "2024-11-15",
    readTime: "5 min read",
    image: "/images/blog/bulk-cooking.jpg",
  },
];

/* ─── Job Openings ─────────────────────────────────────── */
export const JOB_OPENINGS = [
  {
    id: "chef-de-partie",
    title: "Chef de Partie",
    location: "Rudrapur, Uttarakhand",
    type: "Full-time",
    department: "Kitchen Operations",
    experience: "3-5 years",
    description:
      "We are looking for an experienced Chef de Partie to manage sections of our institutional kitchen operations. The ideal candidate will have experience in large-scale cooking.",
    requirements: [
      "Diploma in Hotel Management or Culinary Arts",
      "Minimum 3 years experience in a similar role",
      "Experience in bulk cooking (500+ meals)",
      "Knowledge of HACCP and food safety standards",
      "Team management skills",
    ],
  },
  {
    id: "quality-assurance-manager",
    title: "Quality Assurance Manager",
    location: "Rudrapur, Uttarakhand",
    type: "Full-time",
    department: "Quality & Compliance",
    experience: "5-7 years",
    description:
      "Oversee food safety and quality standards across all client locations. Critical role in maintaining our reputation for excellence.",
    requirements: [
      "Degree in Food Technology or related field",
      "Certification in HACCP / ISO 22000",
      "5+ years experience in food quality assurance",
      "Knowledge of FSSAI regulations",
      "Audit and inspection experience",
    ],
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    location: "Multiple Locations – Uttarakhand",
    type: "Full-time",
    department: "Operations",
    experience: "7-10 years",
    description:
      "Manage multiple client accounts and oversee daily food service operations across different locations in the region.",
    requirements: [
      "Degree in Hotel Management or Business Administration",
      "7+ years in food service operations",
      "Experience managing large teams (50+)",
      "Client relationship management skills",
      "P&L management experience",
    ],
  },
  {
    id: "dietitian-nutritionist",
    title: "Clinical Dietitian / Nutritionist",
    location: "Rudrapur, Uttarakhand",
    type: "Full-time",
    department: "Nutrition",
    experience: "2-4 years",
    description:
      "Design and supervise therapeutic diets for hospital patients and specialized meal programs for institutional clients.",
    requirements: [
      "M.Sc. in Food & Nutrition / Clinical Dietetics",
      "Registered Dietitian certification",
      "2+ years experience in clinical or institutional settings",
      "Knowledge of therapeutic diet planning",
      "Strong communication skills",
    ],
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive – B2B",
    location: "Rudrapur, Uttarakhand",
    type: "Full-time",
    department: "Marketing & Sales",
    experience: "2-4 years",
    description:
      "Drive business development and lead generation for institutional food services across North India.",
    requirements: [
      "MBA in Marketing or related field",
      "2+ years in B2B sales/marketing",
      "Experience in institutional sales preferred",
      "Strong communication and presentation skills",
      "Willingness to travel across Uttarakhand region",
    ],
  },
];

/* ─── FAQ ──────────────────────────────────────────────── */
export const FAQS = [
  {
    question: "What types of institutions do you serve?",
    answer:
      "We serve schools, colleges, universities, hospitals, hostels, corporate offices, manufacturing plants, government institutions, and residential campuses across North India.",
  },
  {
    question: "How do you ensure food quality and hygiene?",
    answer:
      "We maintain the highest standards through HACCP-compliant processes, FSSAI certification, regular staff training, random food testing, temperature monitoring, and comprehensive hygiene protocols.",
  },
  {
    question: "Can you customize menus based on dietary requirements?",
    answer:
      "Absolutely. We specialize in customized menus for diabetic, cardiac, renal, gluten-free, Jain, Satvik, high-protein, and low-calorie needs. Our nutritionists work closely with clients.",
  },
  {
    question: "What is the minimum contract duration?",
    answer:
      "Our standard contracts range from 1 to 5 years depending on scope. We also offer trial periods and flexible engagement models.",
  },
  {
    question: "Do you provide services in remote locations?",
    answer:
      "Yes, we have experience operating in remote locations including industrial sites, rural institutions, and remote campuses.",
  },
  {
    question: "How do you handle food allergies and special dietary needs?",
    answer:
      "We maintain detailed records of all allergies and dietary restrictions. Our kitchen staff is trained on allergen management with separate preparation areas when needed.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing including per-plate, monthly retainer, and cost-plus models. Pricing is customized based on meal count, menu complexity, location, and service level.",
  },
  {
    question: "How do you handle feedback and complaints?",
    answer:
      "We have a multi-channel feedback system including digital forms, suggestion boxes, regular client meetings, and monthly surveys. Complaints are addressed within 24 hours.",
  },
  {
    question: "Are your staff trained and certified?",
    answer:
      "Yes, all staff undergo mandatory training in food safety, hygiene, customer service, and operations. They hold valid food handler certificates and undergo regular health checkups.",
  },
  {
    question: "How quickly can you start operations?",
    answer:
      "For existing kitchen facilities, we can typically commence within 2-4 weeks. For new setups requiring kitchen design and installation, the timeline ranges from 4-8 weeks.",
  },
];

/* ─── Gallery Categories ───────────────────────────────── */
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "kitchen", label: "Kitchen" },
  { id: "food", label: "Food" },
  { id: "staff", label: "Staff" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "certificates", label: "Certificates" },
  { id: "serving", label: "Serving" },
  { id: "events", label: "Events" },
];

export const GALLERY_ITEMS = [
  // Kitchen
  { id: 1, src: "/images/gallery/kitchen-1.jpg", alt: "Modern industrial kitchen", category: "kitchen" },
  { id: 2, src: "/images/gallery/kitchen-2.jpg", alt: "Kitchen operations", category: "kitchen" },
  { id: 13, src: "/images/gallery/kitchen-3.jpg", alt: "Professional kitchen setup", category: "kitchen" },
  { id: 14, src: "/images/gallery/kitchen-4.jpg", alt: "Commercial cooking area", category: "kitchen" },
  { id: 15, src: "/images/gallery/kitchen-5.jpg", alt: "Kitchen equipment", category: "kitchen" },
  { id: 16, src: "/images/gallery/kitchen-6.jpg", alt: "Food preparation station", category: "kitchen" },
  { id: 17, src: "/images/gallery/kitchen-7.jpg", alt: "Chef at work", category: "kitchen" },
  { id: 18, src: "/images/gallery/kitchen-8.jpg", alt: "Kitchen ventilation system", category: "kitchen" },
  { id: 19, src: "/images/gallery/kitchen-9.jpg", alt: "Stainless steel kitchen", category: "kitchen" },
  { id: 20, src: "/images/gallery/kitchen-10.jpg", alt: "Professional cooking", category: "kitchen" },
  { id: 21, src: "/images/gallery/kitchen-11.jpg", alt: "Kitchen workstations", category: "kitchen" },
  { id: 22, src: "/images/gallery/kitchen-12.jpg", alt: "Industrial kitchen facility", category: "kitchen" },

  // Food
  { id: 3, src: "/images/gallery/food-1.jpg", alt: "Prepared meals", category: "food" },
  { id: 4, src: "/images/gallery/food-2.jpg", alt: "Buffet setup", category: "food" },
  { id: 23, src: "/images/gallery/food-3.jpg", alt: "Gourmet dish presentation", category: "food" },
  { id: 24, src: "/images/gallery/food-4.jpg", alt: "Fresh pizza", category: "food" },
  { id: 25, src: "/images/gallery/food-5.jpg", alt: "Healthy salad bowl", category: "food" },
  { id: 26, src: "/images/gallery/food-6.jpg", alt: "Restaurant style dining", category: "food" },
  { id: 27, src: "/images/gallery/food-7.jpg", alt: "Breakfast spread", category: "food" },
  { id: 28, src: "/images/gallery/food-8.jpg", alt: "Lunch buffet", category: "food" },
  { id: 29, src: "/images/gallery/food-9.jpg", alt: "Fresh ingredients", category: "food" },
  { id: 30, src: "/images/gallery/food-10.jpg", alt: "Food service setup", category: "food" },
  { id: 31, src: "/images/gallery/food-11.jpg", alt: "Indian curry dish", category: "food" },
  { id: 32, src: "/images/gallery/food-12.jpg", alt: "Fresh vegetable salad", category: "food" },

  // Staff
  { id: 5, src: "/images/gallery/staff-1.jpg", alt: "Kitchen staff", category: "staff" },
  { id: 6, src: "/images/gallery/staff-2.jpg", alt: "Service staff", category: "staff" },
  { id: 33, src: "/images/gallery/staff-3.jpg", alt: "Chef preparing food", category: "staff" },
  { id: 34, src: "/images/gallery/staff-4.jpg", alt: "Team collaboration", category: "staff" },
  { id: 35, src: "/images/gallery/staff-5.jpg", alt: "Staff meeting", category: "staff" },
  { id: 36, src: "/images/gallery/staff-6.jpg", alt: "Professional team", category: "staff" },
  { id: 37, src: "/images/gallery/staff-7.jpg", alt: "Kitchen crew", category: "staff" },
  { id: 38, src: "/images/gallery/staff-9.jpg", alt: "Service team ready", category: "staff" },
  { id: 40, src: "/images/gallery/staff-10.jpg", alt: "Hospitality staff", category: "staff" },

  // Infrastructure
  { id: 7, src: "/images/gallery/infra-1.jpg", alt: "Storage facility", category: "infrastructure" },
  { id: 8, src: "/images/gallery/infra-2.jpg", alt: "Dining hall", category: "infrastructure" },
  { id: 41, src: "/images/gallery/infra-3.jpg", alt: "Modern dining area", category: "infrastructure" },
  { id: 42, src: "/images/gallery/infra-4.jpg", alt: "Office workspace", category: "infrastructure" },
  { id: 43, src: "/images/gallery/infra-5.jpg", alt: "Conference room setup", category: "infrastructure" },
  { id: 44, src: "/images/gallery/infra-6.jpg", alt: "Building exterior", category: "infrastructure" },
  { id: 45, src: "/images/gallery/infra-7.jpg", alt: "Event hall", category: "infrastructure" },
  { id: 46, src: "/images/gallery/infra-8.jpg", alt: "Facility management", category: "infrastructure" },
  { id: 47, src: "/images/gallery/infra-9.jpg", alt: "Dining infrastructure", category: "infrastructure" },
  { id: 48, src: "/images/gallery/infra-10.jpg", alt: "Cafeteria infrastructure", category: "infrastructure" },

  // Certificates
  { id: 49, src: "/images/gallery/cert-1.png", alt: "Quality Certification 1", category: "certificates" },
  { id: 50, src: "/images/gallery/cert-2.png", alt: "Quality Certification 2", category: "certificates" },
  { id: 51, src: "/images/gallery/cert-3.png", alt: "Quality Certification 3", category: "certificates" },

  // Serving
  { id: 9, src: "/images/gallery/serving-1.jpg", alt: "Meal service", category: "serving" },
  { id: 10, src: "/images/gallery/serving-2.jpg", alt: "Cafeteria service", category: "serving" },
  { id: 52, src: "/images/gallery/serving-3.jpg", alt: "Food counter service", category: "serving" },
  { id: 53, src: "/images/gallery/serving-4.jpg", alt: "Buffet counter", category: "serving" },
  { id: 54, src: "/images/gallery/serving-5.jpg", alt: "Fresh produce display", category: "serving" },
  { id: 55, src: "/images/gallery/serving-6.jpg", alt: "Cooking demonstration", category: "serving" },
  { id: 56, src: "/images/gallery/serving-7.jpg", alt: "Food plating", category: "serving" },
  { id: 57, src: "/images/gallery/serving-9.jpg", alt: "Dining experience", category: "serving" },
  { id: 59, src: "/images/gallery/serving-10.jpg", alt: "Restaurant service", category: "serving" },

  // Events
  { id: 11, src: "/images/gallery/events-1.jpg", alt: "Corporate event", category: "events" },
  { id: 12, src: "/images/gallery/events-2.jpg", alt: "Festival celebration", category: "events" },
  { id: 60, src: "/images/gallery/events-3.jpg", alt: "Event decoration", category: "events" },
  { id: 61, src: "/images/gallery/events-4.jpg", alt: "Celebration setup", category: "events" },
  { id: 62, src: "/images/gallery/events-5.jpg", alt: "Conference event", category: "events" },
  { id: 63, src: "/images/gallery/events-6.jpg", alt: "Networking event", category: "events" },
  { id: 64, src: "/images/gallery/events-7.jpg", alt: "Party decorations", category: "events" },
  { id: 65, src: "/images/gallery/events-8.jpg", alt: "Special event dinner", category: "events" },

  // User Uploads - Team Photos
  { id: 66, src: "/images/gallery/user-team-1.jpg", alt: "Team photo 1", category: "staff" },
  { id: 67, src: "/images/gallery/user-team-2.jpg", alt: "Team photo 2", category: "staff" },
  { id: 68, src: "/images/gallery/user-team-3.jpg", alt: "Team photo 3", category: "staff" },
  { id: 69, src: "/images/gallery/user-team-4.jpg", alt: "Team photo 4", category: "staff" },
  { id: 70, src: "/images/gallery/user-team-5.jpg", alt: "Team photo 5", category: "staff" },

  // User Uploads - Certificates & Awards
  { id: 71, src: "/images/gallery/user-cert-1.jpg", alt: "Certificate 1", category: "certificates" },
  { id: 72, src: "/images/gallery/user-cert-2.jpg", alt: "Certificate 2", category: "certificates" },
  { id: 73, src: "/images/gallery/user-award-1.jpg", alt: "Award 1", category: "certificates" },
  { id: 74, src: "/images/gallery/user-award-2.jpg", alt: "Award 2", category: "certificates" },

  // User Uploads - Meetings
  { id: 75, src: "/images/gallery/user-meeting-1.jpg", alt: "Team meeting 1", category: "events" },
  { id: 76, src: "/images/gallery/user-meeting-2.jpg", alt: "Team meeting 2", category: "events" },
];

/* ─── Footer Links ─────────────────────────────────────── */
export const FOOTER_SECTIONS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Menus & Meals", href: "/menus" },
      { label: "Quality & Hygiene", href: "/quality" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/* ─── Leadership Team ──────────────────────────────────── */
export const LEADERSHIP = [
  {
    name: "Owner",
    title: "Founder & Managing Director",
    bio: "Visionary leader who founded Kanhaji Hospitality with a mission to transform institutional food service. The driving force behind the company's growth from a single operation to a trusted name across North India.",
    image: "/images/team-new/owner.jpg",
  },
  {
    name: "Management Team",
    title: "Operations & Quality Leadership",
    bio: "Our experienced management team oversees daily operations, quality assurance, and client relationships across all locations, ensuring consistent excellence.",
    image: "/images/team-new/management-team.jpg",
  },
  {
    name: "Chef",
    title: "Head Chef",
    bio: "Our expert chef leads kitchen operations with a focus on nutritional excellence, menu innovation, and maintaining the highest culinary standards in institutional cooking.",
    image: "/images/team-new/chef.jpg",
  },
  {
    name: "Staff Team",
    title: "Dedicated Service Professionals",
    bio: "Our trained and certified staff team works tirelessly to deliver quality meals and exceptional service at every client location, every single day.",
    image: "/images/team-new/staff.jpg",
  },
];

/* ─── Timeline ─────────────────────────────────────────── */
export const TIMELINE = [
  {
    year: 2020,
    title: "Foundation",
    description:
      "Commenced operations from scratch. Established Britannia Industries branch in Uttarakhand. Launched a resort in Bhowali, near Nainital, Uttarakhand.",
  },
  {
    year: 2021,
    title: "First Expansion",
    description:
      "Opened Dalmia Sugar Mills project in Sitapur, Uttar Pradesh. Began catering to Pantnagar University postgraduate hostel, Uttarakhand. Initiated services at Paras Hospital, Bihar.",
  },
  {
    year: 2022,
    title: "Medical & Education",
    description:
      "Launched Lord Buddha Medical College, Bihar. Began service provision for approximately 500 MBBS students and 400 daily patients; operated a 24/7 cafeteria.",
  },
  {
    year: 2023,
    title: "Rapid Scaling",
    description:
      "KANHAJI HOSPITALITY provides professional catering services across institutions, including Atal Awasiy Vidyalay (650 students), Narayan Medical College (serving 700 staff and 500 patients daily), Rural Development Training Center (700 trainees), and Bihta Medical College (350 staff and 190 patient meals daily), ensuring round-the-clock quality service.",
  },
  {
    year: 2024,
    title: "Major Milestones",
    description:
      "Started meal services at Atal Awasiy Vidyalay, Bareilly, Uttar Pradesh — 650 students per meal. Launched NIA, Jaipur operation. Continued serving Narayan Medical College, Rural Development Training Center, and Bihta Medical College.",
  },
  {
    year: 2025,
    title: "Corporate Expansion",
    description:
      "Commenced meal services for Radico Khaitan, Sitapur/Lucknow — approximately 400 meals per day. Expanded from a single startup effort into a network of institutions spanning multiple states.",
  },
  {
    year: 2026,
    title: "New Horizons",
    description:
      "BPCL (Bharat Petroleum Corporation Limited) partnership started. Continuing to grow with commitment to quality, hygiene, and institutional food service excellence.",
  },
];

/* ─── Clients Showcase ─────────────────────────────────── */
export const CLIENTS_SHOWCASE = [
  { name: "Radico Khaitan", logo: "/images/clients/radico.png" },
  { name: "NHPC", logo: "/images/clients/nhpc.svg" },
  { name: "Titan", logo: "/images/clients/titan.png" },
  { name: "NSMCH", logo: "/images/clients/nsmch.png" },
  { name: "Dalmia Bharat Sugar", logo: "/images/clients/dalmia.jpg" },
  { name: "Paras Healthcare", logo: "/images/clients/paras.png" },
  { name: "Narayan Medical College", logo: "/images/clients/narayan.jpg" },
  { name: "Gramya Vikas Vibhag", logo: "/images/clients/gramya.jpg" },
  { name: "Britannia", logo: "/images/clients/britannia.png" },
  { name: "Bharat Petroleum", logo: "/images/clients/bharat-petroleum.png" },
  { name: "GB Pant University", logo: "/images/clients/gbpant.jpg" },
  { name: "Lord Buddha Koshi Medical College", logo: "/images/clients/lord-buddha.jpg" },
];

/* ─── State List for Forms ──────────────────────────────── */
export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Chandigarh", "Jammu & Kashmir", "Ladakh",
];

export const INSTITUTION_TYPES = [
  "School",
  "College",
  "University",
  "Hospital",
  "Medical College",
  "Hostel",
  "Corporate Office",
  "Manufacturing Plant",
  "Government Institution",
  "NGO",
  "Ashram",
  "Residential Campus",
  "Training Institute",

  "Other",
];
