/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Rakesh",
  logo_name: "rakesh()",
  nickname: "",
  full_name: "Rakesh Srinivasan",
  subTitle: "Full Stack Developer",
  resumeLink:
    "https://drive.google.com/file/d/1TMtbOqNaGP19Nj24_08549ueqpl93_Jt/view?usp=sharing",
  mail: "engineer_rakesh@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Rakesh-git-2",
  leetcode: "https://leetcode.com/Rakesh-git-2/",
  linkedin: "https://www.linkedin.com/in/rakesh-srinivasan",
  gmail: "rakeshs.mailer@gmail.com",
  twitter: "https://twitter.com/rakesh_s_7",
  instagram: "https://www.instagram.com/_rakesh_.s._",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in developing highly interactive Frontend/User Interfaces for web and mobile applications using technologies like ReactJS, React Native, Angular, Redux, and Django.",
        "⚡ Skilled in building responsive website frontends, ensuring optimal user experience across devices and screen sizes.",
        "⚡ Experienced in developing robust application backends using Node.js, Express.js, Django, and Loopback, ensuring scalability, security, and performance.",
        "⚡ Competent in integrating third-party services such as sanity.io, AWS, and Firebase, enhancing functionality and features of applications.",
        "⚡ Strong proficiency in programming languages including Python, JavaScript, TypeScript, and SQL, with a deep understanding of data structures and algorithms.",
        "⚡ Demonstrated ability in cloud-native deployment on platforms like GCP (Cloud Run, Cloud SQL, Cloud Build), AWS (EC2, S3, Lambda), and Firebase, leveraging Docker and Kubernetes for containerization and orchestration.",
        "⚡ Solid understanding of CI/CD pipelines, Git version control, and Unix systems, ensuring efficient development workflows and collaboration.",
      ],

      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#e61414",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#73ac68",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },

        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "simple-icons:dbt",
          style: {
            color: "#f55b50",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University College Dublin",
      subtitle: "Masters in Information Systems",
      logo_path: "ucdlogo.png",
      alt_name: "UCD",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Focused on Quantitative Data analysis, Web development(Django), UX Design, Project management, ML, AI and Ethics",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://ritchennai.org/",
    },
    {
      title: "Rajalakshmi institute of technology",
      subtitle: "Bachelor in Electronics and communication engineering",
      logo_path: "ritlogo.jpeg",
      alt_name: "RIT",
      duration: "2016 - 2020",
      descriptions: [
        " 7.23 CGPA",
        "⚡ Focused on OOPS, Data Structures, Operating systems, Computer Networking, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://ritchennai.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React - The complete guide",
      subtitle: "Udemy",
      logo_path: "react.png",
      certificate_link: "",
      alt_name: "react udemy",
      // color_code: "#aAAFED",
      color_code: "#000",
    },
    {
      title: "NodeJS - The complete guide",
      subtitle: "Udemy",
      logo_path: "node.png",
      certificate_link: "",
      alt_name: "nodejs udemy",
      // color_code: "#aAAFED",
      color_code: "#e39ff6",
    },
    {
      title: "The complete SQL Bootcamp",
      subtitle: "Udemy",
      logo_path: "node.png",
      certificate_link: "",
      alt_name: "sql udemy",
      // color_code: "#aAAFED",
      color_code: "#63c5da",
    },
    {
      title: "IBM Data Science",
      subtitle: "Coursera",
      logo_path: "Coursera.png",
      certificate_link:
        "https://coursera.org/api/certificate.v1/pdf/V2ASK485YPY4",
      alt_name: "coursera",
      // color_code: "#aAAFED",
      color_code: "#c9f0f0",
    },
    {
      title: "IITM - Master Data Science",
      subtitle: "Coursera",
      logo_path: "guvi.png",
      certificate_link:
        "https://drive.google.com/file/d/1LmFTtX3mjqdakzHzN_UlRUww8AcVfIBR/view?usp=sharing",
      alt_name: "coursera",
      // color_code: "#aAAFED",
      color_code: "#abf7b1",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: " ",
  description:
    "Software Engineer with 3.5 years of experience in fullstack web development and data engineering based in Dublin, Ireland. I am able to offer a wide range of expertise. My areas of experience include Python, Javascript, SQL, and frameworks such as Angular, React, and Django. I enjoy developing reliable as well as effective solutions. My professional experience spans across several areas, including full-stack e-commerce platform development, UI design, web scraping, cloud deployment, and data warehousing.",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer - Freelance",
          company: "FCTRZ technologies",
          company_url: "https://fctrz.in/",
          logo_path: "fctrz.webp",
          duration: "Apr 2023 - Present",
          location: "Chennai",
          description: `As a Freelance Software Engineer, I've worked on full-stack web development projects, specializing in building robust e-commerce platforms. Utilizing Angular for frontend development and Django for backend implementation, I've crafted consumer and seller-oriented solutions with a keen eye on quality assurance, achieving a test coverage of over 90%. Additionally, my proficiency in cloud-native deployment shines through as I successfully deployed backend systems on GCP Cloud Run, utilizing Docker containers to enhance scalability and efficiency. Through the implementation of a robust CI/CD pipeline using GCP Cloud Build, I've streamlined development and deployment processes, ensuring seamless project delivery.
            `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer",
          company: "Pipecandy technologies",
          company_url: "https://pipecandy.com/",
          logo_path: "pipecandy.png",
          duration: "Sep 2021 - Mar 2023",
          location: "Chennai",
          description: `During my tenure as a Python Developer, I worked on various projects aimed at enhancing SaaS applications. Notably, I designed, developed, and deployed React-based Chrome extensions, elevating SaaS application engagement by 30%. Additionally, I spearheaded projects in domain technology discovery and web scraping, showcasing proficiency in Node.js and Puppeteer. My expertise in cloud deployment, particularly on AWS EC2, and data warehousing initiatives further solidified my technical prowess, enabling efficient data processing and migration to Snowflake with the aid of DBT.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Graduate Engineer Trainee",
          company: "Samsung electronics",
          company_url: "https://www.samsung.com/in/about-us/company-info/",
          logo_path: "Samsung.png",
          duration: "Oct 2020 - Sep 2021",
          location: "Chennai",
          description:
            "During my time as a Graduate Engineer Trainee, I gained valuable experience in project and quality management. I successfully managed software projects and implemented automated systems for document revision, showcasing my project management skills. Additionally, I contributed to quality assurance processes by assisting with multiple audits, including ISO and NABL audits. These experiences laid a strong foundation for my subsequent roles, allowing me to develop into a versatile and skilled software engineer.", // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rakesh.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Linkedin.",
    link: "https://www.linkedin.com/in/rakesh-srinivasan",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Churn prediction ",
      url: "https://github.com/Rakesh-git-2/Churn-prediction",
      description:
        "Churn prediction using ML techniques like Logistic regression and KNN",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Scikit learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "Numpy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      id: "1",
      link: "",
      name: "react-medium-clone",
      url: "https://github.com/Rakesh-git-2/medium-blog/blob/master/README.md",
      description: "Medium blog clone using sanity.io and next.js.",
      languages: [
        {
          name: "Sanity.io",
          iconifyClass: "logos-sanity",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Next.js",
          iconifyClass: "logos-nextjs",
        },
      ],
    },
    {
      id: "2",
      name: "Authentication system",
      url: "https://github.com/Rakesh-git-2/node-login-system",
      description: "System to demonstrate authentication and authorization",
      languages: [
        {
          name: "Node JS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "logos:postgresql",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
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
