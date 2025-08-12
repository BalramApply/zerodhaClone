import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import styles from './Signup.module.css';

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
 
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/auth/register`;

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   try {
  //     const response = await fetch(URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });

  //     const res_data = await response.json();
  //     console.log("res from server", res_data.extraDetails);

  //     if (response.ok) {
  //       // stored the token in localStorage
  //       storeTokenInLS(res_data.token);
  //       setUser({ username: "", email: "", phone: "", password: "" });
  //       toast.success("Registration successful");
  //       navigate("/");
  //     } else {
  //       toast.error(
  //         res_data.extraDetails ? res_data.extraDetails : res_data.message
  //       );
  //     }
  //   } catch (error) {
  //     console.log("register ", error);
  //     toast.error("Registration failed. Please try again.");
  //   }
  // };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        // stored the token in localStorage
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        
        // Enhanced success toast with custom styling
        toast.success("🎉 Registration successful!", {
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
          navigate("/");
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
            style: {
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#ffffff"
            }
          }
        );
      }
    } catch (error) {
      console.log("register ", error);
      
      // Enhanced error toast for network/server errors
      toast.error("Registration failed. Please check your connection and try again.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "linear-gradient(135deg, #00e1ffff 0%, #00f7ffff 100%)",
          color: "#ffffff"
        }
      });
    }
  };

  return (
    <>
      <section>
        <main>
          <div className={`section-registration ${styles.container}`}>
            <div className={`container grid grid-two-cols ${styles.devideCols}`}>

              {/* let tackle registration form  */}
              <div className={`registration-form ${styles.registrationContainer}`}>
                <h1 className="main-heading mb-3">register In Zerodha</h1>
                <br />

                <form onSubmit={handleSubmit} className={styles.formData}>
                  <div className={styles.usernameInput}>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div className={styles.emailInput}>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.phoneInput}>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div className={styles.passwordInput}>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className={`btn btn-submit ${styles.submitForm}`}>
                    Register Now
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

export default Signup;