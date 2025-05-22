export default function ProjectsWindow() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
      tech: ["Next.js", "MongoDB", "Stripe", "Redux"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A drag-and-drop task management application with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "A macOS-inspired portfolio website with interactive windows and dock navigation.",
      tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps, forecasts, and location search.",
      tech: ["JavaScript", "Weather API", "Leaflet", "Chart.js"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: false,
    },
    {
      title: "Recipe Finder App",
      description: "Search and save recipes with filtering by ingredients, dietary restrictions, and meal types.",
      tech: ["React Native", "Expo", "Food API", "AsyncStorage"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: false,
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts, set goals, and visualize progress with charts and statistics.",
      tech: ["Vue.js", "Node.js", "MongoDB", "D3.js"],
      image: "/placeholder.svg?height=150&width=300",
      link: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-navy-900 border-b-2 border-pink-300 pb-2">My Projects</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-800">Featured Projects</h3>
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
                  <h3 className="text-md font-semibold mb-2 text-navy-800">{project.title}</h3>
                  <p className="text-sm text-navy-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-navy-100 text-navy-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
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
        <h3 className="text-lg font-semibold mb-4 text-navy-800">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-navy-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-md font-semibold mb-1 text-navy-800">{project.title}</h3>
              <p className="text-sm text-navy-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-navy-100 text-navy-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-xs font-medium text-pink-600 hover:text-pink-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
