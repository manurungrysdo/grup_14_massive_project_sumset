import React, { useEffect } from "react";
import "../css/Forum.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Forum() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke posisi atas saat komponen dimount
  }, []);

  return (
    <>
      <div className="header-forum">
        <h1>
          Hi <span>Nama User!</span>
        </h1>
        <h2>
          Selamat Datang di <span>NutriFam</span>
        </h2>
        <p>Silahkan Tanya dan Berbagi Cerita disini, bersama orang tua lainnya!</p>
        <button className="btn-ask">Mulai Bertanya</button>
      </div>
      <div className="search-bar">
        <input type="text-forum" placeholder="Cari permasalahan yang serupa" />
      </div>
      <div className="questions">
        <div className="question-card">
          <h3>Bagaimana supaya anak mau makan teratur?</h3>
          <div className="user-info">
            <img src="Images/user.png" alt="User Image" />
            <div>
              <p>Ervalsa Dwi Nanda</p>
              <p>Ibu Rumah Tangga</p>
            </div>
            <p className="time">2 hari yang lalu</p>
          </div>
          <p className="question-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="answers">10 Jawaban</p>
        </div>
        <div className="question-card">
          <h3>Apa ada saran untuk camilan sehat dari wortel bun?</h3>
          <div className="user-info">
            <img src="Images/user.png" alt="User Image" />
            <div>
              <p>Ervalsa Dwi Nanda</p>
              <p>Ibu Rumah Tangga</p>
            </div>
            <p className="time">2 hari yang lalu</p>
          </div>
          <p className="question-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="answers">10 Jawaban</p>
        </div>
        <div className="question-card">
          <h3>Anakku tiap makan selalu dilepeh, gimana ya bun</h3>
          <div className="user-info">
            <img src="Images/user.png" alt="User Image" />
            <div>
              <p>Ervalsa Dwi Nanda</p>
              <p>Ibu Rumah Tangga</p>
            </div>
            <p className="time">2 hari yang lalu</p>
          </div>
          <p className="question-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="answers">10 Jawaban</p>
        </div>
        <div className="question-card">
          <h3>Cara biar umur anak 3 tahun mau makan sayur bun</h3>
          <div className="user-info">
            <img src="Images/user.png" alt="User Image" />
            <div>
              <p>Ervalsa Dwi Nanda</p>
              <p>Ibu Rumah Tangga</p>
            </div>
            <p className="time">2 hari yang lalu</p>
          </div>
          <p className="question-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="answers">10 Jawaban</p>
        </div>
      </div>
      <div className="pagination">
        <button className="btn-page1">Terbaru</button>
        <button className="btn-page">1</button>
        <button className="btn-page">2</button>
        <button className="btn-page">3</button>
        <button className="btn-page">4</button>
        <button className="btn-page">5</button>
        <button className="btn-page">6</button>
        <button className="btn-page1">Terlama</button>
      </div>
    </>
  );
}

export default Forum;
