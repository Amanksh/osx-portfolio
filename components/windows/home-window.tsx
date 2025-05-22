export default function HomeWindow() {
  const personalInfo = {
    name: "Aman kushwaha",
    title: "Full Stack Developer",
    location: "Lucknow, Uttar Pradesh, India",
    bio: "I'm a Software Developer with a background in Full stack development, Devops, and Problem solving . I love to design, build, and automate complex systems and Contributing to Open Source Projects . As a developer I believe in collaboration and continuous learning ",
    education: [
      {
        degree: "Bachelor in Computer Science and Engineering",
        school: "Amity University",
        year: "2021-2025",
      },
    ],
    interests: [
      "Devops",
      "Full Stack Development",
      "Backend Development",
      "AI",
      "Cloud Computing",
    ],
  };

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-navy-100 flex items-center justify-center border-2 border-pink-300">
          <span className="text-4xl" style={{ imageRendering: "pixelated" }}>
            👨‍💻
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-navy-900">
            {personalInfo.name}
          </h1>
          <p className="text-navy-600">{personalInfo.title}</p>
          <p className="text-sm text-navy-500">{personalInfo.location}</p>
        </div>
      </div>

      <div className="bg-navy-50 rounded-lg p-4 mb-4 border border-navy-100">
        <h2 className="text-lg font-semibold text-navy-800 mb-2">About Me</h2>
        <p className="text-navy-700">{personalInfo.bio}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-navy-50 rounded-lg p-4 border border-navy-100">
          <h2 className="text-lg font-semibold text-navy-800 mb-2">
            Education
          </h2>
          <ul className="space-y-2">
            {personalInfo.education.map((edu, index) => (
              <li key={index} className="text-sm">
                <div className="font-medium text-navy-800">{edu.degree}</div>
                <div className="text-navy-600">{edu.school}</div>
                <div className="text-navy-500 text-xs">{edu.year}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-navy-50 rounded-lg p-4 border border-navy-100">
          <h2 className="text-lg font-semibold text-navy-800 mb-2">
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {personalInfo.interests.map((interest, index) => (
              <span
                key={index}
                className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto text-center">
        <p className="text-sm text-navy-600">
          Click on the dock icons below to explore more about me!
        </p>
      </div>
    </div>
  );
}
