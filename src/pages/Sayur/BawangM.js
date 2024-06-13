import React, { useEffect } from "react";
import "../../css/Isi_Pangan.css";
import AOS from "aos";
import "aos/dist/aos.css";

function BawangM() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <div className="image-hero">
      <img className="hero" src="Images/bawang-2.png" alt="Background Image" />
      <div className="text-overlay-isipangan">
        <h1 data-aos="zoom-up" data-aos-duration={2000}>
          Manfaat Sayuran <span className="bawang">Bawang Merah</span> <br data-aos="zoom-up" data-aos-duration={1000} /> <b data-aos="zoom-up" data-aos-duration={2000} />
        </h1>
        <div className="text"> menjadi bumbu yang umum digunakan dalam berbagai masakan di berbagai belahan dunia, bawang merah juga memiliki sejumlah manfaat bagi kesehatan.</div>
      </div>
      <div className="container-isipangan">
        <div className="header-content-isipangan">
          <a href="manfaat_pangan_sayur.html">
            <button className="btn_panah-isipangan">
              <h1>←</h1>
            </button>
          </a>
        </div>
      </div>
      <div className="container-isipangan">
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number">01.</div>
            Manfaat Bawang Menjaga kesehatan pencernaan
          </div>
          <div className="card-body-isipangan">
            Bawang mengandung serat diet, yang penting untuk kesehatan pencernaan. Serat membantu mempromosikan pergerakan normal usus dan mencegah sembelit dengan menambah volume feses dan memperlancar proses pencernaan.
          </div>
        </div>
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number-2">02.</div>
            <div className="card-judul">Wortel Bermanfaat Menjaga Daya Tahan Tubuh</div>
          </div>
          <div className="card-body-isipangan">
            Bawang mengandung vitamin C, vitamin B6, serta mineral seperti mangan, selenium, dan kalium. Vitamin dan mineral ini penting untuk menjaga sistem kekebalan tubuh yang sehat. Misalnya, vitamin C memiliki peran penting dalam
            memperkuat sistem kekebalan tubuh dan melawan infeksi.
          </div>
        </div>
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number">03.</div>
            Menjaga Fungsi Penglihatan
          </div>
          <div className="card-body-isipangan">
            Bawang mengandung senyawa antioksidan seperti flavonoid dan polifenol. Antioksidan membantu melindungi mata dari kerusakan yang disebabkan oleh radikal bebas, yang dapat mengurangi risiko terjadinya gangguan penglihatan terkait
            usia (AMD), katarak, dan degenerasi makula.
          </div>
        </div>
      </div>
      <div className="container-2-isipangan">
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number">04.</div>
            Menjaga Kesehatan Mulut
          </div>
          <div className="card-body-isipangan">
            Bawang memiliki manfaat dalam menjaga kesehatan mulut terutaman gigi dan gusi. Bawang membantu Mengurangi Bakteri Penyebab Kerusakan Gigi, Mengurangi Nyeri Gigi, dan Meningkatkan Produksi Air Liur.
          </div>
        </div>
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number">05.</div>
            Mencegah Kanker
          </div>
          <div className="card-body-isipangan">
            • Bawangi mengandung Zat quercetin, di dalam bawang merah memiliki sifat antioksidan yang membantu melawan efek radikal bebas dalam tubuh.
            <br />• Penelitian menunjukkan bahwa quercetin dapat mencegah pertumbuhan sel kanker, termasuk kanker paru, prostat, ovarium, usus, dan endometrial.
          </div>
        </div>
        <div className="card-isipangan">
          <div className="card-header-isipangan">
            <div className="card-number">06.</div>
            Mempercepat Penyembuhan Luka
          </div>
          <div className="card-body-isipangan">
            Bawang merah mengandung senyawa quercetin yang dapat membantu melancarkan aliran darah ke area yang terluka. Aliran darah yang baik memastikan bahwa luka mendapatkan pasokan oksigen dan nutrisi yang cukup untuk penyembuhannya.
            Senyawa dalam bawang merah dapat membantu mengurangi peradangan di area luka, mempercepat proses penyembuhan.
          </div>
        </div>
      </div>
      <div className="nutrition-table">
        <h2>
          <span>Kandungan Gizi </span>Pada Bawang Merah
        </h2>
        <img src="Images/table bawang.jpeg" alt="Tabel Kandungan Gizi" className="nutrition-image" />
      </div>
      <div className="nutrition-table">
        <h2>
          <span>Rekomendasi Resep Sehat </span>Dengan Bawang Merah
        </h2>
      </div>
      <div className="image-container-isipangan">
        <img src="Images/sayur asem.png" alt="Background Image" />
        <div className="text-asem">
          <h1>SAYUR ASEM </h1>
        </div>
        <p className="text-bawang"> Sayur asem adalah&nbsp;menu sayuran yang berisi sayur-mayur lokal khas Indonesia seperti labu siam.....</p>
      </div>
    </div>
  );
}

export default BawangM;
