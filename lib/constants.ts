import {
  Code,
  Server,
  Database,
  Cloud,
  Github,
  Twitter,
  Linkedin,
  Mail,
  FileCode,
  Globe,
  Monitor,
  Terminal,
  PenTool,
  Cpu,
  Layers,
  GitBranch,
  Clock,
  UserIcon,
} from "lucide-react";

// Navigation Items
export const navigationItems = [
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Experience", path: "#experience" },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

// Social Links
export const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/ismail-la" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/MrLahbari" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ismail-lahbari/",
  },
  { name: "Email", icon: Mail, url: "mailto:lahbariismail@gmail.com" },
];

// Skills Data
export type SkillCategory = "frontend" | "backend" | "devops" | "tools";

export const skills = [
  // Frontend
  { name: "React", icon: Code, category: "frontend", level: 90 },
  { name: "Next.js", icon: Globe, category: "frontend", level: 85 },
  { name: "TypeScript", icon: FileCode, category: "frontend", level: 90 },
  { name: "shadcn/ui", icon: Layers, category: "frontend", level: 90 },
  { name: "Tailwind CSS", icon: PenTool, category: "frontend", level: 95 },
  { name: "JavaScript", icon: FileCode, category: "frontend", level: 95 },
  { name: "HTML/CSS", icon: Monitor, category: "frontend", level: 95 },
  { name: "Redux", icon: Layers, category: "frontend", level: 80 },
  { name: "Vue.js", icon: Code, category: "frontend", level: 75 },

  // Backend
  { name: "Node.js", icon: Server, category: "backend", level: 85 },
  { name: "Express.js", icon: Server, category: "backend", level: 85 },
  { name: "Python", icon: FileCode, category: "backend", level: 80 },
  { name: "Go", icon: FileCode, category: "backend", level: 75 },
  { name: "GraphQL", icon: Database, category: "backend", level: 80 },
  { name: "RESTful APIs", icon: Server, category: "backend", level: 90 },
  { name: "PostgreSQL", icon: Database, category: "backend", level: 85 },
  { name: "MongoDB", icon: Database, category: "backend", level: 80 },

  // DevOps
  { name: "Docker", icon: Cloud, category: "devops", level: 85 },
  { name: "Kubernetes", icon: Cloud, category: "devops", level: 75 },
  { name: "AWS", icon: Cloud, category: "devops", level: 80 },
  { name: "Vercel", icon: Cloud, category: "devops", level: 90 },
  { name: "Azure", icon: Cloud, category: "devops", level: 90 },
  { name: "CI/CD", icon: GitBranch, category: "devops", level: 85 },
  { name: "Terraform", icon: Cloud, category: "devops", level: 75 },
  { name: "GitHub Actions", icon: Github, category: "devops", level: 85 },
  { name: "Linux", icon: Terminal, category: "devops", level: 85 },
  { name: "Nginx", icon: Server, category: "devops", level: 80 },

  // Tools & Methods
  { name: "Git", icon: GitBranch, category: "tools", level: 95 },
  { name: "Agile", icon: Clock, category: "tools", level: 90 },
  { name: "Jest", icon: Terminal, category: "tools", level: 85 },
  { name: "Cypress", icon: Terminal, category: "tools", level: 80 },
  { name: "Storybook", icon: PenTool, category: "tools", level: 80 },
  { name: "Figma", icon: PenTool, category: "tools", level: 75 },
  { name: "VS Code", icon: Code, category: "tools", level: 95 },
  { name: "System Design", icon: Cpu, category: "tools", level: 85 },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, interactive portfolio with an integrated AI-powered chatbot, dynamic content, and responsive UI built built with Next.js, TypeScript, Tailwind CSS.",
    longDescription: `
    Built a fully responsive, SEO-optimized portfolio using Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. 
    Features include a floating AI chatbot assistant, animated project cards, timeline experience, and a contact form powered by Next.js API routes and SendGrid.
    Includes dark mode, sticky navigation, and is optimized for Vercel deployment.
  `,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React",
      "Framer Motion",
      "SendGrid",
      "Vercel",
      "AI Chatbot",
    ],
    features: [
      "Interactive AI chatbot assistant integrated via OpenAI API",
      "Dynamic sections: Home, Skills, Projects, About, Experience, Contact",
      "Animated project cards with live demos and GitHub links",
      "Experience timeline with roles and achievements",
      "About section with photo and social links",
      "Contact form (Next.js API + SendGrid)",
      "Deployed and optimized on Vercel",
      "Tailwind CSS with dark mode and responsive design",
      "SEO-friendly routing and performance optimization",
      "Dark mode, sticky navigation, SEO optimization",
    ],
    challenges:
      "Faced API quota limitations and resolved it by switching to OpenAI's free-tier API for chatbot functionality. Integrated it seamlessly using serverless Next.js API routes with error handling and fallback messaging.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://your-portfolio-url.com",
    repoUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description:
      "An interactive dashboard for tracking investments, expenses, and financial goals with data visualization.",
    longDescription:
      "Developed a comprehensive financial analytics platform that helps users track their investments, expenses, and savings goals. Features include interactive charts, real-time data updates, and personalized financial insights.",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    features: [
      "Real-time portfolio tracking and performance metrics",
      "Expense categorization and budget management",
      "Goal setting and progress visualization",
      "Custom date range reporting",
      "Data export and PDF generation",
    ],
    challenges:
      "Visualizing complex financial data in an intuitive way was particularly challenging. We implemented custom D3.js visualizations with interactive tooltips to make the data more accessible.",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://finance-example.com",
    repoUrl: "https://github.com/yourusername/finance-dashboard",
  },
  {
    id: 3,
    title: "DevOps Automation Suite",
    description:
      "A collection of tools for automating CI/CD pipelines, infrastructure provisioning, and monitoring.",
    longDescription:
      "Created a suite of DevOps tools that streamline the deployment process, from code commit to production. The solution includes automated testing, infrastructure provisioning, and comprehensive monitoring.",
    technologies: [
      "Go",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "One-click environment provisioning",
      "Automated CI/CD pipeline integration",
      "Infrastructure as Code templates",
      "Real-time monitoring and alerting",
      "Centralized logging and error tracking",
      "Cost optimization recommendations",
    ],
    challenges:
      "Balancing flexibility with ease of use was the main challenge. We solved this by creating a modular system where teams could adopt components incrementally.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://devops-example.com",
    repoUrl: "https://github.com/yourusername/devops-automation",
  },
  {
    id: 5,
    title: "Personal AI Assistant",
    description:
      "A sophisticated voice-controlled AI assistant with speech recognition, text-to-speech, and custom fine-tuned language models.",
    longDescription: `
    Developed a modular, voice-controlled AI assistant that combines offline speech recognition (Vosk), natural text-to-speech, and custom fine-tuned language models using LoRA adapters. 
    Features agent-based reasoning, a FastAPI backend, and is designed for extensibility and specialized knowledge.
  `,
    technologies: [
      "Python",
      "Vosk",
      "Transformers",
      "PEFT",
      "LoRA",
      "LangChain",
      "FastAPI",
      "SoundDevice",
      "SoundFile",
    ],
    features: [
      "Offline speech-to-text with Vosk",
      "Natural voice responses (text-to-speech)",
      "Custom language models with LoRA adapters",
      "Agent-based modular architecture",
      "FastAPI backend for high-performance APIs",
      "Audio processing with SoundDevice/SoundFile",
    ],
    image:
      "https://images.pexels.com/photos/16094042/pexels-photo-16094042/free-photo-of-man-working-with-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liveUrl: "", // Add if you have a live demo
    repoUrl: "https://github.com/ismail-la/Personal_AI_assistant",
  },
  {
    id: 6,
    title: "Hotel Booker",
    description:
      "A MERN-stack hotel booking prototype with reservations and an admin dashboard.",
    longDescription: `
    Hotel Booker is a full-stack web application for hotel bookings. Users can browse hotels, view room details, and make reservations. Admins manage hotels, rooms, and bookings via a dedicated dashboard. Features include authentication, booking system, and responsive design.
  `,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Vercel",
    ],
    features: [
      "User authentication and authorization",
      "Hotel and room management",
      "Booking system with date selection and guest details",
      "Admin dashboard for managing hotels, rooms, and bookings",
      "Responsive design for mobile and desktop",
    ],
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Example hotel image from Pexels
    liveUrl: "https://hotel-booker-five.vercel.app/",
    repoUrl: "https://github.com/ismail-la/Hotel-Booker",
  },
  {
    id: 7,
    title: "Simplified POS System",
    description:
      "A modern, containerized POS system using Node.js microservices, MongoDB, RabbitMQ, and Docker.",
    longDescription: `
    A containerized Point of Sale (POS) system built with microservices architecture. Features two independent services: order-service (creates orders, sends messages to RabbitMQ) and inventory-service (updates stock based on orders). Uses MongoDB for data storage and Docker Compose for orchestration.
  `,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Docker Compose",
    ],
    features: [
      "Order service for creating orders and sending messages to RabbitMQ",
      "Inventory service for processing orders and updating stock",
      "MongoDB for storing orders and inventory data",
      "RabbitMQ for decoupled service communication",
      "Fully containerized with Docker and Docker Compose",
    ],
    image:
      "https://images.pexels.com/photos/12935041/pexels-photo-12935041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liveUrl: "", // No live demo, leave empty
    repoUrl: "https://github.com/ismail-la/POS-App",
  },
];

// Experience data
export const experiences = [
  {
    company: "Valhko",
    position: "Full Stack & DevOps Engineer",
    location: "London Area, UK",
    startDate: "2024-10-01",
    endDate: null, // Present
    achievements: [
      "Led full-stack development of ARYA, an AI career platform (1,000+ users) with chatbot guidance, resume feedback, job boards, and personalized learning tools.",
      "Architected modular microservices (AI agent marketplace, feeds, notifications, analytics) using Django, FastAPI, PostgreSQL, and ChromaDB.",
      "Built responsive TypeScript-first UI in Next.js/React with Tailwind CSS, D3.js dashboards, and real-time updates.",
      "Integrated GPT-powered LLMs and RAG pipelines for job-fit scoring and skill-gap detection.",
      "Engineered subscription & referral system with Stripe, PayPal, and Paystack for automated checkout and token tracking.",
      "Containerized services with Docker for seamless deployment and microservice isolation.",
      "Deployed on Azure (App Services, AKS), automated infrastructure with Terraform and CI/CD (GitHub Actions, Azure DevOps).",
      "Enforced DevSecOps best practices and enhanced observability with Azure Monitor and Application Insights (99.9% uptime).",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "Docker",
      "Azure",
      "Terraform",
      "GitHub Actions",
      "Azure DevOps",
      "Stripe",
      "PayPal",
      "Paystack",
      "Tailwind CSS",
      "D3.js",
      "GPT",
    ],
  },
  {
    company: "ALX Africa",
    position: "Software Engineer",
    location: "Casablanca, Morocco",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
    achievements: [
      "Completed intensive, hands-on training in full-stack software engineering.",
      "Built and deployed full-stack web apps with Flask, React.js, and SQLAlchemy.",
      "Designed RESTful APIs and implemented CRUD operations using OOP principles.",
      "Set up servers, managed configurations, and implemented CI/CD pipelines.",
      "Automated server tasks with Python and shell scripting to streamline workflows.",
      "Collaborated in agile teams using Git/GitHub for version control and peer reviews.",
    ],
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL",
      "RESTful APIs",
      "CI/CD",
      "Shell Scripting",
      "Git",
      "GitHub",
      "ORM",
    ],
  },
  {
    company: "Upwork",
    position: "Freelance Full-Stack Developer",
    location: "Remote",
    startDate: "2022-01-01",
    endDate: null, // Present
    achievements: [
      "Developed and deployed custom web applications using Next.js, React, Node.js, and Django.",
      "Integrated APIs and cloud solutions (AWS, Azure) into client projects.",
      "Specialized in responsive design, SEO optimization, and workflow automation.",
      "Managed projects end-to-end, ensuring high client satisfaction and scalable solutions.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Django",
      "AWS",
      "Azure",
      "JavaScript",
      "TypeScript",
      "SEO",
      "Automation",
    ],
  },
  {
    company: "Mup Maroc",
    position: "IT Engineer",
    location: "Casablanca, Morocco",
    startDate: "2020-06-01",
    endDate: "2022-01-01",
    achievements: [
      "Installed, configured, and maintained Windows/Linux systems, servers, and networking equipment.",
      "Provided Level 1 & 2 technical support, resolving hardware, software, and network issues.",
      "Managed Active Directory, user access, Office 365 accounts, and VPN configurations.",
      "Deployed and monitored antivirus, backup, and disaster recovery solutions.",
      "Performed system updates, troubleshooting, and preventive maintenance to minimize downtime.",
      "Supported IT initiatives including network upgrades, migrations, and asset management.",
    ],
    technologies: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "Office 365",
      "VPN",
      "Firewalls",
      "Cisco",
      "TP-Link",
      "Remote Desktop",
      "Backup Systems",
    ],
  },
];

// Bio details
export const bioDetails = {
  image: "/photo.png",
  paragraphs: [
    "Hi, I'm a Full-Stack & DevOps Engineer with over 5 years of experience building high-performance, scalable applications. I specialize in modern web development and cloud infrastructure, with a passion for creating elegant solutions to complex problems.",
    "My journey in tech began with a Computer Science degree, followed by roles at both startups and established enterprises. This diverse experience has given me a unique perspective on building software that meets real business needs while maintaining technical excellence.",
    "When I'm not coding, I contribute to open-source projects, write technical articles, and mentor aspiring developers. I believe in continuous learning and staying at the forefront of technology trends.",
  ],
};
