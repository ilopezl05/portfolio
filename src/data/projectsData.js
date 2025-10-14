let projectsData = [
  {
    projectId: 1,
    type: "Solo Project",
    title: "Portfolio Website",
    imageUrl: "/src/assets/images/portfolio_thumbnail.png",

    // Add multiple images for project gallery
    additionalImages: [
      "/src/assets/images/portfolio-detail-1.png",
      "/src/assets/images/portfolio-detail-2.png",
      "/src/assets/images/portfolio-mobile-view.png",
    ],

    description:
      "A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS.",

    // Extended description for the detail page
    detailedDescription: `
      A fully responsive portfolio website designed and built from scratch to showcase my work and skills. 
      The site features a modern, clean design with smooth animations and interactive elements. 
      Built with performance in mind, ensuring fast load times and optimal user experience across all devices.
    `,

    quote:
      "Designed and implemented to reflect my taste: responsive, fast, and easy to extend.",

    // Project metadata
    duration: "2 weeks",
    status: "Completed",
    completionDate: "2024-01-15",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "GitHub Actions",
    ],

    // Categorize technologies
    techCategories: {
      frontend: ["React", "Tailwind CSS", "JavaScript"],
      routing: ["React Router"],
      deployment: ["GitHub Actions"],
    },

    highlights: [
      "Responsive design for optimal viewing on all devices",
      "Interactive UI elements with smooth animations",
      "Easy to update and maintain with modular components",
    ],

    // Challenges faced and solutions
    challenges: [
      {
        challenge:
          "Implementing smooth page transitions without performance issues",
        solution:
          "Used CSS transitions and optimized React component lifecycle",
      },
      {
        challenge: "Ensuring consistent design across different screen sizes",
        solution:
          "Implemented mobile-first approach with Tailwind CSS breakpoints",
      },
    ],

    takeaways: [
      "Improved my skills in React and Tailwind CSS",
      "Learned best practices for building personal portfolios",
      "Gained experience in responsive web design",
    ],

    // Learning outcomes
    keyLearnings: [
      "Advanced React hooks and state management",
      "Tailwind CSS utility-first workflow",
      "Performance optimization techniques",
      "Git version control best practices",
    ],

    githubLink: "https://github.com/ilopezl05/portfolio",
    liveDemoLink: "",

    // Additional links
    figmaLink: "https://figma.com/your-design", // If you have designs
    videoDemoLink: "", // For screen recordings
    caseStudyLink: "", // If you wrote a detailed case study

    featured: true,

    // SEO and routing
    slug: "portfolio-website", // For clean URLs
    metaDescription:
      "Personal portfolio website built with React and Tailwind CSS",

    // Project scope
    role: "Full-stack Developer & Designer",
    teamSize: 1,

    // Related projects
    relatedProjects: [2, 3], // Reference other project IDs

    // Color scheme (for consistent theming)
    accentColor: "#3B82F6",

    // Next steps or future improvements
    futurePlans: [
      "Add dark/light mode toggle",
      "Implement internationalization (i18n)",
      "Add blog functionality",
    ],
  },
];

export { projectsData };
