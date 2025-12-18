"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Hero Section */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Hire Expert Video Editors.<br />
              Get Hired for Video Projects.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Vidora is a focused platform built exclusively for video editors and clients — no noise, just quality work and real opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                Hire a Video Editor
              </button>
              <button className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                Join as a Video Editor
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder for hero image/video */}
            <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center border border-gray-800">
              <span className="text-gray-500 text-lg">Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-12 text-gray-300">Built for the modern creator economy</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">VE</span>
              </div>
              <span className="text-gray-400 text-sm">Video Editing</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">MG</span>
              </div>
              <span className="text-gray-400 text-sm">Motion Graphics</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">RS</span>
              </div>
              <span className="text-gray-400 text-sm">Reels & Shorts</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">YA</span>
              </div>
              <span className="text-gray-400 text-sm">YouTube & Ads</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">CG</span>
              </div>
              <span className="text-gray-400 text-sm">Color Grading</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-medium">PP</span>
              </div>
              <span className="text-gray-400 text-sm">Post-Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* For Clients */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">For Clients</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">1</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Post your video project</h4>
                    <p className="text-gray-400 leading-relaxed">Share your project details and requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">2</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Browse verified editors</h4>
                    <p className="text-gray-400 leading-relaxed">Review portfolios and select the perfect match</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">3</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Hire, collaborate, and deliver</h4>
                    <p className="text-gray-400 leading-relaxed">Work together seamlessly to create amazing content</p>
                  </div>
                </div>
              </div>
            </div>
            {/* For Video Editors */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">For Video Editors</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">1</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Create your professional profile</h4>
                    <p className="text-gray-400 leading-relaxed">Showcase your skills and build your reputation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">2</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Apply to real video projects</h4>
                    <p className="text-gray-400 leading-relaxed">Find opportunities that match your expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center mr-6 text-white text-lg font-medium mt-1">3</span>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Get paid for your skills</h4>
                    <p className="text-gray-400 leading-relaxed">Earn from projects you love doing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora Exists */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Built only for video editors</h3>
              <p className="text-gray-400 leading-relaxed">A dedicated platform focused solely on video editing talent and opportunities.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">No irrelevant freelance categories</h3>
              <p className="text-gray-400 leading-relaxed">Streamlined experience without the noise of unrelated services.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Faster, cleaner hiring process</h3>
              <p className="text-gray-400 leading-relaxed">Efficient matching and collaboration tools designed for creators.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Quality over quantity</h3>
              <p className="text-gray-400 leading-relaxed">Premium focus on verified talent and exceptional work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Everything you need to work better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Professional Editor Profiles</h3>
              <p className="text-gray-400 leading-relaxed">Showcase your skills, experience, and portfolio in one place.</p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Client & Editor Dashboards</h3>
              <p className="text-gray-400 leading-relaxed">Manage projects, track progress, and communicate seamlessly.</p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Project Posting & Applications</h3>
              <p className="text-gray-400 leading-relaxed">Post projects and receive applications from qualified editors.</p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Secure Communication</h3>
              <p className="text-gray-400 leading-relaxed">Built-in messaging and file sharing for smooth collaboration.</p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Portfolio-focused hiring</h3>
              <p className="text-gray-400 leading-relaxed">Make decisions based on actual work and proven results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Message */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-8">Made for creators, editors, and brands who take video seriously.</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Vidora is built to support real talent, real projects, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Ready to start with Vidora?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
              Post a Video Project
            </button>
            <button className="bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
              Create Editor Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Vidora</h3>
              <p className="text-gray-400 leading-relaxed">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-medium mb-6">About</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vidora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
