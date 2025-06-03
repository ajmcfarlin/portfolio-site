'use client'
import React, { useState } from 'react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  preview: string
}

const Projects = () => {
  const allTags = ['All', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind']
  const [activeTag, setActiveTag] = useState('All')

  const projects: Project[] = [
    {
      title: "FieldFlyt",
      description: "FieldFlyt streamlines content collection for agencies through a form builder that creates custom templates matching WordPress structures. Agencies can design reusable content forms for clients, eliminating email chains and ensuring consistent data collection across projects.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Node.js", "Tailwind", "Personal"],
      link: "https://github.com/ajmcfarlin/FieldFlyt",
      preview: "https://demo.com"
    },
    {
      title: "Real Estate Calculator",
      description: "Create unique images using OpenAI's DALL-E API. Users can generate and share AI-created artwork.",
      image: "https://via.placeholder.com/600x400",
      tags: ["Next.js", "TypeScript", "Node.js", "Personal"],
      link: "https://github.com/ajmcfarlin/RealEstateCalculator",
      preview: "https://demo.com"
    },
    {
      title: "Home Repair AI",
      description: "Full-featured admin dashboard for managing products, orders, and customer data with real-time analytics.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "TypeScript", "Tailwind", "Personal"],
      link: "https://github.com/ajmcfarlin/HomeRepairApp",
      preview: "https://demo.com"
    },
    {
      title: "Accu-Steel",
      description: "Instant messaging application with features like group chats, file sharing, and message encryption.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Node.js", "Professional"],
      link: "https://github.com",
      preview: "https://demo.com"
    }
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <a href={project.preview} className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                        Live Demo
                      </a>
                      <a href={project.link} className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors">
                        Source Code
                      </a>
                    </div>
                  </div>
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