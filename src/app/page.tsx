"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black py-32 px-4 overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
            Hire Expert<br />Video Editors
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Vidora is a focused platform built exclusively for video editors and clients — no noise, just quality work and real opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="glassmorphism-button px-12 py-4 rounded-full font-semibold text-black hover:scale-105 transition-all duration-500">
              Hire a Video Editor
            </button>
            <button className="glassmorphism-button px-12 py-4 rounded-full font-semibold text-black hover:scale-105 transition-all duration-500">
              Join as a Video Editor
            </button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-16 text-gray-200">Built for the modern creator economy</h2>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">VE</span>
              </div>
              <span className="text-gray-300 text-sm font-light">Video Editing</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">MG</span>
              </div>
              <span className="text-gray-300 text-sm font-light">Motion Graphics</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">RS</span>
              </div>
              <span className="text-gray-300 text-sm font-light">Reels & Shorts</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">YA</span>
              </div>
              <span className="text-gray-300 text-sm font-light">YouTube & Ads</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">CG</span>
              </div>
              <span className="text-gray-300 text-sm font-light">Color Grading</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-white transition-colors duration-300">
                <span className="text-white text-xl font-medium">PP</span>
              </div>
              <span className="text-gray-300 text-sm font-light">Post-Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-20">
            {/* For Clients */}
            <div>
              <h3 className="text-3xl font-semibold mb-10">For Clients</h3>
              <div className="space-y-8">
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">1</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Post your video project</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Share your project details and requirements with our community</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">2</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Browse verified editors</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Review portfolios and select the perfect match for your vision</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">3</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Hire, collaborate, and deliver</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Work together seamlessly to create amazing content</p>
                  </div>
                </div>
              </div>
            </div>
            {/* For Video Editors */}
            <div>
              <h3 className="text-3xl font-semibold mb-10">For Video Editors</h3>
              <div className="space-y-8">
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">1</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Create your professional profile</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Showcase your skills and build your reputation</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">2</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Apply to real video projects</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Find opportunities that match your expertise</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                  <span className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center mr-8 text-white text-xl font-medium group-hover:border-white transition-colors">3</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3">Get paid for your skills</h4>
                    <p className="text-gray-300 leading-relaxed font-light">Earn from projects you love doing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora Exists */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6">Built only for video editors</h3>
              <p className="text-gray-300 leading-relaxed font-light">A dedicated platform focused solely on video editing talent and opportunities.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6">No irrelevant freelance categories</h3>
              <p className="text-gray-300 leading-relaxed font-light">Streamlined experience without the noise of unrelated services.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6">Faster, cleaner hiring process</h3>
              <p className="text-gray-300 leading-relaxed font-light">Efficient matching and collaboration tools designed for creators.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6">Quality over quantity</h3>
              <p className="text-gray-300 leading-relaxed font-light">Premium focus on verified talent and exceptional work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Everything you need to work better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-10 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Professional Editor Profiles</h3>
              <p className="text-gray-300 leading-relaxed font-light">Showcase your skills, experience, and portfolio in one place.</p>
            </div>
            <div className="bg-gray-900/50 p-10 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Client & Editor Dashboards</h3>
              <p className="text-gray-300 leading-relaxed font-light">Manage projects, track progress, and communicate seamlessly.</p>
            </div>
            <div className="bg-gray-900/50 p-10 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Project Posting & Applications</h3>
              <p className="text-gray-300 leading-relaxed font-light">Post projects and receive applications from qualified editors.</p>
            </div>
            <div className="bg-gray-900/50 p-10 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Secure Communication</h3>
              <p className="text-gray-300 leading-relaxed font-light">Built-in messaging and file sharing for smooth collaboration.</p>
            </div>
            <div className="bg-gray-900/50 p-10 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Portfolio-focused hiring</h3>
              <p className="text-gray-300 leading-relaxed font-light">Make decisions based on actual work and proven results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Message */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-10">Made for creators, editors, and brands who take video seriously.</h2>
          <p className="text-2xl text-gray-300 leading-relaxed font-light">
            Vidora is built to support real talent, real projects, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Ready to start with Vidora?</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="glassmorphism-button px-12 py-5 rounded-full font-semibold text-black hover:scale-105 transition-all duration-500">
              Post a Video Project
            </button>
            <button className="glassmorphism-button px-12 py-5 rounded-full font-semibold text-black hover:scale-105 transition-all duration-500">
              Create Editor Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Vidora</h3>
              <p className="text-gray-300 leading-relaxed font-light">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-200">About</h4>
              <ul className="space-y-4 text-gray-300 font-light">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-200">Legal</h4>
              <ul className="space-y-4 text-gray-300 font-light">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-200">Follow Us</h4>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-400 font-light">
            <p>&copy; 2025 Vidora. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .glassmorphism-button {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 4px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.6s ease;
        }

        .glassmorphism-button:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            0 8px 32px rgba(255, 255, 255, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.3);
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
