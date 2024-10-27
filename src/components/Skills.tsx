const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      description: "Building beautiful, responsive user interfaces",
      skills: [
        { name: "React", icon: "⚛️", level: "Primary" },
        { name: "Next.js", icon: "▲", level: "Primary" },
        { name: "TypeScript", icon: "📘", level: "Primary" },
        { name: "Tailwind", icon: "🎨", level: "Primary" },
        { name: "JavaScript", icon: "💛", level: "Primary" },
        { name: "HTML/CSS", icon: "🎨", level: "Primary" },
      ]
    },
    {
      category: "Backend Development",
      description: "Creating robust server-side applications",
      skills: [
        { name: "Node.js", icon: "🟢", level: "Primary" },
        { name: "Python", icon: "🐍", level: "Secondary" },
        { name: "PostgreSQL", icon: "🐘", level: "Primary" },
        { name: "MongoDB", icon: "🍃", level: "Secondary" },
        { name: "Express", icon: "⚡", level: "Primary" },
        { name: "REST APIs", icon: "🔌", level: "Primary" },
      ]
    },
    {
      category: "Developer Tools",
      description: "Essential tools and technologies I use daily",
      skills: [
        { name: "Git", icon: "📚", level: "Primary" },
        { name: "Docker", icon: "🐳", level: "Secondary" },
        { name: "AWS", icon: "☁️", level: "Secondary" },
        { name: "VS Code", icon: "💻", level: "Primary" },
        { name: "Terminal", icon: "⌨️", level: "Primary" },
        { name: "Webpack", icon: "📦", level: "Secondary" },
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div 
              key={category.category}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-opacity duration-500"/>
              <div className="relative bg-gray-800 rounded-xl p-8 hover:transform hover:scale-[1.01] transition-all duration-300">
                <div className="text-xl font-semibold text-white mb-2">
                  {category.category}
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-xl" role="img" aria-label={skill.name}>
                        {skill.icon}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UI/UX Design", "Agile", "CI/CD", "Testing", 
              "Performance", "SEO", "Accessibility", "System Design"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full 
                         hover:bg-gray-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills