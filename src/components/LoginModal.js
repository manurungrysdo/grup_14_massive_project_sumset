import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function LoginModal({ isModalOpen, handleCloseModal, handleLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      handleLogin();
      navigate("/forum"); // Arahkan ke halaman Forum
    } else {
      setError("Email atau kata sandi salah. Silakan coba lagi.");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div id="loginModal" className="modal" data-aos="fade-up" data-aos-offset="500" data-aos-duration="1000">
          <div className="logo-login">
            <img src="Images/LogoGizi.png" alt="NutriKids Logo" />
          </div>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h1 className="h1-login">
              Log In Untuk Melanjutkan <span className="smiley">😊</span>
            </h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input type="text" value={email} name="username" placeholder="Masukkan Username/Email Anda" onChange={handleEmailChange} required />
              <input type="password" value={password} name="password" placeholder="Masukkan Kata Sandi Anda" onChange={handlePasswordChange} required />
              <a href="#" className="forgot-password">
                Lupa Kata Sandi?
              </a>
              <button type="submit" className="login-button">
                Masuk
              </button>
            </form>
            <div className="separator-login">
              <span>Atau Log In dengan</span>
            </div>
            <div className="social-login">
              <button className="google-login">G</button>
              <button className="facebook-login">f</button>
            </div>
            <div className="register-login">
              <span>Belum punya akun?</span>
              <a href="#" className="register-button">
                Daftar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
