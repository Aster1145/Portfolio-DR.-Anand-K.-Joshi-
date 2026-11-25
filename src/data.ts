export type IconKey =
  | "battery"
  | "pcm"
  | "collaboration"
  | "mobility"
  | "award"
  | "medal"
  | "trophy"
  | "star"
  | "teacher"
  | "excellence"
  | "gavel"
  | "mentor"
  | "blood"
  | "tree"
  | "energy";

export type AwardCategory = "National" | "Innovation" | "Teaching";

export type Award = {
  id: string;
  year: string;
  month: string;
  title: string;
  issuer: string;
  context?: string;
  description: string;
  categories: AwardCategory[];
  icon: IconKey;
  featured?: boolean;
  image?: string;
  plaqueImage?: string;
  certificateImage?: string;
};

export const profile = {
  name: "Dr. Anand K. Joshi",
  firstName: "Anand",
  title: "Academician | Researcher | Innovator | Scientific Advisor",
  shortBio:
    "Distinguished academician, researcher, and industry expert with over 12 years of experience in academia, research, and technological innovation. Specializing in advanced battery thermal management, nano-enhanced phase change materials (PCMs), and green mobility for a sustainable future.",
  longBio:
    "Dr. Anand K. Joshi continues to push the boundaries of research and technology, shaping the future of energy storage, green mobility, and sustainable engineering solutions. Inventor of a patented hybrid battery thermal management system, recipient of prestigious national awards, and scientific advisor driving cutting-edge research in battery recycling and clean mobility.",
  institution: "Presidency University, Bengaluru",
  incubation: "EJ Labs Private Limited (Incubated at IISc Bangalore)",
  email: "anand.joshi@research.edu.in",
  phone: "+91 80 0000 0000",
  linkedin: "https://www.linkedin.com/in/anandkjoshi",
  location: "Bengaluru, Karnataka, India",
  availability: "Research collaborations · Invited talks · Jury service · Mentorship",
  responseTime: "Replies within 2–3 working days",
};

export const stats = [
  { value: "12+", label: "Years in academia & research" },
  { value: "06", label: "National honours & awards" },
  { value: "01", label: "Granted Indian Patent (2024)" },
  { value: "06+", label: "Key talks & symposia" },
];

export const currentRoles = [
  { role: "Scientific Advisor (Battery Recycling)", organisation: "Peak Amp Pvt. Ltd." },
  { role: "Technical Advisor", organisation: "EV Retron Energies India Pvt. Ltd." },
  { role: "Founder & Innovator", organisation: "EJ Labs Pvt. Ltd. (Incubated at IISc Bangalore)" },
  { role: "Academician & Researcher", organisation: "Presidency University, Bengaluru" },
  { role: "Startup Mentor & Scientific Committee Member", organisation: "Leading International Conferences" },
];

export const expertise = [
  {
    icon: "battery" as IconKey,
    title: "Battery Thermal Management",
    description:
      "Patented thermal architectures for high-density lithium-ion packs, engineered for electric mobility and aerospace applications.",
    tags: ["Thermal design", "Aerospace", "Li-ion safety"],
  },
  {
    icon: "pcm" as IconKey,
    title: "Nano-Enhanced PCMs",
    description:
      "Phase change materials engineered at the nanoscale to store and release thermal energy with greater density, longevity, and control.",
    tags: ["Energy storage", "Nanomaterials", "Phase change"],
  },
  {
    icon: "collaboration" as IconKey,
    title: "Research & Industry Collaboration",
    description:
      "Research proposal drafting, funded collaboration with government bodies and industry, translating laboratory insight into deployable systems.",
    tags: ["Proposals", "Technology transfer", "Industry 4.0"],
  },
  {
    icon: "mobility" as IconKey,
    title: "Green Mobility & Battery Recycling",
    description:
      "Cleaner transport and circular energy storage pathways for India and beyond, aligned with UN Sustainable Development Goal 7.",
    tags: ["UN SDG 7", "Battery recycling", "Clean energy"],
  },
];

export const tools = [
  {
    name: "Ansys Fluent",
    meta: "Thermal & fluid simulation",
    type: "Computational",
  },
  {
    name: "MATLAB Simulink",
    meta: "Modelling & system control",
    type: "Computational",
  },
  {
    name: "Material Characterization Facility",
    meta: "Sponsored by Ministry of Education, CeNSE, IISc Bangalore",
    type: "Experimental",
  },
  {
    name: "Nanofabrication (MOS Capacitor)",
    meta: "INUP, Centre for Nano Science and Engineering, IISc",
    type: "Experimental",
  },
];

export const affiliations = [
  "Presidency University, Bengaluru",
  "EJ Labs (Incubated at IISc Bangalore)",
  "Peak Amp Pvt. Ltd.",
  "EV Retron Energies India Pvt. Ltd.",
  "IIRS–ISRO Outreach Programme",
  "IISc Bangalore · CeNSE",
  "SAEINDIA Foundation",
  "Karnataka Science and Technology Academy (KSTA)",
  "IET Bangalore & Hyderabad Network",
  "HAL Management Academy",
  "Institution of Engineers (India)",
  "Savitribai Phule Pune University",
];

export const awardFilters = ["All", "National", "Innovation", "Teaching"] as const;
export type AwardFilter = (typeof awardFilters)[number];

export const awards: Award[] = [
  {
    id: "ur-rao",
    year: "2024",
    month: "February 2024",
    title: "Padma Vibhushan Prof. U.R. Rao Award for Innovation in Research",
    issuer: "Karnataka Science and Technology Academy (KSTA), Govt. of Karnataka",
    context: "National Science Day",
    description:
      "Awarded for pioneering research on advanced heat dissipation in lithium-ion batteries using nano-enhanced PCMs to strengthen the safety, efficiency, and longevity of modern energy storage.",
    categories: ["National", "Innovation"],
    icon: "award",
    featured: true,
    image: "/images/achievements/page10-ur-rao-ceremony.jpg",
  },
  {
    id: "venkataramani",
    year: "2024",
    month: "December 2024",
    title: "N. Venkataramani Award for Young Innovator",
    issuer: "SAEINDIA Foundation",
    context: "National Level · New Delhi",
    description:
      "Conferred nationally at the National Conference in New Delhi for exceptional contributions to green mobility, battery thermal management, and sustainable transport engineering.",
    categories: ["National", "Innovation"],
    icon: "medal",
    image: "/images/achievements/page5-saeindia-ceremony.jpg",
    plaqueImage: "/images/achievements/page5-saeindia-plaque.jpg",
    certificateImage: "/images/achievements/page5-saeindia-citation.jpg",
  },
  {
    id: "men-engineer",
    year: "2025",
    month: "March 2025",
    title: "Men Engineer of the Year Award",
    issuer: "The Institution of Engineering and Technology (IET)",
    context: "IET Achievement Awards 2025 · Bangalore & Hyderabad Network",
    description:
      "Presented in appreciation of exceptional dedication, excellence, and impactful contributions to engineering leadership, applied research, and industry-academia synergy.",
    categories: ["National"],
    icon: "trophy",
    image: "/images/achievements/page13-iet-ceremony.jpg",
    certificateImage: "/images/achievements/page13-iet-certificate.jpg",
  },
  {
    id: "sadhak",
    year: "2025",
    month: "2025",
    title: "SADHAK Award (Emerging Technology Finalist)",
    issuer: "HAL Management Academy, Ministry of Defence",
    context: "Annual Corporate Conclave 'SAADHANA'",
    description:
      "Received for excellence in emerging nanotechnology-based energy storage systems during the Industry Academia Conclave in Bangalore, Karnataka.",
    categories: ["National", "Innovation"],
    icon: "star",
    image: "/images/achievements/page12-hal-sadhana-ceremony.jpg",
    plaqueImage: "/images/achievements/page12-hal-sadhana-trophy.jpg",
  },
  {
    id: "best-teacher",
    year: "2020",
    month: "2020",
    title: "Best Teacher Award",
    issuer: "Institute of Scholars (InSc)",
    description:
      "Conferred for outstanding contributions to education, curriculum development, and student research mentorship.",
    categories: ["Teaching"],
    icon: "teacher",
  },
  {
    id: "aicte-fdp",
    year: "2019",
    month: "2019",
    title: "AICTE–FDP Excellence Award",
    issuer: "All India Council for Technical Education (AICTE)",
    description:
      "Recognised for excellence during the AICTE Faculty Development Programme, reflecting a rigorous, student-centered approach to teaching practice.",
    categories: ["Teaching"],
    icon: "excellence",
  },
];

export const patent = {
  title: "Hybrid Battery Thermal Management System",
  number: "542165",
  applicationNumber: "202341003561",
  dateOfFiling: "18/01/2023",
  granted: "19/06/2024",
  patentee: "Presidency University",
  term: "20 years from 18th January 2023",
  office: "The Patent Office, Government of India",
  domain: "Battery thermal management · Li-ion energy storage · Electric vehicles & Aerospace",
  description:
    "A patented hybrid cooling architecture for lithium-ion battery packs, combining thermal dissipation strategies to manage heat at cell level — enhancing safety, preventing thermal runaway, extending cycle life, and boosting confidence in high-performance electric vehicles and aerospace platforms.",
  coInventors: ["Dr. Devendra Singh Dandotiya", "Pallabi Kakati", "Anand K. Joshi"],
  tags: ["Battery thermal management", "Li-ion safety", "Hybrid cooling", "Presidency University"],
  image: "/images/thermal-research.jpg",
  certificateImage: "/images/achievements/page6-patent-certificate.jpg",
};

export const isroRecognition = {
  title: "Appreciation from ISRO Leadership & Scientists",
  year: "2024",
  summary:
    "Appreciation and blessings received directly from ISRO Chairman S. Somanath and senior ISRO scientists for pioneering research in battery thermal management and energy storage systems.",
  photos: [
    {
      src: "/images/achievements/page7-isro-somanath.jpg",
      title: "With ISRO Chairman S. Somanath",
      caption: "Receiving appreciation and blessings from ISRO Chairman S. Somanath for research in battery thermal management (2024).",
    },
    {
      src: "/images/achievements/page7-isro-scientist.jpg",
      title: "With Senior ISRO Scientist",
      caption: "Shaking hands and receiving felicitations from senior ISRO scientist holding certificate of appreciation (2024).",
    },
  ],
};

export const censeFacility = {
  title: "Sponsored Research & Nanofabrication at CeNSE, IISc Bangalore",
  year: "2022–2023",
  sponsor: "Ministry of Education (MoE), Govt. of India",
  summary:
    "Granted sponsored research facility for Material Characterization for Energy Storage Material from the Ministry of Education at CeNSE, Indian Institute of Science (IISc), Bangalore (2023). Completed the INUP Advanced Training Program in Nanofabrication and Characterization Techniques (MOS Capacitor / Nanoelectronics module).",
  photos: [
    {
      src: "/images/achievements/page4-cense-cleanroom.jpg",
      caption: "Cleanroom research team in protective gear at CeNSE, IISc Bangalore.",
    },
    {
      src: "/images/achievements/page4-cense-equipment.jpg",
      caption: "Material characterization and vacuum deposition laboratory facility at CeNSE IISc.",
    },
    {
      src: "/images/achievements/page4-cense-testbench.jpg",
      caption: "Lithium-ion battery testing bench and experimental instrumentation.",
    },
    {
      src: "/images/achievements/page4-cense-optics.jpg",
      caption: "Nanofabrication probe and optical characterization stage.",
    },
    {
      src: "/images/achievements/page4-cense-certificate.jpg",
      caption: "INUP Advanced Training Program Certificate from CeNSE, IISc Bangalore.",
    },
  ],
};

export type Presentation = {
  year: string;
  title: string;
  venue: string;
  conference: string;
  type: "Selected paper" | "Symposium" | "Invited speaker" | "Presentation";
  highlight: string;
  image?: string;
  certificateImage?: string;
};

export const presentations: Presentation[] = [
  {
    year: "2025",
    title: "Thermal Management in Energy Storage",
    conference: "International IEEE Space Conference (IEEE SPACE 2025)",
    venue: "Bengaluru",
    type: "Selected paper",
    highlight: "Paper selected for presentation",
    image: "/images/achievements/page9-ieee-space-presentation.jpg",
  },
  {
    year: "2023",
    title: "Energizing the Future of E-Mobility: Nano Composite Phase Change Materials for Enhanced BTMS Energy Storage",
    conference: "NANOScientific Symposium Asia",
    venue: "Indian Institute of Science (IISc), Bengaluru",
    type: "Symposium",
    highlight: "Selected & presented poster/paper",
    image: "/images/achievements/page8-nanoscientific-group.jpg",
    certificateImage: "/images/achievements/page8-nanoscientific-certificate.jpg",
  },
  {
    year: "2022",
    title: "BTMS for 18650 LIB Battery using fin and organic PCM for preheating",
    conference: "37th National Convention of Mechanical Engineers & National Seminar on Advances in Battery Technologies",
    venue: "The Institution of Engineers (India), Telangana State Centre, Hyderabad",
    type: "Invited speaker",
    highlight: "Invited technical talk & panelist",
    image: "/images/achievements/page11-iei-hyderabad-talk.jpg",
    certificateImage: "/images/achievements/page11-iei-hyderabad-certificate.jpg",
  },
  {
    year: "2020",
    title: "Gurukul Student Series — Heat Transfer Expert Session",
    conference: "IEEE Bangalore Section",
    venue: "Bengaluru",
    type: "Invited speaker",
    highlight: "Subject expert lecture on thermal systems",
  },
  {
    year: "2015–16",
    title: "Thermal Systems in Green Mobility & Engineering Innovations",
    conference: "India International Science Festival (IIT Delhi, 2015) & International Conference (ISB&M Pune, 2016)",
    venue: "IIT Delhi · ISB&M College of Engineering, Pune",
    type: "Presentation",
    highlight: "Two premier national forums",
  },
];

export const leadership = [
  {
    role: "Head of Department",
    unit: "Mechanical — Sandwich",
    meta: "Former position",
    description:
      "Held academic and administrative leadership for the Mechanical (Sandwich) department, shaping curriculum, faculty development, and building a stronger culture of research and industry partnerships.",
  },
  {
    role: "Institute Coordinator",
    unit: "IIRS–ISRO Outreach Programme",
    meta: "Academic leadership",
    description:
      "Coordinated the institute's outreach partnership with ISRO, connecting students and faculty with space science, geospatial applications, and national research opportunities.",
  },
  {
    role: "Subject Chairman",
    unit: "Savitribai Phule Pune University",
    meta: "University service",
    description:
      "Contributed to academic standards, subject curriculum direction, and university-level examination committees as subject chairman.",
  },
];

export const juryService = [
  {
    year: "2026",
    title: "Distinguished Research Scholar & Jury Member",
    detail: "PhD Colloquium 2026 · Office of Academic Research, Presidency University, Bangalore",
    image: "/images/achievements/page16-presidency-colloquium-felicitation.jpg",
    auditoriumImage: "/images/achievements/page16-presidency-colloquium-auditorium.jpg",
  },
  {
    year: "2025",
    title: "Jury Member — UG Student Paper Presentation & Project Exhibition",
    detail: "58th Engineers' Day Celebration · The Institution of Engineers (India), Karnataka State Centre",
    image: "/images/achievements/page14-iei-engineers-day-felicitation.jpg",
    judgingImage: "/images/achievements/page14-iei-engineers-day-judging.jpg",
  },
];

export const mentorship = {
  description:
    "Actively guides engineering students and researchers, organizing industrial visits and hands-on project mentorship to bridge classroom theory with world-class laboratory environments.",
  institutions: ["Atria University", "Presidency University", "Engineering Colleges"],
  centres: ["Indian Institute of Science (IISc)", "World Trade Centre Bangalore", "CeNSE Cleanroom Facilities"],
  photos: [
    {
      src: "/images/achievements/page15-atria-students.jpg",
      caption: "Mentoring engineering students from Atria University during field guidance (2025).",
    },
    {
      src: "/images/achievements/page15-atria-iisc-visit.jpg",
      caption: "Industry and research visit with students at the Indian Institute of Science, Bangalore (2025).",
    },
    {
      src: "/images/achievements/page15-atria-plant-visit.jpg",
      caption: "Technical visit to industrial chiller and heavy thermal machinery installations.",
    },
  ],
};

export const commitments = [
  {
    icon: "blood" as IconKey,
    title: "Blood donation drives",
    description: "Active participation and organization of campus and community blood donation drives supporting public health services.",
  },
  {
    icon: "tree" as IconKey,
    title: "Tree plantation campaigns",
    description: "Contributing to greener campuses, urban bio-diversity, and neighbourhood afforestation drives through sustained plantation initiatives.",
  },
  {
    icon: "energy" as IconKey,
    title: "Clean energy advocacy",
    description: "Advocating for sustainable battery recycling, eco-friendly transport, and responsible engineering in alignment with UN SDG 7.",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  year: string;
  category: "Awards" | "Research & Labs" | "ISRO & Conferences" | "Mentorship & Jury";
  image: string;
  badge?: string;
};

export const galleryCategories = [
  "All",
  "Awards",
  "Research & Labs",
  "ISRO & Conferences",
  "Mentorship & Jury",
] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: "isro-somanath",
    title: "Appreciation from ISRO Chairman S. Somanath",
    caption: "Dr. Anand K. Joshi receiving blessings and appreciation from ISRO Chairman S. Somanath for research in advanced battery thermal management.",
    year: "2024",
    category: "ISRO & Conferences",
    image: "/images/achievements/page7-isro-somanath.jpg",
    badge: "ISRO Leadership",
  },
  {
    id: "isro-senior-scientist",
    title: "Felicitation with Senior ISRO Scientist",
    caption: "Congratulated by senior ISRO scientist for contributions to thermal engineering and space energy storage applications.",
    year: "2024",
    category: "ISRO & Conferences",
    image: "/images/achievements/page7-isro-scientist.jpg",
    badge: "ISRO",
  },
  {
    id: "ksta-ur-rao-award",
    title: "Padma Vibhushan Prof. U.R. Rao Award Ceremony",
    caption: "Felicitation ceremony at KSTA Auditorium on National Science Day 2024, Dept. of Science & Technology, Govt. of Karnataka.",
    year: "2024",
    category: "Awards",
    image: "/images/achievements/page10-ur-rao-ceremony.jpg",
    badge: "KSTA Govt. of Karnataka",
  },
  {
    id: "ur-rao-testrig",
    title: "Experimental Li-ion Battery Rig & EV Test Bench",
    caption: "Experimental thermal management test bench with model EV car and instrumentation used for U.R. Rao Award-winning research.",
    year: "2024",
    category: "Research & Labs",
    image: "/images/achievements/page10-ur-rao-testrig.jpg",
    badge: "Experimental Lab",
  },
  {
    id: "saeindia-ceremony",
    title: "N. Venkataramani Award by SAEINDIA Foundation",
    caption: "Conferred the Young Innovator Award in Green Mobility on stage during the National Conference in New Delhi.",
    year: "2024",
    category: "Awards",
    image: "/images/achievements/page5-saeindia-ceremony.jpg",
    badge: "National Award",
  },
  {
    id: "saeindia-plaque",
    title: "SAEINDIA Foundation Young Innovator Trophy",
    caption: "Framed award plaque honoring Dr. Anand K. Joshi of Presidency University for contribution in Green Mobility.",
    year: "2024",
    category: "Awards",
    image: "/images/achievements/page5-saeindia-plaque.jpg",
    badge: "Green Mobility",
  },
  {
    id: "patent-certificate",
    title: "Government of India Patent Certificate No. 542165",
    caption: "Official patent certificate for 'A HYBRID BATTERY THERMAL MANAGEMENT SYSTEM' granted by The Patent Office, Government of India.",
    year: "2024",
    category: "Research & Labs",
    image: "/images/achievements/page6-patent-certificate.jpg",
    badge: "Patent Granted",
  },
  {
    id: "cense-cleanroom",
    title: "Nanofabrication Cleanroom at CeNSE, IISc Bangalore",
    caption: "Research team inside the CeNSE cleanroom working on material characterization for energy storage materials.",
    year: "2023",
    category: "Research & Labs",
    image: "/images/achievements/page4-cense-cleanroom.jpg",
    badge: "CeNSE IISc",
  },
  {
    id: "cense-equipment",
    title: "Sponsored Material Characterization Facility",
    caption: "Advanced vacuum and characterization facility sponsored by the Ministry of Education at CeNSE, IISc Bangalore.",
    year: "2023",
    category: "Research & Labs",
    image: "/images/achievements/page4-cense-equipment.jpg",
    badge: "MoE Facility",
  },
  {
    id: "hal-sadhak-ceremony",
    title: "HAL SAADHANA SADHAK Award Felicitation",
    caption: "Receiving the SADHAK Emerging Technology Finalist Award at HAL Management Academy, Ministry of Defence conclave.",
    year: "2025",
    category: "Awards",
    image: "/images/achievements/page12-hal-sadhana-ceremony.jpg",
    badge: "HAL Ministry of Defence",
  },
  {
    id: "hal-sadhak-trophy",
    title: "HAL SADHAK Emerging Technology Trophy",
    caption: "Memento from Hindustan Aeronautics Limited Management Academy: 'Innovate, Evolve & Transform: Building the Next Era'.",
    year: "2025",
    category: "Awards",
    image: "/images/achievements/page12-hal-sadhana-trophy.jpg",
    badge: "Defence Conclave",
  },
  {
    id: "iet-ceremony",
    title: "IET Men Engineer of the Year Award 2025",
    caption: "Felicitation on stage at the IET Achievement Awards 2025 by IET Bangalore and Hyderabad Network.",
    year: "2025",
    category: "Awards",
    image: "/images/achievements/page13-iet-ceremony.jpg",
    badge: "IET Award",
  },
  {
    id: "iet-podium",
    title: "IET Achievement Address representing EJ Labs & IISc",
    caption: "Dr. Joshi addressing delegates at IET Achievement Awards, highlighting EJ Labs Private Limited (incubated at IISc Bangalore).",
    year: "2025",
    category: "Awards",
    image: "/images/achievements/page13-iet-podium.jpg",
    badge: "Keynote Address",
  },
  {
    id: "ieee-space-presentation",
    title: "Presenting at International IEEE Space Conference 2025",
    caption: "Delivering technical presentation on 'Thermal Management in Energy Storage' at IEEE SPACE 2025 in Bengaluru.",
    year: "2025",
    category: "ISRO & Conferences",
    image: "/images/achievements/page9-ieee-space-presentation.jpg",
    badge: "IEEE SPACE 2025",
  },
  {
    id: "nanoscientific-group",
    title: "NANOScientific Symposium Asia at IISc Bangalore",
    caption: "Delegates assembled at the JN Tata statue, Indian Institute of Science, Bangalore for the 2023 symposium.",
    year: "2023",
    category: "ISRO & Conferences",
    image: "/images/achievements/page8-nanoscientific-group.jpg",
    badge: "IISc Bangalore",
  },
  {
    id: "iei-hyderabad-talk",
    title: "Invited Talk at 37th National Convention of Mechanical Engineers",
    caption: "Delivering lecture on 'BTMS for 18650 LIB Battery using fin and organic PCM' at IEI Telangana State Centre, Hyderabad.",
    year: "2022",
    category: "ISRO & Conferences",
    image: "/images/achievements/page11-iei-hyderabad-talk.jpg",
    badge: "IEI Hyderabad",
  },
  {
    id: "presidency-phd-colloquium",
    title: "Distinguished Research Scholar & Jury at PhD Colloquium 2026",
    caption: "Officially invited by Office of Academic Research, Presidency University Bangalore to evaluate doctoral research.",
    year: "2026",
    category: "Mentorship & Jury",
    image: "/images/achievements/page16-presidency-colloquium-felicitation.jpg",
    badge: "PhD Jury",
  },
  {
    id: "iei-58th-engineers-day",
    title: "Jury Felicitation at 58th Engineers Day Celebration",
    caption: "Receiving Sir M. Visvesvaraya memento from dignitaries at IEI Karnataka State Centre for judging UG project exhibitions.",
    year: "2025",
    category: "Mentorship & Jury",
    image: "/images/achievements/page14-iei-engineers-day-felicitation.jpg",
    badge: "Engineers Day Jury",
  },
  {
    id: "iei-judging-projects",
    title: "Evaluating Student Electric Vehicle & Tech Projects",
    caption: "Interacting with undergraduate engineering students and reviewing hardware prototypes at IEI Karnataka State Centre.",
    year: "2025",
    category: "Mentorship & Jury",
    image: "/images/achievements/page14-iei-engineers-day-judging.jpg",
    badge: "Project Evaluation",
  },
  {
    id: "atria-students-mentorship",
    title: "Project Guidance for Students from Atria University",
    caption: "Field mentoring and project guidance session with engineering students from Atria University.",
    year: "2025",
    category: "Mentorship & Jury",
    image: "/images/achievements/page15-atria-students.jpg",
    badge: "Atria University",
  },
  {
    id: "atria-iisc-visit",
    title: "Academic Visit to Indian Institute of Science (IISc)",
    caption: "Guiding students at the JN Tata Memorial, IISc Bangalore, connecting academic concepts with live research ecosystems.",
    year: "2025",
    category: "Mentorship & Jury",
    image: "/images/achievements/page15-atria-iisc-visit.jpg",
    badge: "IISc Visit",
  },
  {
    id: "atria-plant-visit",
    title: "Industrial Field Visit to World Trade Centre & Plant Facilities",
    caption: "Inspecting large-scale thermal plant machinery and chillers during student technical guidance tour in Bangalore.",
    year: "2025",
    category: "Mentorship & Jury",
    image: "/images/achievements/page15-atria-plant-visit.jpg",
    badge: "Industrial Tour",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "awards", label: "Awards" },
  { id: "research", label: "Research" },
  { id: "gallery", label: "Gallery" },
  { id: "leadership", label: "Leadership" },
  { id: "sustainability", label: "Sustainability" },
  { id: "contact", label: "Contact" },
];
