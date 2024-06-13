import React, { useEffect } from "react";
import "../css/Resep.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Resep() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="container-resep">
        <div className="content-resep">
          <h2 className="headline">
            Jelajahi Berbagai Resep <span className="highlight">Makanan Sehat dan Bergizi</span>
          </h2>
          <h2 className="headline">Untuk Anak Dengan Harga Bahan Terjangkau</h2>
        </div>

        <div className="images">
          <img src="Images/resep makanan.png" alt="Salad 1" className="image" />
        </div>
      </div>

      <div className="container_makanan-resep">
        <h2 className="title">Resep Paling di Rekomendasikan!</h2>
        <div className="card-container-resep">
          <div className="card-resep">
            <img src="Images/salat buah sayur.png" alt="Salad Buah Sayur" className="card-image-resep" />
            <h3 className="card-title-resep">Salad Buah Sayur</h3>
            <p className="card-description-resep">Salad buah dan sayur adalah hidangan yang praktis...</p>
            <a href="salad" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/nungget tahu.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Nugget Tahu</h3>
            <p className="card-description-resep">Nugget ga harus selalu dari daging ayam...</p>
            <a href="resep_salat_dan_buah.html" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/sup ayam janggung.png" alt="Sup Ayam Jagung" className="card-image-resep" />
            <h3 className="card-title-resep">Sup Ayam Jagung</h3>
            <p className="card-description-resep">Sup ayam jagung manis adalah hidangan klasik yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/Bubur Ayam tahu.png" alt="Bubur Ayam Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Bubur Ayam Tahu</h3>
            <p className="card-description-resep">Bubur ayam tahu adalah hidangan sarapan yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/Bayam Omlet.png" alt="Omelet Bayam" className="card-image-resep" />
            <h3 className="card-title-resep">Omelet Bayam</h3>
            <p className="card-description-resep">Omelet bayam adalah hidangan yang lezat, mudah...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
        </div>
      </div>
      <div className="container_makanan1">
        <h2 className="headline_makanan">
          Rekomendasi Resep <span className="highlight_makanan">Olahan Sayuran</span>
        </h2>
        <div className="card-container-resep">
          <div className="card-resep">
            <img src="Images/puding wortel 1.png" alt="Salad Buah Sayur" className="card-image-resep" />
            <h3 className="card-title-resep">Puding Wortel</h3>
            <p className="card-description-resep">Puding wortel adalah hidangan penutup yang terbuat dari....</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/sayurasem 2.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Sayur Asem</h3>
            <p className="card-description-resep">Sayur asem adalah&nbsp;menu sayuran yang berisi sayur...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/supbrokoli.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Sup Brokoli Bakso</h3>
            <p className="card-description-resep">Sup brokoli bakso adalah hidangan berkuah yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/kroket.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Kroket Kentang</h3>
            <p className="card-description-resep">Salmon panggang kecap manis adalah hidangan ikan...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/sayurasem 1.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Sup Krim Labu</h3>
            <p className="card-description-resep">Sup krim labu adalah hidangan berkuah yang terbuat dari...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
        </div>
      </div>
      <div className="container_makanan1">
        <h2 className="headline_makanan">
          Rekomendasi Resep <span className="highlight_makanan">Olahan Daging</span>
        </h2>
        <div className="card-container-resep">
          <div className="card-resep">
            <img src="Images/Bubur Ayam 2.png" alt="Salad Buah Sayur" className="card-image-resep" />
            <h3 className="card-title-resep">Bubur Ayam Tahu</h3>
            <p className="card-description-resep">Bubur ayam tahu adalah hidangan sarapan yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/SUPSAPI 1.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Sup Daging Sapi</h3>
            <p className="card-description-resep">Sup daging sapi adalah hidangan berkuah yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/sup kambing 1.png" alt="Sup Ayam Jagung" className="card-image-resep" />
            <h3 className="card-title-resep">Sup Bening Kambing</h3>
            <p className="card-description-resep">Sup bening kambing adalah hidangan berkuah jernih yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/salmon panggang 1.png" alt="Bubur Ayam Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Salmon Panggang</h3>
            <p className="card-description-resep">Salmon panggang kecap manis adalah hidangan ikan...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/fillet tuna 1.png" alt="Omelet Bayam" className="card-image-resep" />
            <h3 className="card-title-resep">Fillet Tuna Goreng</h3>
            <p className="card-description-resep">Fillet tepung tuna adalah hidangan yang terbuat dari...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
        </div>
      </div>
      <div className="container_makanan1">
        <h2 className="headline_makanan">
          Rekomendasi Resep <span className="highlight_makanan">Olahan Buah</span>
        </h2>
        <div className="card-container-resep">
          <div className="card-resep">
            <img src="Images/apple1.png" alt="Salad Buah Sayur" className="card-image-resep" />
            <h3 className="card-title-resep">Apel Pie</h3>
            <p className="card-description-resep">Apel pie sederhana adalah hidangan penutup yang lezat...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/teh lemon.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Teh Lemon</h3>
            <p className="card-description-resep">Teh lemon adalah minuman menyegarkan yang terbuat...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/sandwiches.png" alt="Sup Ayam Jagung" className="card-image-resep" />
            <h3 className="card-title-resep">Sandwich Anggur</h3>
            <p className="card-description-resep">Sup brokoli bakso adalah hidangan berkuah yang...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/avocado-banana.png" alt="Bubur Ayam Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Smoothie Alpukat</h3>
            <p className="card-description-resep">Sandwich buah anggur adalah hidangan ringan atau...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/jus melon.png" alt="Omelet Bayam" className="card-image-resep" style={{ width: "90%" }} />
            <h3 className="card-title-resep">Jus Melon</h3>
            <p className="card-description-resep">Jus melon segar adalah minuman yang menyegarkan...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
        </div>
      </div>
      <div className="container_makanan1">
        <h2 className="headline_makanan">
          Rekomendasi Resep <span className="highlight_makanan">Olahan Pangan Lainnya</span>
        </h2>
        <div className="card-container-resep">
          <div className="card-resep">
            <img src="Images/macaroni 1.png" alt="Salad Buah Sayur" className="card-image-resep" />
            <h3 className="card-title-resep">Makaroni Schotel</h3>
            <p className="card-description-resep">Makaroni schotel&nbsp;atau terkadang disebut sebagai...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/pancake 1.png" alt="Nugget Tahu" className="card-image-resep" />
            <h3 className="card-title-resep">Pancake Madu</h3>
            <p className="card-description-resep">Pancake madu adalah varian pancake yang dibuat dengan...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
          <div className="card-resep">
            <img src="Images/fried-rice-with-crab 1.png" alt="Sup Ayam Jagung" className="card-image-resep" />
            <h3 className="card-title-resep">Nasi Goreng Quinoa</h3>
            <p className="card-description-resep">Nasi goreng quinoa ini adalah hidangan yang lezat dan gizi...</p>
            <a href="#" className="card-button-resep">
              Lihat Semua →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resep;
