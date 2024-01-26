import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../config/url-manager";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        name: name,
        email: email,
        password: password,
      });

      toast.success(res.data);

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
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
            <h3>REGISTER</h3>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                placeholder="Full Name"
                id="name"
              />

              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                id="email"
              />

              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>

            <button type="submit">REGISTER</button>
            <div className="social"></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
