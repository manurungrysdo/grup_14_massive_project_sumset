// components/AppLayout.js
import React, { useState } from "react";
import Nav from "../pages/Nav"; // Sesuaikan path sesuai lokasi Nav.js
import LoginModal from "./LoginModal"; // Sesuaikan path sesuai lokasi LoginModal.js
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import "../css/notification.css"; // Tambahkan ini untuk mengimpor CSS notifikasi

function AppLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notifikasi akan hilang setelah 3 detik
  };

  return (
    <>
      <Nav isLoggedIn={isLoggedIn} setIsModalOpen={setIsModalOpen} handleLogout={handleLogout} />
      <LoginModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} handleLogin={handleLogin} />
      {showNotification && <div className="notification">Berhasil keluar!</div>}
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
