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

      {/* Login Form */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Sign in to your Vidora account</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            {/* LOGIN FORM */}
            {isLoginVisible ? (
              <div id="login">
                <h2 className="text-center mb-2 text-3xl font-bold text-black">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6 text-sm">Sign in to your Vidora account</p>

                <form className="space-y-4">
                  <div className="field">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder="Email"
                    />
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="text-gray-600 hover:text-black">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <button className="button w-full">
                    <div className="wrap">
                      <p>
                        <span>✧</span>
                        <span>✦</span>
                        Sign In
                      </p>
                    </div>
                  </button>
                </form>

                <div className="toggle mt-6 text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <span
                    className="text-black cursor-pointer font-medium hover:underline"
                    onClick={() => setIsLoginVisible(false)}
                  >
                    Sign up
                  </span>
                </div>
              </div>
            ) : (
              /* SIGNUP FORM */
              <div id="signup">
                <h2 className="text-center mb-2 text-3xl font-bold text-black">Create Account</h2>
                <p className="text-center text-gray-600 mb-6 text-sm">Join us today</p>

                <form className="space-y-4">
                  <div className="field">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="field">
                    <input
                      type="email"
                      id="signup-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder="Email"
                    />
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      id="signup-password"
                      name="password"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      placeholder="Password"
                    />
                  </div>

                  <button className="button w-full">
                    <div className="wrap">
                      <p>
                        <span>✧</span>
                        <span>✦</span>
                        Sign Up
                      </p>
                    </div>
                  </button>
                </form>

                <div className="toggle mt-6 text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <span
                    className="text-black cursor-pointer font-medium hover:underline"
                    onClick={() => setIsLoginVisible(true)}
                  >
                    Login
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
