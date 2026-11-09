export const personalInfo = {
  name: "Sath Chhunseak",
  shortName: "Chhunseak",
  codeName: "<CHHUNSEAK />",
  role: "Full Stack Web Developer",
  subtitles: [
    "Full-Stack Web Developer",
    "React & Laravel Specialist",
    "POS Systems & KHQR Integration",
    "Software Engineering Student (Year 4)"
  ],
  bio: "Year 4 Software Engineering student based in Phnom Penh, Cambodia. Specializing in responsive React web applications, robust Laravel backends, and retail POS systems with NBC Bakong KHQR integrations.",
  aboutExtended: [
    "I am completing my Bachelor of Software Engineering at BELTEI International University. I focus on translating real-world operational challenges into clean, resilient web software.",
    "With practical store experience at 7-Eleven Mart, I understand retail cashier workflows, daily inventory auditing, and checkout speed firsthand, allowing me to engineer POS applications that are fast, intuitive, and error-free."
  ],
  location: "Street 2011, SenSok, Phnom Penh, Cambodia",
  email: "satchhunseak123@gmail.com",
  phone: "0964467870",
  availability: "Available for IT Internship & Web Projects",
  socials: {
    github: "https://github.com/LordRi007",
    telegram: "https://t.me/ChhunSeak123",
    facebook: "https://www.facebook.com/share/1DAccWr34A/?mibextid=wwXIfr"
  },
  stats: [
    { value: "Year 4", label: "Software Engineering", sub: "BELTEI International Univ." },
    { value: "2", label: "Deployed POS Systems", sub: "Production tested" },
    { value: "10+", label: "Frameworks & Tools", sub: "React, Laravel, MySQL" },
    { value: "25+", label: "GitHub Repositories", sub: "Active projects" }
  ]
};

export const projectsData = [
  {
    id: "aurapos",
    title: "AuraPOS System with KHQR Payment",
    badge: "Featured Production System",
    description: "A high-performance Point of Sale (POS) system engineered for high-volume retail. Features real-time stock limits, dynamic NBC Bakong KHQR payment generation with asynchronous MD5 hash polling, interactive analytics, and cashier target planners.",
    image: "/assets/pos-preview.png",
    demoUrl: "https://aurapos.store",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Vite", "NBC Bakong KHQR"],
    highlights: [
      "Dynamic KHQR generation adhering to EMVCo & Bakong specifications",
      "Asynchronous payment verification with instant cashier confirmation",
      "Real-time inventory deduction preventing stock overselling",
      "Interactive analytics & hourly cashier sales metrics"
    ]
  },
  {
    id: "smartpos-cafe",
    title: "SmartPOS Cafe & Inventory Management",
    badge: "Live Cafe Architecture",
    description: "Specialized Cafe POS and inventory management suite with an interactive monthly Sales Calendar tracking real-time performance against revenue targets, alongside granular Role-Based Access Control (RBAC).",
    image: "/assets/poscafe-preview.png",
    demoUrl: "https://www.poscafe.online/",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["Laravel", "REST API", "MySQL", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Visual sales calendar tracking revenue vs daily targets",
      "Multi-tier RBAC for Managers, Assistants, and Cashiers",
      "Live order queuing and kitchen prep notification system",
      "Ingredient-level inventory and recipe management"
    ]
  }
];

export const skillsCategories = [
  {
    category: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Bootstrap"]
  },
  {
    category: "Backend & APIs",
    skills: ["Laravel (PHP)", "PHP", "Spring Boot (Java)", "RESTful APIs", "Python"]
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "SQL Server", "Oracle Database", "Database Schema Design"]
  },
  {
    category: "Fintech & Ecosystem",
    skills: ["NBC Bakong KHQR", "MD5 Status Polling", "Git & GitHub", "VS Code", "Vite"]
  }
];

export const experienceData = [
  {
    period: "2025 - Present",
    role: "Store Staff & POS Cashier Specialist",
    company: "7-Eleven Mart",
    location: "Phnom Penh, Cambodia",
    badge: "Retail Operations",
    description: "Frontline retail cashier operations, POS transactions, inventory replenishment, and customer checkout handling in high-traffic store shifts.",
    keyPoints: [
      "Operated real-time POS checkout software handling hundreds of daily customer transactions.",
      "Identified cashier friction points to design faster, simpler checkout workflows in AuraPOS.",
      "Audited inventory intake, stock counts, expiry tracking, and store displays."
    ]
  }
];

export const educationData = [
  {
    period: "2023 - Present (Year 4)",
    degree: "Bachelor of Software Engineering (BSE)",
    institution: "BELTEI International University",
    location: "Phnom Penh, Cambodia",
    badge: "Current Degree",
    description: "Comprehensive software engineering program focused on software architecture, database management, web systems, and project development.",
    courses: [
      "Database Systems",
      "Software Engineering",
      "Advanced Web Development",
      "Mobile App Development",
      "System Analysis & Design"
    ]
  },
  {
    period: "2019 - 2023",
    degree: "High School Graduation Diploma",
    institution: "BELTEI International School",
    location: "Phnom Penh, Cambodia",
    badge: "Graduated",
    description: "High school education with foundation in science, mathematics, computer basics, and English."
  }
];

export const servicesData = [
  {
    icon: "Layers",
    title: "Full-Stack Web Development",
    description: "Building fast, reliable web applications connecting modular React user interfaces to scalable Laravel or Node backends with clean database schemas.",
    tech: ["React.js", "Laravel", "MySQL", "REST APIs"]
  },
  {
    icon: "QrCode",
    title: "POS & KHQR Payment Integration",
    description: "Specialized retail Point of Sale systems and seamless Cambodian NBC Bakong KHQR dynamic payment gateways with real-time verification.",
    tech: ["Bakong API", "MD5 Polling", "Thermal Printing", "RBAC"]
  },
  {
    icon: "LayoutDashboard",
    title: "Clean UI/UX & Responsive Design",
    description: "Modern, minimalist interfaces with fluid responsive layouts, dark themes, and smooth micro-interactions optimized for performance.",
    tech: ["Tailwind CSS", "Vite", "Responsive Design"]
  }
];
