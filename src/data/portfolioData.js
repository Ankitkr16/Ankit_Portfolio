export const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "resume",
  "journey",
  "profiles",
  "contact"
];

export const hero = {
  name: "Ankit Kumar",
  role: "Data Engineer • Full-Stack Developer • Problem Solver",
  pitch:
    "I craft fast, elegant, and conversion-focused web experiences with strong engineering discipline and product thinking.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Download Resume"
};

export const about = {
  story:
    "I started with C++ problem solving, moved into JavaScript-based product building, and now blend frontend systems with practical backend and ML experimentation.",
  goals:
    "My goal is to build resilient products at scale, contribute to high-impact teams, and grow into a Data Engineer role.",
  profileImage:
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  learningTimeline: [
    { year: "Aug 2023", title: "Started Programming", detail: "Python fundamentals and Web Development Basics" },
    { year: "Jan 2024", title: "C and C++", detail: "C and C++ programming fundamentals" },
    { year: "Jun 2024", title: "React + Backend", detail: "React architecture, Node.js and Express APIs" },
    { year: "Feb 2025", title: "Data Structures & Algorithms", detail: "Improved understanding of data structures and algorithms" },
    { year: "Jun 2025", title: "Internships & Training", detail: "Industry projects, code reviews, deployment workflows" },
    { year: "Oct 2025", title: "ML Integration", detail: "Applied ML models into web products" }
  ]
};

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", logo: "https://skillicons.dev/icons?i=cpp" },
      { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
      { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
      { name: "Java", logo: "https://skillicons.dev/icons?i=java" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
      { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
      { name: "React", logo: "https://skillicons.dev/icons?i=react" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express", logo: "https://skillicons.dev/icons?i=express" },
      { name: "Kubernetes", logo: "https://skillicons.dev/icons?i=kubernetes" }
    ]
  },
  {
    title: "Data Science / ML",
    skills: [
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Machine Learning", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "Deep Learning", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql" },
      { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
      { name: "Docker", logo: "https://skillicons.dev/icons?i=docker" },
      { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
      { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Job Finder",
    image:
      "/job.png",
    description: "Job portal connecting students with recruiters, featuring resume scoring and analytics dashboards.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ankitkr16/Job-Portal",
    demo: "https://job-portal-server-kappa-five.vercel.app/",
    details:
      "Developed a full-stack job portal with AI-powered resume scoring, recruiter dashboards, and student analytics to optimize job search and application processes."
  },
  {
    id: 2,
    title: "CPU Scheduler",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    description: "Simulation of CPU scheduling algorithms with visualizations. Shows how processes are scheduled and CPU time is managed.",
    stack: ["React", "Tailwind", "Express"],
    github: "https://github.com/Ankitkr16/CPU-Schedular-Simulation",
    demo: "https://ankitkr16.github.io/CPU-Schedular-Simulation/",
    details:
      "Created a visual simulation of various CPU scheduling algorithms to demonstrate their behavior and performance."
  },
  {
    id: 3,
    title: "URL Shortener",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description: "URL shortening service with simple analytics and link tracking. Generates short links for easy sharing and monitoring.",
    stack: ["React", "Node", "MySQL"],
    github: "https://github.com/Ankitkr16/URL-SHORTNER",
    demo: "https://url-shortner-coral-psi.vercel.app/",
    details:
      "Built a URL shortening service that allows users to create short links and track click analytics, improving user experience and link management."
  },
  {
    id: 4,
    title: "WeatherAPI Dashboard",
    image:
      "/weather.png",
    description: "Weather analytics dashboard with real-time API data, interactive visualizations, and trend-focused reporting for fast weather insights.",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/Ankitkr16/Power-BI-Projects",
    demo: "https://github.com/Ankitkr16/Power-BI-Projects",
    details:
      "Built a dashboard-driven weather project that combines API ingestion, clean visual reporting, and easy-to-read trend summaries for day-to-day analysis."
  },
  {
    id: 5,
    title: "AI Heart Disease Checker",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    description: "ML-based health prediction app that estimates heart disease risk from patient inputs and presents simple, readable health insights.",
    stack: ["React", "Express", "Python", "Scikit-learn"],
    github: "https://github.com/Ankitkr16/Power-BI-Projects",
    demo: "https://github.com/Ankitkr16/Power-BI-Projects",
    details:
      "Developed a predictive healthcare prototype that connects frontend input forms with a trained ML model to generate risk predictions and support basic preventive awareness."
  },
  {
    id: 6,
    title: "Blogify",
    image:
      "/Blogify.png",
    description: "Full-stack blogging platform with post creation, editing, authentication, and a clean reading experience for authors and readers.",
    stack: ["React", "Node.js", "MySQL", "Docker"],
    github: "https://github.com/Ankitkr16/Blogify",
    demo: "https://blogify.vercel.app",
    details:
      "Built a modern blog platform focused on smooth content publishing, organized article management, and a responsive UI that works well across devices."
  }
];

export const certificates = [
  { title: "Data Science and ML", platform: "CipherSchools", link: "https://cipherschools.com", image: "/cipher.jpeg" },
  { title: "Cloud Computing", platform: "NPTEL", link: "https://nptel.ac.in", image: "/nptel.jpeg" },
  { title: "Data Structures", platform: "Apna College", link: "https://www.apnacollege.in", image: "/apna.jpeg" },
  { title: "Java Basics to Advanced", platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org", image: "/gfg.jpeg" }
];

export const resumeTimeline = [
  {
    lane: "Education",
    items: [
      "B.Tech in Computer Science- 8.10 CGPA -(2023-Present)",
      "12th - Holy Cross School- 82.4 % -(2021-2023)",
      "10th - J L N Memo Sr Sec School- 80.2 %  -(2019-2021)",
      "Focused on DSA, Web Development, and Data engineering"
    ]
  },
  {
    lane: "Experience",
    items: [
      "Built production-grade internal dashboards",
      "Collaborated with design and backend teams"
    ]
  },
  {
    lane: "Internships and Training",
    items: [
      "Data Science and ML - Training (Summer 2025)",
      "Learned Skills like Python, ML, Excel, Power BI."
    ]
  },
  {
    lane: "Skills Summary",
    items: ["C++, Python, Java, JavaScript", "React, Node.js, Express.js, MongoDB", "Data Science, Machine Learning, Pandas, NumPy, Scikit-learn"]
  }
];

export const journey = [
  { time: "2023", event: "Foundations in C++ and competitive coding" },
  { time: "2024", event: "Built first responsive websites" },
  { time: "2024", event: "Shipped React projects with API integrations" },
  { time: "2025", event: "Completed summer industrial training" },
  { time: "2026", event: "Starting learning AWS, Docker, ML, DL, and AI" }
];

export const profiles = [
  {
    name: "GitHub",
    stat: "60+ repositories",
    url: "https://github.com/Ankitkr16",
    logo: "https://cdn.simpleicons.org/github/ffffff"
  },
  {
    name: "LeetCode",
    stat: "350+ problems solved",
    url: "https://leetcode.com/u/Ankitkr2004/",
    logo: "https://cdn.simpleicons.org/leetcode/FFA116"
  },
  {
    name: "LinkedIn",
    stat: "1500+ connections",
    url: "https://linkedin.com/in/ankitkr16",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  },
  {
    name: "GeeksforGeeks",
    stat: "DSA articles and practice",
    url: "https://www.geeksforgeeks.org/profile/ankitkr2004",
    logo: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46"
  },
  {
    name: "HackerRank",
    stat: "5-star problem solving",
    url: "https://www.hackerrank.com/profile/ankitkr829301",
    logo: "https://cdn.simpleicons.org/hackerrank/00EA64"
  }
];

export const contactLinks = [
  { name: "Email", value: "ankitkr829301@gmail.com", href: "mailto:ankitkr829301@gmail.com" },
  { name: "GitHub", value: "github.com/Ankitkr16", href: "https://github.com/Ankitkr16" },
  { name: "LinkedIn", value: "linkedin.com/in/ankitkr16", href: "https://linkedin.com/in/ankitkr16" }
];
