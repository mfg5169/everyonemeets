import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from '../assets/react.svg'; // Adjust the path if necessary
import { DatePickerWithRange } from './CreateMeet2';

export const Auth = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (response: any) => {
    setIsLoggedIn(true);
    navigate('/newmeet');
    console.log("Login Success:", response);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
    navigate('/');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        
        {!isLoggedIn ? (
          <div>
            <h1>Google OAuth 2.0 Login</h1>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </div>
        ) : (
          <div>
            <h1>Welcome to the App!</h1>
            <DatePickerWithRange />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Auth;