Name : Syed Muhammad Abdullah 

Problem no 1

The objective of this assessment is to evaluate the ReactJS developer's ability to integrate the Twitter API into a web application. The task involves implementing user authentication with Twitter, sending a one-time password (OTP) to the user's Twitter account, and granting access to the application's dashboard upon successful OTP verification.

Description:

. Import Statements
javascript
Copy code
import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
    • React: The core library for building the user interface.
    • Auth0Provider: A context provider from Auth0 that wraps your application, enabling authentication features.
    • useAuth0: A custom hook that allows access to Auth0’s authentication methods and user data within functional components.
2. AuthProvider Component
javascript
Copy code
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
    • AuthProvider: This component wraps its children with Auth0Provider, making authentication functionality available throughout the app.
    • Props:
        ◦ domain: This should be your Auth0 tenant domain (it looks like a placeholder here). It usually looks like YOUR_DOMAIN.auth0.com.
        ◦ clientId: Your Auth0 application's client ID. It seems to be a placeholder; ensure you use the actual client ID provided by Auth0.
        ◦ redirectUri: The URL to which users are redirected after authentication. window.location.origin returns the base URL of your app (e.g., http://localhost:3000).
3. Main App Component
javascript
Copy code
const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};
    • App Component: The main component of your application. It uses the AuthProvider to wrap the Main component, ensuring that authentication state and methods are available.
4. Main Component
javascript
Copy code
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
    • Main Component: Contains the main logic for rendering the UI based on the authentication state.
    • useAuth0 Hook:
        ◦ loginWithRedirect: A method to initiate the login process, redirecting the user to the Auth0 login page.
        ◦ user: Contains the authenticated user's information (e.g., name, picture).
        ◦ isAuthenticated: A boolean indicating whether the user is currently logged in.
        ◦ logout: A method to log the user out and redirect them to the specified URL.
    • Conditional Rendering:
        ◦ If the user is authenticated (isAuthenticated is true), the app displays a welcome message with the user's name and profile picture, along with a logout button.
        ◦ If the user is not authenticated, it shows a button to log in with Twitter.
5. Export Statement
javascript
Copy code
export default App;
    • Export: This makes the App component available for import in other parts of the application, such as index.js.
Summary
This React application leverages Auth0 to handle Twitter authentication seamlessly. It provides a straightforward interface where users can log in using their Twitter accounts. The application dynamically adjusts its content based on the user's authentication status, providing a personalized experience.


