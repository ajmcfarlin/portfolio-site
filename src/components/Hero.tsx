export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-gray-800 to-blue-900">
      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Multiple glows for more ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-[0.15] blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-[0.15] blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full opacity-[0.1] blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 text-center lg:pt-32 lg:pb-36 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-gray-100">Building Digital</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 text-transparent bg-clip-text">
              Experiences.
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Full-stack developer crafting modern solutions with clean code 
            and pixel-perfect precision.
          </p>
          
          <div className="mt-10 flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="rounded-lg px-6 py-3 bg-indigo-600/90 text-white font-medium 
                         hover:bg-indigo-600 transition-all duration-200
                         hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="rounded-lg px-6 py-3 bg-gray-700/50 text-gray-200 
                         font-medium border border-gray-600
                         hover:bg-gray-700/80 transition-all duration-200
                         hover:shadow-lg hover:shadow-gray-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}