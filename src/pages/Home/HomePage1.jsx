import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// कॉमन कंपोनेंट्स
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer";

// लेआउट्स
import LayoutWithBothSidebars from "../../layouts/LayoutWithBothSidebars";
import LayoutWithLeftSidebarOnly from "../../layouts/LayoutWithLeftSidebarOnly";

// पेज कंटेंट
import EntertainmentPage from "../../components/MainArtical/EntertainmentPage";
import PlacementPage from "../../components/MainArtical/PlacementPage";
import IndiaPage from "./IndiaPage";
import RashifalDetailsPage from "../../components/MainArtical/RashifalDetailsPage";
import Form from "../../components/MainArtical/Form";
import NewsPage from "../../components/Main_NewsDetails/NewsContent";
import EpaperGallery from "../EpaperGallery";
import EpaperViewer from "./EpaperViewer";
// --- ✅ यहाँ बदलाव करें ---
// गलत इम्पोर्ट को सही नाम से बदलें
import EpaperPage from "../../components/MainArtical/EpaperPage"; // "EpaperViewer" की जगह "EpaperPage"

import ReelViewer from "../../components/ReelsViewer/ReelViewer";
import NewsDetailPage from "../../components/Main_NewsDetails/NewsDetailPage";
const HEADER_HEIGHT = "155px";

const HomePage1 = () => {
  // ... (आपका sidebar logic, इसमें कोई बदलाव नहीं) ...
  const [sidebarStyle, setSidebarStyle] = useState({
    position: "fixed",
    top: HEADER_HEIGHT,
    height: `calc(100vh - ${HEADER_HEIGHT})`,
  });
  const footerRef = useRef(null);

  useEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSidebarStyle({ position: "absolute", bottom: 0, top: "auto" });
        } else {
          setSidebarStyle({
            position: "fixed",
            top: HEADER_HEIGHT,
            height: `calc(100vh - ${HEADER_HEIGHT})`,
            bottom: "auto",
          });
        }
      },
      { rootMargin: "0px" }
    );

    observer.observe(footerElement);
    return () => observer.unobserve(footerElement);
  }, []);

  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1030,
          backgroundColor: "white",
        }}
      >
        <Header />
      </header>

      <main className="position-relative">
        <Routes>
          {/* फुल-विड्थ वाले पेज */}
          <Route path="/placement-consultants" element={<PlacementPage />} />
          <Route path="/epaper" element={<EpaperGallery />} />
          <Route path="/epaper/viewer/:editionId" element={<EpaperViewer />} />
          {/* --- ✅ यहाँ भी कंपोनेंट का नाम बदलें --- */}
          <Route path="/epaper" element={<EpaperPage />} />{" "}
          {/* "EpaperViewer" की जगह "EpaperPage" */}
          {/* दोनों साइडबार वाले लेआउट */}
            <Route path="/login" element={<Form />} />
          <Route
            element={<LayoutWithBothSidebars sidebarStyle={sidebarStyle} />}
          >
            <Route path="/" element={<NewsPage />} />
            <Route path="/india" element={<IndiaPage />} />
            <Route path="/astrology" element={<RashifalDetailsPage />} />
            <Route path="/news/:newsId" element={<NewsDetailPage/>} />
          </Route>
          {/* सिर्फ लेफ्ट साइडबार वाला लेआउट */}
          <Route
            element={<LayoutWithLeftSidebarOnly sidebarStyle={sidebarStyle} />}
          >
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/thoughts" element={<Form />} />
            <Route path="/shorts" element={<ReelViewer />} />
          </Route>
        </Routes>
      </main>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage1;
