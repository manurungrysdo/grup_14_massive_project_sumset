import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import Pangan_Sayur from "./pages/Pangan_sayur";
import Pangan_buah from "./pages/Pangan_buah";
import Pangan_daging from "./pages/Pangan_daging";
import Pangan_lainnya from "./pages/Pangan_lainnya";
import Panduan_gizi from "./pages/Panduan_gizi";
import Resep from "./pages/Resep";
import Ibu from "./pages/Panduan/Ibu";
import About from "./pages/About";
import Artikel1 from "./pages/Artikel/Artkel1";
import BawangM from "./pages/Sayur/BawangM";
import JurnalKids from "./pages/Jurnalkids";
import Salad from "./pages/Resep/Salad";
import Forum from "./pages/Forum"; // Import the Forum component

import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="pangan_sayur" element={<Pangan_Sayur />} />
          <Route path="pangan_buah" element={<Pangan_buah />} />
          <Route path="pangan_daging" element={<Pangan_daging />} />
          <Route path="pangan_lainnya" element={<Pangan_lainnya />} />
          <Route path="panduan_gizi" element={<Panduan_gizi />} />
          <Route path="resep" element={<Resep />} />
          <Route path="ibu" element={<Ibu />} />
          <Route path="about" element={<About />} />
          <Route path="bawangm" element={<BawangM />} />
          <Route path="jurnalkids" element={<JurnalKids />} />
          <Route path="artikel1" element={<Artikel1 />} />
          <Route path="salad" element={<Salad />} />
          <Route path="forum" element={<Forum />} /> {/* Add the route for Forum */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
