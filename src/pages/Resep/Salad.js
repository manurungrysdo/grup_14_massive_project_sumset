import React, { useState, useEffect } from "react";
import "../../css/Salad.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Artikel1() {
  const [visibleTextId, setVisibleTextId] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  const handleButtonClick = (id) => {
    setVisibleTextId(id);
  };

  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="header-content">
              <a href="jelajah_resep_makanan.html">
                <button className="btn_panah">
                  <h1>←</h1>
                </button>
              </a>
              <h1 className="h1" data-aos="fade-left" data-aos-duration={3000} data-aos-delay={3000}>
                Resep Sehat
                <img className="love gizi" src="Images/love gizi.png" alt="Love Gizi" />
              </h1>
              <h1 data-aos="fade-right" data-aos-duration={1000} data-aos-delay={2500} className="h11">
                “Salad Buah &amp; Sayur”
              </h1>
            </div>
            <img data-aos="flip-right" data-aos-duration={1000} data-aos-delay={2500} src="Images/resep sehat love.png" alt="Portofolio Image" />
          </div>
        </header>
      </div>
      <div className="container_text">
        <div className="gambar-deskripsi">
          <img src="Images/tomatoes-cucumbers.png" alt="Deskripsi Gambar" className="deskripsi-gambar" />
        </div>
        <div className="button-group">
          {["Deskripsi", "Bahan", "Cara Membuat", "Harga Bahan"].map((text, index) => (
            <button key={index} className="button" onClick={() => handleButtonClick(index + 1)}>
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="text-group">
        <div className="text-container">
          {visibleTextId === 1 && (
            <p className="text">
              Salad buah dan sayur adalah hidangan yang praktis, menyegarkan, dan kaya nutrisi. Cocok dinikmati saat cuaca panas atau sebagai camilan sehat di sela-sela waktu makan. Dengan memperkenalkan anak-anak pada berbagai macam buah
              dan sayur melalui salad, hal ini dapat membantu memperluas pola makan mereka dan memberikan nutrisi penting yang dibutuhkan untuk pertumbuhan dan perkembangan yang sehat.
            </p>
          )}
          {visibleTextId === 2 && (
            <div className="text-bahan">
              <ul>
                Bahan - Bahan :<li>Saus Salad: 1 apel merah, potong dadu 2 sachet Mayones 100 g 1 alpukat</li>
                <li> potong dadu 2 sdm Susu Kental Manis 1 wortel, potong tipis panjang 1/2 sdt lemon 1/4 melon</li>
                <li> potong dadu 1/2 cup stroberi, potong-potong selada secukupnya, potong tipis-tipis keju parut</li>
              </ul>
            </div>
          )}
          {visibleTextId === 3 && (
            <p className="text">
              Cara membuat : Campurkan semua bahan buah dan sayur dalam mangkuk besar. Siapkan saus salad dengan mencampurkan semua bahan saus salad. Tata dengan urutan sayur dibawah dan buah di atas Siramkan saus salad ke atas buah dan
              sayur, aduk rata. Terakhir beri keju parut, Sajikan.
            </p>
          )}
          {visibleTextId === 4 && (
            <div className="text-harga">
              <li>1 buah apel - (Rp. 4.000/buah) </li>
              <li>1 buah alpukat - (Rp. 7.000/buah)</li>
              <li>1 buah wortel - (Rp. 2.500/buah)</li>
              <li> 1/4 buah potong melon - (Rp. 18.500)</li>
              <li>1/2 pack strawberry - (Rp. 7.300)</li>
              <li>1/2 Keju parut Wincheez - (Rp. 5.500)</li>
              <li>2 sachet susu skm - (Rp. 3.500)</li>
              <li>1 bks mayonese - (Rp. 10.000/bks)</li>
              <li>1 buah lemon - (Rp. 5.000/buah)</li>
              <li>Total Rp. 63.300</li>
            </div>
          )}
        </div>
      </div>
      <div className="tips-container">
        <div className="tips-salad">
          <h2>
            Tips Mengolah <span className="salad">Salad</span>
          </h2>
          <ul>
            <li>Kamu bisa menggunakan berbagai jenis buah dan sayur sesuai selera.</li>
            <li>Gunakan saus salad favoritmu atau buat saus salad sendiri dengan mencampurkan bahan-bahan yang kamu sukai.</li>
            <li>Sajikan salad segera setelah dibuat agar teksturnya tetap segar.</li>
            <li>Kamu bisa menambahkan protein seperti ayam panggang atau salmon asap ke dalam salad untuk hidangan yang lebih mengenyangkan.</li>
          </ul>
        </div>
        <div className="manfaat-salad">
          <h2>
            Manfaat Salad <span className="salad">Buah &amp; Sayur</span>
          </h2>
          <ul>
            <li>Kaya akan vitamin, mineral, dan serat yang baik untuk kesehatan tubuh.</li>
            <li>Membantu melancarkan pencernaan.</li>
            <li>Meningkatkan kekebalan tubuh.</li>
            <li>Menjaga kesehatan jantung.</li>
            <li>Membantu menurunkan berat badan.</li>
            <li>Meningkatkan daya ingat.</li>
            <li>Membantu tubuh menjadi lebih sehat.</li>
          </ul>
        </div>
      </div>
      <div className="nutrition-table">
        <h2>
          Tabel <div className="ijo-salad">Kandungan Gizi</div>
        </h2>
        <p>Berikut adalah kandungan gizi utama dalam dalam 100 gram pada bahan - bahan diatas :</p>
        <img src="Images/tablee.png" alt="Tabel Kandungan Gizi" className="nutrition-image" />
      </div>
    </>
  );
}

export default Artikel1;
