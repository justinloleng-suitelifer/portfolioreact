import './App.css'
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-pink-50 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700">Welcome to My Portfolio</h1>
        <p className="text-center mt-4 text-lg text-gray-700">
          This is a simple portfolio website built with React and Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
            <span className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 text-2xl">
              💻
            </span>
            <span className="font-medium text-gray-800">Development</span>
            <span className="text-sm text-gray-500">React, JS, APIs</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
            <span className="w-12 h-12 rounded-full flex items-center justify-center bg-pink-100 text-pink-600 text-2xl">
              🎨
            </span>
            <span className="font-medium text-gray-800">Design</span>
            <span className="text-sm text-gray-500">UI/UX, Tailwind</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
            <span className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100 text-green-600 text-2xl">
              🚀
            </span>
            <span className="font-medium text-gray-800">Deploy</span>
            <span className="text-sm text-gray-500">Vercel, Netlify</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Primary</button>
          <button className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600">Accent</button>
          <button className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600">Success</button>
        </div>
      </div>
    </div>
  )
}