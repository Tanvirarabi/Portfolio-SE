// Simple client-side configuration (edit values as needed)
window.SITE = {
  name: "Md Tanvir Arabi",
  email: "tanvir@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  resume: "assets/resume.pdf"
};

const config = {
  author: "Md Tanvir Arabi",
  title: "Full Stack Developer & UI/UX Enthusiast",
  description: "A professional portfolio showcasing projects, skills, and experience in web development",
  contactEmail: "tanvir@example.com",
  
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    codepen: "https://codepen.io/yourusername"
  },
  
  skills: {
    frontend: ["React", "Vue.js", "Next.js", "Tailwind CSS", "JavaScript ES6+"],
    backend: ["Node.js", "Express", "Python", "Django", "REST APIs"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    devops: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    tools: ["Git", "Webpack", "Jest", "Figma", "VS Code"],
    mobile: ["React Native", "Flutter", "Cross-platform"]
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