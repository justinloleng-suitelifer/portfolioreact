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
    <section id="projects" className="py-8">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <article key={idx} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-indigo-600">{project.tech}</span>
              <a href={project.link} className="text-gray-500 hover:underline">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
