// Shared content data for the Vicnez Facilities Management site.
// Sourced from the official Vicnez Facilities Management W.L.L company profile.

export function ph(w, h, text, bg = "0E1B2C", fg = "C6A15B") {
  const t = text.replace(/ /g, "+");
  return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${t}&font=raleway`;
}

// Real branded photography, extracted from the official company profile.
export const HERO_PHOTO = "/images/hero.jpg";
export const ABOUT_PHOTO = "/images/about-team-natural-v2.png";

export const COMPANY = {
  legalName: "Vicnez Facilities Management W.L.L",
  tagline: "All Types Of Cleaning Services | Facilities Management",
  phone: "+973 7796 8553",
  phoneHref: "+97377968553",
  mobile: "+973 3448 2910",
  mobileHref: "+97334482910",
  email: "contact@vfmbh.com",
  email2: "ranjani@vfmbh.com",
  website: "www.vfmbh.com",
  instagram: "@vfm.bh",
  facebook: "https://www.facebook.com/profile.php?id=61554671818287",
  address: "No. 1413, Road 1234, Area 312, Al Guful, Manama, Kingdom of Bahrain",
};

export const VISION =
  "To be the most trusted and preferred facilities management and cleaning solutions provider in Bahrain, recognized for our excellence, innovation, and client satisfaction.";

export const MISSION =
  "To provide exceptional facilities management and cleaning services through skilled people, advanced technology, and a commitment to a cleaner, safer, and better environment.";

export const OUR_VALUES = [
  { icon: "star", title: "Quality", text: "We deliver the highest standards in everything we do." },
  { icon: "shield", title: "Reliability", text: "Consistent, dependable and always on time." },
  { icon: "team", title: "Professionalism", text: "Trained experts committed to excellence." },
  { icon: "leaf", title: "Integrity", text: "We operate with transparency and honesty." },
];

export const COMPANY_FACTS = [
  { icon: "pin", title: "Head Office", text: "No. 1413, Road 1234, Area 312, Al Guful, Manama, Kingdom of Bahrain" },
  { icon: "building", title: "Industry", text: "Facilities Management & All kinds of Cleaning Services" },
  { icon: "globe", title: "Service Coverage", text: "Proudly serving clients across the Kingdom of Bahrain." },
  { icon: "team", title: "Client Focus", text: "Residential | Commercial | Industrial | Hospitality" },
];

// ── Services, organized into categories (as in the official company profile) ──
export const SERVICE_CATEGORIES = [
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    icon: "home",
    img: "/images/residential-cleaning-natural.png",
    blurb: "Professional routine and deep cleaning for homes, villas, and apartments across Bahrain.",
    items: [
      "Villa Cleaning",
      "Apartment Cleaning",
      "Move-In / Move-Out Cleaning",
      "Deep Cleaning",
      "Post Renovation Cleaning",
    ],
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: "office",
    img: "/images/commercial-cleaning-natural.png",
    blurb: "Reliable cleaning programs for offices, retail spaces, hotels, restaurants, and shared facilities.",
    items: [
      "Office Cleaning",
      "Retail Showroom Cleaning",
      "Restaurant Cleaning",
      "Hotel Cleaning Support",
      "Common Area Maintenance",
    ],
  },
  {
    id: "specialized-cleaning",
    title: "Specialized Cleaning",
    icon: "grid",
    img: "/images/glass-cleaning-natural.png",
    blurb: "Specialist glass, high-level, pressure-washing, and floor-care services delivered by trained teams.",
    items: [
      "Glass Cleaning",
      "High-Level Cleaning",
      "Tile Scrubbing & Polishing",
      "Pressure Washing",
      "Floor Care Services",
    ],
  },
  {
    id: "outdoor-services",
    title: "Outdoor Services",
    icon: "car",
    img: "/images/external-area-cleaning-natural.png",
    blurb: "Scheduled care for car parks, walkways, external areas, and landscaped surroundings.",
    items: [
      "Car Park Cleaning",
      "External Area Cleaning",
      "Landscape Area Cleaning",
      "Walkway Cleaning",
    ],
  },
  {
    id: "swimming-pool-services",
    title: "Swimming Pool Services",
    icon: "drop",
    img: "/images/pool-maintenance-natural-v2.png",
    blurb: "Complete pool cleaning, water-care support, equipment maintenance, and surrounding-area upkeep.",
    items: [
      "Pool Cleaning",
      "Pool Maintenance",
      "Pool Area Cleaning",
    ],
  },
  {
    id: "other-services",
    title: "Other Services",
    icon: "wind",
    img: "/images/water-tank-cleaning-natural.png",
    blurb: "Focused cleaning for A/C grills, kitchen hoods, and water tanks to support safer facilities.",
    items: [
      "A/C Grill Cleaning",
      "Kitchen Hood Cleaning",
      "Water Tank Cleaning",
    ],
  },
  {
    id: "construction-cleaning",
    title: "Construction & Post-Construction Cleaning",
    icon: "building",
    img: "/images/construction-site-cleaning-natural.png",
    blurb: "Detailed cleaning for construction sites, renovated properties, and final building handovers.",
    items: [
      "Construction Site Cleaning",
      "Post-Construction Cleaning",
      "Building Handover Cleaning",
      "Debris & Dust Removal",
      "New Building Deep Cleaning",
      "Renovation Cleaning",
    ],
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance Services",
    icon: "tool",
    img: "/images/building-maintenance-natural.png",
    blurb: "Preventive and corrective electrical, plumbing, HVAC, carpentry, painting, and general maintenance.",
    items: [
      "Electrical Maintenance",
      "Plumbing Maintenance",
      "HVAC Maintenance",
      "Carpentry & Painting",
      "General Building Maintenance",
      "Masonry & Waterproofing",
    ],
    // Richer sub-discipline breakdown, each with its own photo and task list —
    // rendered with a dedicated layout on the Services page.
    subItems: [
      {
        title: "Electrical Maintenance",
        icon: "bolt",
        img: "/images/maintenance-electrical-natural.png",
        points: ["Lighting Installation & Repairs", "Power Socket Repairs", "Distribution Board Maintenance", "Electrical Troubleshooting", "Emergency Electrical Support"],
      },
      {
        title: "Plumbing Maintenance",
        icon: "tool",
        img: "/images/maintenance-plumbing-natural.png",
        points: ["Leak Detection & Repair", "Pipe Installation & Replacement", "Drain Cleaning", "Water Pump Maintenance", "Bathroom & Kitchen Plumbing"],
      },
      {
        title: "HVAC Maintenance",
        icon: "snowflake",
        img: "/images/maintenance-hvac-natural.png",
        points: ["AC Preventive Maintenance", "AC Repair & Troubleshooting", "Air Filter Cleaning & Replacement", "Duct Inspection", "HVAC Performance Optimization"],
      },
      {
        title: "Carpentry & Painting",
        icon: "paintbrush",
        img: "/images/maintenance-carpentry-natural.png",
        points: ["Door & Lock Repairs", "Furniture Repairs", "Gypsum & Partition Repairs", "Interior & Exterior Painting", "Woodwork Maintenance"],
      },
      {
        title: "General Building Maintenance",
        icon: "building",
        img: "/images/maintenance-general-natural.png",
        points: ["Ceiling Repairs", "Wall & Gypsum Repairs", "Interior & Exterior Painting", "Fixture Replacement", "Minor Civil Works", "Preventive Maintenance Programs"],
      },
      {
        title: "Masonry & Waterproofing",
        icon: "building",
        img: "/images/maintenance-waterproofing-natural.png",
        points: ["Masonry & Crack Repairs", "Roof & Terrace Waterproofing", "Sealant Joint Renewal", "Leak Prevention Treatments", "External Wall Protection"],
      },
    ],
  },
  {
    id: "service-staff",
    title: "Service Staff Supply",
    icon: "team",
    img: "/images/service-staff-housekeeping-natural.png",
    blurb: "Professional housekeeping and facilities staff supplied on an hourly, monthly, or yearly basis.",
    items: [
      "Hourly Basis",
      "Monthly Basis",
      "Yearly Basis",
      "Dedicated Cleaning Staff",
      "Flexible Staffing Support",
    ],
  },
];

export const MAINTENANCE_FEATURES = [
  { icon: "team", text: "Experienced Maintenance Technicians" },
  { icon: "shield", text: "Reliable & Trusted Service" },
  { icon: "clock", text: "Quick Response & Support" },
  { icon: "tag", text: "Cost-Effective Solutions" },
  { icon: "tool", text: "Professional Tools & Equipment" },
  { icon: "building", text: "Residential, Commercial & Industrial Expertise" },
];

// Flat list, derived from the categories above — used for the homepage
// quick-link grid and the footer.
export const SERVICES_FLAT = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.items.map((name) => ({ name, categoryId: cat.id, categoryTitle: cat.title }))
);

// ── Why Choose Us — the 8 real reasons from the company profile ──
export const WHY_CHOOSE_REASONS = [
  { num: "01", icon: "team", title: "Experienced & Trained Staff", text: "Our team consists of skilled and professionally trained personnel who are committed to delivering services with the highest standards of quality and professionalism." },
  { num: "02", icon: "tool", title: "Professional Equipment", text: "We utilize modern cleaning equipment, advanced technology, and industry-approved methods to ensure efficient and effective service delivery." },
  { num: "03", icon: "clipboard", title: "Flexible Service Packages", text: "We offer customized service solutions tailored to the specific requirements, schedules, and budgets of our clients." },
  { num: "04", icon: "tag", title: "Competitive Pricing", text: "Our pricing structure is designed to provide outstanding value without compromising on quality, ensuring cost-effective solutions for every client." },
  { num: "05", icon: "shield", title: "Quality Assurance", text: "We follow strict quality control procedures and regular inspections to maintain consistent service excellence across all projects." },
  { num: "06", icon: "badge", title: "Customer-Centric Approach", text: "Understanding our clients' needs is at the heart of everything we do. We build long-term relationships through responsiveness, transparency, and reliability." },
  { num: "07", icon: "clock", title: "Reliable & Timely Service", text: "We value punctuality and operational excellence, ensuring services are delivered on time and according to agreed standards." },
  { num: "08", icon: "hardhat", title: "Health & Safety Compliance", text: "Safety is a top priority. We adhere to industry best practices and health and safety regulations to protect our clients, employees, and the environments we serve." },
  { num: "09", icon: "building", title: "Complete Service Coverage", text: "Our integrated cleaning, maintenance, outdoor, pool, and staffing solutions give clients one accountable partner for their complete facility requirements." },
];

export const OUR_COMMITMENT =
  "To provide superior facilities management and cleaning solutions that exceed expectations while creating cleaner, safer, and more productive spaces for our clients.";

// ── Our Process — 6-step methodology ──
export const PROCESS_STEPS = [
  { num: "01", icon: "clipboard", title: "Site Inspection", text: "Our team conducts a detailed site assessment to understand your requirements, identify challenges, and evaluate the scope of work." },
  { num: "02", icon: "doc", title: "Customized Proposal", text: "We prepare a tailored service proposal outlining the scope, schedule, and cost-effective solutions that best suit your needs." },
  { num: "03", icon: "clock", title: "Service Planning", text: "A comprehensive execution plan is developed, including staffing, equipment allocation, timelines, and quality standards." },
  { num: "04", icon: "tool", title: "Execution", text: "Our trained professionals perform the service efficiently using industry-approved methods, equipment, and safety procedures." },
  { num: "05", icon: "shield", title: "Quality Inspection", text: "Supervisors conduct thorough quality checks to ensure all services meet Vicnez Facilities Management standards." },
  { num: "06", icon: "star", title: "Client Satisfaction Review", text: "We review the completed work with the client, gather feedback, and ensure complete satisfaction before project closure." },
];

// ── Health & Safety ──
export const SAFETY_APPROACH = [
  { icon: "shield", title: "Safety First", text: "Safety is integrated into every task and decision we make." },
  { icon: "team", title: "Trained & Aware", text: "All team members receive regular health & safety training and workplace awareness." },
  { icon: "clipboard", title: "Standard Procedures", text: "We follow strict SOPs and safety guidelines on every assignment." },
  { icon: "drop", title: "Approved Chemicals", text: "We use safe, eco-friendly, and approved cleaning chemicals that comply with industry standards." },
  { icon: "hardhat", title: "Protective Equipment", text: "Our staff use appropriate PPE and equipment to ensure maximum safety at all times." },
];

export const SAFETY_PRACTICES = [
  "Risk assessment before every job",
  "Proper use of machinery and equipment",
  "Safe handling and storage of chemicals",
  "Regular inspection and maintenance of tools & equipment",
  "Emergency preparedness and response planning",
  "Compliance with local health & safety regulations",
  "Continuous improvement through monitoring and feedback",
];

export const WE_CARE_FOR = [
  { icon: "team", title: "Our People", text: "Ensuring a safe and healthy work environment for all team members." },
  { icon: "building", title: "Our Clients", text: "Delivering safe, reliable, and high-quality services you can trust." },
  { icon: "badge", title: "Our Community", text: "Contributing to a cleaner, safer and healthier environment for everyone." },
  { icon: "globe", title: "Our Environment", text: "Using safe practices and products that protect our planet for the future." },
];

// ── Industries We Serve ──
export const INDUSTRIES = [
  { num: "01", title: "Residential Communities", text: "Keeping residential buildings, apartments, and communities clean, safe, and comfortable." },
  { num: "02", title: "Commercial Offices", text: "Maintaining clean, productive, and professional work environments for employees and visitors." },
  { num: "03", title: "Retail Stores", text: "Creating spotless retail spaces that enhance customer experience and satisfaction." },
  { num: "04", title: "Restaurants", text: "Ensuring high hygiene standards in dining, kitchen, and guest areas for a safe experience." },
  { num: "05", title: "Hotels", text: "Delivering exceptional cleanliness and hospitality across rooms, lobbies, and facilities." },
  { num: "06", title: "Warehouses", text: "Maintaining clean, organized, and safe warehouse environments for smooth operations." },
  { num: "07", title: "Educational Institutions", text: "Supporting schools, colleges, and universities with clean, healthy, and conducive learning environments." },
  { num: "08", title: "Healthcare Facilities", text: "Upholding strict cleaning protocols to ensure safe, sanitized, and hygienic spaces for all." },
  { num: "09", title: "Industrial Facilities", text: "Providing specialized cleaning solutions for industrial plants and manufacturing facilities." },
];

// ── Service Staff — flexible staffing terms ──
export const STAFFING_PLANS = [
  {
    icon: "clock",
    title: "Hourly Basis",
    text: "Ideal for short-term requirements, on-demand support, or occasional cleaning needs.",
    points: ["Pay only for the hours you need", "Perfect for one-time or irregular tasks", "Quick response & flexible scheduling", "No long-term commitment"],
  },
  {
    icon: "doc",
    title: "Monthly Basis",
    text: "Best for regular cleaning and maintenance with consistent service and predictable costs.",
    points: ["Dedicated & trained staff", "Customized cleaning plan", "Cost-effective & consistent service", "Regular quality checks"],
  },
  {
    icon: "shield",
    title: "Yearly Basis",
    text: "Comprehensive facility management solutions with long-term reliability and value.",
    points: ["Best value for long-term partnership", "Priority support & account management", "Planned maintenance & scheduling", "Enhanced reliability & continuity"],
  },
];

// ── Valued clients (named in text only — not reproducing third-party logos) ──
export const VALUED_CLIENTS = [
  { name: "Monroe Hotel & Suites", logo: "/images/clients/monroe-hotel.jpg" },
  { name: "Bokhowa Group W.L.L.", logo: "/images/clients/bokhowa-group.jpeg" },
  { name: "Crystal Palace Hotel", logo: "/images/clients/crystal-palace-hotel.png" },
  { name: "Al Rashid Group", logo: "/images/clients/al-rashid-group.png" },
  { name: "Oasis Mall Bahrain", logo: "/images/clients/oasis-malls-bahrain.png" },
  { name: "Golden Group of Companies", logo: "/images/clients/golden-group.jpg" },
  { name: "Swiss-Belhotel", logo: "/images/clients/swiss-belhotel.png" },
  { name: "Crowne Plaza Bahrain", logo: "/images/clients/crowne-plaza.avif" },
  { name: "NASS Corporation", logo: "/images/clients/nass-corporation.jpg" },
  { name: "Reef Island", logo: "/images/clients/reef-island.png" },
  { name: "Pro Gulf Intect W.L.L.", logo: "/images/clients/pro-gulf-intect.jpg" },
  { name: "Primrose Hospitality", logo: "/images/clients/primrose-hospitality.png" },
];

export const LEADERS = [
  {
    name: "Thuraisamy Sri Ranjani",
    role: "Founder & Managing Director",
    bio: "A visionary entrepreneur with extensive experience in facilities management, customer service, and business operations.",
    img: "/images/leader-sriranjani-official.png",
    imagePosition: "center 26%",
    skills: ["Visionary Leadership", "Strategic Planning", "Operational Excellence", "People & Client Engagement"],
  },
  {
    name: "Vigneshwaran Thuraisamy",
    role: "Co-Founder",
    bio: "A business development and marketing professional with expertise in sales strategy, customer acquisition, and operational excellence.",
    img: "/images/leader-vignesh-official.jpeg",
    imagePosition: "center 24%",
    skills: ["Business Development", "Marketing Strategy", "Client Relationships", "Performance Driven"],
  },
];

export const LEADERSHIP_VALUES = [
  { icon: "shield", title: "Integrity", text: "We operate with honesty, transparency, and ethical business practices." },
  { icon: "team", title: "Teamwork", text: "We believe in collaboration and building strong, unified teams." },
  { icon: "badge", title: "Innovation", text: "We embrace new ideas and technology to deliver better solutions." },
  { icon: "tag", title: "Growth", text: "We are committed to continuous improvement and long-term value." },
  { icon: "star", title: "Excellence", text: "We strive for excellence in every service, every time." },
];

export const COMPARE_ROWS = [
  { label: "Documented inspection checklist on every visit", vicnez: true, typical: false },
  { label: "Trained, uniformed, directly-employed staff", vicnez: true, typical: false },
  { label: "Named supervisor accountable per site", vicnez: true, typical: false },
  { label: "Digital service log & photographic sign-off", vicnez: true, typical: false },
  { label: "Specialist capability (pool, facade glass, A/C grills)", vicnez: true, typical: false },
  { label: "Flexible, off-hours scheduling", vicnez: true, typical: true },
  { label: "Fixed response time for service issues", vicnez: true, typical: false },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];
