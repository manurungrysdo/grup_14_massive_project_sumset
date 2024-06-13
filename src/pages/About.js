import React, { useState, useEffect } from "react";
import "../css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div>
        <div className="container-about">
          <img data-aos="fade-up" data-aos-duration={1000} data-aos-delay={2500} src="Images/happy-mother.png" alt="Portofolio Image" />
          <div className="header-content-about">
            <p data-aos="fade-right" data-aos-duration={1000} data-aos-delay={2500}>
              <b>Bantu Kami</b> <br />
              Wujudkan Masyarakat yang Sehat dan Berpengetahuan Gizi
            </p>
          </div>
        </div>
      </div>

      <div>
        <header>
          <div className="container-1-about">
            <img data-aos="zoom-up" data-aos-duration={1700} src="Images/cute-boy.png" alt="Portofolio Image" />
            <div className="header-content-1-about" data-aos="fade-right" data-aos-duration={1700}>
              <h3>Tujuan Kami</h3>
              <h1>Platform NutriKids</h1>
              <p>
                Welcome to <b>NutriKids</b>, Kami adalah sebuah platform yang berkomitmen untuk menyediakan informasi gizi yang akurat dan bermanfaat kepada para orangtua yang peduli akan kesehatan anak-anak mereka.{" "}
              </p>
              <p>
                Tujuan kami adalah untuk meningkatkan kesadaran akan pentingnya gizi yang seimbang dalam pertumbuhan dan perkembangan anak-anak. Kami ingin membantu orangtua memahami nilai makanan dan pola makan yang tepat untuk memastikan
                kesehatan optimal bagi anak-anak mereka.
              </p>
              <section id="manfaat-kami">
                <a href="https://www.instagram.com/nutrikids_official/?utm_source=ig_web_button_share_sheet">
                  <div data-aos="fade-up-left" data-aos-duration={1000} data-aos-delay={500} className="manfaat-item">
                    <img src="Images/Icon-sms.png" alt="" />
                    <div className="text1">
                      <h2>Kirim Pesan</h2>
                      <p>nutrikids_official</p>
                    </div>
                  </div>
                </a>
                <a href="https://api.whatsapp.com/message/PDNHWXXECZ7LN1?autoload=1&app_absent=0">
                  <div data-aos="fade-up-left" data-aos-duration={1000} data-aos-delay={500} className="manfaat-item">
                    <img src="Images/Iocn-telepon.png" alt="" />
                    <div className="text1">
                      <h2>Hubungi Kami</h2>
                      <p>0821 0206 2024</p>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </header>
      </div>
      <div className="contribusi">
        <h1 data-aos="fade-up" data-aos-duration={1700} className="title">
          Team Kami
        </h1>
        <h1 data-aos="fade-up" data-aos-duration={1700} className="description">
          Kontribusi Kami terhadap NutriKids
        </h1>
      </div>
      <div className="profile-grid">
        <div className="profile-container" data-aos="zoom-in-right" data-aos-duration={1900}>
          <img src="Images/bila.png" alt="Profile 1" className="profile-image" />
          <h3 className="profile-name1">
            Bila <br /> <b>PM</b>
          </h3>
        </div>
        <div className="profile-container" data-aos="zoom-in-right" data-aos-duration={1900}>
          <img src="Images/khalaf.png" alt="Profile 2" className="profile-image" />
          <h3 className="profile-name1">
            Khalaf <br /> <b>Programmer</b>
          </h3>
        </div>
        <div className="profile-container" data-aos="zoom-in-up" data-aos-duration={1900}>
          <img src="Images/Rysdo.png" alt="Profile 3" className="profile-image" />
          <h3 className="profile-name1">
            Rysdo <br /> <b>Programmer</b>
          </h3>
        </div>
        <div className="profile-container" data-aos="zoom-in-left" data-aos-duration={1900}>
          <img src="Images/rahmah.png" alt="Profile 4" className="profile-image" />
          <h3 className="profile-name1">
            Rahmah <br /> <b>UI/UX Designer</b>
          </h3>
        </div>
        <div className="profile-container" data-aos="zoom-in-left" data-aos-duration={1900}>
          <img src="Images/farhan.png" alt="Profile 5" className="profile-image" />
          <h3 className="profile-name1">
            Farhan <br /> <b>UI/UX Designer</b>
          </h3>
        </div>
      </div>
    </>
  );
}
export default About;
