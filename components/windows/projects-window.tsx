export default function ProjectsWindow() {
  const projects = [
    {
      title: "Digital Signage",
      description:
        "Engineered a comprehensive digital signage solution with a Next.js CMS dashboard, React.js media player, and Node.js/Express backend, enabling businesses to manage and display dynamic content across multiple screens.",
      tech: [
        "Next.js",
        "React",
        "Mongodb",
        "Redux",
        "Node.js",
        "Express",
        "S3",
        "EC2",
      ],
      image: "/projects/cms.png",
      link: "https://cms-orion.netlify.app/",
      featured: true,
    },
    {
      title: "TrustChain",
      description:
        "Developed an Ethereum-based supply chain solution by designing and deploying secure Solidity smart contracts to ensure data integrity and authenticity.",
      tech: [
        "Solidity",
        "Ethereum",
        "Web3.js",
        "Truffle",
        "Ganache",
        "Cursor",
        "JavaScript",
      ],
      image: "/projects/trustchain.png",
      link: "https://github.com/Amanksh/Trustchain",
      featured: true,
    },

    {
      title: "A Web based Media Player",
      description:
        "Created a lightweight React.js web-based media player optimized for Android TV browsers that renders high-quality content while minimizing resource consumption",
      tech: ["Reactjs", "Nodejs", "Mongodb", "Expressjs", "Socket.io"],
      image: "/placeholder.svg?height=150&width=300",
      link: "https://github.com/Amanksh/media-player",
      featured: false,
    },
    {
      title: "NoteShare",
      description:
        "Built a full-stack Note Sharing platform enabling students and teachers to upload and download notes in PDF format, with support for course and semester categorization.",
      tech: [
        "React",
        "Typescript",
        "Nodejs",
        "Mongodb",
        "Expressjs",
        "AWS",
        "Render",
      ],
      image: "/placeholder.svg?height=150&width=300",
      link: "https://spiffy-brioche-fb0067.netlify.app/",
      featured: false,
    },
    {
      title: "BuzzNova Media",
      description:
        "Developed a dynamic dashboard for a media company using Next.js, Typescript, Tailwindcss, AcertinitUI to provide real-time analytics and insights into their content performance.",
      tech: ["Nextjs", "Typescript", "Tailwindcss", "AcertinitUI"],
      image: "/placeholder.svg?height=150&width=300",
      link: "https://buzznova.media/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-navy-900 border-b-2 border-pink-300 pb-2">
        My Projects
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-800">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-navy-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-navy-100">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4">
                  <h3 className="text-md font-semibold mb-2 text-navy-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-navy-600 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-navy-100 text-navy-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-navy-800">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-navy-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-md font-semibold mb-1 text-navy-800">
                {project.title}
              </h3>
              <p className="text-sm text-navy-600 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-navy-100 text-navy-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-xs font-medium text-pink-600 hover:text-pink-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
