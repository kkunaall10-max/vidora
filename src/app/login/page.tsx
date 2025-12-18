"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">

      {/* Navbar - Responsive for auth pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-black">
              Vidora
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link href="/login" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                Login
              </Link>
              <Link href="/signup" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
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
            <div className="sm:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/login" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  Login
                </Link>
                <Link href="/signup" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  Sign Up
                </Link>
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md">
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 3D Forms Container */}
      <div className="container">
        <div className={`forms-wrapper ${!isLoginVisible ? 'change' : ''}`}>
          <form className="signin-form">
            <a href="#" className="signup-btn" onClick={(e) => { e.preventDefault(); setIsLoginVisible(false); }}>Sign Up</a>
            <h2>Sign In</h2>
            <div className="inputs-wrapper">
              <input type="text" placeholder="Your Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Sign In" />
            </div>
          </form>
          <form className="signup-form">
            <a href="#" className="signin-btn" onClick={(e) => { e.preventDefault(); setIsLoginVisible(true); }}>Sign In</a>
            <h2>Sign Up</h2>
            <div className="inputs-wrapper">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
