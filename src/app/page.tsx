"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="bg-black py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-pulse opacity-20"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Hire Expert Video Editors.<br />
              Get Hired for Video Projects.
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
              Vidora is a focused platform built exclusively for video editors and clients — no noise, just quality work and real opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
                Hire a Video Editor
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
                Join as a Video Editor
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in animation-delay-600">
            {/* Placeholder for hero image/video */}
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center border border-gray-700 hover:border-white transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
              <span className="text-gray-400 text-lg animate-pulse">Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 px-4 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-8 animate-slide-up">Built for the modern creator economy</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center group animate-bounce animation-delay-100">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">VE</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Video Editing</span>
            </div>
            <div className="text-center group animate-bounce animation-delay-200">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">MG</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Motion Graphics</span>
            </div>
            <div className="text-center group animate-bounce animation-delay-300">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">RS</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Reels & Shorts</span>
            </div>
            <div className="text-center group animate-bounce animation-delay-400">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">YA</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">YouTube & Ads</span>
            </div>
            <div className="text-center group animate-bounce animation-delay-500">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">CG</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Color Grading</span>
            </div>
            <div className="text-center group animate-bounce animation-delay-600">
              <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-xl group-hover:text-gray-200 transition-colors">PP</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Post-Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div className="animate-slide-left">
              <h3 className="text-xl font-semibold mb-6">For Clients</h3>
              <div className="space-y-4">
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">1</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Post your video project</span>
                </div>
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">2</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Browse verified editors</span>
                </div>
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">3</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Hire, collaborate, and deliver</span>
                </div>
              </div>
            </div>
            {/* For Video Editors */}
            <div className="animate-slide-right">
              <h3 className="text-xl font-semibold mb-6">For Video Editors</h3>
              <div className="space-y-4">
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">1</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Create your professional profile</span>
                </div>
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">2</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Apply to real video projects</span>
                </div>
                <div className="flex items-center group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center mr-4 text-white group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300">3</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Get paid for your skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora Exists */}
      <section className="py-16 px-4 bg-gray-900 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left group hover:bg-black p-4 rounded-lg transition-all duration-300 animate-slide-left">
              <h3 className="text-lg font-semibold mb-4 group-hover:text-gray-200 transition-colors">Built only for video editors</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Dedicated platform for professional video editing talent.</p>
            </div>
            <div className="text-left group hover:bg-black p-4 rounded-lg transition-all duration-300 animate-slide-right">
              <h3 className="text-lg font-semibold mb-4 group-hover:text-gray-200 transition-colors">No irrelevant freelance categories</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Focused on video editing expertise only.</p>
            </div>
            <div className="text-left group hover:bg-black p-4 rounded-lg transition-all duration-300 animate-slide-left animation-delay-200">
              <h3 className="text-lg font-semibold mb-4 group-hover:text-gray-200 transition-colors">Faster, cleaner hiring process</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Quick matching and streamlined workflow.</p>
            </div>
            <div className="text-left group hover:bg-black p-4 rounded-lg transition-all duration-300 animate-slide-right animation-delay-200">
              <h3 className="text-lg font-semibold mb-4 group-hover:text-gray-200 transition-colors">Quality over quantity</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Designed for long-term creator growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-16 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Everything you need to work better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-bounce animation-delay-100 group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">Professional Editor Profiles</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Showcase your skills and experience</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-bounce animation-delay-200 group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">Client & Editor Dashboards</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Manage your projects easily</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-bounce animation-delay-300 group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">Project Posting & Applications</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Connect with the right opportunities</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-bounce animation-delay-400 group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">Secure Communication</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Communicate safely with team</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-bounce animation-delay-500 group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-200 transition-colors">Portfolio-focused hiring</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">Quality work gets recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Message */}
      <section className="py-16 px-4 bg-gray-900 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 animate-slide-up">Made for creators, editors, and brands who take video seriously.</h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
            Vidora is built to support real talent, real projects, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Ready to start with Vidora?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform">
              Post a Video Project
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform">
              Create Editor Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 relative">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <h3 className="text-lg font-semibold mb-4 group-hover:text-gray-200 transition-colors">Vidora</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vidora. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.8s ease-out forwards;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}
