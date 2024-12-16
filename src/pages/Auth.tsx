import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const Auth = () => {
    // Your Google OAuth 2.0 Client ID
    const clientId = import.meta.env.VITE_CLIENT_ID;
  
    const handleLoginSuccess = (response: any) => {
        //window.location.href = '/create';
      console.log("Login Success:", response);
      window.location.href = '/create';
    };
  
    const handleLoginError = () => {
      console.log("Login Failed");
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