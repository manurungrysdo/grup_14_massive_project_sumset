import React, { useState, useEffect } from "react";
import "../css/Data_Anak.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Data_Anak({ onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNext = () => {
    if (step === 1) {
      if (!name || !gender) {
        setError("Semua field harus diisi terlebih dahulu.");
      } else {
        setError("");
        setStep(2);
      }
    } else if (step === 2) {
      if (!dob || !age || !weight) {
        setError("Semua field harus diisi terlebih dahulu.");
      } else {
        setError("");
        setStep(3);
      }
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!breakfast || !lunch || !dinner) {
      setError("Semua field harus diisi terlebih dahulu.");
    } else {
      const data = {
        name,
        gender,
        dob,
        age,
        weight,
        breakfast,
        lunch,
        dinner,
      };
      onSubmit(data);
    }
  };

  return (
    <div className="popup-dataanak">
      <div className="popup-inner-dataanak">
        <div className="container-dataanak">
          <div className="header-dataanak">
            <img src="Images/LogoGizi.png" alt="NutriKids Logo" className="logo-dataanak" />
          </div>
          <div className="title-dataanak">Masukkan Data Anak</div>
          <button className="close-btn-dataanak" onClick={onClose}>
            X
          </button>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <label className="label-name-dataanak" htmlFor="child-name">
                  Nama Anak
                </label>
                <input className="input-name-dataanak" type="text-data" id="child-name" name="child-name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="label-gender-dataanak" htmlFor="child-gender">
                  Jenis Kelamin
                </label>
                <select className="select-gender-dataanak" id="child-gender" name="child-gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="" disabled>
                    Pilih Jenis Kelamin
                  </option>
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
                {error && <div className="error-message-dataanak">{error}</div>}
                <button type="button" className="next-btn-dataanak" onClick={handleNext}>
                  Selanjutnya
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <label className="label-dob-dataanak" htmlFor="child-dob">
                  Tanggal Lahir
                </label>
                <input className="input-dob-dataanak" type="date" id="child-dob" name="child-dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                <label className="label-age-dataanak" htmlFor="child-age">
                  Usia Anak (tahun)
                </label>
                <input className="input-age-dataanak" type="number" id="child-age" name="child-age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <label className="label-weight-dataanak" htmlFor="child-weight">
                  Berat Badan Anak (kg)
                </label>
                <input className="input-weight-dataanak" type="number" id="child-weight" name="child-weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                {error && <div className="error-message-dataanak">{error}</div>}
                <div className="button-container-dataanak">
                  <button type="button" className="prev-btn-dataanak" onClick={handlePrevious}>
                    Sebelumnya
                  </button>
                  <button type="button" className="next-btn-dataanak" onClick={handleNext}>
                    Selanjutnya
                  </button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <label className="label-breakfast-dataanak" htmlFor="child-breakfast">
                  Sarapan
                </label>
                <input className="input-breakfast-dataanak" type="text-data" id="child-breakfast" name="child-breakfast" value={breakfast} onChange={(e) => setBreakfast(e.target.value)} required />
                <label className="label-lunch-dataanak" htmlFor="child-lunch">
                  Makan Siang
                </label>
                <input className="input-lunch-dataanak" type="text-data" id="child-lunch" name="child-lunch" value={lunch} onChange={(e) => setLunch(e.target.value)} required />
                <label className="label-dinner-dataanak" htmlFor="child-dinner">
                  Makan Malam
                </label>
                <input className="input-dinner-dataanak" type="text-data" id="child-dinner" name="child-dinner" value={dinner} onChange={(e) => setDinner(e.target.value)} required />
                {error && <div className="error-message-dataanak">{error}</div>}
                <div className="nutrition-analysis-dataanak">Nutrisi akan ditampilkan saat Validasi makanan selesai!</div>
                <div className="button-container-dataanak">
                  <button type="button" className="prev-btn-dataanak" onClick={handlePrevious}>
                    Sebelumnya
                  </button>
                  <button type="submit" className="submit-btn-dataanak">
                    Simpan Data
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Data_Anak;
