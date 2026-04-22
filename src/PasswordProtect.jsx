import { useState, useEffect } from 'react';

export default function PasswordProtect({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [hasAttempted, setHasAttempted] = useState(false);

  // Check if password is already stored in sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem('deck-authenticated');
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasAttempted(true);

    // Change this password to your desired password
    const correctPassword = 'vercel';

    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('deck-authenticated', 'true');
      setPassword('');
    } else {
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '20px',
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '320px',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          margin: '0 0 8px 0',
          color: '#000',
        }}>
          Access Required
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 16px 0',
        }}>
          Enter the password to view this presentation.
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            padding: '10px 12px',
            fontSize: '14px',
            border: hasAttempted && password === '' ? '2px solid #ef4444' : '1px solid #ddd',
            borderRadius: '6px',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => {
            if (hasAttempted && password === '') {
              e.target.style.borderColor = '#ef4444';
            }
          }}
        />

        {hasAttempted && password === '' && (
          <p style={{
            fontSize: '13px',
            color: '#ef4444',
            margin: '0',
          }}>
            Incorrect password. Please try again.
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
