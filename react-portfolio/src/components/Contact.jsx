export default function Contact() {
    return (
        <section id="contact" className="py-8">
            <div className="max-w-2xl mx-auto text-center px-4">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Feel free to reach out for collaborations, freelance work, or just to connect!
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                        href="mailto:justin@example.com"
                        aria-label="Email Justin"
                        className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        Email me
                    </a>

                    <a
                        href="https://github.com/justinloleng"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Justin's GitHub"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://facebook.com/justinloleng"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Justin's Facebook"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        Facebook
                    </a>

                    <a
                        href="tel:09777871668"
                        aria-label="Call Justin"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        09777871668
                    </a>
                </div>
            </div>
        </section>
    )
}
