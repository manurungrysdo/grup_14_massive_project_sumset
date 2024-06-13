// src/components/ExchangePoints.js
import React, { useState } from "react";
import "../css/ExchangePoints.css";

function ExchangePoints({ onSuccess, onClose, currentPoints }) {
  const [points, setPoints] = useState("");
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (points >= 1000 && wallet) {
      const exchangedPoints = parseInt(points);
      if (currentPoints >= exchangedPoints) {
        onSuccess(exchangedPoints, wallet);
        onClose(); // Menutup popup setelah berhasil
      } else {
        setError("Anda tidak memiliki cukup koin untuk ditukar.");
      }
    } else {
      setError("Minimal poin yang bisa ditukar adalah 1000 dan nomor e-Wallet harus diisi!");
    }
  };

  return (
    <div className="exchange-popup active">
      <h2>Tukar Poin</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="points">Berapa Koin yang Ingin Ditukar?</label>
          <input type="number" id="points" name="points" value={points} onChange={(e) => setPoints(e.target.value)} required placeholder="Masukkan jumlah koin" />
        </div>
        <div className="form-group">
          <label htmlFor="wallet">Nomor e-Wallet Anda</label>
          <input type="text" id="wallet" name="wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} required placeholder="Masukkan nomor e-Wallet" />
        </div>
        <ul>
          <li>*Penukaran Poin Hanya Bisa Dilakukan 1 Bulan 1x. </li>
          <li>*1000 poin = 1000 Rupiah </li>
          <li>*Minimal Poin Yang Bisa Ditukar 1000</li>
        </ul>
        <button type="submit">Tukar Sekarang</button>
      </form>
    </div>
  );
}

export default ExchangePoints;
