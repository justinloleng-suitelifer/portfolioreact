// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="flex flex-col-reverse md:flex-row items-center gap-8 py-12">
      <div className="flex-1"> 
        <h1 className="text-3xl md:text-4xl font-bold">
          Intern · MongoDB • Express • React • NodeJS
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl">
          I build accessible, responsive, and user-friendly web applications using modern technologies like React and Tailwind CSS.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">React</span>
          <span className="px-3 py-1 text-sm bg-gray-50 text-gray-700 rounded-full border border-gray-100">JavaScript</span>
          <span className="px-3 py-1 text-sm bg-pink-50 text-pink-700 rounded-full border border-pink-100">Tailwind</span>
          <span className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full border border-green-100">Accessibility</span>
        </div>

        <div className="mt-6 flex gap-3">
          <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Contact</a>
          <a href="/resume.pdf" className="px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50">Resume</a>
        </div>
      </div>

      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
        <img src="/profile.jpeg" alt="Justin Gerald Loleng" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
