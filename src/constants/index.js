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
  wipro,
  itcs,
  shopify,
  carrent,
  foodproj,
  resturantApp,
  jobit,
  tripguide,
  threejs,
  java,
  cpp,
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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
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
    name: "java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [

  {
    title: "Web Developer (Intern)",
    company_name: "ITCS Live",
    icon: itcs,
    iconBg: "#383E56",
    date: " April 2020 - Nov 2020",
    points: [
      "Developing and maintaining web applications using HTML CSS JS and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Front End Developer",
    company_name: "Wipro Technologies",
    icon: wipro,
    iconBg: "#E6DEDD",
    date: "July 2021- Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and redux , Redux saga , MUI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design , Building components and fixing different priority bugs.",
      "Engage in code reviews with other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Learned a lot from him amazing classmate and a good friend, We do enjoy the time.",
    name: "Gautam Chaudhary",
    designation: "ClassMate",
    company: "LPU MCA",
    image: "https://media.licdn.com/dms/image/D4D03AQHfU9ga9FOkAg/profile-displayphoto-shrink_200_200/0/1665247650041?e=1689811200&v=beta&t=pC1yjT-BrkoQMAUaV39F2ihXNviC3s4KcKsU73sAcWg",
  },
  {
    testimonial:
      "I've never met a web developer who is as awesome as him' i dont know how he does what he does.",
    name: "Mirza Shazeb Beg",
    designation: "COO",
    company: "LPU Grad",
    image: "https://media.licdn.com/dms/image/D4D03AQGhT1YtR1Agjg/profile-displayphoto-shrink_200_200/0/1677306705198?e=1689811200&v=beta&t=SO-qD9WSG6EzFvDOJWX2K456jBIbCYt9RyxpNiyEH6I",
  },
  {
    testimonial:
      "He optimized our website, our work efficiency increased by 50%. We can't thank him enough! to be with me when i need the most",
    name: "Pankaj Kumar Mohanta",
    designation: "CyberSecurity expert",
    company: "LPU Grad",
    image: "https://media.licdn.com/dms/image/D4D03AQHmwWzy9-9rOg/profile-displayphoto-shrink_200_200/0/1677305073013?e=1689811200&v=beta&t=yBKXvFILjzIfYMwDffcxGpZSUdRVK6xe_UKvJsuqDoQ",
  },
];

const projects = [
  {
    name: "Resturant App",
    description:
      "Web-based platform that allows users and admin screens ,they can search, buy, and look for the foods available in different resturant, providing a convenient and efficient solution for foods cravings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resturantApp,
    source_code_link: "https://github.com/9874sardar/Resturant--app",
  },
  {
    name: "Campus food Review",
    description:
      "Web application that allows users to search for food available in different resturant inside campuse, depending on their food preferance , where they should go and have a good time",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: foodproj,
    source_code_link: "https://github.com/9874sardar/foodFrontend",
  },
  {
    name: "MERN ecommerce (upcoming)",
    description:
      "A Ecommerce platform that allows users to buys products, and get recommendations for popular products with a sepreate admin auth and many more things.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TailWind",
        color: "orange-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
