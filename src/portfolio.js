/* Personal Portfolio Configuration - Rakesh Srinivasan */

// Website related settings
const settings = {
  isSplash: false,
  useCustomCursor: false,
  googleTrackingID: "UA-174238252-2",
};

// Home Page / Hero Section
const greeting = {
  title: "Hello.",
  title2: "Rakesh",
  logo_name: "Rakesh Srinivasan",
  nickname: "Senior Software Engineer",
  full_name: "Rakesh Srinivasan",
  tagline: "Senior Software Engineer. Enterprise Scale. Cloud Native.",
  subTitle:
    "Senior Software Engineer based in Dublin, Ireland with 5+ years of experience architecting enterprise AEM Cloud & Edge Delivery Services, scalable full-stack architectures (React / Next.js / Node.js / Python), cloud-native platforms (AWS / GCP / Kubernetes), and AI-powered systems.",
  resumeLink:
    "https://drive.google.com/file/d/1TMtbOqNaGP19Nj24_08549ueqpl93_Jt/view?usp=sharing",
  mail: "rakeshsrinivasan@outlook.com",
  location: "Dublin, Ireland",
  phone: "+353 (89) 208-1816",
};

const socialMediaLinks = {
  github: "https://github.com/Rakesh-git-2",
  leetcode: "https://leetcode.com/Rakesh-git-2/",
  linkedin: "https://www.linkedin.com/in/rakesh-srinivasan",
  gmail: "rakeshsrinivasan@outlook.com",
  twitter: "https://twitter.com/rakesh_s_7",
  instagram: "https://www.instagram.com/_rakesh_.s._",
};

const skills = {
  data: [
    {
      title: "AEM & Enterprise Cloud Architecture",
      fileName: "FullStackImg",
      category: "Enterprise Systems",
      skills: [
        "Architecting and managing enterprise web migrations from AEM 6.5 to AEM as a Cloud Service (AEMaaCS) using Content Transfer Tool (CTT) and Cloud Manager.",
        "Implementing AEM Edge Delivery Services (EDS) to supercharge web performance and achieve perfect Core Web Vitals across high-traffic global marketing sites.",
        "Engineering modular, reusable AEM components with Sling Models, OSGi services, HTL/Sightly, Servlets, and optimized Apache Dispatcher configurations.",
        "Bridging AEM backend systems with modern React frontends via clientlibs and headless GraphQL APIs.",
        "Developing custom CLI automation tools for rapid component generation, drastically reducing manual boilerplate work.",
      ],
      softwareSkills: [
        {
          skillName: "AEM Cloud",
          fontAwesomeClassname: "simple-icons:adobe",
          style: { color: "#FF0000" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:oracle",
          style: { color: "#EA2D2E" },
        },
        {
          skillName: "Apache Sling",
          fontAwesomeClassname: "simple-icons:apache",
          style: { color: "#D22128" },
        },
        {
          skillName: "OSGi",
          fontAwesomeClassname: "simple-icons:eclipseide",
          style: { color: "#2C2255" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#DE33A6" },
        },
        {
          skillName: "Akamai CDN",
          fontAwesomeClassname: "simple-icons:akamai",
          style: { color: "#0099FF" },
        },
        {
          skillName: "HTML5 / HTL",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "JavaScript ES6+",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
      ],
    },
    {
      title: "Frontend & Full Stack Engineering",
      fileName: "CloudInfraImg",
      category: "Modern Web",
      skills: [
        "Building scalable, responsive, and accessible (a11y/WCAG) frontends using React, Next.js 15, TypeScript, and modern CSS/Tailwind.",
        "Developing high-throughput backend APIs and microservices using Node.js, Express.js, FastAPI, Python, and Django.",
        "Engineering real-time applications with WebSockets and MQTT pub-sub architecture for Point of Sale (POS) and interactive dashboards.",
        "Rapid AI prototyping & 'vibe coding' complex full-stack products from concept to production in high-velocity release cycles.",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js 15",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: { color: "#DD0031" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    {
      title: "Cloud, DevOps & AI Tooling",
      fileName: "FullStackImg",
      category: "Cloud & Infrastructure",
      skills: [
        "Multi-cloud infrastructure orchestration across AWS (Lambda, S3, EC2) and GCP (Cloud Run, Cloud Build, Cloud SQL), slashing hosting costs up to 50%.",
        "Robust CI/CD pipelines with GitHub Actions, GCP Cloud Build, and Cloud Manager for automated zero-downtime rollouts.",
        "Data warehousing and analytics engineering with Snowflake, DBT, PostgreSQL, and Redis caching.",
        "AI-augmented development leveraging Google Gemini, Claude Code, Cursor, and custom LLM integrations for intelligent data processing.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: { color: "#29B5E8" },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "simple-icons:dbt",
          style: { color: "#FF694B" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "simple-icons:googlegemini",
          style: { color: "#8E75FF" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University College Dublin",
      subtitle: "Master of Science in Information Systems",
      logo_path: "ucdlogo.png",
      alt_name: "UCD Dublin",
      duration: "Sep 2023 – Aug 2024",
      descriptions: [
        "Location: Dublin, Ireland",
        "Key Specializations: Quantitative Data Analysis, Modern Web Architectures (Django/React), UX Design, Cloud & Machine Learning Systems, Project Management, AI Systems & Ethics.",
        "Completed high-impact coursework and research in distributed software architectures and enterprise data engineering.",
      ],
      website_link: "https://www.ucd.ie/",
    },
    {
      title: "Rajalakshmi Institute of Technology",
      subtitle:
        "Bachelor of Engineering in Electronics & Communication Engineering",
      logo_path: "ritlogo.jpeg",
      alt_name: "RIT Chennai",
      duration: "June 2016 – May 2020",
      descriptions: [
        "Location: Chennai, India | GPA: 7.29 / 10.0",
        "Core Engineering: Object-Oriented Programming (OOP), Data Structures & Algorithms, Operating Systems, Computer Networking, and Embedded Systems.",
      ],
      website_link: "https://ritchennai.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IBM Data Science Professional",
      subtitle: "Coursera",
      logo_path: "Coursera.png",
      certificate_link:
        "https://coursera.org/api/certificate.v1/pdf/V2ASK485YPY4",
      alt_name: "IBM Coursera",
      color_code: "#0071E3",
    },
    {
      title: "IITM - Master Data Science",
      subtitle: "Guvi",
      logo_path: "guvi.png",
      certificate_link:
        "https://drive.google.com/file/d/1LmFTtX3mjqdakzHzN_UlRUww8AcVfIBR/view?usp=sharing",
      alt_name: "IITM Guvi",
      color_code: "#30D158",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Engineering Track Record & Career Journey",
  description:
    "Senior Software Engineer based in Dublin, Ireland with 5+ years of experience across enterprise CMS (AEM Cloud / Edge Delivery Services), full-stack web platforms (React, Next.js, TypeScript, Node.js, Python/FastAPI), cloud-native infrastructure (AWS, GCP, Docker, Kubernetes), and AI-driven automation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "GenDigital (Norton / LifeLock / Avira)",
          company_url: "https://www.gendigital.com/",
          logo_path: "gendigital.svg",
          duration: "Apr 2024 – Apr 2026",
          location: "Dublin, Ireland",
          tags: [
            "AEM as a Cloud Service",
            "Edge Delivery Services (EDS)",
            "React",
            "Sling Models",
            "OSGi",
            "Cloud Manager",
            "Dispatcher",
            "Akamai CDN",
          ],
          bullets: [
            "AEM Migration: Managed the migration of enterprise web properties from AEM 6.5 to AEM as a Cloud Service. Refactored legacy codebases for cloud compatibility, optimized dispatcher configurations, and used the Content Transfer Tool (CTT) for seamless content migration.",
            "Component Development: Built reusable AEM components including dialogs, Sling Models, and OSGi services. Integrated these with React-based frontends via clientlibs to ensure performance and accessibility (a11y/WCAG).",
            "Edge Delivery Services: Implemented AEM Edge Delivery Services to improve page performance and Core Web Vitals across primary marketing sites.",
            "UI/UX Reskinning: Led a tenant-level reskin project using feature flags for controlled, gradual rollouts, reducing deployment risk and allowing for real-time testing.",
            "DevOps Tooling: Created custom automation tools to generate AEM component boilerplates, cutting manual overhead for the engineering team.",
          ],
          description:
            "Managed enterprise migration of web properties from AEM 6.5 to AEM Cloud Service using CTT and Cloud Manager. Built reusable AEM components with Sling Models and OSGi services integrated with React frontends. Implemented AEM Edge Delivery Services (EDS) for optimal Core Web Vitals, and led tenant-level reskinning with feature flags.",
          color: "#2997FF",
        },
        {
          title: "Software Engineer – Freelance",
          company: "FCTRZ Technologies",
          company_url: "https://fctrz.in/",
          logo_path: "fctrz.webp",
          duration: "Apr 2023 – Aug 2023",
          location: "Chennai, India",
          tags: [
            "Angular",
            "Django",
            "GCP Cloud Run",
            "Docker",
            "GPT AI",
            "MQTT",
            "PostgreSQL",
            "Stripe",
          ],
          bullets: [
            "E-commerce Platform: Built a full-stack multi-vendor marketplace with Angular and Django, with separate customer and seller portals, developed test-first using TDD throughout.",
            "Cloud Migration: Re-platformed backend from AWS EC2 to GCP Cloud Run using Docker and GCP Cloud Build CI/CD — achieving a 50% reduction in infrastructure costs and 30% improvement in response times.",
            "AI-Powered Onboarding: Integrated GPT-based image recognition to automate product catalogue population during seller onboarding, cutting onboarding time by 30%.",
            "Real-Time POS: Engineered a Point of Sale system using Django and Angular with MQTT pub-sub messaging for real-time synchronisation between terminals and backend.",
            "Payments: Integrated Razorpay and Stripe for end-to-end online payment processing across customer and seller flows.",
          ],
          description:
            "Built a full-stack multi-vendor e-commerce marketplace (Angular + Django) with TDD. Re-platformed the backend from AWS EC2 to GCP Cloud Run (50% cost cut, 30% faster response times). Integrated GPT-based image recognition for catalog automation, engineered an MQTT-based real-time POS, and integrated Razorpay/Stripe payments.",
          color: "#FF9F0A",
        },
        {
          title: "Software Engineer",
          company: "Pipecandy Technologies",
          company_url: "https://pipecandy.com/",
          logo_path: "pipecandy.png",
          duration: "Sep 2021 – Mar 2023",
          location: "Chennai, India",
          tags: [
            "React",
            "Puppeteer",
            "AWS Lambda",
            "S3",
            "D3.js",
            "Snowflake",
            "DBT",
            "Core Web Vitals",
          ],
          bullets: [
            "Technology Intelligence Engine: Built a BuiltWith-style web technology profiler that identifies frameworks, analytics tools, CDNs, and payment providers using HTTP header analysis, DOM fingerprinting, and Puppeteer, deployed on AWS Lambda and S3.",
            "Chrome Extension: Built a React-based browser extension that surfaces real-time technology stack insights inline while browsing, increasing SaaS platform engagement by 30%.",
            "Analytics Dashboards: Developed interactive data visualisation dashboards with React and D3.js for tracking technology adoption trends across e-commerce companies.",
            "Web Performance: Audited and optimised key landing pages, achieving a 25% improvement in Core Web Vitals (FCP, LCP, CLS).",
            "Data Warehousing: Led migration from PostgreSQL to Snowflake using DBT, applying query optimisation and job scheduling improvements that boosted pipeline performance by 15%.",
          ],
          description:
            "Architected a BuiltWith-style web technology profiler using Puppeteer on AWS Lambda/S3 for large-scale async fingerprinting. Developed a React Chrome extension boosting engagement by 30%, created D3.js analytics dashboards, optimized Core Web Vitals (+25%), and migrated data pipelines to Snowflake with DBT (+15% throughput).",
          color: "#5AC8FA",
        },
        {
          title: "Graduate Engineer Trainee",
          company: "Samsung Electronics",
          company_url: "https://www.samsung.com/",
          logo_path: "Samsung.png",
          duration: "Nov 2020 – Sep 2021",
          location: "Chennai, India",
          tags: [
            "Workflow Automation",
            "ISO / NABL",
            "QA",
            "Process Optimization",
          ],
          bullets: [
            "Workflow Automation: Built an internal tool to manage document versioning and revision workflows, replacing a manual process across engineering teams.",
            "Quality Assurance: Supported quality assurance processes aligned with ISO and NABL standards.",
          ],
          description:
            "Built an automated internal engineering tool for document versioning and revision workflows across teams, eliminating manual bottlenecks. Supported quality assurance processes in compliance with ISO and NABL standards.",
          color: "#AF52DE",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Engineering Projects",
  subtitle: "Featured Products, Cloud Architectures & Open Source",
  description:
    "A showcase of high-impact algorithmic trading engines, AI/LLM applications, cloud-native infrastructure, and empirical HCI research directly from GitHub.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      featured: true,
      category: "AI & Market Intelligence",
      name: "TraderCall.io",
      tagline: "AI-Powered Market Signal & Backtesting Platform",
      url: "https://tradercall.io",
      demo_url: "https://tradercall.io",
      github_url: "https://github.com/Rakesh-git-2",
      description:
        "Engineered an end-of-day algorithmic signal engine for 1,500+ stocks with high-velocity release cycles. Features a technical scoring engine (RSI, MACD, Moving Averages), Google Gemini integration for pattern recognition and sentiment analysis, custom backtesting simulator, paper trading engine, and server-side rendered pages with Next.js 15.",
      highlights: [
        "1,500+ Stocks analyzed daily with custom algorithmic scoring & technical indicators",
        "Google Gemini AI integration for chart pattern recognition & financial sentiment",
        "High-performance Next.js 15 + React 19 SSR frontend deployed on Railway",
        "FastAPI high-concurrency async backend with PostgreSQL & Docker containerization",
      ],
      languages: [
        { name: "Next.js 15", iconifyClass: "logos:nextjs-icon" },
        { name: "React 19", iconifyClass: "logos:react" },
        { name: "FastAPI", iconifyClass: "logos:fastapi" },
        { name: "Google Gemini", iconifyClass: "logos:google-gemini" },
        { name: "PostgreSQL", iconifyClass: "logos:postgresql" },
        { name: "Docker", iconifyClass: "logos:docker-icon" },
        { name: "Python", iconifyClass: "logos:python" },
      ],
    },
    {
      id: "1",
      featured: false,
      category: "LLM & Conversational AI",
      name: "RetailBot - LangChain SQL Database Agent",
      tagline: "Natural Language to SQL Conversational Engine",
      url: "https://github.com/Rakesh-git-2/retail_bot",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/retail_bot",
      description:
        "End-to-End LLM application built for retail inventory querying. Leverages LangChain SQLDatabaseChain paired with few-shot prompting to enable natural language question answering over relational MySQL databases with semantic error handling.",
      highlights: [
        "Natural language to SQL query generation via LangChain SQLDatabaseChain",
        "Few-shot prompt engineering for accurate multi-table relational joins",
        "Interactive conversational Q&A system for real-time inventory queries",
      ],
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "LangChain", iconifyClass: "simple-icons:langchain" },
        { name: "MySQL", iconifyClass: "logos:mysql" },
        { name: "OpenAI", iconifyClass: "logos:openai-icon" },
      ],
    },
    {
      id: "2",
      featured: false,
      category: "Web Profiling & Extension",
      name: "Technology Intelligence Profiler & Extension",
      tagline: "BuiltWith-Style Technology Fingerprinter & Chrome Extension",
      url: "https://github.com/Rakesh-git-2",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2",
      description:
        "Large-scale web tech detection engine combining HTTP header analysis, DOM fingerprinting, and Puppeteer headless browser detection. Deployed on AWS Lambda and S3 with an accompanying React Chrome extension for inline browsing insights.",
      highlights: [
        "Headless browser fingerprinting on AWS Lambda & S3",
        "React-powered browser extension with +30% engagement boost",
        "D3.js interactive technology adoption graphs",
      ],
      languages: [
        { name: "React", iconifyClass: "logos:react" },
        { name: "Puppeteer", iconifyClass: "logos:puppeteer" },
        { name: "AWS Lambda", iconifyClass: "logos:aws-lambda" },
        { name: "Node.js", iconifyClass: "logos:nodejs-icon" },
        { name: "D3.js", iconifyClass: "logos:d3" },
      ],
    },
    {
      id: "3",
      featured: false,
      category: "Empirical HCI Research",
      name: "Voice Usability vs Cognitive Overload (SUS vs RTLX)",
      tagline: "MSc Research Study at University College Dublin",
      url: "https://github.com/Rakesh-git-2/SUS_vs_RTLX",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/SUS_vs_RTLX",
      description:
        "Empirical human-computer interaction (HCI) research discovering the quantitative relationship between System Usability Scale (SUS) scores and Raw Task Load Index (RTLX) cognitive load in modern voice user interfaces.",
      highlights: [
        "Statistical correlation modeling between SUS usability and RTLX cognitive workload",
        "R-based quantitative analytics, hypothesis testing, and data visualization",
        "Published findings for voice UI interaction design standards",
      ],
      languages: [
        { name: "R", iconifyClass: "logos:r-lang" },
        { name: "Data Science", iconifyClass: "logos:jupyter" },
        { name: "UX Research", iconifyClass: "logos:figma" },
      ],
    },
    {
      id: "4",
      featured: false,
      category: "Full Stack & Real-Time",
      name: "AI Multi-Vendor E-Commerce & MQTT POS",
      tagline: "Marketplace with GPT Cataloging & MQTT Real-Time POS",
      url: "https://github.com/Rakesh-git-2",
      demo_url: "https://fctrz.in/",
      github_url: "https://github.com/Rakesh-git-2",
      description:
        "Full-stack multi-vendor marketplace with separate customer/seller portals. Features GPT image recognition to automate seller catalog onboarding (-30% onboarding time), MQTT real-time Point of Sale synchronization, and Stripe/Razorpay payments on GCP Cloud Run.",
      highlights: [
        "GPT image recognition for automated product catalogue onboarding",
        "MQTT pub-sub for real-time POS terminal sync",
        "GCP Cloud Run deployment with 50% infrastructure cost savings",
      ],
      languages: [
        { name: "Angular", iconifyClass: "logos:angular-icon" },
        { name: "Django", iconifyClass: "logos:django-icon" },
        { name: "GCP", iconifyClass: "logos:google-cloud" },
        { name: "Docker", iconifyClass: "logos:docker-icon" },
        { name: "Stripe", iconifyClass: "logos:stripe" },
      ],
    },
    {
      id: "5",
      featured: false,
      category: "Headless CMS",
      name: "Next.js Medium Publishing Platform",
      tagline: "Headless Sanity.io Publishing Architecture",
      url: "https://github.com/Rakesh-git-2/medium-blog",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/medium-blog",
      description:
        "Full-stack publishing application with Sanity.io CMS backend, dynamic SSR routing in Next.js, TypeScript type safety, and clean editorial UI design.",
      highlights: [
        "Sanity.io Headless CMS integration with rich text block serializer",
        "Server-Side Rendering (SSR) for instant page delivery & SEO",
        "Fully typed TypeScript schema architecture",
      ],
      languages: [
        { name: "Next.js", iconifyClass: "logos:nextjs-icon" },
        { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
        { name: "Sanity.io", iconifyClass: "logos:sanity" },
        { name: "Tailwind", iconifyClass: "logos:tailwindcss-icon" },
      ],
    },
    {
      id: "6",
      featured: false,
      category: "Security & Microservices",
      name: "Enterprise Auth & RBAC Security Suite",
      tagline: "JWT Token Rotation & PostgreSQL Role-Based Access",
      url: "https://github.com/Rakesh-git-2/node-login-system",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/node-login-system",
      description:
        "Production-ready authentication and authorization architecture with JWT token rotation, secure httpOnly cookie handling, bcrypt hashing, and granular role-based permissions in PostgreSQL.",
      highlights: [
        "JWT access & refresh token rotation mechanism",
        "Role-Based Access Control (RBAC) with PostgreSQL schema",
        "Express.js & React full-stack security flow",
      ],
      languages: [
        { name: "Node.js", iconifyClass: "logos:nodejs-icon" },
        { name: "PostgreSQL", iconifyClass: "logos:postgresql" },
        { name: "React", iconifyClass: "logos:react" },
        { name: "Express", iconifyClass: "logos:express" },
      ],
    },
    {
      id: "7",
      featured: false,
      category: "Modern TypeScript",
      name: "Thirukkural Digital Platform",
      tagline: "Modern Classical Tamil Literature Platform",
      url: "https://github.com/Rakesh-git-2/thirukkural",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/thirukkural",
      description:
        "Modern interactive web application engineered with TypeScript to explore 1,330 couplets of ancient Tamil literature with dynamic search, transliteration, English commentary, and chapter categorization.",
      highlights: [
        "Instant fuzzy search indexing across Tamil and English texts",
        "Strict TypeScript architecture with component modularity",
      ],
      languages: [
        { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
        { name: "React", iconifyClass: "logos:react" },
        { name: "CSS3", iconifyClass: "logos:css-3" },
      ],
    },
    {
      id: "8",
      featured: false,
      category: "Machine Learning",
      name: "Customer Churn Prediction Engine",
      tagline: "Supervised ML Classification with Scikit-Learn",
      url: "https://github.com/Rakesh-git-2/Churn-prediction",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/Churn-prediction",
      description:
        "Machine learning pipeline analyzing customer retention patterns using Logistic Regression and KNN classifiers, complete with feature importance evaluation and confusion matrix diagnostics.",
      highlights: [
        "Comparative evaluation of Logistic Regression and KNN algorithms",
        "Automated exploratory data analysis, SMOTE sampling, and feature engineering",
      ],
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "Scikit-Learn", iconifyClass: "logos:scikit-learn" },
        { name: "Pandas", iconifyClass: "logos:pandas-icon" },
        { name: "NumPy", iconifyClass: "logos:numpy" },
      ],
    },
  ],
};

// Contact Page Data
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    profile_image_path: "rakesh.jpeg",
    description:
      "Based in Dublin, Ireland. Open to discussions on senior software engineering roles, enterprise AEM Cloud architecture, high-velocity full-stack projects, or innovative tech collaborations.",
  },
  blogSection: {
    title: "Engineering Articles & Insights",
    subtitle:
      "I regularly share technical deep dives on AEM Cloud, modern frontend architecture, and developer productivity on LinkedIn.",
    link: "https://www.linkedin.com/in/rakesh-srinivasan",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
