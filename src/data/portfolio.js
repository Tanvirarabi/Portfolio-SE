// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Content is taken from "Md Tanvir Arabi_CV.pdf".
// ---------------------------------------------------------------------------
import {
  SiCelery, SiCplusplus, SiCss, SiDjango, SiDotnet, SiGit, SiGithub, SiGitlab,
  SiHtml5, SiJavascript, SiKeras, SiMqtt, SiMysql, SiNodedotjs, SiNumpy,
  SiPandas, SiPhp, SiPostman, SiPython, SiPytorch, SiR, SiReact,
  SiScikitlearn, SiSelenium, SiTensorflow, SiTrello, SiWordpress,
} from 'react-icons/si'
import {
  FaBrain, FaBug, FaChartLine, FaCode, FaDatabase, FaLayerGroup,
  FaMasksTheater, FaServer, FaToolbox, FaTree,
} from 'react-icons/fa6'

const GITHUB = 'https://github.com/Tanvirarabi'
const repo = (name) => `${GITHUB}/${name}`

export const profile = {
  name: 'Md Tanvir Arabi',
  firstName: 'Tanvir',
  title: 'Software Engineer — AI/ML',
  roles: [
    'AI/ML Engineer',
    'Django Backend Developer',
    'Full-Stack Developer',
    'SQA Automation Tester',
  ],
  tagline:
    'I build Django and React systems, deep learning models and real-time IoT pipelines that solve real-world problems.',
  summary: [
    'I am a Software Engineer (AI/ML) at Datasoft Manufacturing & Assembly Limited and a Computer Science & Engineering student at American International University-Bangladesh (AIUB), majoring in Information Systems.',
    'I have a strong foundation in machine learning, data analysis and software development, and I work mainly with Python, Django, React, C++, HTML, CSS and JavaScript. I am passionate about advanced machine learning, deep learning and image processing, with a focus on real-world applications.',
  ],
  location: 'Bashundhara R/A, Dhaka, Bangladesh',
  email: 'tanvirarabi8@gmail.com',
  phone: '+8801784193946',
  phoneDisplay: '+880 1784-193946',
  photo: 'profile.jpg',
  resume: 'Md-Tanvir-Arabi-CV.pdf',
  currentRole: 'Software Engineer at Datasoft (DMA)',
  socials: {
    github: GITHUB,
    linkedin: 'https://www.linkedin.com/in/tanvirarabi/',
  },
}

export const stats = [
  { value: 3, suffix: '', label: 'Industry projects' },
  { value: 5, suffix: '', label: 'ERP modules built' },
  { value: 8, suffix: '+', label: 'Academic & QA projects' },
  { value: 1, suffix: '', label: 'Conference paper' },
]

export const highlights = [
  { icon: FaBrain, title: 'AI / ML & Deep Learning', text: 'Meta-models, NLP, and computer vision for identification and weight estimation.' },
  { icon: FaServer, title: 'Backend Engineering', text: 'Django REST APIs, Celery task queues, MQTT messaging and MySQL.' },
  { icon: FaLayerGroup, title: 'Full-Stack Delivery', text: 'React interfaces wired to Python services, from schema design to release.' },
  { icon: FaBug, title: 'Quality Assurance', text: 'Manual, API and UI automation testing with Selenium, Playwright and Postman.' },
]

export const experience = [
  {
    company: 'Datasoft Manufacturing & Assembly Limited',
    companyUrl: 'https://dma.com.bd/',
    role: 'Software Engineer — AI/ML',
    period: 'Feb 2026 — Present',
    location: 'Dhaka, Bangladesh',
    projects: [
      {
        name: 'Five ERP Modules: HR, PM, Procurement, Inventory & Accounting',
        tag: 'Full-Stack',
        tech: ['Django', 'React.js', 'REST API', 'MySQL'],
        points: [
          'Built five full-featured ERP modules (HR, Project Management, Procurement, Inventory and Accounting) with Django and React.js.',
          'Designed clean REST APIs and managed MySQL databases for fast, reliable data processing across all modules.',
          'Connected interactive React interfaces with Python backend services for seamless user workflows.',
          'Owned the full development lifecycle, from initial database design to final feature implementation.',
        ],
      },
      {
        name: 'Smart Dustbin Garbage Monitoring System',
        tag: 'Bangladesh Railway',
        tech: ['Python', 'Django', 'Celery', 'MQTT', 'Deep Learning'],
        points: [
          'Developed robust backend APIs with Django for seamless data management and integration with deep learning models.',
          'Implemented asynchronous task management with Celery to run long jobs such as data processing and model inference at scale.',
          'Used the MQTT protocol for real-time communication and IoT device integration, with fast and reliable message delivery between clients and the server.',
        ],
      },
      {
        name: 'Smart Livestock Management System',
        tag: 'Deep Learning',
        tech: ['Python', 'Django', 'Deep Learning', 'Computer Vision'],
        points: [
          'Developed a web-based system that identifies individual cows from their muzzle patterns.',
          'Built a deep learning model that estimates actual cow weight from images.',
          'Enabled practical farm management through automated identification and weight monitoring.',
        ],
      },
    ],
  },
]

export const projectCategories = [
  'All', 'Industry', 'Machine Learning', 'NLP', 'Data Science', 'Full-Stack', 'Database', 'QA & Testing',
]

export const projects = [
  {
    title: 'Five-Module ERP Suite',
    categories: ['Industry', 'Full-Stack'],
    featured: true,
    badge: 'Datasoft',
    description:
      'HR, Project Management, Procurement, Inventory and Accounting modules with REST APIs, MySQL and a React front end.',
    tech: ['Django', 'React.js', 'REST API', 'MySQL'],
    github: repo('Inventory-Control-System-ERP'),
  },
  {
    title: 'Smart Dustbin Garbage Monitoring System',
    categories: ['Industry'],
    featured: true,
    badge: 'Bangladesh Railway',
    description:
      'IoT garbage-monitoring platform with Django APIs, Celery workers for model inference and MQTT for real-time device messaging.',
    tech: ['Django', 'Celery', 'MQTT', 'Deep Learning'],
  },
  {
    title: 'Smart Livestock Management System',
    categories: ['Industry', 'Machine Learning'],
    featured: true,
    badge: 'Computer Vision',
    description:
      'Identifies individual cows by muzzle pattern and estimates live weight from images with a deep learning model.',
    tech: ['Python', 'Django', 'Deep Learning'],
  },
  {
    title: 'Dengue Risk Prediction Meta-Model',
    categories: ['Machine Learning'],
    badge: 'Published · ICECTE 2026',
    description:
      'Stacked meta-model over ANN, KNN, XGBoost and Decision Tree base learners that predicts dengue risk from 1,000 clinical and environmental records.',
    tech: ['PyTorch', 'scikit-learn', 'XGBoost', 'Pandas', 'Seaborn'],
    github: repo('Machine-Learning-Meta-Model-for-Dengue-Risk-Prediction'),
  },
  {
    title: 'Real vs Fake News Detection',
    categories: ['NLP', 'Machine Learning'],
    badge: 'NLP',
    description:
      'Tokenizes about 9,000 news articles (51% fake, 49% real) and classifies them with a Naive Bayes model.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: repo('Real-Fake-News-Detection-using-Naive-Bayes-Algorithm-NLP'),
  },
  {
    title: 'Imbalanced Dataset Preprocessing',
    categories: ['Data Science'],
    badge: 'R',
    description:
      'Cleans an imbalanced dataset by handling missing values and preparing it to be trainable for machine learning models.',
    tech: ['R', 'Data Cleaning'],
    github: repo('Data-Science-Approaches-for-Imbalanced-Dataset-Preprocessing'),
  },
  {
    title: 'Air Quality Index Web App',
    categories: ['Full-Stack'],
    badge: 'Web Technologies',
    description:
      'Air Quality Index web form with an HTML, CSS and JavaScript front end and a PHP and MySQL back end.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: repo('Air-Quality-Index-Webtechnologies'),
  },
  {
    title: 'Advanced DBMS Project',
    categories: ['Database'],
    badge: 'PL/SQL',
    description:
      'System for updating multiple employee records in Oracle 10g, with the full set of CRUD operations written in PL/SQL.',
    tech: ['Oracle 10g', 'PL/SQL'],
    github: repo('Advance-Database-Management-System-Project'),
  },
  {
    title: 'Hotel Management System',
    categories: ['Full-Stack'],
    badge: 'C# / .NET',
    description:
      'Web-form hotel system covering monitoring, booking, payment, admin and user panels, and staff records with CRUD.',
    tech: ['C#', '.NET', 'MySQL'],
    github: GITHUB,
  },
  {
    title: 'E-commerce Test Automation',
    categories: ['QA & Testing'],
    badge: 'Selenium',
    description:
      'Automated UI and functional tests for SauceDemo and EverShop with Selenium and Node.js, including cross-browser validation.',
    tech: ['Selenium', 'Node.js', 'JavaScript'],
    github: repo('Test-With-Selenium'),
  },
  {
    title: 'Manual & API Testing with Postman',
    categories: ['QA & Testing'],
    badge: 'Postman',
    description:
      'Test plans, test cases, environment setup, API test execution and structured bug reports.',
    tech: ['Postman', 'API Testing', 'Bug Reporting'],
    github: repo('SQA-Manual-and-API-Testing-using-Postman'),
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    icon: FaCode,
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: SiDotnet },
      { name: 'PHP', icon: SiPhp },
      { name: 'R', icon: SiR },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
    ],
  },
  {
    title: 'AI / ML & Data',
    icon: FaBrain,
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Keras', icon: SiKeras },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Seaborn', icon: FaChartLine },
      { name: 'XGBoost', icon: FaTree },
    ],
  },
  {
    title: 'Backend & Web',
    icon: FaServer,
    items: [
      { name: 'Django', icon: SiDjango },
      { name: 'React.js', icon: SiReact },
      { name: 'REST APIs', icon: FaLayerGroup },
      { name: 'Celery', icon: SiCelery },
      { name: 'MQTT', icon: SiMqtt },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: '.NET', icon: SiDotnet },
      { name: 'WordPress', icon: SiWordpress },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'Oracle 10g', icon: FaDatabase },
      { name: 'PL/SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Testing & QA',
    icon: FaBug,
    items: [
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Playwright', icon: FaMasksTheater },
      { name: 'Postman', icon: SiPostman },
      { name: 'API Testing', icon: FaBug },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: FaToolbox,
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'Trello', icon: SiTrello },
    ],
  },
]

export const domains = [
  'Machine Learning', 'Deep Learning', 'Data Science', 'Natural Language Processing',
  'Software Quality Assurance', 'Web Development',
]

export const softSkills = [
  'Leadership', 'Business Development', 'Risk Management', 'Analytical Problem-Solving',
  'Effective Communication', 'Team Collaboration', 'Adaptability & Quick Learning',
  'Conference Presenter (5th ICECTE, RUET)',
]

export const publications = [
  {
    title:
      'Forecasting Potential Dengue Infection from Clinical and Environmental Data Using a Machine Learning based Meta Model',
    venue: '5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE 2026)',
    host: 'Rajshahi University of Engineering & Technology (RUET)',
    date: 'Dec 2025',
    role: 'Author & Presenter',
    link: 'https://icecte.ruet.ac.bd/',
    code: repo('Machine-Learning-Meta-Model-for-Dengue-Risk-Prediction'),
  },
]

export const training = [
  {
    title: 'Manual & Automation Testing with Selenium, Playwright & Postman',
    provider: 'Ostad Platform',
    points: [
      'Automated UI, functional and non-functional testing, covering APIs, locators and databases.',
      'Wrote and filed structured bug reports.',
      'Validated e-commerce flows across browsers with Selenium and Node.js.',
    ],
    links: [
      { label: 'SauceDemo', url: 'https://www.saucedemo.com/' },
      { label: 'EverShop demo', url: 'https://demo.evershop.io/' },
      { label: 'Test-With-Selenium repo', url: repo('Test-With-Selenium') },
    ],
  },
]

export const education = [
  {
    school: 'American International University-Bangladesh (AIUB)',
    degree: 'B.Sc. in Computer Science & Engineering',
    detail: 'Major in Information Systems',
    period: '2022 — 2026',
    score: 'CGPA 3.24',
    courses: [
      'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Data Science',
      'Natural Language Processing', 'Network Security', 'Software Engineering', 'Web Technologies',
    ],
  },
  {
    school: 'Cantonment Public School & College, Rangpur',
    degree: 'Higher Secondary Certificate (HSC)',
    detail: 'Science',
    period: '2018 — 2020',
    score: 'GPA 5.00',
  },
  {
    school: 'Srijony High School, Joypurhat',
    degree: 'Secondary School Certificate (SSC)',
    detail: 'Science',
    period: '2016 — 2017',
    score: 'GPA 5.00',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
