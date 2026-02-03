// src/components/Projects.jsx
export default function Projects() {
  const projectList = [
    {
      title: "Webpath",
      desc: "An AI-Personalized Web-Based Learning Platform for Web Developers.",
      tech: "MERN Stack",
      link: "https://webpaths-vtjf.vercel.app"
    },
    {
      title: "SatisTrack",
      desc: "A Feedback Data Cleaning, Analysis, and Visualization System.",
      tech: "Laravel",
      link: "#"
    },
    {
      title: "Ecommerce-Flask",
      desc: "A Flask system for ecommerce with frontend and backend.",
      tech: "Python",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h3 className="text-3xl font-bold mb-10 dark:text-white">Featured Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <article key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 group">
            <h4 className="font-bold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{project.desc}</p>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-md font-medium">{project.tech}</span>
              <a href={project.link} className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">View →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
