import React from 'react';
import styles from './SignupPage.module.css';

function SignupPage({ onSignup, onSwitchToLogin, username, setUsername, password, setPassword }) {
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSignup(e);
  };
  return (
    <div className={styles.signupRoot}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>
          <span role="img" aria-label="tasks" style={{ fontSize: '2.2rem' }}>🗂️</span> Task Manager
        </h1>
        <p className={styles.desc}>Task Manager helps you to manage your daily tasks.</p>
      </div>
      <div className={styles.rightPanel}>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.boxTitle}>Create a New Account</div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email Address"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.primaryButton}>Create Account</button>
          <div className={styles.haveAccountText}>Already have an account?</div>
          <button type="button" onClick={onSwitchToLogin} className={styles.secondaryButton}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;