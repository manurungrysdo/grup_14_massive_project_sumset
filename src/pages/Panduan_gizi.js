import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Mengimpor Link dari react-router-dom
import "../css/Panduan_gizi.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Panduan_gizi() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="header-gizi">
        <div className="image-content-gizi">
          <img data-aos="fade-up" data-aos-duration="2500" src="Images/panduan_gizi.png" alt="Mother and Child" />
        </div>
      </div>
      <div className="seputaran_info">
        <h1 data-aos="fade-right" data-aos-duration="2500">
          Informasi Seputar Panduan Gizi
        </h1>
        <p data-aos="fade-down" data-aos-duration="2000">
          Membantu Anda memastikan bahwa anak-anak mendapatkan nutrisi yang cukup dan seimbang untuk pertumbuhan dan perkembangan mereka.
        </p>
        <div className="container-gizi">
          <Link to="/ibu" className="card-gizi" data-aos="fade-up-right" data-aos-duration="3000">
            <img src="Images/ibu_hamil.png" alt="" className="card-image-gizi" style={{ width: "calc(40% + 28px)" }} />
            <h1>Panduan Gizi</h1>
            <h2>Ibu Hamil</h2>
          </Link>

          <Link to="/ibu" className="card-gizi" data-aos="fade-up" data-aos-duration="3000">
            <img src="Images/anak_lakilaki.png" alt="" className="card-image-gizi" style={{ width: "calc(58% + 17px)" }} />
            <h1>Panduan Gizi</h1>
            <h2>Anak Usia 0-12 Bulan</h2>
          </Link>

          <Link to="/ibu" className="card-gizi" data-aos="fade-up-left" data-aos-duration="3000">
            <img src="Images/anak_perempuan.png" alt="" className="card-image-gizi" style={{ width: "calc(172px + 15px)" }} />
            <h1>Panduan Gizi</h1>
            <h2>Anak Usia 4-9 Tahun</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Panduan_gizi;
