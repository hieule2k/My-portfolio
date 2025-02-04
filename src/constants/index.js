import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sass,
  smartOsc,
  CTH,
  MH,
  cobracase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Reactjs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sass",
    icon: sass,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "SmartOSC",
    icon: smartOsc,
    iconBg: "#383E56",
    date: "November 2021 - February 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS and other related technologies.",
      "Develop frontend skills and modern technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Reactjs-Nextjs Developer",
    company_name: "CTH",
    icon: CTH,
    iconBg: "#E6DEDD",
    date: "April 2022 - March 2024",
    points: [
      "Develop a user-friendly responsive interface.",
      "Implement the product tour feature.",
      "Add and edit words in the dictionary.",
      "Develop functionalities for the admin page.",
      "Implement data crawling from dictionary websites (e.g., Cambridge, Laban) for usage.",
      "Enable users to choose between English and Vietnamese languages.",
      "Implement a learning flow for children when they want to learn new words."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "MH Solutiuon",
    icon: MH,
    iconBg: "#383E56",
    date: "July 2024 - October 2024",
    points: [
      "Build and complete the open data project for Hậu Giang Province, including a CMS (Content Management System).",
      "Develop a pharmaceutical website for GPP (Pharmacy Management) and GDP (Distributor Management).",
      "Implement and refine features for sales, inventory management, ordering, and reporting.",
      "Fix bugs on the Noron social network.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Creative Phone Case",
    description:
      "Web-based platform that allows users to create and purchase custom phone cases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cobracase,
    source_code_link: "https://github.com/hieule2k/Cobra-case.git",
  },
  {
    name: "Todo App",
    description:
      "Web-based platform that allows users to create and drag and drop tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "DnD",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hieule2k/Trello-App.git",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
