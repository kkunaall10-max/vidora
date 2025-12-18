"use client";

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Add sign-in class after component mounts
    const container = document.getElementById('container');
    if (container) {
      setTimeout(() => {
        container.classList.add('sign-in');
      }, 200);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      // For demo purposes, using email format. In real app, you'd handle username to email mapping
      const email = username.includes('@') ? username : `${username}@example.com`;
      await signInWithEmailAndPassword(auth, email, password);
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
    const username = formData.get('username') as string;
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
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggle = () => {
    const container = document.getElementById('container');
    if (container) {
      container.classList.toggle('sign-in');
      container.classList.toggle('sign-up');
    }
    setIsSignIn(!isSignIn);
  };

  return (
    <div id="container" className="container">
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <form className="form sign-up" onSubmit={handleSignup}>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" name="username" placeholder="Username" required />
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" name="confirmPassword" placeholder="Confirm password" required />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Sign up"}
              </button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">Sign in here</b>
              </p>
              {error && <div style={{color: 'red', fontSize: '14px', marginTop: '10px'}}>{error}</div>}
            </form>
          </div>
        </div>
        {/* END SIGN UP */}

        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <form className="form sign-in" onSubmit={handleLogin}>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" name="username" placeholder="Username" required />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign in"}
              </button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">Sign up here</b>
              </p>
              {error && <div style={{color: 'red', fontSize: '14px', marginTop: '10px'}}>{error}</div>}
            </form>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}

      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        {/* END SIGN IN CONTENT */}

        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
}
