// Simple client-side configuration (edit values as needed)
window.SITE = {
  name: "Md Tanvir Arabi",
  email: "tanvirarabi8@gmail.com",
  github: "https://github.com/Tanvirarabi",
  linkedin: "https://www.linkedin.com/in/tanvirarabi/",
  twitter: "https://twitter.com/tanvirarabi",
  resume: "assets/resume.pdf"
};

const config = {
  author: "Md Tanvir Arabi",
  title: "Full Stack Developer & AL/ML  Enthusiast",
  description: "A professional portfolio showcasing projects, skills, and experience in web development",
  contactEmail: "tanvirarabi8@gmail.com",

  socialLinks: {
    github: "https://github.com/Tanvirarabi",
    linkedin: "https://www.linkedin.com/in/tanvirarabi/",
    twitter: "https://twitter.com/tanvirarabi",
    codepen: "https://codepen.io/tanvirarabi"
  },
  
  skills: {
    frontend: ["React","Tailwind CSS", "JavaScript ES6+"],
    backend: ["Node.js", "Python", "Django", "REST APIs"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    devops: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    tools: ["Git", "Webpack", "Jest", "Figma", "VS Code"],
    
  },
  
  theme: {
    primaryColor: "#6366f1",
    secondaryColor: "#a855f7",
    accentColor: "#ec4899",
    darkBg: "#0f172a"
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}