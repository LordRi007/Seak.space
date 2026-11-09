export const personalInfo = {
  name: "Sath Chhunseak",
  shortName: "Chhunseak",
  codeName: "<CHHUNSEAK />",
  role: "Full Stack Web Developer",
  subtitles: [
    "Software Engineering Student (Year 4)",
    "React & Laravel Full-Stack Developer",
    "POS Systems & KHQR Payment Specialist",
    "Database & API Architecture Builder"
  ],
  bio: "Motivated Year 4 Software Engineering student based in Phnom Penh, Cambodia. Specializing in high-performance web applications, retail POS architectures, and NBC Bakong KHQR payment integrations. Combining real-world store operations experience from 7-Eleven with robust software engineering practices.",
  aboutExtended: [
    "I am currently completing my Bachelor of Software Engineering at BELTEI International University. I am deeply passionate about translating complex real-world operational challenges into sleek, resilient web platforms.",
    "Having hands-on operational experience at 7-Eleven Mart, I understand retail cashier workflows, daily inventory auditing, receipt generation, and customer checkout psychology from the ground up. This unique perspective allows me to engineer Point of Sale systems that cashiers and business owners actually love to use."
  ],
  location: "Street 2011, SenSok, Phnom Penh, Cambodia",
  email: "satchhunseak123@gmail.com",
  phone: "0964467870",
  availability: "Available for Software Engineering Internship & Projects",
  socials: {
    github: "https://github.com/LordRi007",
    telegram: "https://t.me/ChhunSeak123",
    facebook: "https://www.facebook.com/share/1DAccWr34A/?mibextid=wwXIfr"
  },
  stats: [
    { value: "4th", label: "Year BSE Student", sub: "BELTEI University" },
    { value: "2+", label: "Deployed POS Systems", sub: "Production tested" },
    { value: "8+", label: "Core Frameworks & DBs", sub: "React, Laravel, MySQL" },
    { value: "25+", label: "GitHub Repositories", sub: "Active contributor" }
  ]
};

export const projectsData = [
  {
    id: "aurapos",
    title: "AuraPOS System with KHQR Payment",
    category: "pos",
    categoryName: "POS & Fintech",
    badge: "Featured Production System",
    description: "A high-performance Point of Sale (POS) system engineered for high-volume retail. Features real-time stock limits, dynamic NBC Bakong KHQR payment generation with asynchronous MD5 hash polling, interactive SVG analytics, and cashier target planners.",
    detailedDescription: "AuraPOS is designed to eliminate payment reconciliation headaches in Cambodian businesses. Integrating directly with the National Bank of Cambodia's Bakong KHQR standard, it generates dynamic merchant QR codes on demand, listens for payment confirmation via cryptographic MD5 status polling, and instantly updates stock records with zero checkout delay.",
    image: "/assets/pos-preview.png",
    demoUrl: "https://aurapos.store",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Vite", "NBC Bakong KHQR", "REST API"],
    highlights: [
      "Dynamic KHQR generation adhering to EMVCo & Bakong specifications",
      "Asynchronous payment verification with instant cashier audio/visual prompt",
      "Real-time inventory deduction preventing stock overselling",
      "Interactive analytics & hourly cashier sales metrics"
    ]
  },
  {
    id: "smartpos-cafe",
    title: "SmartPOS Cafe & Inventory Management",
    category: "pos",
    categoryName: "POS & Retail",
    badge: "Live Cafe Architecture",
    description: "Specialized Cafe POS and inventory management suite with an interactive monthly Sales Calendar tracking real-time performance against revenue targets, alongside granular Role-Based Access Control (RBAC).",
    detailedDescription: "Built specifically for beverage and cafe workflows, SmartPOS Cafe features order customization (sweetness, ice, toppings), split bill processing, automated shift handovers, and role-based permissions separating Cashier, Shift Supervisor, and Store Owner access.",
    image: "/assets/poscafe-preview.png",
    demoUrl: "https://www.poscafe.online/",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["Laravel", "REST API", "MySQL", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Visual sales calendar tracking revenue vs daily targets",
      "Multi-tier RBAC for Managers, Assistants, and Cashiers",
      "Live order queuing and kitchen prep notification system",
      "Detailed ingredient-level inventory tracking"
    ]
  },
  {
    id: "dashboard-analytics",
    title: "Enterprise Sales & Inventory Dashboard",
    category: "fullstack",
    categoryName: "Enterprise & BI",
    badge: "Analytics Suite",
    description: "Executive analytics dashboard delivering live transaction telemetry, revenue growth forecasts, inventory velocity heatmaps, and automated PDF export reports.",
    detailedDescription: "Provides store owners and enterprise stakeholders with panoramic visibility into their operational health. Features customizable widget layouts, interactive timeline charts, top-moving SKU rankings, and automated anomaly alerts for sudden inventory drops.",
    image: "/assets/dashboard-preview.png",
    demoUrl: "https://aurapos.store",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["React", "Chart.js", "Tailwind CSS", "REST API", "Vite"],
    highlights: [
      "Interactive revenue distribution & velocity tracking",
      "Live order feed with instant visual status tags",
      "Automated low-stock threshold triggers & warnings",
      "Exportable financial summaries in CSV and printable format"
    ]
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Storefront",
    category: "web",
    categoryName: "Web Applications",
    badge: "Responsive Web",
    description: "High-speed modern e-commerce storefront with intuitive product discovery, fast client-side filtering, animated cart drawer, and seamless responsive design.",
    detailedDescription: "Designed for silky smooth shopping experiences. Packed with micro-interactions, optimistic UI updates during cart addition, and modular architecture ready to plug into Laravel or Node e-commerce backends.",
    image: "/assets/ecommerce-preview.png",
    demoUrl: "https://www.seak.space",
    githubUrl: "https://github.com/LordRi007",
    techStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "CSS3 Animations"],
    highlights: [
      "Instant client-side multi-filter and category sorting",
      "Optimistic UI updates for seamless cart interactions",
      "Mobile-first responsive drawer and payment checkout modal",
      "Lighthouse 95+ performance optimization"
    ]
  }
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: 90, tag: "Primary UI Framework", icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 88, tag: "Modern Syntax & Async", icon: "FileCode" },
    { name: "Tailwind CSS", level: 92, tag: "Rapid Modern Styling", icon: "Palette" },
    { name: "HTML5 / CSS3", level: 95, tag: "Semantic & Responsive", icon: "Layout" },
    { name: "Bootstrap", level: 85, tag: "Responsive Components", icon: "Grid" }
  ],
  backend: [
    { name: "Laravel (PHP)", level: 90, tag: "Primary Backend Engine", icon: "Server" },
    { name: "PHP", level: 88, tag: "OOP & MVC Patterns", icon: "FileCode2" },
    { name: "Spring Boot (Java)", level: 75, tag: "Enterprise Backend", icon: "Cpu" },
    { name: "RESTful API Design", level: 90, tag: "Secure Endpoints & Auth", icon: "Globe" },
    { name: "Python", level: 70, tag: "Scripting & Automation", icon: "Terminal" }
  ],
  databases: [
    { name: "MySQL", level: 88, tag: "Relational Queries & Indexing", icon: "Database" },
    { name: "SQL Server", level: 82, tag: "Stored Procedures & Views", icon: "Database" },
    { name: "Oracle DB", level: 78, tag: "Enterprise Architecture", icon: "Layers" }
  ],
  fintechTools: [
    { name: "NBC Bakong KHQR", level: 95, tag: "Cambodia National QR Standard", icon: "QrCode" },
    { name: "MD5 Status Polling", level: 92, tag: "Asynchronous Payment Auth", icon: "ShieldCheck" },
    { name: "Git & GitHub", level: 88, tag: "Branching & CI/CD", icon: "GitBranch" },
    { name: "VS Code / IntelliJ", level: 92, tag: "Development Environment", icon: "Laptop" },
    { name: "Linux / Windows", level: 85, tag: "System Administration", icon: "HardDrive" }
  ]
};

export const experienceData = [
  {
    period: "2025 - Present",
    role: "Store Staff & POS Cashier Specialist",
    company: "7-Eleven Mart",
    location: "Phnom Penh, Cambodia",
    badge: "Retail Operations",
    description: "Frontline retail operations and hands-on experience with modern retail POS workflows, transaction balancing, inventory replenishment, and customer interactions.",
    keyPoints: [
      "Operated real-time POS checkout software processing hundreds of daily customer transactions.",
      "Identified real cashier pain-points to architect faster, error-free checkout flows for AuraPOS.",
      "Audited inventory intake, stock counts, expiry tracking, and store merchandising.",
      "Trained new cashiers on system error recovery and checkout procedures."
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
    description: "Rigorous 4-year curriculum covering end-to-end software engineering principles, system analysis, distributed databases, web frameworks, and application security.",
    courses: [
      "Database Systems Architecture",
      "Software Engineering & Agile",
      "Advanced Web Development",
      "Mobile Application Development",
      "System Analysis & System Design",
      "Network Engineering & Security"
    ]
  },
  {
    period: "2019 - 2023",
    degree: "High School Graduation Diploma",
    institution: "BELTEI International School",
    location: "Phnom Penh, Cambodia",
    badge: "Graduated",
    description: "Comprehensive secondary education with strong emphasis on mathematics, computer science fundamentals, and English communication."
  },
  {
    period: "2017 - 2019",
    degree: "Secondary School Graduation",
    institution: "BELTEI International School",
    location: "Phnom Penh, Cambodia",
    badge: "Graduated",
    description: "Foundational academic training with early passion for software, technology, and hardware systems."
  }
];

export const servicesData = [
  {
    icon: "Layers",
    title: "Full-Stack Web Engineering",
    description: "End-to-end application development pairing responsive React client interfaces with robust Laravel backends, strict database modeling, and performant REST APIs.",
    tech: ["React.js", "Laravel", "MySQL", "REST APIs"]
  },
  {
    icon: "QrCode",
    title: "POS & KHQR Payment Integration",
    description: "Specialized engineering of retail Point of Sale systems and seamless Cambodian NBC Bakong KHQR dynamic payment gateways with real-time verification.",
    tech: ["Bakong API", "MD5 Polling", "Thermal Printing", "Cashier RBAC"]
  },
  {
    icon: "LayoutDashboard",
    title: "Sleek UI/UX & Responsive Web",
    description: "Crafting fluid, high-conversion web interfaces with modern animations, glassmorphism aesthetics, dark mode themes, and sub-second load times.",
    tech: ["Tailwind CSS", "Vite", "Responsive Design", "Micro-animations"]
  },
  {
    icon: "Database",
    title: "Database Architecture & Optimization",
    description: "Designing normalized schemas, complex indexing, stored procedures, and audit logs across MySQL, SQL Server, and Oracle databases.",
    tech: ["MySQL", "SQL Server", "Oracle", "Schema Design"]
  }
];

// Interactive KHQR Simulator products
export const simulatorProducts = [
  { id: 1, name: "Iced Cafe Latte", price: 2.50, category: "Beverage", icon: "☕" },
  { id: 2, name: "Matcha Croissant", price: 1.75, category: "Bakery", icon: "🥐" },
  { id: 3, name: "Dev Turbo Sticker Pack", price: 3.00, category: "Merch", icon: "⚡" },
  { id: 4, name: "AuraPOS Pro License", price: 12.00, category: "Software", icon: "💻" }
];
