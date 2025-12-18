export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hire Expert Video Editors.<br />
              Get Hired for Video Projects.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vidora is a focused platform built exclusively for video editors and clients — no noise, just quality work and real opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Hire a Video Editor
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join as a Video Editor
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder for hero image/video */}
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center border border-gray-700">
              <span className="text-gray-400 text-lg">Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Built for the modern creator economy</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">VE</span>
              </div>
              <span className="text-gray-300">Video Editing</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">MG</span>
              </div>
              <span className="text-gray-300">Motion Graphics</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">RS</span>
              </div>
              <span className="text-gray-300">Reels & Shorts</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">YA</span>
              </div>
              <span className="text-gray-300">YouTube & Ads</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">CG</span>
              </div>
              <span className="text-gray-300">Color Grading</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">PP</span>
              </div>
              <span className="text-gray-300">Post-Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div>
              <h3 className="text-xl font-semibold mb-6">For Clients</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">1</span>
                  <span className="text-gray-300">Post your video project</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">2</span>
                  <span className="text-gray-300">Browse verified editors</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">3</span>
                  <span className="text-gray-300">Hire, collaborate, and deliver</span>
                </div>
              </div>
            </div>
            {/* For Video Editors */}
            <div>
              <h3 className="text-xl font-semibold mb-6">For Video Editors</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">1</span>
                  <span className="text-gray-300">Create your professional profile</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">2</span>
                  <span className="text-gray-300">Apply to real video projects</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white">3</span>
                  <span className="text-gray-300">Get paid for your skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora Exists */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">Built only for video editors</h3>
              <p className="text-gray-300">Dedicated platform for professional video editing talent.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">No irrelevant freelance categories</h3>
              <p className="text-gray-300">Focused on video editing expertise only.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">Faster, cleaner hiring process</h3>
              <p className="text-gray-300">Quick matching and streamlined workflow.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">Quality over quantity</h3>
              <p className="text-gray-300">Designed for long-term creator growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to work better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Professional Editor Profiles</h3>
              <p className="text-gray-300">Showcase your skills and experience</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Client & Editor Dashboards</h3>
              <p className="text-gray-300">Manage your projects easily</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Project Posting & Applications</h3>
              <p className="text-gray-300">Connect with the right opportunities</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Secure Communication</h3>
              <p className="text-gray-300">Communicate safely with team</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Portfolio-focused hiring</h3>
              <p className="text-gray-300">Quality work gets recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Message */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Made for creators, editors, and brands who take video seriously.</h2>
          <p className="text-lg text-gray-300">
            Vidora is built to support real talent, real projects, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start with Vidora?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Post a Video Project
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Create Editor Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vidora</h3>
              <p className="text-gray-400">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
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
