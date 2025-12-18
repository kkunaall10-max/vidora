export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Expert Video Editors. Get Hired for Video Projects.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A dedicated platform where clients find professional video editors — fast, reliable, and verified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Hire a Video Editor
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 transition-colors">
                Join as Video Editor
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder for hero image/video */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Trusted by creators & brands</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🎬</span>
              <span className="text-gray-700">Video Editing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🎨</span>
              <span className="text-gray-700">Motion Graphics</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🎥</span>
              <span className="text-gray-700">Reels & YouTube</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">📈</span>
              <span className="text-gray-700">Ads & Short-form</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Vidora Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Vidora Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">For Clients</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                  <span className="text-gray-700">Post your video project</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                  <span className="text-gray-700">Get matched with editors</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                  <span className="text-gray-700">Hire & collaborate</span>
                </div>
              </div>
            </div>
            {/* For Editors */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">For Editors</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                  <span className="text-gray-700">Create profile</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                  <span className="text-gray-700">Apply to projects</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
                  <span className="text-gray-700">Get paid for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Only for video editors</h3>
              <p className="text-gray-600">Dedicated platform for professional video editing talent.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">No random freelancers</h3>
              <p className="text-gray-600">Verified experts with proven portfolios.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Faster hiring</h3>
              <p className="text-gray-600">Quick matching and streamlined process.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality-focused creators</h3>
              <p className="text-gray-600">Built for modern content workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Editor Profiles</h3>
              <p className="text-gray-600">Showcase your skills and experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Dashboard</h3>
              <p className="text-gray-600">Manage your projects easily</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Messaging</h3>
              <p className="text-gray-600">Communicate safely with team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Built for creators</h2>
          <p className="text-lg text-gray-600 mb-4">Community-first platform for modern content workflows</p>
          <p className="text-gray-500">Made for video editors and content creators</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to hire or get hired?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Post a Project
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Create Editor Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vidora</h3>
              <p className="text-gray-400">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vidora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
