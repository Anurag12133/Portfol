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
  github,
} from "../assets";
import opticore from "../assets/opticore.png";
import Voxen_demo from "../assets/Voxen_demo.png";
import Payment_demo from "../assets/Payment_demo.png";
import opticore_demo from "../assets/opticore_demo.png";

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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Voxen",
    icon: github,
    iconBg: "#383E56",
    date: "Sep 2023 - Nov 2023",

    points: [
      "Tech Stack: Typescript, React, TailwindCSS, PostrgressSQL, Cloudflare, Prisma",
      "Technical Implementation: Voxen is Bloging website having CRUD operation.",
      "Description: Voxen includes a sophisticated content management system (CMS)",
      "Voxen allows users to write and format articles, add images and multimedia, and schedule or publish their content",
    ],
    source_code_link: "https://github.com/Anurag12133/Voxen",
  },
  {
    title: "Payment-time!",
    icon: github,
    iconBg: "#383E56",
    date: "Feb 2024 - Current",
    points: [
      "Tech stack: Frontend and Backend - Next.js (or Backend), Express - Auxilary backends, Turborepo, Postgres Database,Prisma ORM,Tailwind",
      "User login  Auth (In this case, probably email/phone), On ramp from bank",
      " Support transfers via phone number / name",
      "Merchants get an alert/notification on payment",
      "Merchant gets money offramped to bank every 2 days",
    ],
    source_code_link: "https://github.com/Anurag12133/Payment-project",
  },
  {
    title: "Opticore",
    icon: opticore,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Tech Stack: Typescript, React, TailwindCSS",
      "Technical Implementation: Opticore has a Signup/Signin authentication functionality",
      "Pure frontend project",
    ],
    source_code_link: "https://opticore.vercel.app/",
  },
];

const projects = [
  {
    name: "Payment-time!",
    description:
      "Web-based platform that allows users to send money receive money form various users. Also reflect the transactions of credited and debited amount. Similar to some money transfer portal",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "purple-text-gradient",
      },
    ],
    image: Payment_demo,
    source_code_link: "https://github.com/Anurag12133/Payment-project",
  },
  {
    name: "Voxen",
    description:
      "Voxen is web based and a sophisticated content management system (CMS)  Voxen allows users to write and format articles, add images and multimedia, and schedule or publish their content",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "postgressql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "purple-text-gradient",
      },
    ],
    image: Voxen_demo,
    source_code_link: "https://github.com/Anurag12133/Voxen",
  },
  {
    name: "Opticore",
    description:
      "A comprehensive fully frontened project made from scrath. It is responsive website and use framer-motion for smooth experience. It is just a practice project",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: opticore_demo,
    source_code_link: "https://github.com/Anurag12133/Opticore",
  },
];

export { services, technologies, experiences, projects };
