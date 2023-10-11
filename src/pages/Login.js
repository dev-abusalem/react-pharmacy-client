import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./scss/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://medicine-server-l5vd.onrender.com/auth/login",
        {
          email: email,
          password: password,
        }
      );

      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      const userInfo = res.data.userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setTimeout(() => {
        navigate("/");
        window.location.reload(true);
      }, 5000);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <section className="login">
      <ToastContainer />
      <div className="login_overlay">
        <div className="login_wrapper">
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">LOGIN</button>
            <div class="social"></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
