import "../css/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-color">
              <img src="Images/LogoGizi.png" alt="" />
            </h3>
            <div className="footer-color">Selamat Datang di NutriKids , Platform yang berkomitmen untuk menyediakan informasi gizi yang akurat dan bermanfaat kepada para orangtua yang peduli akan kesehatan anak-anak mereka. </div>
            <div className="medsos">
              <a href="https://www.instagram.com/nutrikids_official/?utm_source=ig_web_button_share_sheet">
                <img src="Images/instagram.png" alt="" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="Images/linkedin-in.png" alt="" />
              </a>
              <a href="https://www.facebook.com">
                <img src="Images/facebook-f.png" alt="" />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-color">Bantuan</h3>
            <ul className="Bantuan">
              <li>FAQs</li>
              <li>Terms & amp; Conditions</li>
              <li>Privacy Policy </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-color">Kontak</h3>
            <ul>
              <div className="contact-footer">
                <li>
                  {" "}
                  <img src="Images/Frame.png" alt="" />
                </li>
                <div>
                  <li>Telepon :</li>
                  <li className="hijau">+628123456789</li>
                </div>
              </div>
              <div className="contact">
                <li>
                  {" "}
                  <img src="Images/sms.png" alt="" />
                </li>
                <div>
                  <li className="putih">Email:</li>
                  <li className="hijau">food@sunshine.id</li>
                </div>
              </div>
              <div className="contact">
                <li>
                  {" "}
                  <img src="Images/maps.png" alt="" />
                </li>
                <div>
                  <li className="putih">Alamat:</li>
                  <li className="hijau">Jalan jalan No. 99 Airlangga Gubeng, Surabaya, Jawa Timur, 11234</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <p className="copy">© 2024, NutriKids All Rights Reserved</p>
      </footer>
    </>
  );
}
export default Footer;
