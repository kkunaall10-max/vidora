"use client";

import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-12 items-center h-16 gap-4">
            {/* Logo - Takes 2 columns */}
            <div className="col-span-2 flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">Vidora</h1>
            </div>

            {/* Desktop Navigation Links - Takes 4 columns */}
            <div className="hidden lg:col-span-4 lg:flex items-center justify-start space-x-8">
              <a href="#" className="flex items-center justify-center w-32 h-9 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 font-medium rounded-md px-3">
                About Us
              </a>
              <a href="#" className="flex items-center justify-center w-40 h-9 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 font-medium rounded-md px-3">
                Become a Freelancer
              </a>
              <a href="#" className="flex items-center justify-center w-20 h-9 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 font-medium rounded-md px-3">
                Plans
              </a>
            </div>

            {/* Search Box - Desktop - Takes 4 columns, centered */}
            <div className="hidden lg:col-span-4 lg:flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for video editors..."
                    className="w-full pl-4 pr-10 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Buttons - Desktop - Takes 2 columns */}
            <div className="hidden lg:col-span-2 lg:flex items-center justify-end space-x-3">
              <div className="button-wrap w-24">
                <button className="px-4 py-2 h-9 w-full">
                  <span className="text-sm">Login</span>
                </button>
                <div className="button-shadow"></div>
              </div>
              <div className="button-wrap w-24">
                <button className="px-4 py-2 h-9 w-full">
                  <span className="text-sm">Sign Up</span>
                </button>
                <div className="button-shadow"></div>
              </div>
            </div>

            {/* Tablet Search - Show on md to lg, hide on lg+ */}
            <div className="hidden md:flex lg:hidden flex-1 justify-center px-4">
              <div className="w-full max-w-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Search */}
                <div className="px-3 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for video editors..."
                      className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  About Us
                </a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  Become a Freelancer
                </a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  Plans
                </a>

                {/* Mobile Auth Buttons */}
                <div className="px-3 py-2 space-y-2">
                  <button className="w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-gray-50">
                    Login
                  </button>
                  <div className="button-wrap">
                    <button className="w-full">
                      <span>Sign Up</span>
                    </button>
                    <div className="button-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
      {/* Dotted Grid Background */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dottedGrid)" />
      </svg>
      {/* Hero Section */}
      <section className="relative bg-white py-32 px-4 overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight text-black">
            Hire Expert<br />Video Editors
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Vidora is a focused platform built exclusively for video editors and clients — no noise, just quality work and real opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="button-wrap">
              <button>
                <span>Hire a Video Editor</span>
              </button>
              <div className="button-shadow"></div>
            </div>
            <div className="button-wrap">
              <button>
                <span>Join as a Video Editor</span>
              </button>
              <div className="button-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-16 text-gray-700">Built for the modern creator economy</h2>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">VE</span>
              </div>
              <span className="text-gray-600 text-sm font-light">Video Editing</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">MG</span>
              </div>
              <span className="text-gray-600 text-sm font-light">Motion Graphics</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">RS</span>
              </div>
              <span className="text-gray-600 text-sm font-light">Reels & Shorts</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">YA</span>
              </div>
              <span className="text-gray-600 text-sm font-light">YouTube & Ads</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">CG</span>
              </div>
              <span className="text-gray-600 text-sm font-light">Color Grading</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-gray-500 transition-colors duration-300">
                <span className="text-black text-xl font-medium">PP</span>
              </div>
              <span className="text-gray-600 text-sm font-light">Post-Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-black">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-20">
            {/* For Clients */}
            <div>
              <h3 className="text-3xl font-semibold mb-10 text-black">For Clients</h3>
              <div className="space-y-8">
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">1</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Post your video project</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Share your project details and requirements with our community</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">2</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Browse verified editors</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Review portfolios and select the perfect match for your vision</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">3</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Hire, collaborate, and deliver</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Work together seamlessly to create amazing content</p>
                  </div>
                </div>
              </div>
            </div>
            {/* For Video Editors */}
            <div>
              <h3 className="text-3xl font-semibold mb-10 text-black">For Video Editors</h3>
              <div className="space-y-8">
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">1</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Create your professional profile</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Showcase your skills and build your reputation</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">2</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Apply to real video projects</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Find opportunities that match your expertise</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white p-6 rounded-xl transition-all duration-300 border border-gray-200">
                  <span className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center mr-8 text-black text-xl font-medium group-hover:border-gray-600 transition-colors">3</span>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-black">Get paid for your skills</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Earn from projects you love doing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidora Exists */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-black">Why Vidora?</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-black">Built only for video editors</h3>
              <p className="text-gray-600 leading-relaxed font-light">A dedicated platform focused solely on video editing talent and opportunities.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-black">No irrelevant freelance categories</h3>
              <p className="text-gray-600 leading-relaxed font-light">Streamlined experience without the noise of unrelated services.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-black">Faster, cleaner hiring process</h3>
              <p className="text-gray-600 leading-relaxed font-light">Efficient matching and collaboration tools designed for creators.</p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-black">Quality over quantity</h3>
              <p className="text-gray-600 leading-relaxed font-light">Premium focus on verified talent and exceptional work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-black">Everything you need to work better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Professional Editor Profiles</h3>
              <p className="text-gray-600 leading-relaxed font-light">Showcase your skills, experience, and portfolio in one place.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Client & Editor Dashboards</h3>
              <p className="text-gray-600 leading-relaxed font-light">Manage projects, track progress, and communicate seamlessly.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Project Posting & Applications</h3>
              <p className="text-gray-600 leading-relaxed font-light">Post projects and receive applications from qualified editors.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Secure Communication</h3>
              <p className="text-gray-600 leading-relaxed font-light">Built-in messaging and file sharing for smooth collaboration.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Portfolio-focused hiring</h3>
              <p className="text-gray-600 leading-relaxed font-light">Make decisions based on actual work and proven results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Message */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-10 text-black">Made for creators, editors, and brands who take video seriously.</h2>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">
            Vidora is built to support real talent, real projects, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-black">Ready to start with Vidora?</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div className="button-wrap">
              <button>
                <span>Post a Video Project</span>
              </button>
              <div className="button-shadow"></div>
            </div>
            <div className="button-wrap">
              <button>
                <span>Create Editor Profile</span>
              </button>
              <div className="button-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-white border-t border-gray-200 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-black">Vidora</h3>
              <p className="text-gray-600 leading-relaxed font-light">Connecting video editors with creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-800">About</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-800">Legal</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-8 text-gray-800">Follow Us</h4>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-16 pt-10 text-center text-gray-500 font-light">
            <p>&copy; 2025 Vidora. All rights reserved.</p>
          </div>
        </div>
      </footer>

      </div>
    </div>
  );
}
