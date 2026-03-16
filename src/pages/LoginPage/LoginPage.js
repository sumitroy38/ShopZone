import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import './LoginPage.css';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Minimum 6 characters';
    return errs;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: '' }));
    setApiError('');
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    await new Promise(r => setTimeout(r, 900));

    const mockUser = { name: form.email.split('@')[0], email: form.email };
    login(mockUser);
    navigate('/');
    setLoading(false);
  };

  return (
    <div className="auth-page page-enter">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">Shop<span>Zone</span></div>
          <p className="auth-tagline">Welcome back, shop smarter 🛍️</p>
        </div>

        <h2 className="auth-title">Sign in to your account</h2>
        <p className="auth-subtitle">Enter your credentials to continue</p>

        {apiError && <div className="auth-error-msg">{apiError}</div>}

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-wrap">
            <input
              type={showPass ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              style={{ paddingRight: 44 }}
            />
            <button className="password-toggle" onClick={() => setShowPass(s => !s)} type="button">
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <p className="form-error">{errors.password}</p>}
        </div>

        <div style={{ textAlign: 'right', marginTop: -8, marginBottom: 20 }}>
          <a href="#" style={{ fontSize: '0.83rem', color: 'var(--accent)' }}>Forgot password?</a>
        </div>

        <button className="auth-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In →'}
        </button>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Create one free</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
