import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
export const Auth = () => {
    // Your Google OAuth 2.0 Client ID
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const navigate = useNavigate();

    const handleLoginSuccess = (response: any) => {

      navigate('/');
      console.log("Login Success:", response);
    };
  
    const handleLoginError = () => {
      console.log("Login Failed");
      navigate('/')
    };
  
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>Google OAuth 2.0 Login</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>
      </GoogleOAuthProvider>
    );
  }
export default Auth