import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./scss/login.scss";
import { BASE_URL } from "../config/url-manager";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });

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
      console.log(error);
    }
  };

  return (
    <section className="login">
      <ToastContainer />
      <div className="login_overlay">
        <div className="login_wrapper">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">LOGIN</button>
            <div className="social"></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
