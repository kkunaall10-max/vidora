"use client";

import Link from 'next/link';
import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard or home page
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard or home page
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <form className="signin-form" onSubmit={handleLogin}>
            <a href="#" className="signup-btn" onClick={(e) => { e.preventDefault(); setIsLoginVisible(false); }}>Sign Up</a>
            <h2>Sign In</h2>
            <div className="inputs-wrapper">
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="submit" value={loading ? "Signing In..." : "Sign In"} disabled={loading} />
            </div>
            {error && <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '10px'}}>{error}</div>}
          </form>
          <form className="signup-form" onSubmit={handleSignup}>
            <a href="#" className="signin-btn" onClick={(e) => { e.preventDefault(); setIsLoginVisible(true); }}>Sign In</a>
            <h2>Sign Up</h2>
            <div className="inputs-wrapper">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              <input type="submit" value={loading ? "Creating Account..." : "Sign Up"} disabled={loading} />
            </div>
            {error && <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '10px'}}>{error}</div>}
          </form>
        </div>

        {/* Google Sign In Button */}
        <div style={{position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)'}}>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '14px',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? "Signing in..." : "Continue with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}
