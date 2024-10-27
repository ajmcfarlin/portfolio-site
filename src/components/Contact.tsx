'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Add your form submission logic here
    // For now, let's just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    // You could add a success message here
  }

  return (
    <>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Looking to collaborate? Feel free to reach out.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 
                             text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                             transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 
                             text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                             transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 
                           text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                           transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 
                           text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                           transition-colors duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600
                           text-white font-medium hover:from-blue-600 hover:to-indigo-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                           transform transition-all duration-200
                           ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact