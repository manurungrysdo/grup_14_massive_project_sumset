// src/pages/JurnalKids.js
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Jurnalkids.css";
import ExchangePoints from "../components/ExchangePoints";
import Data_Anak from "./Data_Anak";

function JurnalKids() {
  const [showExchange, setShowExchange] = useState(false);
  const [showChildData, setShowChildData] = useState(false);
  const [points, setPoints] = useState(5000);
  const [childData, setChildData] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  const handleSuccessExchange = (exchangedPoints, wallet) => {
    setPoints(points - exchangedPoints);
    alert(`Penukaran berhasil! ${exchangedPoints} koin telah ditukarkan ke ${wallet}.`);
  };

  const handleClosePopup = () => {
    setShowExchange(false);
  };

  const handleCloseChildData = () => {
    setShowChildData(false);
  };

  const handleAddChildData = (data) => {
    const newData = { ...data, validated: false };
    setChildData([...childData, newData]);
    setShowChildData(false);
  };

  return (
    <>
      <div className="header-jurnal">
        <div className="header-content-jurnal">
          <div className="text-content-jurnal">
            <div>Selamat Datang di JurnalKids</div>
            <div className="text-content-jurnal-p">Membantu Anda dalam memantau asupan gizi anak dengan mudah dan akurat serta memastikan bahwa anak-anak mendapatkan nutrisi yang cukup untuk tumbuh dan berkembang dengan baik.</div>
            <button className="journal-button" onClick={() => setShowChildData(true)}>
              Isi Jurnal Hari Ini!
            </button>
          </div>
          <div className="image-content-jurnal">
            <img src="Images/nutrikid-1.png" alt="Ibu dan Anak" />
          </div>
        </div>
      </div>
      <main>
        <section className="profile-section-jurnal">
          <div className="profile-container-jurnal">
            <div className="profile">
              <img src="Images/no-picture.svg" alt="Profil Pengguna" />
              <div className="profile-info">
                <h2>Ines Saftri</h2>
                <span> 23 Tahun</span>
              </div>
            </div>
            <div className="month-buttons">
              <button>Bulan 1</button>
              <button>Bulan 2</button>
              <button>Bulan 3</button>
            </div>
          </div>
          <div className="points">
            <img src="Images/coins.png" alt="" />
            <span>{points}</span>
            <button className="redeem-button" onClick={() => setShowExchange(true)}>
              Tukarkan Poin
            </button>
          </div>
        </section>
        <section className="journal-section">
          <table>
            <thead>
              <tr>
                <th>Nama Anak</th>
                <th>Tanggal</th>
                <th>Usia Anak</th>
                <th>Makanan</th>
                <th className="kan_gizi">Kandungan Gizi</th>
                <th>Status Validasi</th>
              </tr>
            </thead>
            <tbody>
              {childData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.dob}</td>
                  <td>{data.age}</td>
                  <td>
                    Pagi: {data.breakfast}, Siang: {data.lunch}, Malam: {data.dinner}
                  </td>
                  <td className="kan_gizi">Sedang menganalisa data makanan</td>
                  <td>{data.validated ? "Tervalidasi" : "Belum Divalidasi"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">Catatan: Setiap pengisian jurnal dalam sehari, maka akan mendapatkan poin sebesar 150 apabila nutrisi anak terpenuhi.</p>
        </section>
        <section className="info-section">
          <div className="info-item">
            <img src="Images/i.png" alt="" />
            <div className="info-card">
              <div className="info-card-h3-jurnal">1. Memantau asupan gizi</div>
              <div className="info-card-p-jurnal">JurnalKids membantu orang tua dalam memantau asupan gizi, protein, karbohidrat, lemak, vitamin dan mineral anak yang dikonsumsi setiap hari.</div>
            </div>
          </div>
          <div className="info-item">
            <img src="Images/i.png" alt="" />
            <div className="info-card">
              <div className="info-card-h3-jurnal">2. Menganalisis kebutuhan gizi</div>
              <div className="info-card-p-jurnal">JurnalKids memberikan rekomendasi asupan gizi yang sesuai dengan kebutuhan gizi yang disarankan berdasarkan usia anak Anda.</div>
            </div>
          </div>
          <div className="info-item">
            <img src="Images/i.png" alt="" />
            <div className="info-card">
              <div className="info-card-h3-jurnal">3. Mendapatkan saran gizi</div>
              <div className="info-card-p-jurnal">Anda akan mendapatkan saran gizi yang tepat untuk memastikan anak Anda mendapatkan asupan gizi yang seimbang dan sesuai dengan kebutuhan.</div>
            </div>
          </div>
        </section>
      </main>
      {showExchange && <ExchangePoints onSuccess={handleSuccessExchange} onClose={handleClosePopup} currentPoints={points} />}
      {showChildData && <Data_Anak onClose={handleCloseChildData} onSubmit={handleAddChildData} />}
    </>
  );
}

export default JurnalKids;
