export interface Project {
  title: string;
  description: string;
  period: string;
  link: string;
  tech?: string[];
  problem?: string;
  solution?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  projects: Project[];
  certifications: Certification[];
  experience: Experience[];
  competencies: {
    programming: string[];
    ai_ml: string[];
    web: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
  };
  education: {
    school: string;
    degree: string;
    gpa: string;
    period: string;
  };
  interests: string[];
}

export const resumeData: ResumeData = {
  name: "Meghana Naga Rajeswari Pallem",
  title: "AI & ML Undergraduate | Aspiring Machine Learning Engineer | Passionate about Generative AI & Data Science",
  contact: {
    phone: "+91 89855 13022",
    email: "meghanapallem09@gmail.com",
    location: "Jangareddigudem, Andhra Pradesh, India",
    linkedin: "https://linkedin.com/in/meghana-naga-rajeswari-pallem-ab9950375",
    github: "https://github.com/PallemMeghana09"
  },
  summary: "AI & Machine Learning undergraduate with a strong foundation in Python, Machine Learning, Data Science, and Generative AI. Passionate about developing intelligent, data-driven solutions and building real-world AI applications. Skilled in model development, data preprocessing, and full-stack web technologies.",
  projects: [
    {
      title: "AI Health Assistant",
      description: "Developed an AI-powered healthcare assistant that provides symptom analysis, basic health recommendations, and medical information.",
      period: "Feb 2025 - Apr 2025",
      link: "#",
      tech: ["Python", "Machine Learning", "NLP"],
      problem: "Access to immediate health advice is often limited, and users may struggle to understand their symptoms before seeing a doctor.",
      solution: "Developed an AI-powered healthcare assistant that provides symptom analysis and basic health recommendations using ML algorithms."
    },
    {
      title: "Automated Trading Bot",
      description: "Built an automated trading bot using Python to analyze market trends, execute trades, and generate real-time trading insights.",
      period: "May 2025 - Jun 2025",
      link: "#",
      tech: ["Python", "Financial APIs", "Data Analysis"],
      problem: "Manual trading is time-consuming and often influenced by emotional decisions, leading to missed opportunities or losses.",
      solution: "Built an automated trading bot that analyzes market trends in real-time, executes trades based on logic, and provides performance insights."
    },
    {
      title: "Virtual AI Tutor",
      description: "Created an intelligent AI tutor platform that delivers personalized learning support, quiz generation, and doubt clarification using AI and NLP.",
      period: "Aug 2025 - Sep 2025",
      link: "#",
      tech: ["AI", "NLP", "Web Technologies"],
      problem: "Personalized learning is difficult to scale, and students often lack immediate feedback or doubt clarification.",
      solution: "Created an intelligent platform that delivers personalized learning support, generates quizzes, and clarifies doubts using NLP techniques."
    },
    {
      title: "Product Recommendation Agent",
      description: "Designed an AI-based recommendation system that suggests personalized products based on user preferences and browsing behavior.",
      period: "Oct 2025 - Dec 2025",
      link: "#",
      tech: ["Machine Learning", "Data Analytics"],
      problem: "Users are overwhelmed by choices in e-commerce, leading to decision fatigue and potentially lower conversion rates for businesses.",
      solution: "Designed an AI-based recommendation engine that suggests products based on user preferences and browsing behavior using collaborative filtering."
    },
    {
      title: "Virtual Travel Assistant",
      description: "Developed an AI-driven travel assistant that helps users with trip planning, destination recommendations, and budgeting.",
      period: "Jan 2026 - Feb 2026",
      link: "#",
      tech: ["AI", "Itinerary Optimization"],
      problem: "Trip planning is complex, involving budgeting, destination research, and itinerary management across multiple platforms.",
      solution: "Developed an AI-driven assistant that streamlines trip planning by providing destination recommendations and automated budgeting tools."
    },
    {
      title: "AI Game Companion Agent",
      description: "Built an AI-powered gaming assistant that provides in-game guidance, strategy recommendations, and interactive player support.",
      period: "Mar 2026 - May 2026",
      link: "#",
      tech: ["Intelligent Automation", "AI"],
      problem: "Modern games can be complex for new players, who may require real-time guidance and strategy support without breaking immersion.",
      solution: "Built a gaming assistant that provides in-game guidance and strategy recommendations using intelligent automation."
    }
  ],
  certifications: [
    { name: "Trust and Security with Google Cloud", issuer: "Simplilearn", date: "Dec 2025" },
    { name: "AWS Foundations: Machine Learning Basics", issuer: "Simplilearn", date: "Dec 2025" },
    { name: "Introduction to Artificial Intelligence", issuer: "Simplilearn", date: "Dec 2025" },
    { name: "Introduction to AWS Inferentia", issuer: "Simplilearn", date: "Dec 2025" }
  ],
  experience: [],
  competencies: {
    programming: ["Python", "JavaScript", "HTML5", "CSS3"],
    ai_ml: ["Machine Learning", "Artificial Intelligence", "NLP", "Data Preprocessing", "Model Training"],
    web: ["Frontend Development", "Full Stack Development", "Responsive Design", "REST API", "UI Development"],
    frameworks: ["React.js", "Node.js", "Flask", "FastAPI"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "AI Models", "N8n"]
  },
  education: {
    school: "Seshadri Rao Gudlavalleru Engineering College",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    gpa: "8.8",
    period: "Jul 2024 - Present"
  },
  interests: [
    "Artificial Intelligence & Machine Learning",
    "AI Automation & Workflow Development",
    "Full-Stack Web Development",
    "Cloud Computing & AWS",
    "Image Generation & Creative AI Tools"
  ]
};
