import React from 'react';
import styles from './LoginPage.module.css';


function LoginPage({ onLogin, onSwitchToSignup, username, setUsername, password, setPassword }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const validate = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(username)) {
      setError('Enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(e, { remember });
    }, 700);
  };

  return (
    <div className={styles.loginRoot}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>
          <span role="img" aria-label="tasks" style={{ fontSize: '2.2rem' }}>🗂️</span> Task Manager
        </h1>
        <p className={styles.desc}>
          Task Manager helps you to manage your daily tasks.
        </p>
      </div>
      <div className={styles.rightPanel}>
        <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
          <div className={styles.boxTitle}>Login</div>
          <input
            type="email"
            placeholder="Email Address"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className={styles.input}
            aria-label="Email Address"
          />
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className={styles.input}
              aria-label="Password"
            />
            <button
              type="button"
              className={styles.togglePw}
              onClick={() => setShowPassword(s => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className={styles.inlineRow}>
            <label className={styles.rememberLabel}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
            </label>
            <button type="button" className={styles.linkBtn} onClick={() => alert('Reset password flow pending')}>Forgot password?</button>
          </div>
          {error && <div className={styles.errorMsg} role="alert">{error}</div>}
          <button type="submit" className={styles.primaryButton} disabled={loading}>
            {loading ? <span className={styles.spinner} aria-label="Loading" /> : 'LOGIN'}
          </button>
          <div className={styles.noAccountText}>Don't have an account?</div>
          <button type="button" onClick={onSwitchToSignup} className={styles.secondaryButton}>Create New Account</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;