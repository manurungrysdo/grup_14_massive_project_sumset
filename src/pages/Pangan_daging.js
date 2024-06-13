import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Pangan.css";

function Pangan_daging() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="image-container">
        <img src="Images/manfaatd_aging.png" alt="Background Image" />
        <div className="text-overlay">
          <h1 data-aos="zoom-up" data-aos-duration={2000}>
            Tingkatkan Kesehatan Anda <br h1="" data-aos="zoom-up" data-aos-duration={2000} /> dengan{" "}
            <b h1="" data-aos="zoom-up" data-aos-duration={2000}>
              Manfaat Daging
            </b>{" "}
            Segar!
          </h1>
        </div>
      </div>
      <div className="manfaat-sayuran">
        <h4 data-aos="zoom-in" data-aos-duration={1000}>
          Manfaat Daging
        </h4>
        <h1 data-aos="zoom-in" data-aos-duration={1000}>
          Informasi Gizi Daging Untuk Anda
        </h1>
        <ul className="manfaat-sayuran-list">
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay="">
            <a href="BawangM">
              <img src="Images/daging_ayam.png" alt="ayam" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={200}>
            <a href="BawangM">
              <img src="Images/daging_sapi.png" alt="sapi" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={400}>
            <a href="BawangM">
              <img src="Images/daging_kambing.png" alt="kambing" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={600}>
            <a href="BawangM">
              <img src="Images/daging_salmon.png" alt="salmon" />
            </a>
          </li>
          <li className="manfaat-sayuran-item" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={800}>
            <a href="BawangM">
              <img src="Images/daging_tuna.png" alt="tuna" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Pangan_daging;
