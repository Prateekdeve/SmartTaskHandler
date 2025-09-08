import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    // Placeholder: Add real login logic here
    alert('Logged in as ' + username);
  };

  const handleSignup = e => {
    e.preventDefault();
    // Placeholder: Add real signup logic here
    alert('Account created for ' + username);
    setPage('login');
  };

  return (
    <div className="container">
      {page === 'login' ? (
        <LoginPage
          onLogin={handleLogin}
          onSwitchToSignup={() => setPage('signup')}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <SignupPage
          onSignup={handleSignup}
          onSwitchToLogin={() => setPage('login')}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}

export default App;