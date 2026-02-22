import {
  Lightbulb,
  Star,
  Zap,
  TrendingUp,
  ShoppingBag,
  Code2,
} from "lucide-react";
import type { ResumeData } from "@/types/resume";

export const portfolioData = {
  name: "Joan Louji",
  title: "I build systems that think, scale, and evolve.",
  subTitle:
    "I engineer intelligent, end to end systems built for scale and real-world complexity. I focus on clean architecture, reliable data foundations, and AI that works in production.",
  logo: "/images/logo.svg",
  sections: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Works", href: "#works" },
    { name: "Posts", href: "#posts" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    name: "Joan Louji",
    description: [
      "I’m a software engineer who enjoys solving real-world problems through thoughtful system design. Over the years, I’ve primarily worked in logistics and supply chain products, building systems that manage complex workflows, pricing logic, auditing, and large-scale data processing pipelines.",
      "At Quaking Aspen (Freehand), I focus on designing and building production-grade systems across the stack. My current work involves architecting scalable “agent-based” systems that can operate independently, whether for auditing, routing, costing, or other evolving business logic. I enjoy thinking through architectural decisions and building systems that are not just functional, but reliable and adaptable as requirements change.",
      "Before this, I spent over five years at Quaking Aspen (Pando), where I grew from an intern to Software Engineer 2. During that time, I helped migrate core products to a microservices architecture, built authentication and encryption systems to improve security, and optimized workflows that handled billions of requests. I also contributed across frontend, mobile, and cloud infrastructure. Pando taught me how real production systems behave and how to build them properly so they scale and remain calm under pressure.",
      "I enjoy working across the stack (backend APIs, frontend interfaces, mobile applications, and cloud infrastructure (AWS)). Recently, I’ve been exploring AI and LLM-based systems, with a vision of building scalable AI “teams” that can independently handle tasks like reconciliation, auditing, and costing, almost like intelligent digital assistants that can be depended upon.",
      "I graduated from Loyola ICAM College of Engineering and Technology (LICET) in 2020 with a degree in Information Technology. During college, I began my technical career with Android and iOS development, worked on freelance projects, and contributed to open-source communities.",
      "Outside of engineering, I enjoy writing about technology, playing musical instruments, and playing football and tennis. I love to learn continuously and explore new solutions to problems I face in real-world.",
    ],
    links: [
      {
        color: "bg-green-600",
        title: "GitHub - sjlouji",
        subtitle: "Explore my open-source projects.",
        url: "https://github.com/sjlouji/",
        logo: "/images/github.svg",
      },
      {
        color: "bg-black",
        title: "Medium - sjlouji10",
        subtitle: "Read my articles on software engineering.",
        url: "https://medium.com/@sjlouji10",
        logo: "/images/medium.png",
      },
      {
        color: "bg-blue-600",
        title: "Resume",
        subtitle: "View my professional resume and experience.",
        remoteMethod: true,
        path: "https://dc11xw9icyve3cit.public.blob.vercel-storage.com/resume/Joan_Louji-keik63SPYzRkKExGyTsDQEq4Ox3GkQ.pdf",
        logo: "/images/cv.png",
      },
    ],
    skillsDescription: "Skills I'm familiar with and my interests",
    skills: [
      { name: "JavaScript", logo: "/images/js.png" },
      { name: "TypeScript", logo: "/images/typescript.png" },
      { name: "React", logo: "/images/react.png" },
      { name: "Node.js", logo: "/images/node-js.png" },
      { name: "Embedding Models", logo: "" },
      { name: "Generative AI", logo: "" },
      { name: "LLM-based Systems", logo: "" },
      { name: "AI Agents", logo: "" },
      { name: "Java", logo: "/images/java.png" },
      { name: "Python", logo: "/images/python.png" },
      { name: "Flutter", logo: "/images/icons8-flutter-480.png" },
      {
        name: "Nginx",
        logo: "/images/nginx.png",
      },
      { name: "Redis", logo: "/images/icons8-redis-480.png" },
      { name: "Postgres", logo: "/images/icons8-postgres-480.png" },
      { name: "MongoDB", logo: "/images/icons8-mongodb-480.png" },
      { name: "Docker", logo: "/images/docker.png" },
      { name: "Git", logo: "/images/social.png" },
      { name: "LangChain", logo: "/images/langchain.png" },
      { name: "AWS", logo: "/images/icons8-aws-logo-480.png" },
      { name: "Blogging", logo: "/images/medium.png" },
    ],
  },
  experience: [
    {
      period: "Jan 2026 — Present",
      role: "Software Engineer 2",
      company: "Freehand",
      companyUrl: "https://www.linkedin.com/company/freehand",
      companyLogo: "/brands/freehand-logo.svg",
      organization: "Quaking Aspen Pvt Ltd",
      description:
        "Part of the Autonomous Supply Chain team, building GenAI driven logistics systems from rate card extractions to complex rate costing logics with a focus on designing intelligent agent team that adapt to frequently evolving business logic.",
      tags: [
        "Generative AI",
        "Document Intelligence",
        "Embedding Models",
        "AI Agents",
        "TypeScript",
        "Node.js",
        "Python",
        "AWS",
      ],
      highlights: [
        "Developing GenAI-driven solutions for logistics finance, Gen AI based costing logic generation, OCR-based rate card extraction, and document intelligence. Building reliable pipelines that convert raw contracts and pricing documents into structured, audit-ready data.",
        "Designing and integrating AI models for costing logic formula generation and document processing, handling everything from model evaluation to end-to-end system design. Continuously improving system clarity, reducing technical debt, and Solutioning financial logic to remain accurate & traceable.",
        "Contributing to a complex agent-based system, designed to scale and handle billions of shipments, contracts, and pricing documents with precision.",
      ],
    },
    {
      period: "Feb 2025 — Jan 2026",
      role: "Software Engineer 2",
      company: "Pando",
      companyUrl: "https://www.pando.ai",
      companyLogo: "/brands/pando-logo.webp.png",
      organization: "Quaking Aspen Pvt Ltd",
      description:
        "Continued ownership of critical modules and mentoring. Drove technical decisions and collaborated with cross-functional teams on the Cost Engine and Rate Management systems.",
      highlights: [
        "Led Sprint Team Delivery: Managed and mentored a sprint team, driving planning, execution, and delivery of high-impact logistics finance features.",
        "Architected Next-Generation Cost Engine: Designed and built the next version of the Cost Engine from scratch, improving scalability.",
        "Financial Workflow Optimization: Improved costing accuracy, reconciliation logic, and system performance for high-volume shipment processing.",
        "Rate Card Rule-Based Extraction: Designed and implemented rule-based rate card extraction pipelines to transform complex contract documents into structured pricing data.",
        "Mentorship & Engineering Standards: Mentored junior engineers, conducted design reviews, and maintained high code quality through structured reviews.",
      ],
      tags: [
        "TypeScript",
        "Microservices",
        "AWS",
        "Node.js",
        "Vue 3",
        "Python",
        "Java",
      ],
    },
    {
      period: "May 2023 — Feb 2025",
      role: "Software Engineer 1",
      company: "Pando",
      companyUrl: "https://www.pando.ai",
      companyLogo: "/brands/pando-2020.jpg",
      organization: "Quaking Aspen Pvt Ltd",
      description:
        "Played a key role in modernizing and scaling the logistics costing platform from migrating to microservices and upgrading the frontend, strengthening security, optimizing high-volume data pipelines, and mentoring engineers through code reviews and hiring.",
      highlights: [
        "Migrated to Microservice Architecture: Successfully transformed the Cost Engine and Rate Management monolithic product into a microservice architecture, improving scalability and maintainability.",
        "Upgraded Frontend to Vue 3: Successfully migrated the Costing Engine and Rate management frontend from Vue 2 to Vue 3, improving performance and leveraging new features.",
        "Strengthened Security: Implemented data encryption to secure incoming data, enhancing the overall security of Pando's systems.",
        "Optimized High-Volume Data Pipelines: Created and optimized data pipelines and AWS Lambda functions to handle billions of requests efficiently.",
        "Mentored Engineers: Regular code reviews and participated in the hiring process by conducting initial and second-round technical interviews.",
      ],
      tags: [
        "Vue 3",
        "Microservices",
        "Node.js",
        "AWS Lambda",
        "Storybook",
        "GraphQL",
      ],
    },
    {
      period: "Feb 2021 — May 2023",
      role: "Associate Software Engineer",
      company: "Pando",
      companyUrl: "https://www.pando.ai",
      companyLogo: "/brands/pando-2020.jpg",
      organization: "Quaking Aspen Pvt Ltd",
      description:
        "Worked across multiple logistics teams, integrating TMS with external systems, building warehouse APIs, enabling real-time data synchronization across integration pipelines, and supporting the transition to Flutter while contributing to hiring and team development.",
      highlights: [
        "Integrated TMS with external software, including packing solutions, warehouse management software, dangerous goods solutions, and document service.",
        "Created the entire API Service using Node.js and Express JS, and integrated it with the client's Informatica service.",
        "Implemented WebSockets and polling techniques for live data transfer when transporter bid for a shipment.",
        "Worked on optimization algorithms and Visualization of packing optimization using D3.js",
        "Migrated a native Android app to Flutter, participating in recruitment, conducting initial interviews for Flutter developers.",
      ],
      tags: ["Node.js", "Express", "Vue.js", "Flutter", "WebSockets", "D3.js"],
    },
    {
      period: "Dec 2020 — Feb 2021",
      role: "Software Development Intern",
      company: "Pando",
      companyUrl: "https://www.pando.ai",
      companyLogo: "/brands/pando-2020.jpg",
      organization: "Quaking Aspen Pvt Ltd",
      description:
        "Developed a new service that acted as an intermediary between third-party carriers and Pando for shipment bookings, edits, cancellations, and tracking.",
      highlights: [
        "Developed a new intermediary service that enabled shipment bookings, edits, cancellations, and tracking between 4 third-party US-based carriers and Pando.",
        "Studied and integrated documentation from four major US carriers to ensure seamless integration with Pando's TMS software.",
        "Worked extensively with Node.js, Vue.js, MongoDB, worker threads, Docker, AWS EC2, and S3.",
        "Architected applications and participated in client meetings to help triage and resolve issues.",
      ],
      tags: ["Node.js", "Vue.js", "MongoDB", "Docker", "AWS"],
    },
  ],
  works: [
    {
      date: "October 2025",
      title: "Level Up",
      description:
        "Level Up is a modern game hub I built to bring classic web games together in one clean, responsive experience. It’s designed to feel smooth, simple, and fun — with thoughtful UI, subtle animations, and a structure that makes it easy to expand over time. The goal wasn’t just to recreate old games, but to rebuild them properly using a scalable architecture with Next.js, React, TypeScript, and Tailwind CSS. Each game is built with attention to performance, state management, and user experience.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://gcade.vercel.app",
      "data-ai-hint": "level up game hub",
    },
    {
      date: "June 2025",
      title: "Joan Louji's Portfolio Website",
      description:
        "This is my personal website, a place where I share who I am, what I’ve built, and what I’m currently working on. It includes an introduction, my experience, selected projects, blog posts from Medium, and a simple way to get in touch. I built it with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion, focusing on clean structure, smooth interactions, and long-term maintainability. The idea was to keep the design minimal while making the architecture easy to extend and update.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://joanlouji.vercel.app",
      "data-ai-hint": "portfolio website",
    },
    {
      date: "August 2024",
      title: "GL Code Matching Algorithms",
      description:
        "This project explores different algorithmic approaches to solving a practical finance problem of matching the correct General Ledger (GL) code based on shipment data. The goal was to compare multiple strategies for determining the best GL code match. Instead of relying on a single approach, I implemented three different algorithms to understand their trade-offs and behavior under different conditions.",
      tags: [
        "Node JS",
        "Algorithms",
        "Data Structures",
        "Performance Optimization",
      ],
      link: "https://github.com/sjlouji/gl-code-matching-algorithms",
      "data-ai-hint": "gl code matching algorithms",
    },
    {
      date: "November 2023",
      title: "Auth & Identity Service",
      description:
        "This project is a full-featured authentication and identity service built to provide secure access across applications. It supports Single Sign-On (SSO) and also acts as a SAML Service Provider (SP), enabling seamless integration with external identity providers. The goal of this system is to centralize authentication, simplify account management, and provide a scalable identity layer that multiple applications can rely on.",
      tags: [
        "Node JS",
        "React",
        "TypeScript",
        "SSO",
        "SAML",
        "Authentication",
        "Identity",
      ],
      link: "https://github.com/sjlouji/identity-service",
      "data-ai-hint": "auth & identity service",
    },
    {
      date: "September 2020",
      title: "Flutter Clones & UI Collection",
      description:
        "This repository is a collection of Flutter projects where I recreated popular applications and built custom UI designs to strengthen my understanding of mobile app development. The goal was simple: learn by building. By cloning well-known apps and designing complete UI flows, I focused on mastering layouts, state management, navigation, and clean UI architecture in Flutter.",
      tags: [
        "Flutter",
        "UI Design",
        "State Management",
        "Navigation",
        "Clean Architecture",
      ],
      link: "https://github.com/sjlouji/flutter-clones-ui-collection",
      "data-ai-hint": "flutter clones & ui collection",
    },
    {
      date: "March 2019",
      title: "ChatBlo Android",
      description:
        "ChatBlo is a real-time Android chat application built to deliver a smooth and responsive messaging experience. The app allows users to connect instantly with others who are logged in, with all messages synced in real time using Firebase. The goal of this project was to build a feature-rich chat application similar to popular messaging apps, while learning how to handle real-time data, user presence, and scalable mobile architecture.",
      tags: [
        "Android Studio",
        "Java",
        "Firebase",
        "Real-time Messaging",
        "Firebase Storage",
      ],
      link: "https://github.com/sjlouji/ChatBlo",
      "data-ai-hint": "chatblo android chat application",
    },
    {
      date: "March 2019",
      title: "ChatBlo IOS",
      description:
        "ChatBlo iOS is a real-time chat application built for iPhone, designed to deliver a smooth and responsive messaging experience. It allows users to connect instantly and exchange messages in real time, powered by Firebase as the backend. This project focuses on building a reliable one-to-one chat system with essential messaging features, clean UI interactions, and seamless real-time synchronization.",
      tags: [
        "Xcode",
        "iOS",
        "Swift",
        "Firebase",
        "Real-time Messaging",
        "Firebase Storage",
      ],
      link: "https://github.com/sjlouji/ChatBloIOS",
      "data-ai-hint": "chatblo ios chat application",
    },
  ],
  contact: {
    heading: "Ideas Don't Build\nThemselves. Let's Talk",
    subheading:
      "I'm always open to collaborations or conversations. Drop me a message anytime.",
    email: "sjlouji10@gmail.com",
    addressLabel: "My Address",
    address: [
      "Joan Louji",
      "13/7, Lake Area 3rd Cross Street,",
      "Nungambakkam, Chennai – 34.",
    ],
    socialsLabel: "Follow Me",
    location: "Chennai, India",
    availability: "Open to opportunities",
    preferredContact: "Email preferred",
    newsletter: {
      title: "Stay Updated",
      description: "Subscribe to my Medium newsletter for tech insights",
      url: "https://medium.com/@sjlouji10",
      buttonText: "Subscribe to Medium",
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/sjlouji",
        logo: "/images/github.svg",
      },
      {
        name: "Medium",
        url: "https://medium.com/@sjlouji10",
        logo: "/images/medium.png",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sjlouji",
        logo: "/images/LI-In-Bug.png",
      },
    ],
  },
};

export const initialData: ResumeData = {
  personalDetails: {
    name: "EDWARD MITCHELL",
    title: "Web Developer | HTML, CSS, PHP | WordPress Expert",
    phone: "+44 20 7123 4567",
    email: "help@enhancv.com",
    linkedin: "linkedin.com",
    location: "Reading, United Kingdom",
  },
  summary:
    "Enthusiastic Web Developer with 5+ years of experience in creating responsive websites and a proven track record in SEO optimisation. Expertise in HTML, CSS, PHP, WordPress and WooCommerce with a passion for delivering optimal user experience.",
  experience: [
    {
      id: "exp1",
      title: "Senior Web Developer",
      company: "Digital Dynamics Ltd",
      startDate: "06/2019",
      endDate: "Present",
      location: "Reading, United Kingdom",
      description: [
        "Led the redesigning of the company's main e-commerce site, increasing customer satisfaction scores by 20% through improved layout and usability.",
        "Spearheaded the integration of a new payment gateway that reduced checkout process time by 35%, directly impacting sales growth.",
        "Improved website load times by 25% through advanced coding techniques, resulting in a lower bounce rate and higher engagement.",
        "Collaborated with the marketing team on SEO strategies that led to a 40% increase in organic traffic within 12 months.",
        "Managed updates and security patches for a portfolio of 15+ WordPress websites, ensuring 99.9% uptime.",
        "Developed custom plugins and themes tailored to business needs, enhancing site functionality and user experience.",
      ],
    },
    {
      id: "exp2",
      title: "Web Developer",
      company: "Tech Solutions Inc",
      startDate: "02/2016",
      endDate: "05/2019",
      location: "Reading, United Kingdom",
      description: [
        "Revamped user interface for client's main web application, increasing customer engagement by 30%.",
        "Coded responsive layout for multiple websites attended to reach a wide audience, achieving compatibility across 98% of devices.",
        "Played a key role in the implementation of a robust backup strategy that decreased potential data loss exposure by 90%.",
        "Initiated the use of Google Webmaster tools to monitor website performance, which identified critical areas for improvement.",
        "Contributed to team efforts in SEO optimisation that escalated the clients' page ranking into the top 10 search results.",
      ],
    },
    {
      id: "exp3",
      title: "Front-end Developer",
      company: "Creative Web Studio",
      startDate: "09/2013",
      endDate: "01/2016",
      location: "London, United Kingdom",
      description: [
        "Developed and implemented a new CSS framework which reduced time to market for new web pages by 15%.",
        "Increased website accessibility ratings by ensuring compliance with WCAG 2.0 standards.",
        "Customised WordPress themes to reflect brand guidelines for 5 major clients.",
        "Provided maintenance and enhancement support for a suite of WordPress ecommerce sites.",
      ],
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Science in Web Development",
      university: "University of London",
      startDate: "01/2011",
      endDate: "01/2013",
      location: "London, United Kingdom",
    },
    {
      id: "edu2",
      degree: "Bachelor of Science in Computer Science",
      university: "University of Reading",
      startDate: "01/2007",
      endDate: "01/2011",
      location: "Reading, United Kingdom",
    },
  ],
  achievements: [
    {
      id: "ach1",
      icon: Lightbulb,
      title: "Website Redesign",
      description:
        "Orchestrated complete overhaul of main ecommerce site leading to increased user satisfaction and average session duration.",
    },
    {
      id: "ach2",
      icon: Star,
      title: "Streamlined Checkout Process",
      description:
        "Successfully integrated new payment solution halving checkout time and supporting increased transaction volumes.",
    },
    {
      id: "ach3",
      icon: Zap,
      title: "Optimisation Expertise",
      description:
        "Reduced load times and bounce rates across multiple projects by employing cutting edge coding techniques.",
    },
    {
      id: "ach4",
      icon: TrendingUp,
      title: "SEO Success",
      description:
        "Drove a 40% increase in organic traffic within a year by innovating and implementing new SEO strategies.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "PHP",
    "WordPress",
    "WooCommerce",
    "Search Engine Optimisation",
  ],
  courses: [
    {
      id: "crs1",
      name: "Advanced WordPress Development",
      institution:
        "Focused on creating custom plugins and themes, provided by WP Academy.",
    },
    {
      id: "crs2",
      name: "SEO Fundamentals Course",
      institution:
        "Detailed course on SEO strategies and tools, given by Moz Academy.",
    },
  ],
  passions: [
    {
      id: "pas1",
      icon: ShoppingBag,
      name: "E-Commerce Innovation",
      description:
        "I am deeply interested in the evolving trends and technologies shaping online retail experiences.",
    },
    {
      id: "pas2",
      icon: Code2,
      name: "Code Optimisation",
      description:
        "Passionate about enhancing website performance through advanced code optimisation techniques.",
    },
  ],
};

export const sectionIds = [
  "hero",
  ...portfolioData.sections.map((section) => section.href.replace("#", "")),
];

export const PAGE_SIZE = 4;

export type PortfolioData = typeof portfolioData;
