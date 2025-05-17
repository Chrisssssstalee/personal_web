import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto pt-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to my personal website! I'm passionate about [your interests/field].
              I love creating and building things that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-600">
                  Description of your first project. What did you build and what technologies did you use?
                </p>
                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-600">
                  Description of your second project. What did you build and what technologies did you use?
                </p>
                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-600">
                  Description of your third project. What did you build and what technologies did you use?
                </p>
                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="space-x-4">
              <a href="mailto:your.email@example.com" 
                 className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Email Me
              </a>
              <a href="https://linkedin.com/in/yourprofile" 
                 className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
