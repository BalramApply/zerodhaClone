import { useRef, useEffect } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const Logout = () => {
//   const { LogoutUser } = useAuth();
//   const navigate = useNavigate();
//   const hasLoggedOut = useRef(false);

//   useEffect(() => {
//     if (!hasLoggedOut.current) {
//       LogoutUser();
//       toast.success("Logged out successfully");
//       hasLoggedOut.current = true;
//       navigate("/");
//     }
//   }, [LogoutUser, navigate]);

//   return null;
// };

const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (!hasLoggedOut.current) {
      try {
        LogoutUser();
        
        // Enhanced success toast with custom styling
        toast.success("👋 Logged out successfully!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "#aef3fcff",
            color: "#0400ffff"
          }
        });

        hasLoggedOut.current = true;
        
        // Small delay before redirect for better UX
        setTimeout(() => {
          navigate("/");
        }, 5000);
        
      } catch (error) {
        console.error("Logout error:", error);
        
        // Enhanced error toast
        toast.error("Something went wrong during logout. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#00eeffff",
            color: "#0400ffff"
          }
        });
        
        // Still navigate even if there's an error to prevent being stuck
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  }, [LogoutUser, navigate]);

  return null;
};

export default Logout;
