import React, { useState, useEffect } from "react";
import "../css/Artikel.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Artikel() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="judul">
        <h1>
          <b>
            Jelajahi Berbagai Artikel <br /> Menarik untuk Menambah Wawasan
          </b>
        </h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Cari Artikel..." />
        <button type="submit">
          <i className="fa fa-search">
            <img src="Images/search.png" alt="" />
          </i>
        </button>
      </div>

      <div className="container-artikel">
        <img src="Images/anak.png" alt="Portofolio Image" />
        <div className="header-content">
          <h3>Tips &amp; Trik</h3>
          <h1>Tips menyiapkan Makanan Sehat serta Menarik untuk Anak </h1>
          <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan makanan yang kaya akan gizi tinggi serta serat yang tinggi.</p>
          <a href="artikel1" className="explore-button-artikel">
            Baca Selengkapnya ➔
          </a>
        </div>
      </div>

      <div>
        <section className="artikel">
          <div className="artikel-row">
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/articel1.png" alt="" />
                <h5>Tips &amp; Trik</h5>
                <h3>Panduan Praktis untuk Makan Sehat Setiap Hari</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan bross...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/Rectangle.png" alt="" />
                <h5>Mitos &amp; Fakta</h5>
                <h3>16 Mitos dan Fakta Soal Nutrisi Anak yang perlu diketahui</h3>
                <p>Yuk, cari tahu yang mana mitos dan fakta soal nutrisi bagi Si Kecil menurut penjelasan dari dokter anak...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/buahbuahan.png" alt="" />
                <h5>Rekomendasi</h5>
                <h3>5 Makanan Sehat untuk Meningkatkan Daya Tahan Tubuh</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan makanan sehat ...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/buahbuahan.png" alt="" />
                <h5>Rekomendasi</h5>
                <h3>5 Makanan Sehat untuk Meningkatkan Daya Tahan Tubuh</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan makanan sehat ...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/buahbuahan.png" alt="" />
                <h5>Rekomendasi</h5>
                <h3>5 Makanan Sehat untuk Meningkatkan Daya Tahan Tubuh</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan makanan sehat ...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/buahbuahan.png" alt="" />
                <h5>Rekomendasi</h5>
                <h3>5 Makanan Sehat untuk Meningkatkan Daya Tahan Tubuh</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan makanan sehat ...</p>
                <a href="artikel1" className="read-more">
                  Baca Selengkapnya ➔
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Artikel;
