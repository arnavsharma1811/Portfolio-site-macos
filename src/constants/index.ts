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
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 2026",
    title: "PitchX — Building an AI Mock Interview Platform",
    image: "/images/pitchx-logo.png",
    link: "https://pitch-x-q5fb.vercel.app",
    readTime: "5 min read",
  },
  {
    id: 2,
    date: "Mar 2026",
    title: "FitCheck.dev — AI Resume Analyzer",
    image: "/images/fitcheck-logo.png",
    link: "https://fit-check-dev.vercel.app",
    readTime: "4 min read",
  },
  {
    id: 3,
    date: "Mar 2026",
    title: "System Design — Beginner Notes",
    image: "/images/system-design.png",
    link: "#",
    readTime: "3 min read",
  },
  {
    id: 4,
    date: "Feb 2026",
    title: "Cocktail Landing Page — Learning GSAP",
    image: "/images/cocktail-logo.png",
    link: "https://cocktail-page-dun.vercel.app",
    readTime: "3 min read",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "GSAP", "Framer Motion", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & Integrations",
    items: ["OpenAI API", "Puter.js", "Google Gemini"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/arnavsharma1811",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/arnav-sharma-4820b23bb/",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#E1306C",
    link: "https://instagram.com/arnvshrrma",
  },
  {
    id: 4,
    text: "FitCheck.dev",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://fit-check-dev.vercel.app",
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
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
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
    {
      id: 5,
      name: "PitchX — AI Mock Interview Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "PitchX.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PitchX is an AI-powered mock interview platform that helps you practice, simulate, and refine your interview skills.",
            "You speak your answers out loud and the AI listens, evaluates your responses, and gives structured feedback on communication, technical knowledge, problem solving, and more.",
            "Built with Next.js, Firebase, Google Gemini, and the Web Speech API — no paid voice services, fully functional.",
            "The idea came from wanting a tool that actually simulates a real interview rather than just showing you questions on a screen.",
          ],
        },
        {
          id: 2,
          name: "pitchx.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pitch-x-q5fb.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pitchx-screen.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/pitchx-screen.png",
        },
        {
          id: 5,
          name: "github.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/arnavsharma1811/pitchX",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 6,
      name: "FitCheck.dev — AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "FitCheck.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "FitCheck.dev is an AI-powered resume analyzer that tells you exactly how well your resume matches a job role.",
            "Upload your resume, paste a job description, and get an ATS score with detailed feedback on tone, structure, skills, and content — instantly.",
            "Built with React Router v7 and Puter.js for serverless AI and storage. No backend, no database setup — everything runs client-side.",
            "Built this because I wanted to know if my own resume was good enough before applying to internships.",
          ],
        },
        {
          id: 2,
          name: "fitcheck.dev",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fit-check-dev.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "fitcheck-screen.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/fitcheck-screen.png",
        },
        {
          id: 5,
          name: "github.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/arnavsharma1811/FitCheck.dev",
          position: "top-60 left-5",
        },
      ],
    },

    {
      id: 7,
      name: "Cocktail Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Cocktail.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A visually rich landing page built to learn GSAP animations and Framer Motion.",
            "Focused on smooth scroll animations, interactive UI elements, and performance optimization.",
            "This was a turning point in my frontend journey — where I went from building functional UIs to building beautiful ones.",
            "Built with React, GSAP, and Framer Motion.",
          ],
        },
        {
          id: 2,
          name: "cocktailpage.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cocktail-page-dun.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "cocktail-screen.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/cocktail-screen.png",
        },
        {
          id: 5,
          name: "github.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/arnavsharma1811",
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
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Arnav Sharma — Developer & Aspiring AI Engineer",
      image: "/images/me.png",
      description: [
        "Hey! I'm Arnav 👋, a 4th semester B.Tech CSE student at Barkatullah University Institute of Technology, Bhopal.",
        "I started my journey with C programming and have grown into building full-stack AI-powered web applications — PitchX and FitCheck.dev are my latest.",
        "I'm deeply interested in AI engineering and system design. My goal is to build AI-first products that solve real problems at scale.",
        "Currently looking for a software engineering internship where I can build fast, learn from strong engineers, and work on things that matter.",
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
      name: "Arnav_Sharma_Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
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
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };