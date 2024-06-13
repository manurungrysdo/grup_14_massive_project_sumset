import React, { useEffect, useRef } from "react";
import "../../css/Ibu.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Ibu() {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const onWheel = (event) => {
      if (container) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener("wheel", onWheel);
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="image-overlay">
        <a href="Panduan_gizi">
          <button className="btn_panah">
            <h1>←</h1>
          </button>
        </a>
        <img src="Images/ibu hamil.png" alt="Gambar" />
        <div className="overlay-content">
          <h2>Panduan Gizi NutriKids</h2>
          <p>Ibu Hamil</p>
        </div>
      </div>
      <div className="kebutuhan">
        <div>
          <h1 data-aos="fade-right" data-aos-duration="2000">
            Kebutuhan Gizi Ibu Hamil
          </h1>
          <p data-aos="fade-right" data-aos-duration="2000">
            Tahukan kamu? Memenuhi kebutuhan gizi sejak masa kehamilan merupakan hal yang penting. Selain bermanfaat bagi kesehatan ibu hamil, asupan gizi yang terpenuhi dengan baik juga mampu menunjang tumbuh kembang janin dalam kandungan.
          </p>
          <div data-aos="fade-right" data-aos-duration="2000" className="seputaran_info1-ibu">
            <h1 data-aos="fade-down" data-aos-duration="2000">
              Kalkulasi Menu Makan Ibu Hamil
            </h1>
            <div className="container1-ibu">
              <div data-aos="fade-right" data-aos-duration="900" className="card1-ibu">
                <h1>Asam Folat</h1>
                <img className="simbol" src="Images/simbol.png" alt="" />
                <hr />
                <p>Selama masa kehamilan, ibu hamil disarankan untuk mengonsumsi asam folat sebanyak 400 mcg (mikrogram) per hari. Hal ini penting karena jika kebutuhan asam folat tercukupi, bayi bisa terhindar dari cacat tabung saraf.</p>
                <p>Contoh bahan makanan yang mengandung asam folat antara lain: bayam, brokoli, kubis, jeruk, stroberi, roti gandum, hati ayam atau sapi, dan telur.</p>
                <img src="Images/manfaatsayuran.png" alt="" />
              </div>
              <div data-aos="fade-lift" data-aos-duration="1000" className="card1-ibu">
                <h1>Protein</h1>
                <img className="simbol" src="Images/simbol.png" alt="" />
                <hr />
                <p>
                  Mengonsumsi makanan yang mengandung protein, berperan penting untuk menunjang tumbuh kembang janin. Trimester Pertama: Sekitar 46 gram per hari (sama dengan kebutuhan wanita tidak hamil), sedangkan Trimester Kedua dan
                  Ketiga: Sekitar 71 gram per hari.
                </p>
                <p>Contoh bahan makanan yang berprotein antara lain: kacang kedelai, daging sapi, daging ayam, ikan, telur, atau susu dan produk olahannya, seperti keju dan yoghurt.</p>
                <img src="Images/manfaatdaging.png" alt="" />
              </div>
              <div data-aos="fade-right" data-aos-duration="1200" className="card1-ibu">
                <h1>Serat</h1>
                <img className="simbol" src="Images/simbol.png" alt="" />
                <hr />
                <p>Mencukupi kebutuhan serat harian akan mencegah terjadinya konstipasi dan wasir yang sering dikeluhkan saat hamil. Bagi wanita hamil, asupan serat yang direkomendasikan adalah sekitar 25-30 gram per hari.</p>
                <p>Contoh bahan makanan yang kaya akan serat antara lain: kentang, tomat, brokoli, wortel, apel, dan jeruk.</p>
                <img src="Images/manfaatsayuran.png" alt="" />
              </div>
            </div>
          </div>
          <div className="seputaran_info">
            <h1 data-aos="fade-right" data-aos-duration="2000">
              Kalkulasi Menu Makan Ibu Hamil
            </h1>
            <div className="container-ibu" id="scroll-container" ref={containerRef}>
              <div className="card-ibu">
                <h1>Protein Hewani</h1>
                <h4>Trimester 1, 2 dan 3: Ikan dan Telur Ayam 4 porsi/hari. 1 Porsi = 50gr atau 1 porsi ikan. 1 Porsi = 55gr atau 1 butir telur</h4>
              </div>
              <div className="card-ibu noselect">
                <h1>Protein Nabati</h1>
                <h4>Trimester 1, 2 dan 3: Tempe, tahu, dan lainnya 4 porsi/hari. 1 Porsi = 50gr atau 1 potong sedang tempe</h4>
              </div>
              <div className="card-ibu noselect">
                <h1>Nasi</h1>
                <h4>5 porsi/hari untuk Trimester 1. 6 porsi/hari untuk tirmester 2 dan 3 (1 porsi = 100gr)</h4>
              </div>
              <div className="card-ibu noselect">
                <h1>Sayur</h1>
                <h4>Trimester 1,2 dan 3: 4 pori/hari (1 porsi = 100 gr atau 1 mangkuk sayur matang tanpa kuah)</h4>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="tips-sehat">
            <div className="tips">
              <div className="tips1">
                <h1>Tips Sehat Ibu Hamil</h1>
                <img className="tips_simbol" src="Images/Hati.png" alt="" />
              </div>
              <hr />
              <ul>
                <li>Melakukan pemeriksaan kehamilan/ANC rutin.</li>
                <li>Selama hamil makan 3 kali makanan utama ditambah dengan 1-2 kali makanan selingan dalam sehari sesuai dengan anjuran porsi makan ibu hamil.</li>
                <li>Konsumsi Tablet Tambah Darah (TTD) atau suplementasi zat gizi mikro lainnya selama masa hamil.</li>
                <li>Cukup konsumsi air putih dan cukup istirahat.</li>
                <li>Pada kondisi tertentu seperti mual pada trimester pertama dan mudah kenyang pada trimester akhir, maka konsumsi makanan dalam porsi kecil tapi sering. Buah dan sayur harus masuk dalam menu sehari-hari ibu.</li>
                <li>Membatasi konsumsi kopi atau minuman berkafein lainnya.</li>
                <li>Membatasi konsumsi makanan yang mengandung tinggi gula, garam, dan lemak.</li>
                <li>Menghindari konsumsi makanan yang merangsang pencernaan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ibu;
