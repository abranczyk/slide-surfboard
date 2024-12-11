import { Carousel } from "../types/carousel";

export const carousels: Carousel[] = [
  {
    id: "1",
    title: "Introduction to Programming",
    description: "Learn the basics of programming with this comprehensive guide",
    topic: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    slides: [
      {
        id: "1-1",
        title: "What is Programming?",
        content: "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      },
      {
        id: "1-2",
        title: "Basic Concepts",
        content: "Learn about variables, data types, and control structures.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      },
    ],
  },
  {
    id: "2",
    title: "Web Development Fundamentals",
    description: "Master the core concepts of web development",
    topic: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    slides: [
      {
        id: "2-1",
        title: "HTML Basics",
        content: "Understanding the structure of web pages",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        id: "2-2",
        title: "CSS Styling",
        content: "Learn how to style your web pages",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      },
    ],
  },
];