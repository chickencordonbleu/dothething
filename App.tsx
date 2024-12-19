import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

function App(): React.JSX.Element {
  const handleLogin = (credentials: { email: string }) => {
    console.log('Login attempted with:', credentials);
    // TODO: Implement actual login logic
  };

  return <LoginScreen onLogin={handleLogin} />;
}

export default App;