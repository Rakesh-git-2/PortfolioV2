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
  nickname: "Full-Stack Engineer",
  full_name: "Rakesh Srinivasan",
  headline: "Senior Web Development Specialist @ Gen Digital",
  tagline: "Full-stack engineer. AEM, React, Python, AI agents.",
  subTitle:
    "Full-stack engineer in Dublin with about 5 years of experience, mostly AEM (Java and front end), JavaScript/TypeScript, React and Python. I work on the Norton, LifeLock and Avira websites at Gen Digital, and I build AI tooling with MCP. Stamp 4, no sponsorship needed.",
  resumeLink: `${process.env.PUBLIC_URL}/Rakesh_Srinivasan_Resume.pdf`,
  mail: "rakesh_srinivasan@outlook.com",
  location: "Dublin, Ireland",
  phone: "+353 (89) 208-1816",
};

const socialMediaLinks = {
  github: "https://github.com/Rakesh-git-2",
  leetcode: "https://leetcode.com/Rakesh-git-2/",
  linkedin: "https://www.linkedin.com/in/rakeshsrinivasan",
  gmail: "rakesh_srinivasan@outlook.com",
};

const skills = {
  data: [
    {
      title: "AEM and consumer websites",
      fileName: "FullStackImg",
      category: "Enterprise Systems",
      skills: [
        "Building AEM components for the Norton, LifeLock and Avira websites: Java back end (Sling Models, OSGi services, servlets), HTL and React on the front end.",
        "Working on the move from AEM 6.5 to AEM as a Cloud Service, and on Edge Delivery Services pages.",
        "Navigation, pricing, quizzes and other high-traffic components, with localisation, accessibility, analytics and SEO.",
        "A small CLI that generates AEM component boilerplate.",
      ],
      softwareSkills: [
        {
          skillName: "AEM Cloud",
          fontAwesomeClassname: "simple-icons:adobe",
          style: { color: "#FF0000" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
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
      title: "Full-stack web",
      fileName: "CloudInfraImg",
      category: "Modern Web",
      skills: [
        "Front ends in React, Next.js, TypeScript and Angular, built to be accessible and fast.",
        "APIs in Python (FastAPI, Django) and Node.js (Express), backed by PostgreSQL.",
        "Real-time sync with MQTT pub-sub, used for a point-of-sale system.",
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
      title: "Cloud, data and AI tooling",
      fileName: "FullStackImg",
      category: "Cloud & Infrastructure",
      skills: [
        "AWS (EC2, Lambda, S3) and GCP (Cloud Run, Cloud Build); moved one backend from EC2 to Cloud Run and roughly halved hosting cost.",
        "CI/CD with GitHub Actions, Cloud Build and AEM Cloud Manager; Docker for deployment.",
        "Data pipelines with Snowflake, dbt and PostgreSQL.",
        "AI agents connected to Jira, Figma and DevTools through MCP; LLM features with Gemini, OpenAI and Claude.",
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
          skillName: "dbt",
          fontAwesomeClassname: "simple-icons:dbt",
          style: { color: "#FF694B" },
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
        "Modules included quantitative data analysis, web development (Django, React), UX design, cloud and machine learning systems, and AI ethics. Research project on voice interface usability.",
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
        "Location: Chennai, India",
        "Covered programming, data structures and algorithms, operating systems, networking and embedded systems.",
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Where I've worked",
  description:
    "About 5 years building web products, from startups in Chennai to the Norton, LifeLock and Avira websites at Gen Digital in Dublin.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Web Development Specialist",
          company: "Gen Digital (Norton, LifeLock, Avira)",
          company_url: "https://www.gendigital.com/",
          logo_path: "gendigital.svg",
          duration: "Jun 2024 – Present",
          location: "Dublin, Ireland",
          tags: [
            "AEM",
            "Java",
            "React",
            "TypeScript",
            "Sling Models",
            "Edge Delivery Services",
            "MCP",
            "Analytics",
            "SEO",
          ],
          bullets: [
            "AI development agent: Built an internal tool that connects Jira, Figma and browser DevTools to an AI agent through MCP servers, so the agent can pick up a ticket, read the design and do much of the implementation.",
            "Content matching: Built a production feature that matches related content to pages by keyword, replacing manual curation.",
            "Components: Built high-traffic UI components (global navigation, social proof, interactive quizzes, password tools) from design to production, with localisation and accessibility.",
            "Pricing: Built dynamic pricing components with promotional highlights, and moved price calculation to remove a client-side race condition.",
            "AEM: Built AEM components end to end: Java back end (Sling Models, OSGi services, servlets) and HTL front end. Worked on the move from AEM 6.5 to AEM as a Cloud Service and on Edge Delivery Services pages; shipped a site-wide reskin behind feature flags.",
            "Analytics and SEO: Added structured analytics events to key components and fixed SEO issues (semantic markup, meta tags).",
          ],
          description:
            "Building AEM components (Java back end and front end), pricing, analytics and SEO for the Norton, LifeLock and Avira websites. Built an internal AI agent that connects Jira, Figma and DevTools through MCP.",
          color: "#2997FF",
        },
        {
          title: "Software Engineer (part-time)",
          company: "FCTRZ Technologies",
          company_url: "https://fctrz.in/",
          logo_path: "fctrz.webp",
          duration: "Apr 2023 – Jun 2024",
          location: "Chennai, India (remote)",
          tags: [
            "Angular",
            "Django",
            "GCP Cloud Run",
            "Docker",
            "MQTT",
            "PostgreSQL",
            "Razorpay",
            "Stripe",
          ],
          bullets: [
            "Marketplace: Built a multi-vendor marketplace with Angular and Django, with separate customer and seller portals, written test-first with over 90% test coverage.",
            "Cloud move: Moved the backend from AWS EC2 to GCP Cloud Run with Docker and a Cloud Build CI/CD pipeline. Hosting cost roughly halved and response times improved by 30%.",
            "Seller onboarding: Used GPT image recognition to fill in product catalogues from photos, cutting seller onboarding time by 30%.",
            "Point of sale: Built a POS system with Django, Angular and MQTT (HiveMQ) pub-sub to keep terminals in sync with the backend.",
            "Payments: Integrated Razorpay and Stripe for customer and seller payments.",
          ],
          description:
            "Part-time, alongside my MSc. Built a multi-vendor marketplace (Angular, Django) and a POS system, and moved the backend from AWS EC2 to GCP Cloud Run, roughly halving hosting cost.",
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
            "Technology profiler: Built a service that detects the frameworks, analytics tools, CDNs and payment providers a website uses, from HTTP headers, DNS records, cookies and the DOM. Ran Puppeteer on AWS Lambda, with results in S3.",
            "Chrome extension: Built a React extension that shows a site's tech stack while you browse. Engagement on the SaaS product went up 30%.",
            "Dashboards: Built React and D3.js dashboards that track technology adoption across e-commerce companies.",
            "Web performance: Improved Core Web Vitals (FCP, LCP, CLS) on key landing pages by 25%.",
            "Data warehouse: Moved the warehouse from PostgreSQL to Snowflake with dbt, and tuned the dbt jobs for a 15% speed-up.",
          ],
          description:
            "Sales intelligence for e-commerce. Built a website technology profiler (Puppeteer on AWS Lambda), a React Chrome extension, D3.js dashboards, and the move from PostgreSQL to Snowflake with dbt.",
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
            "Document revisions: Built an internal tool that tracks document versions and revisions, replacing a manual process.",
            "Quality: Supported ISO and NABL quality audits.",
          ],
          description:
            "Built an internal tool for document versioning and revisions, and supported ISO and NABL quality audits.",
          color: "#AF52DE",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  subtitle: "Things I've built outside work",
  description:
    "Side projects and MSc work. TraderCall is the one I'm building now.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      featured: true,
      category: "Side project",
      name: "TraderCall.io",
      tagline: "End-of-day stock signals, backtests and paper trading",
      url: "https://tradercall.io",
      demo_url: "https://tradercall.io",
      github_url: "",
      description:
        "Scores 1,500+ US and Indian stocks every evening on six indicators (RSI, MACD, EMA cross, Bollinger Bands, OBV, relative volume), filters by market regime and ranks BUY and SELL signals. Includes a backtester that only uses data available on the signal date, paper trading, and Gemini summaries of chart patterns, news sentiment and portfolios. Source is private; happy to walk through it.",
      highlights: [
        "Daily pipeline over 1,500+ US and Indian stocks, scheduled with APScheduler",
        "Backtests enter at the next day's open, so results carry no lookahead bias",
        "Gemini chart, news and portfolio summaries, cached to keep API cost down",
        "FastAPI and PostgreSQL on Fly.io; Next.js 15 static export on Cloudflare Pages",
      ],
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "FastAPI", iconifyClass: "logos:fastapi" },
        { name: "PostgreSQL", iconifyClass: "logos:postgresql" },
        { name: "Next.js 15", iconifyClass: "logos:nextjs-icon" },
        { name: "React 19", iconifyClass: "logos:react" },
        { name: "Google Gemini", iconifyClass: "logos:google-gemini" },
        { name: "Docker", iconifyClass: "logos:docker-icon" },
      ],
    },
    {
      id: "1",
      featured: false,
      category: "Side project",
      name: "Thirukkural",
      tagline: "All 1,330 Thirukkural couplets, with a public API",
      url: "https://thirukkural-54t.pages.dev",
      demo_url: "https://thirukkural-54t.pages.dev",
      github_url: "https://github.com/Rakesh-git-2/thirukkural",
      description:
        "A web app and public REST API for the 1,330 couplets of the Thirukkural, with full-text search in Tamil and English and an illustration for each of the 133 chapters.",
      highlights: [
        "Next.js 15 front end on Cloudflare Pages; REST API on Cloudflare Workers",
        "Pre-built search index over Tamil and English text",
        "Chapter illustrations generated with Cloudflare Workers AI",
      ],
      languages: [
        { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
        { name: "Next.js", iconifyClass: "logos:nextjs-icon" },
        { name: "Tailwind", iconifyClass: "logos:tailwindcss-icon" },
        { name: "Cloudflare", iconifyClass: "logos:cloudflare-icon" },
      ],
    },
    {
      id: "2",
      featured: false,
      category: "Side project",
      name: "SurveyHub",
      tagline: "Surveys drafted and summarised by Gemini",
      url: "https://surveyhub-aha.pages.dev",
      demo_url: "https://surveyhub-aha.pages.dev",
      github_url: "https://github.com/Rakesh-git-2/surveyhub",
      description:
        "A survey platform where Gemini drafts a survey from a prompt and summarises the responses. Includes a survey builder, per-question charts, CSV export, team roles, and HMAC-signed webhooks on new responses.",
      highlights: [
        "Django REST Framework API with JWT auth and PostgreSQL, on Fly.io",
        "Next.js 15 and React 19 front end on Cloudflare Pages",
        "Webhooks signed with HMAC-SHA256 so receivers can verify them",
      ],
      languages: [
        { name: "Django", iconifyClass: "logos:django-icon" },
        { name: "Next.js 15", iconifyClass: "logos:nextjs-icon" },
        { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
        { name: "PostgreSQL", iconifyClass: "logos:postgresql" },
        { name: "Google Gemini", iconifyClass: "logos:google-gemini" },
      ],
    },
    {
      id: "3",
      featured: false,
      category: "MSc research",
      name: "Voice usability vs cognitive load",
      tagline: "MSc research project, University College Dublin",
      url: "https://github.com/Rakesh-git-2/SUS_vs_RTLX",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/SUS_vs_RTLX",
      description:
        "A study of how usability (System Usability Scale) relates to cognitive load (Raw NASA-TLX) for voice assistants. Across 100 Alexa users the two were strongly correlated (r = 0.68, p < .001), unlike earlier results for web interfaces.",
      highlights: [
        "Correlation analysis between SUS and RTLX scores",
        "Hypothesis tests and charts in R",
      ],
      languages: [
        { name: "R", iconifyClass: "logos:r-lang" },
        { name: "UX research", iconifyClass: "logos:figma" },
      ],
    },
    {
      id: "4",
      featured: false,
      category: "LLM",
      name: "RetailBot",
      tagline: "Ask a store database questions in plain English",
      url: "https://github.com/Rakesh-git-2/retail_bot",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/retail_bot",
      description:
        'Turns questions like "how many white Adidas t-shirts are left?" into SQL against a MySQL inventory database, using LangChain\'s SQLDatabaseChain with few-shot examples.',
      highlights: [
        "LangChain SQLDatabaseChain over MySQL",
        "Few-shot examples for multi-table questions",
      ],
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "LangChain", iconifyClass: "simple-icons:langchain" },
        { name: "MySQL", iconifyClass: "logos:mysql" },
        { name: "Google PaLM", iconifyClass: "logos:google-icon" },
      ],
    },
    {
      id: "5",
      featured: false,
      category: "Earlier projects",
      name: "Medium-style blog",
      tagline: "Next.js with Sanity as the CMS",
      url: "https://github.com/Rakesh-git-2/medium-blog",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/medium-blog",
      description:
        "A Medium-style blog built with Next.js, using Sanity as a headless CMS.",
      highlights: [
        "Sanity schemas and rich-text rendering",
        "Dynamic routes for each post",
      ],
      languages: [
        { name: "Next.js", iconifyClass: "logos:nextjs-icon" },
        { name: "TypeScript", iconifyClass: "logos:typescript-icon" },
        { name: "Sanity", iconifyClass: "logos:sanity" },
        { name: "Tailwind", iconifyClass: "logos:tailwindcss-icon" },
      ],
    },
    {
      id: "6",
      featured: false,
      category: "Earlier projects",
      name: "Customer churn prediction",
      tagline: "Logistic regression vs KNN on telecom churn data",
      url: "https://github.com/Rakesh-git-2/Churn-prediction",
      demo_url: "",
      github_url: "https://github.com/Rakesh-git-2/Churn-prediction",
      description:
        "A 2021 notebook that predicts which telecom customers will leave, on 7,032 customers. Logistic regression reached 80.7% test accuracy and KNN 76.1%, against a 73% no-churn baseline.",
      highlights: [
        "17 customer features encoded for scikit-learn",
        "Both models compared on the same held-out third",
      ],
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "Scikit-Learn", iconifyClass: "logos:scikit-learn" },
        { name: "Pandas", iconifyClass: "logos:pandas-icon" },
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
      "Based in Dublin on Stamp 4, so no sponsorship is needed. Email is the fastest way to reach me.",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle: "My full work history and recommendations are on LinkedIn.",
    link: "https://www.linkedin.com/in/rakeshsrinivasan",
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
