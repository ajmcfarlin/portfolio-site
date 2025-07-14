'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  preview?: string
}

const Projects = () => {
  const allTags = ['All', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PHP']
  const [activeTag, setActiveTag] = useState('All')

  const projects: Project[] = [
    {
      title: "FieldFlyt",
      description: "FieldFlyt streamlines content collection for agencies through a form builder that creates custom templates matching WordPress structures. Agencies can design reusable content forms for clients, eliminating email chains and ensuring consistent data collection across projects.",
      image: "/fieldflyt.png",
      tags: ["React", "Next.js", "Node.js", "Tailwind", "TypeScript", "Personal"],
      preview: "https://fieldflyt.alecjm.com"
    },
    {
      title: "Accu-Steel",
      description: "Custom estimate calculator for a commercial construction firm. Ported thousands of spreadsheet equations to JavaScript, creating a responsive dashboard that dealers can access on any device to generate and manage building estimates.",
      image: "/accusteel.png",
      tags: ["React", "Node.js", "TypeScript", "Professional"],
      preview: "https://accusteel.com/"
    },
    {
      title: "Vectair Systems",
      description: "Custom WordPress theme with complex product templates and a custom plugin 'DropPress' that automatically syncs safety data sheets to product post type resources in 26 different languages.",
      image: "/vectair.png",
      tags: ["PHP", "JavaScript", "SCSS", "Professional"],
      preview: "https://www.vectairsystems.com/"
    },
    {
      title: "Cuttys of Okoboji",
      description: "Custom WordPress theme with integrated membership and reservation system. Features complex business logic for reservation scheduling, automated billing, and comprehensive backend management for reservations.",
      image: "/cuttys.png",
      tags: ["PHP", "JavaScript", "SCSS", "Professional"],
      preview: "https://www.cuttysofokoboji.org/"
    },
  ]

  const filteredProjects = activeTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTag))

  return (
    <>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work in web development and design.
            </p>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeTag === tag 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article key={index} className="group relative bg-gray-800 rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {(project.preview || project.link) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center items-center">
                      {project.preview && (
                        <a href={project.preview} className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects