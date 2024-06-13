import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Pangan.css";

function Pangan_buah() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="image-container">
        <img src="Images/manfaat_buah.png" alt="Background Image" />
        <div className="text-overlay">
          <h1 data-aos="zoom-up" data-aos-duration={2000}>
            Tingkatkan Kesehatan Anda <br data-aos="zoom-up" data-aos-duration={1000} /> dengan{" "}
            <b data-aos="zoom-up" data-aos-duration={2000}>
              Manfaat Buah
            </b>{" "}
            Segar!
          </h1>
        </div>
      </div>
      <div className="manfaat-sayuran">
        <h4 data-aos="zoom-in" data-aos-delay={500}>
          Manfaat Buah
        </h4>
        <h1 data-aos="zoom-in" data-aos-delay={500}>
          Informasi Gizi Buah Untuk Anda
        </h1>
        <ul className="manfaat-sayuran-list">
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay="">
            <a href="BawangM">
              <img src="Images/Apel.png" alt="apel" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={200}>
            <a href="BawangM">
              <img src="Images/Lemon.png" alt="lemon" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={400}>
            <a href="BawangM">
              <img src="Images/Anggur.png" alt="Anggur" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={600}>
            <a href="BawangM">
              <img src="Images/Alpukat.png" alt="Alpukat" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={800}>
            <a href="BawangM">
              <img src="Images/Melon.png" alt="Melon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Pangan_buah;
