import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Pangan.css";

function Pangan_lainnya() {
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
            Tingkatkan Kesehatan Anda <br data-aos="zoom-up" data-aos-duration={2000} /> dengan{" "}
            <b data-aos="zoom-up" data-aos-duration={2000}>
              Manfaat Pangan Sehat
            </b>{" "}
            Lainnya!
          </h1>
        </div>
      </div>
      <div className="manfaat-sayuran">
        <h4 data-aos="zoom-in" data-aos-duration={1000}>
          Manfaat Pangan Lain
        </h4>
        <h1 data-aos="zoom-in" data-aos-duration={1000}>
          Informasi Pangan Untuk Anda
        </h1>
        <ul className="manfaat-sayuran-list">
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay="">
            <a href="BawangM">
              <img src="Images/Quinoa.png" alt="Quinoa" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={200}>
            <a href="BawangM">
              <img src="Images/Madu.png" alt="madu" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={400}>
            <a href="BawangM">
              <img src="Images/Susu.png" alt="susu" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={600}>
            <a href="BawangM">
              <img src="Images/Telur.png" alt="telur" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={800}>
            <a href="BawangM">
              <img src="Images/Keju.png" alt="keju" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Pangan_lainnya;
