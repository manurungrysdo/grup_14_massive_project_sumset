import React, { useState, useEffect } from "react";
import "../../css/Artikel1.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Artikel1() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="image-overlay-1">
        <img src="Images/panduan_gizi_anak.png" alt="Gambar" />
        <div className="overlay-content-1">
          <div>Panduan Praktis untuk Makan Sehat Setiap Hari</div>
        </div>
      </div>
      <div className="articel-2">
        <h4 className="tips-2">Tips &amp; Trik</h4>
        <p className="meta">oleh Admin | Rabu, 28 Februari 2024</p>
        <hr />
        <p>Mempertahankan pola makan yang sehat adalah kunci utama untuk menjalani hidup yang sehat dan bugar. Berikut ini adalah panduan praktis yang dapat Anda ikuti untuk mengonsumsi makanan sehat setiap hari:</p>
        <div className="isi-2">
          <h4>1. Pilih Makanan Segar dan Berkualitas:</h4>
          <p>
            Prioritaskan konsumsi bahan makanan segar dan hindari makanan olahan yang tinggi pengawet, gula, dan lemak tidak sehat. Pilih sumber protein seperti daging ayam tanpa lemak, ikan, telur, kacang-kacangan, dan produk susu rendah
            lemak. Konsumsi buah dan sayur setidaknya 5 porsi setiap hari, dengan beragam warna dan jenis untuk memastikan variasi nutrisi yang lengkap. Pilih karbohidrat kompleks seperti nasi merah, roti gandum utuh, dan ubi jalar sebagai
            sumber energi utama.
          </p>
        </div>
        <div className="isi-2">
          <h4>2. Atur Jadwal Makan yang Teratur</h4>
          <p>
            Makan makanan tiga kali sehari dengan porsi yang seimbang: sarapan, makan siang, dan makan malam. Jangan melewatkan waktu makan, karena hal ini dapat menyebabkan rasa lapar yang berlebihan dan akhirnya makan berlebihan. Sediakan
            camilan sehat di antara waktu makan untuk menjaga rasa kenyang dan mencegah ngemil makanan yang tidak sehat.
          </p>
        </div>
        <div className="isi-2">
          <h4>3. Olah Makanan dengan Cara Sehat</h4>
          <p>
            Hindarilah menggoreng makanan dan pilih metode memasak yang lebih sehat seperti merebus, mengukus, membakar, atau menumis dengan sedikit minyak. Kurangi penggunaan garam, gula, dan lemak saat memasak, serta gunakan bumbu alami
            seperti rempah-rempah dan bawang untuk menambah cita rasa. Perhatikan porsi makan dengan menggunakan piring yang lebih kecil, dan makanlah perlahan sambil menikmati setiap suapan. Hindari menonton televisi atau menggunakan
            gadget saat makan agar tetap fokus dan tidak makan berlebihan.
          </p>
        </div>
        <div className="isi-2">
          <h4>4. Minum Air Putih yang Cukup</h4>
          <p>
            Minum setidaknya 8 gelas air putih sehari untuk menjaga tubuh tetap terhidrasi dan mendukung pencernaan yang sehat. Menghindari minuman manis seperti soda, jus kemasan, dan minuman berenergi sangat disarankan. Jika Anda ingin
            minum teh atau kopi, pilihlah varian tanpa gula atau dengan sedikit gula.
          </p>
        </div>
        <div className="isi-2">
          <h4>5. Buatlah Perencanaan Makan</h4>
          <p>
            Sisihkan waktu pada akhir pekan untuk membuat rencana menu makanan selama minggu berikutnya. Hal ini akan membantu Anda dalam pemilihan makanan yang lebih sehat serta mengurangi kecenderungan makan di luar secara berlebihan.
            Buatlah daftar belanja dan patuhi saat berbelanja di supermarket. Persiapkan makanan di rumah agar Anda tidak tergoda untuk membeli makanan tidak sehat saat lapar.
          </p>
        </div>
        <div className="isi-2">
          <h4>6. Jadikan Makan Sehat Sebagai Gaya Hidup</h4>
          <p>
            Persepsikan makan sehat sebagai bagian dari gaya hidup harian, bukan sekadar sesuatu yang sementara. Teruskanlah konsistensi dalam menjalankan pola makan yang sehat, dan Anda akan merasakan dampak positifnya terhadap kesehatan
            dan kebugaran Anda.
          </p>
        </div>
        <div>
          <h4>Referensi</h4>
          <ul>
            <li>Tips Menerapkan Pola Makan Sehat Yang Mudah Dilakukan (halodoc.com)</li>
            <li>Mengenal 10 Tips Pesan Gizi Seimbang (siloamhospitals.com)</li>
          </ul>
        </div>
      </div>
      <div>
        <section className="artikel">
          <section className="judul">
            <ul>
              <li>
                <h4>Artikel Terkini</h4>
                <h1>Temukan Informasi Terbaru Tentang Gizi</h1>
              </li>
              <button className="lihat-semua">Lihat Semua ➔</button>
            </ul>
          </section>
          <div className="artikel-row">
            <div className="artikel-column">
              <div className="artikel-item">
                <img src="Images/articel1.png" alt="" />
                <h5>Tips &amp; Trik</h5>
                <h3>Panduan Praktis untuk Makan Sehat Setiap Hari</h3>
                <p>Masalah kesehatan tubuh memang tidak bisa dipandang sebelah mata. Kita harus makan bross...</p>
                <a href="articel.html" className="read-more">
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
                <a href="#" className="read-more">
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
                <a href="#" className="read-more">
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

export default Artikel1;
