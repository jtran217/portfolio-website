import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import campusBuddyImg from "@/public/campusbuddy.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science",
    location: "Calgary, AB",
    description: "Extra-Curriculars: TechStartUCalgary, Solar Car",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Frontend/UI Developer - Campus Buddy",
    location: "Calgary, AB",
    description:
      "Designed the logo and user interface (UI) for Campus Buddy, a mobile app aimed at connecting university students. Contributed to front-end development by implementing the designed pages",
    icon: React.createElement(FaReact),
    date: "September 2023  - June 2024",
  },
  {
    title: "Co-op Software Developer - SeisWare International Inc",
    location: "Calgary, AB",
    description:
      "Resolved software bugs, migrated the company's unit testing framework from NUnit to MSTest, and led the upgrade of the software from Qt 5.14 to Qt 5.15, enhancing functionality, performance, and stability.",
    icon: React.createElement(FaReact),
    date: "January 2024 - August 2024",
  },
  {
    title: "Contract Developer - Durandel",
    location: "Calgary, AB",
    description:
      "Led the project to convert a SaaS application from the Angular framework to Next.js and successfully deployed it on AWS.",
    icon: React.createElement(FaReact),
    date: "February 2024  - present",
  },
] as const;

export const projectsData = [
  {
    title: "Campus Buddy",
    description:
      "A React Native application connecting university student together through events,posts exclusive initiatives",
    tags: ["React Native", "Typescript", "Node.js", "Express", "Prisma", "AWS"],
    imageUrl: campusBuddyImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Spring Boot",
] as const;
