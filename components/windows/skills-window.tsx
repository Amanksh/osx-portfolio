export default function SkillsWindow() {
  const skills = [
    {
      name: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
      ],
    },
    {
      name: "Tools & DevOps",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 },
      ],
    },
    {
      name: "Design & Other",
      items: [
        { name: "Figma", level: 75 },
        { name: "UI/UX", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "SEO", level: 65 },
        { name: "Performance", level: 85 },
      ],
    },
  ]

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-navy-900 border-b-2 border-pink-300 pb-2">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <div key={category.name} className="bg-white rounded-lg p-4 border border-navy-200 shadow-sm">
            <h3 className="text-md font-semibold mb-4 text-navy-800 border-b border-navy-100 pb-2">{category.name}</h3>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li key={skill.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-navy-700">{skill.name}</span>
                    <span className="text-xs text-navy-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-navy-600 to-pink-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-navy-50 rounded-lg border border-navy-100">
        <h3 className="text-md font-semibold mb-2 text-navy-800">Certifications</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            <span className="text-sm text-navy-700">AWS Certified Developer Associate</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            <span className="text-sm text-navy-700">Google Professional Cloud Developer</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            <span className="text-sm text-navy-700">MongoDB Certified Developer</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
