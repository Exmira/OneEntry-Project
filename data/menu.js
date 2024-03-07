export const menuItems = [
  {
    id: 1,
    title: "HOME",
    isActive: true,
    subMenuItems: [
      { id: 11, label: "Digital Agency", link: "/" },
      { id: 12, label: "Creative Agency", link: "/home-2" },
      { id: 13, label: "Design Studio", link: "/home-3" },
      { id: 14, label: "Digital Marketing", link: "/home-4" },
      { id: 15, label: "Modern Agency", link: "/home-5" },
      { id: 16, label: "Creative Studio", link: "/home-6" },
      { id: 17, label: "Startup Agency", link: "/home-7" },
      { id: 18, label: "Personal Portfolio", link: "/home-8" },
    ],
  },
  {
    id: 2,
    title: "PAGES",
    subMenuItems: [
      { id: 21, label: "About Page", link: "/about" },
      {
        id: 22,
        title: "Service Page",

        subMenuItems: [
          { id: 221, label: "Service Version 1", link: "/service" },
          { id: 222, label: "Service Version 2", link: "/service-2" },
          { id: 223, label: "Service Version 3", link: "/service-3" },
          {
            id: 224,
            label: "Service Details Page",
            link: "/service-details/2",
          },
        ],
      },
      { id: 23, label: "Team Page", link: "/team" },
      { id: 24, label: "Team Details Page", link: "/team-details/2" },
      { id: 25, label: "Pricing Page", link: "/pricing" },
      { id: 26, label: "FAQ Page", link: "/faq" },
      { id: 27, label: "Error Page", link: "/error" },
    ],
  },
  {
    id: 3,
    title: "PORTFOLIO",
    subMenuItems: [
      { id: 31, label: "Portfolio Masonary", link: "/project" },
      { id: 32, label: "Portfolio Pinterest", link: "/project-2" },
      { id: 33, label: "Portfolio Gallery", link: "/project-3" },
      { id: 34, label: "Portfolio Full Width", link: "/project-4" },
      { id: 35, label: "Portfolio Slider", link: "/project-5" },
      { id: 36, label: "Portfolio Interactive", link: "/project-6" },
      { id: 37, label: "Portfolio Details", link: "/project-details/2" },
    ],
  },
  {
    id: 4,
    title: "BLOG",
    subMenuItems: [
      { id: 41, label: "Blog Standard", link: "/blog" },
      { id: 42, label: "Blog 2 Column", link: "/blog-2" },
      { id: 43, label: "Blog Details", link: "/blog-details/2" },
    ],
  },
  {
    id: 5,
    title: "CONTACT",
    link: "/contact",
  },
];
