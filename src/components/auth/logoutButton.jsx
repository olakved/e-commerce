import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0;
  return (
    isAuthenticated && (
      <button
        onClick={() => logout()}
        className="px-7 py-3 border-2 border-light-green bg-white text-dark-green rounded-md hover:bg-light-green hover:text-white"
      >
        Log Out
      </button>
    )
  );
}

export default LogoutButton;
