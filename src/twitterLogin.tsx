// src/App.js
import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="https://x.com/home?lang=en"
      clientId="6706a58ad8075e3d97d2a5da"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

const Main = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <h1>Twitter Authentication with React</h1>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={loginWithRedirect}>Login with Twitter</button>
      )}
    </div>
  );
};

export default App;
