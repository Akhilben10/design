import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "gm" && password === "exl") {
      localStorage.setItem("isLogedin", true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right, #8e44ad, #3498db)", // Purple to Blue gradient
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          marginBottom: "20px",
          color: "white",
        }}
      >
        GM
      </h1>
      <form
        style={{
          border: "solid 1px white", // White border for the form
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          color: "white", // White text color for the form
          textAlign: "center", // Center-align text
        }}
      >
        <h2 style={{ marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
          Login
        </h2>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "25px",
              marginBottom: "10px",
              color: "white", // White text color for the input field
              backgroundColor: "rgba(255, 255, 255, 0.3)", // White placeholder background with transparency
              border: "1px solid white", // White border for the input field
              outline: "none", // Remove the black inner border on focus
            }}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            style={{
              padding: "10px",
              borderRadius: "25px",
              marginBottom: "10px",
              color: "white", // White text color for the input field
              backgroundColor: "rgba(255, 255, 255, 0.3)", // White placeholder background with transparency
              border: "1px solid white", // White border for the input field
              outline: "none", // Remove the black inner border on focus
            }}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleLogin}
          className="loginButton"
          style={{
            padding: "10px",
            borderRadius: "25px",
            background: "linear-gradient(to right, #8e44ad, #3498db)",
            color: "white", // White text color for the button
            border: "1px solid white", // White border for the button
            outline: "none", // Remove the black inner border on focus
            // cursor: "pointer",
            // transition: "background 0.3s",
            // ":hover": {
            //   background: "linear-gradient(to right , #ffffff , #8e44ad)",
            // },
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
