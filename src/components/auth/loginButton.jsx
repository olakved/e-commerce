import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="px-7 py-3 border-2 border-light-green bg-white text-dark-green rounded-md hover:bg-light-green hover:text-white"
      >
        Sign In
      </button>
    )
  );
}

export default LoginButton;
