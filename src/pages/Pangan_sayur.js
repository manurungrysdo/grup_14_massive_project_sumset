import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Pangan.css";

function Pangan_Sayur() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="image-container">
        <img src="Images/manfaat sayur11.png" alt="Background Image" />
        <div className="text-overlay">
          <h1 data-aos="zoom-up" data-aos-duration={2000}>
            Tingkatkan Kesehatan Anda <br data-aos="zoom-up" data-aos-duration={1000} /> dengan{" "}
            <b data-aos="zoom-up" data-aos-duration={2000}>
              Manfaat Sayuran
            </b>{" "}
            Segar!
          </h1>
        </div>
      </div>
      <div className="manfaat-sayuran">
        <h4 data-aos="zoom-in" data-aos-duration={1000}>
          Manfaat Sayuran
        </h4>
        <h1 data-aos="zoom-in" data-aos-duration={1000}>
          Informasi Gizi Sayuran Untuk Anda
        </h1>
        <ul className="manfaat-sayuran-list">
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay="">
            <a href="BawangM">
              <img src="Images/Bawang-1.png" alt="Bawang" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={200}>
            <a href="BawangM">
              <img src="Images/Brokoli.png" alt="Brokoli" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={400}>
            <a href="BawangM">
              <img src="Images/kentang.png" alt="Kentang" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={600}>
            <a href="BawangM">
              <img src="Images/labu.png" alt="Labu" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={800}>
            <a href="BawangM">
              <img src="Images/paprika.png" alt="paprika" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={1000}>
            <a href="BawangM">
              <img src="Images/sawi putih.png" alt="sawiputih" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={1200}>
            <a href="BawangM">
              <img src="Images/Wortel.png" alt="wortel" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={1400}>
            <a href="BawangM">
              <img src="Images/tomat.png" alt="tomat" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={1600}>
            <a href="BawangM">
              <img src="Images/kangkung.png" alt="kangkung" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={1800}>
            <a href="BawangM">
              <img src="Images/Bawang-1.png" alt="bawang" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pangan_Sayur;
