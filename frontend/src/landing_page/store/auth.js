import { createContext, useContext, useState, useEffect } from "react";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authorizationToken = `Bearer ${token}`;

  // Function to store token in localStorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Function to check if user is logged in
  const isLoggedIn = !!token;

  // Function to logout user
  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  // Function to get user data from server
  const userAuthentication = async () => {
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
        LogoutUser(); // Logout if token is invalid
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check user authentication on component mount and token change
  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        token,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  
  return authContextValue;
};