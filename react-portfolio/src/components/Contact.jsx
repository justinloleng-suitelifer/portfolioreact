export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto text-center px-4">
                <h3 className="text-3xl font-bold mb-4 dark:text-white">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:justin@example.com"
                        aria-label="Email Justin"
                        className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 dark:focus:ring-offset-gray-950 transition-all"
                    >
                        Email me
                    </a>

                    <a
                        href="https://github.com/justinloleng"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Justin's GitHub"
                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 dark:focus:ring-offset-gray-950 transition-all"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://facebook.com/justinloleng"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Justin's Facebook"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-offset-gray-950 transition-all"
                    >
                        Facebook
                    </a>

                    <a
                        href="tel:09777871668"
                        aria-label="Call Justin"
                        className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 dark:focus:ring-offset-gray-950 transition-all"
                    >
                        09777871668
                    </a>
                </div>
            </div>
        </section>
    )
}
