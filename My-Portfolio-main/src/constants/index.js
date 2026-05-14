const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 4, 2026",
    title:
      "Transformer Explained: What It Is , All the components and How It Works",
    image: "/images/transformer.webp",
    link: "https://dev.to/pranshu_tiwari_2886e14e9c/transformer-basics-2jlc",
  },
  {
    id: 2,
    date: "Jan 2, 2026",
    title: "useEffect Hook in React: A Comprehensive Guide with Examples",
    image: "/images/blog2.png",
    link: "https://useeffectreact.hashnode.dev/",
  },
  {
    id: 3,
    date: "Jan 30, 2026",
    title: "useContext Hook in React: A Comprehensive Guide with Examples",
    image: "/images/blog3.png",
    link: "https://usecontextreact.hashnode.dev/",
  },
];

const techStack = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI Design"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "FastAPI", "WebSockets (Real-time Applications)"],
  },
  {
    category: "Databases & ORMs",
    items: ["PostgreSQL", "Prisma ORM", "Database Design & Queries"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Machine Learning Fundamentals",
      "Neural Networks", 
      "Sentiment Analysis",
      "House Price Prediction (Regression)",
      "AI Chatbots",
      "PDF & Invoice Data Extraction",
      "Multimodal AI Concepts",
      "Agentic AI Systems",
      "NLP"
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Postman", "Authentication & Authorization"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Pranshu51?tab=repositories",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/pranshu__51",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "www.linkedin.com/in/pranshutiwarii",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me.jpeg",
  },
  {
    id: 2,
    img: "/images/meet.jpeg",
  },
  {
    id: 3,
    img: "/images/iit1.jpeg",
  },
  {
    id: 4,
    img: "/images/iit2.jpeg",
  },
   {
    id: 5,
    img: "/images/iit3.jpeg",
  },
   {
    id: 6,
    img: "/images/hack.jpeg",
  },
  {
    id: 7,
    img: "/images/hack1.jpeg",
  },
  {
    id: 8,
    img: "/images/hack2.jpeg",
  },
  
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 — Lovable Clone
    {
      id: 5,
      name: "Lovable Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Lovable Clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Lovable Clone is an AI-powered full-stack web app builder built with Next.js, Prisma, and Inngest.",
            "Describe what you want to build in plain English and watch it generate a fully working application in real time.",
            "Think of it like having an AI engineer who scaffolds, edits, and ships code alongside you — right from your browser.",
            "It features sandbox templates, modular components, custom hooks, and a prompt-driven code generation pipeline.",
          ],
        },
        {
          id: 2,
          name: "lovable-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Pranshu51/lovable-clone",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "lovable-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Pranshu51/lovable-clone",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 — AI Recruiter Copilot
    {
      id: 6,
      name: "AI Recruiter Copilot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Recruiter Copilot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Recruiter Copilot is an autonomous recruiting agent that screens candidates end-to-end without manual effort.",
            "It fetches resumes from Gmail, scores candidates using Gemini AI, schedules interviews on Google Calendar, and logs everything to Google Sheets.",
            "Think of it like a tireless HR assistant — reading applications, sending acceptance or rejection emails, and maintaining a live recruitment pipeline.",
            "Built with Python, Composio, LangChain, and the Gemini 2.5 Flash API for intelligent document understanding.",
          ],
        },
        {
          id: 2,
          name: "ai-recruiter-copilot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Pranshu51/AI-Recruiter-Copilot",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-recruiter-copilot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Pranshu51/AI-Recruiter-Copilot",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3 — Agentic AI
    {
      id: 7,
      name: "Agentic AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Agentic AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Agentic AI is a hands-on learning repository covering the full spectrum of modern AI agent development.",
            "It walks through tokenization, API integration, prompt engineering, RAG pipelines, LangGraph, memory agents, and multimodal image processing.",
            "Think of it as a complete AI engineering curriculum — from calling your first LLM to building autonomous agents that reason, remember, and act.",
            "Built with Python, LangChain, LangGraph, Ollama, FastAPI, HuggingFace, and the Claude CLI for real-world agentic workflows.",
          ],
        },
        {
          id: 2,
          name: "agentic-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Pranshu51/Agentic-AI",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "agentic-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Pranshu51/Agentic-AI",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4 — Invoice Extractor Chatbot
    {
      id: 8,
      name: "Invoice Extractor Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "Invoice Extractor Chatbot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Invoice Extractor Chatbot is an intelligent RAG-powered assistant that reads your PDF invoices and answers questions about them.",
            "Upload any invoice and ask things like 'What is the total amount?' or 'Who is the vendor?' — and get instant, accurate answers.",
            "Think of it as a smart accountant in your browser — parsing financial documents and having a natural conversation about the data inside.",
            "Built with Python, Streamlit, Google Gemini API, LangChain, PyPDF2, and FAISS for fast vector-based document retrieval.",
          ],
        },
        {
          id: 2,
          name: "invoice-extractor-chatbot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Pranshu51/Invoice-extractor-Chatbot",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "invoice-extractor-chatbot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Pranshu51/Invoice-extractor-Chatbot",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/me.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/meet.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/meet.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/hack1.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/hack1.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpeg",
      description: [
        "Hey! I’m Pranshu 👋, a B.Tech student in AI & Data Science who loves building full-stack web apps and scalable systems..",
        "I specialize in React, Node.js, and Next.js—with a knack for cloning real-world platforms to master system design, authentication, and backend workflows.",
        "I’m big on problem-solving, clean UI, and bringing ideas to life with modern web tech—whether it’s a real-time chat app, a coding practice platform, or an AI chatbot that extracts invoice data.",
        "Outside of coding, you’ll find me diving into machine learning concepts, exploring Agentic AI, or probably debugging that one tricky API integration late into the night 🧠⚡",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false, prevStyles: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };