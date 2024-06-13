import React, { useState, useEffect } from "react";
import "../css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginModal from "../components/LoginModal";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleOpenModal = () => {
    if (isLoggedIn) {
      alert("Anda sudah masuk");
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <header>
          <div className="container-home">
            <div className="header-content-home">
              <div className="home-beranda" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={2500}>
                Tingkat Kesehatan Anda Bersama
                <a data-aos="fade-left" data-aos-duration={3000} data-aos-delay={3000}>
                  NutriKids
                </a>
              </div>
              <p data-aos="fade-right" data-aos-duration={1000} data-aos-delay={2500}>
                Selamat Datang di <b>NutriKids</b>, Kami adalah sebuah platform yang berkomitmen untuk menyediakan informasi gizi yang akurat dan bermanfaat kepada para orangtua yang peduli akan kesehatan anak-anak mereka.{" "}
              </p>
              <a data-aos="fade-right" data-aos-duration={1000} data-aos-delay={2500} href="Artikel" className="explore-button">
                Jelajah Sekarang
              </a>
            </div>
            <img data-aos="flip-right" data-aos-duration={1000} data-aos-delay={2500} src="Images/Dokter 1.png" alt="Portofolio Image" />
          </div>
        </header>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p />
      <p />
      <div className="layanan">
        <h4 data-aos="fade-up" data-aos-duration={1500}>
          Layanan Platform NutriKids
        </h4>
        <h1 data-aos="fade-up" data-aos-duration={1500}>
          Kami ada Untuk Anda
        </h1>
        <section id="layanan-kami">
          <div data-aos="flip-right" data-aos-duration={1000} data-aos-delay={500} className="layanan-item">
            <img src="../Images/sign.png" alt="Portofolio Image" />
            <div className="text-home">
              <h2>Informasi Gizi Terpercaya</h2>
              <p>Informasi gizi terpercaya disusun oleh para ahli</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration={1000} data-aos-delay={1000} className="layanan-item">
            <img src="Images/newspaper.png" alt="Portofolio Image" />
            <div className="text-home">
              <h2>Artikel Terbaru &amp; Menarik </h2>
              <p>Jelajahi berbagai artikel yang baru dan menarik</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration={1000} data-aos-delay={1500} className="layanan-item">
            <img src="Images/recipe.png" alt="Portofolio Image" />
            <div className="text-home">
              <h2>Rekomendasi Resep Sehat &amp; Bergizi</h2>
              <p>Pilihan resep sehat dan bergizi untuk anda</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration={1000} data-aos-delay={2000} className="layanan-item">
            <img src="Images/guide.png " alt="Portofolio Image" />
            <div className="text-home">
              <h2>Panduan Gizi Terpadu</h2>
              <p>Panduan lengkap dan mudah dimengerti</p>
            </div>
          </div>
        </section>
      </div>
      <div className="manfaat">
        <h4 data-aos="fade-up" data-aos-duration={1500}>
          Manfaat Pangan
        </h4>
        <h1 data-aos="fade-up" data-aos-duration={1500}>
          Informasi Pangan untuk Anda
        </h1>
        <section id="manfaat-kami">
          <a href="Pangan_sayur">
            <div data-aos="fade-up-left" data-aos-duration={1000} data-aos-delay={500} className="manfaat-item">
              <div className="text1">
                <h2>Manfaat Sayuran</h2>
                <p>80+ Manfaat Sayuran</p>
              </div>
              <img src="Images/manfaatsayuran.png" alt="Portofolio Image" />
            </div>
          </a>
          <a href="Pangan_daging">
            <div data-aos="fade-up-right" data-aos-duration={1000} data-aos-delay={1500} className="manfaat-item">
              <div className="text1">
                <h2>Manfaat Daging </h2>
                <p>80+ Manfaat Daging</p>
              </div>
              <img src="Images/manfaatdaging.png" alt="Portofolio Image" />
            </div>
          </a>
          <a href="Pangan_buah">
            <div data-aos="fade-up-left" data-aos-duration={1000} data-aos-delay={2000} className="manfaat-item">
              <div className="text1">
                <h2>Manfaat Buah</h2>
                <p>80+ Manfaat buah</p>
              </div>
              <img src="Images/manfaatbuah.png" alt="Portofolio Image" />
            </div>
          </a>
          <a href="Pangan_lainnya">
            <div data-aos="fade-up-right" data-aos-duration={1000} data-aos-delay={2500} className="manfaat-item">
              <div className="text1">
                <h2>Manfaat Lainnya</h2>
                <p>80+ Manfaat Lainnya</p>
              </div>
              <img src="Images/manfaatlainnya.png " alt="Portofolio Image" />
            </div>
          </a>
        </section>
      </div>

      <div className="artikel">
        <section className="judul">
          <ul>
            <li>
              <h4 data-aos="fade-right" data-aos-duration={1000}>
                Artikel Terkini
              </h4>
              <h1 data-aos="fade-up" data-aos-duration={1000}>
                Temukan Informasi Terbaru Tentang Gizi
              </h1>
            </li>
            <Link to="Artikel">
              {" "}
              {/* Replace "/some-route" with your desired route */}
              <button className="lihat-semua" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1000">
                Lihat Semua ➔
              </button>
            </Link>
          </ul>
        </section>
        <div className="artikel-row">
          <div data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={1000} className="artikel-column">
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
          <div data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={1500} className="artikel-column">
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
          <div data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={2000} className="artikel-column">
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
      </div>

      <div className="containergabung">
        <div className="text-content">
          <h1 className="h2">Ingin Saling Berbagi Cerita dan Tips?</h1>
          <p1>Gabung Bersama di NutriFam</p1>
          <h3>
            Anda bisa saling berbagi cerita dan tips
            <br />
            dengan orang tua lainnya!
          </h3>
          <Link to="Forum">
            <button id="loginBtn" className="btn" onClick={handleOpenModal}>
              Bergabung Sekarang!
            </button>
          </Link>
        </div>
        <div className="image-content">
          <img src="Images/ibu anak.png" alt="NutriFam" className="image" />
        </div>
      </div>
      <LoginModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default Home;
