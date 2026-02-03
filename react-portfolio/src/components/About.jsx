export default function About() {
  return (
    <section id="about" className="flex flex-col-reverse md:flex-row items-center gap-12 py-16">
      <div className="flex-1"> 
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Full-Stack Developer <br />
          <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">MERN Stack Specialist</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          I build accessible, responsive, and user-friendly web applications using modern technologies like React, Node.js, and Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">React</span>
          <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">JavaScript</span>
          <span className="px-3 py-1 text-sm bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300 rounded-full border border-pink-200 dark:border-pink-800">Tailwind</span>
          <span className="px-3 py-1 text-sm bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">Node.js</span>
        </div>

        <div className="mt-8 flex gap-3">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors shadow-sm">
            Get in Touch
          </a>
          <a href="/resume.pdf" className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
            Download Resume
          </a>
        </div>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-indigo-200 dark:border-indigo-800 shrink-0 shadow-lg">
        <img src="/profile.jpeg" alt="Justin Gerald Loleng" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
