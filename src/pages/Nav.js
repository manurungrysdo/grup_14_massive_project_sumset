// pages/Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav({ isLoggedIn, setIsModalOpen, handleLogout }) {
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav data-aos="fade-down" data-aos-duration={2000}>
      <div className="logo">
        <Link to="/">
          <img src="/Images/LogoGizi.png" alt="LOGO" data-aos="fade-right" data-aos-duration={2000} data-aos-delay={1500} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li className="dropdown">
          <a href="#">Manfaat Pangan ▾</a>
          <div className="dropdown-content">
            <Link to="/pangan_sayur">Manfaat Sayur</Link>
            <Link to="/pangan_daging">Manfaat Daging</Link>
            <Link to="/pangan_buah">Manfaat Buah</Link>
            <Link to="/pangan_lainnya">Manfaat Lainnya</Link>
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Panduan Sehat ▾</a>
          <div className="dropdown-content">
            <Link to="/panduan_gizi">Panduan Gizi</Link>
            <Link to="/resep">Resep Sehat</Link>
          </div>
        </li>
        <li>
          <Link to="/about">Tentang Kami</Link>
        </li>
        {isLoggedIn ? (
          <Link to="/">
            <button className="btn1" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        ) : (
          <button className="btn1" onClick={openModal}>
            JurnalKids
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
