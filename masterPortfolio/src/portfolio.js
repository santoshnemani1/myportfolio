// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Santosh Nemani's Portfolio",
  description:
    "A passionate full-stack developer on a mission to create extraordinary digital experiences. From front-end magic to back-end wizardry, I love bringing together creativity and technical skills to craft user-friendly applications that make a real impact.Let's build something amazing together!",
  og: {
    title: "Santosh Nemani Portfolio",
    type: "website",
    // url: "http://santhoshnemani.com/",
  },
};

//Home Page
const greeting = {
  title: "Santosh Nemani",
  logo_name: "Santhosh Nemani",
  nickname: "Full Stack Developer",
  subTitle:
    "A passionate full-stack developer on a mission to create extraordinary digital experiences. From front-end magic to back-end wizardry, I love bringing together creativity and technical skills to craft user-friendly applications that make a real impact.",
  resumeLink:
    "https://drive.google.com/file/d/14L8NLFaR6u0S0T17i5kuSa0jCfCZwTcr/view?usp=drive_link",

  githubProfile: "https://github.com/santoshnemani",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/santoshnemani",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/venkat-santosh-nemani-225918289/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "mail",
    link: "mailto: venemani@rivier.edu",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/santosh_chowdary_/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and ML projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ I excel in creating captivating user interfaces, employing Angular, React, and JavaScript to deliver exceptional user experiences.",
        "⚡ With a strong command of backend development, I build robust server-side solutions, utilizing frameworks like Node.js and Django to ensure efficient and secure functionality.",
        "⚡ I possess expertise in system design and architectural principles, enabling me to create scalable and adaptable applications that meet evolving business needs.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angularjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [,],
};

const degrees = {
  degrees: [
    {
      title: "Rivier University",
      subtitle: "Master's in Information Systems",
      logo_path: "rivier.png",
      alt_name: "Rivier University",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I am currently pursuing a Master's in Computer Science from Rivier University, where I am deepening my understanding of software development, artificial intelligence, and data science.",
        "⚡ This advanced program is equipping me with the skills and knowledge necessary to excel in the rapidly evolving field of computer science.",
      ],
      website_link: "https://www.rivier.edu/",
    },
    {
      title: "PRIST University, Chennai",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "prist.png",
      alt_name: "PRIST",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Gained a solid foundation in programming, algorithms, and systems design, along with hands-on experience in various programming languages and software development tools.",
        "⚡ Developed strong problem-solving abilities and technical skills essential for a successful career in computer science.",
      ],
      website_link: "https://www.prist.ac.in/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Microsoft Certified Azure Developer",
//       subtitle: "Microsoft",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://www.credly.com/badges/2e6b171c-611c-4226-bb44-1e7131fafa59/public_url",

//       color_code: "#8C151599",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "As a dedicated full-stack developer, I have gained valuable experience working on a range of projects across different industries. From building dynamic web applications to implementing robust backend solutions, I have had the privilege of collaborating with diverse teams and clients, each offering unique challenges and opportunities for growth. This exposure has not only expanded my technical skills but also sharpened my problem-solving abilities and adaptability in various work environments. Through these experiences, I have developed a deep understanding of industry best practices and a passion for delivering exceptional results.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs.png",
          duration: "July 2021 - June 2023",
          location: "Hyderabad, India",
          description:
            "⚡ Developer with a track record of incorporating solutions that were efficient, automated, and user-friendly. ⚡ Handled complex problems involving Data Science and Analytics, Server Programming and User Interface design prioritizing scalability and durability. ⚡ Develop, maintain and support application programs involving machine learning for various types of data such as image, text, and tabular using technologies like Python, Google’s Tensorflow, Keras, Pytorch, etc. ⚡ Analyze code for system testing and debugging.⚡ Writing new services for the application, isolating and rectifying issues. ⚡ Working in a team of programmers, coordinating and managing our tasks efficiently.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "NobleSoft Technologies",
          company_url: "",
          logo_path: "noblesoft.png",
          duration: "Nov 2020 - Feb 2021",
          location: "Hyderabad, Telangana",
          description:
            "Developed and implemented software solutions to improve efficiency and performance, using languages such as Python, Java, and C++. ⚡ Collaborated with cross-functional teams to design, test, and deploy new features, ensuring seamless integration with existing systems.⚡ Participated in code reviews and debugging sessions, identifying and resolving issues to maintain high code quality and functionality.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "From developing captivating web applications to implementing robust backend solutions, I have showcased my ability to deliver high-quality work. These projects serve as a testament to my dedication, attention to detail, and commitment to creating exceptional user experiences. Explore these projects to get a glimpse of my expertise and how I can contribute to future endeavors.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "happy.jpeg",
    description:
      "I would love to hear from you! Please feel free to reach out to me through the contact information provided below. Whether you have a question, a potential collaboration opportunity, or just want to connect, I am always eager to engage in meaningful conversations. I value open communication and prompt responses, so don't hesitate to get in touch. Let's connect and explore how we can work together to bring your ideas to life.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Nashua, New Hampshire",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/MPqXDfJUtMP9ufw2A",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  contactPageData,
};
