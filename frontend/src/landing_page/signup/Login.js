import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import styles from './Login.module.css';

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS} = useAuth();

  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("login form", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);

        setUser({ email: "", password: "" });
        toast.success("🎉 Login successful! Welcome back.", {
          position: "top-right",
          autoClose: 3000,
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

        // Small delay before redirect for better UX
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
          // window.location.href = "http://localhost:3001";
        }, 5000);
        
      } else {
        // Enhanced error toast
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message,
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        console.log("invalid credential");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
      console.log(error);
    }
  };


  return (
    <>
      <section>
        <main>
          <div className={`section-registration ${styles.container}`}>
            <div className={`container grid grid-two-cols ${styles.divideCols}`}>
              
              {/* our main registration code  */}
              <div className={`registration-form ${styles.formContainer}`}>
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit} className={styles.formData}>
                  <div className={styles.emailInput}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div className={styles.passwordInput}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className={`btn btn-submit ${styles.sumitButton}`}>
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;