import React, { useEffect, useState } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// ---- 1. एसेट्स का पाथ ----
import logo from "../../../assets/logo.png";
import epaperIcon from "../../../assets/icons/epaper-icon.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
// ✅ emstv-icon.svg का इम्पोर्ट हटा दिया गया है
import directoryIcon from "../../../assets/icons/directory-icon.svg";
import loginIcon from "../../../assets/icons/login-icon.svg";

// ---- 2. Google Translate Widget ----
import GoogleTranslateWidget, {
  useGoogleTranslate,
} from "../../GoogleTranslateWidget";

// सोशल मीडिया आइकन्स
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { headline } from "../../../Services/authApi";

// आइकन बनाने वाला हेल्पर कंपोनेंट
const HeaderActionIcon = ({ icon, text, link }) => (
  <Link
    to={link}
    className="d-flex flex-column align-items-center text-decoration-none text-center"
    style={{ color: "#5e2129" }}
  >
    <img src={icon} alt={text} height="28" />
    <small style={{ fontSize: "11px", marginTop: "4px", fontWeight: "500" }}>
      {text}
    </small>
  </Link>
);

// ✅ ✅ ✅ नया तरीका: EMS TV का आइकॉन सीधे यहीं बना दिया गया है ✅ ✅ ✅
const EmsTvIcon = () => (
  <svg
    height="30"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" // यह अपने पेरेंट (Link) से रंग ले लेगा
  >
    <path d="M25 10 H75 V30 H25 Z M30 15 V25 H70 V15 H30 Z" />
    <path d="M47 35 V60 H40 L50 75 L60 60 H53 V35 H47 Z" />
    <path d="M20 80 H40 V100 H20 Z" />
    <path d="M60 80 H80 V100 H60 Z" />
  </svg>
);

const Header = () => {
  const { changeLanguage } = useGoogleTranslate();
  const [headlineText, setHeadlineText] = useState("");

useEffect(() => {
  const fetchHeadline = async () => {
    try {
      const response = await headline();
      const dataArray = response?.data;

      if (Array.isArray(dataArray) && dataArray.length > 0) {
        // सभी headlines को map कर के trim करके filter करें (empty न हों)
        const allHeadlines = dataArray
          .map((item) => item.headlineText?.trim())
          .filter(Boolean);

        if (allHeadlines.length > 0) {
          setHeadlineText(allHeadlines.join(" • "));
        } else {
          setHeadlineText("कोई हेडलाइन उपलब्ध नहीं है");
        }
      } else {
        setHeadlineText("कोई हेडलाइन उपलब्ध नहीं है");
      }
    } catch (error) {
      console.error("Headline fetch error:", error);
      setHeadlineText("हेडलाइन लोड करने में त्रुटि");
    }
  };

  fetchHeadline();
}, []);


  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <>
      <GoogleTranslateWidget />

      <header className="shadow-sm">
        {/* ===== टॉप ब्लू बार ===== */}
        <div style={{ backgroundColor: "#0d2d62", color: "white" }}>
          <Container
            fluid
            className="d-flex justify-content-between align-items-center py-1 px-3"
          >
            <div className="d-flex align-items-center">
              <Button
                variant="link"
                className="text-white text-decoration-none fw-bold p-0 me-3"
                onClick={() => handleLanguageChange("hi")}
              >
                हिन्दी
              </Button>
              <Button
                variant="link"
                className="text-white text-decoration-none fw-bold p-0"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </Button>
            </div>
            <div className="d-flex align-items-center">
              <a href="#" className="text-white mx-2">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaInstagram size={16} />
              </a>
            </div>
          </Container>
        </div>

        {/* ===== मुख्य सफेद हेडर ===== */}
        <div className="bg-white">
          <Container
            fluid
            className="d-flex justify-content-between align-items-center py-2 px-3"
          >
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none"
            >
              <img
                src={logo}
                alt="Express Media Service Logo"
                height="75"
                className="ps-4"
              />
            </Link>
            <Nav className="d-flex flex-row align-items-center gap-3 gap-md-4">
              <HeaderActionIcon
                icon={epaperIcon}
                text="E-Paper"
                link="/epaper"
              />
              <HeaderActionIcon
                icon={searchIcon}
                text="Search"
                link="/search"
              />

              {/* ✅ ✅ ✅ आइकॉन को यहाँ इस्तेमाल किया गया है ✅ ✅ ✅ */}
              <Link
                to="/emstv"
                className="d-flex flex-column align-items-center text-decoration-none text-center"
                style={{ color: "#5e2129" }}
              >
                <EmsTvIcon />
                <small
                  style={{
                    fontSize: "11px",
                    marginTop: "4px",
                    fontWeight: "500",
                  }}
                >
                  EMS TV
                </small>
              </Link>

              <HeaderActionIcon
                icon={directoryIcon}
                text="डायरेक्टरी"
                link="/directory"
              />
              <Link
                to="/login"
                className="d-flex align-items-center text-decoration-none text-dark fw-bold"
              >
                <img
                  src={loginIcon}
                  alt="Login/Signup"
                  height="32"
                  className="me-2"
                />
                <span>Login/Signup</span>
              </Link>
            </Nav>
          </Container>
        </div>
      </header>

      {/* ===== लाइव न्यूज़ Marquee सेक्शन ===== */}
      <div className="bg-white border-top border-bottom">
        <Container fluid className="d-flex align-items-center p-0">
          <span
            className="text-white fw-bold px-3 py-2 me-3 flex-shrink-0 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#0d2d62", minWidth: "180px" }}
          >
            Live News
          </span>
          <marquee
            behavior="scroll"
            direction="left"
            className="fw-bold py-2"
            style={{ flexGrow: 1, color: "#333" }}
          >
            {/* ब्रिक्स शिखर सम्मेलन में ईरान पर अमेरिका और इजरायली हमलों की निंदा
            की गई, जिसके बाद डोनाल्ड ट्रंप भड़क गए और उन्होंने कहा कि अमेरिका
            विरोधी देशों पर किसी भी कार्रवाई के लिए तैयार है। */}
            {headlineText}
          </marquee>
        </Container>
      </div>
    </>
  );
};

export default Header;

// import React from 'react';
// import { Container, Nav, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // ---- 1. एसेट्स का पाथ ----
// import logo from '../../../assets/logo.png'; // यह आपका मुख्य लोगो आइकॉन है
// import epaperIcon from '../../../assets/icons/epaper-icon.svg';
// import searchIcon from '../../../assets/icons/search-icon.svg';
// import directoryIcon from '../../../assets/icons/directory-icon.svg';
// import loginIcon from '../../../assets/icons/login-icon.svg';

// // ---- 2. Google Translate Widget ----
// import GoogleTranslateWidget, { useGoogleTranslate } from '../../GoogleTranslateWidget';

// // सोशल मीडिया आइकन्स
// import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

// // ✅ EMS TV आइकॉन (SVG Component)
// const EmsTvIcon = () => (
//     <svg height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
//         <path d="M25 10 H75 V30 H25 Z M30 15 V25 H70 V15 H30 Z"/>
//         <path d="M47 35 V60 H40 L50 75 L60 60 H53 V35 H47 Z"/>
//         <path d="M20 80 H40 V100 H20 Z"/>
//         <path d="M60 80 H80 V100 H60 Z"/>
//     </svg>
// );

// // ✅ आइकन बनाने वाला हेल्पर कंपोनेंट (थोड़ा अपडेट किया गया)
// const HeaderActionIcon = ({ children, text, link }) => (
//   <Link to={link} className="d-flex flex-column align-items-center text-decoration-none text-center" style={{ color: '#5e2129', minWidth: '55px' }}>
//     {children}
//     <small style={{ fontSize: '11px', marginTop: '4px', fontWeight: '500' }}>{text}</small>
//   </Link>
// );

// const Header = () => {
//   const { changeLanguage } = useGoogleTranslate();

//   const handleLanguageChange = (lang) => {
//     changeLanguage(lang);
//   };

//   return (
//     <>
//       <GoogleTranslateWidget />

//       <header className="shadow-sm">
//         {/* ===== टॉप ब्लू बार (इसमें कोई बदलाव नहीं) ===== */}
//         <div style={{ backgroundColor: '#0d2d62', color: 'white' }}>
//           <Container fluid className="d-flex justify-content-between align-items-center py-1 px-3">
//             <div className="d-flex align-items-center">
//               <Button variant="link" className="text-white text-decoration-none fw-bold p-0 me-3" onClick={() => handleLanguageChange('hi')}>
//                   हिन्दी
//               </Button>
//               <Button variant="link" className="text-white text-decoration-none fw-bold p-0" onClick={() => handleLanguageChange('en')}>
//                   English
//               </Button>
//             </div>
//             <div className="d-flex align-items-center gap-3">
//               <a href="#" className="text-white"><FaFacebookF size={16} /></a>
//               <a href="#" className="text-white"><FaXTwitter size={16} /></a>
//               <a href="#" className="text-white"><FaYoutube size={16} /></a>
//               <a href="#" className="text-white"><FaInstagram size={16} /></a>
//             </div>
//           </Container>
//         </div>

//         {/* ✅ ===== मुख्य सफेद हेडर (पूरी तरह से अपडेट किया गया) ===== */}
//         <div className="bg-white">
//           <Container fluid className="d-flex justify-content-between align-items-center py-2 px-3">

//             {/* 1. लोगो और टेक्स्ट */}
//             <Link to="/" className="d-flex flex-column align-items-center text-decoration-none">
//               <img src={logo} alt="Express Media Service Logo" style={{height: '60px'}} />
//               <span className="fw-bold mt-1" style={{ color: '#8B3A3A', fontSize: '11px', letterSpacing: '0.5px' }}>
//                 EXPRESS MEDIA SERVICE
//               </span>
//             </Link>

//             {/* 2. बीच का नीला विज्ञापन बॉक्स */}
//             <div style={{ backgroundColor: '#007bff', height: '70px', flexGrow: 1, margin: '0 2rem' }}>
//               {/* यह विज्ञापन का स्थान है */}
//             </div>

//             {/* 3. दाहिने तरफ के सारे आइकन्स */}
//             <Nav className="d-flex flex-row align-items-center gap-2 gap-md-3">
//               <HeaderActionIcon text="E-Paper" link="/epaper">
//                 <img src={epaperIcon} alt="E-Paper" height="30" />
//               </HeaderActionIcon>
//               <HeaderActionIcon text="Search" link="/search">
//                 <img src={searchIcon} alt="Search" height="30" />
//               </HeaderActionIcon>
//               <HeaderActionIcon text="EMS TV" link="/emstv">
//                 <EmsTvIcon />
//               </HeaderActionIcon>
//               <HeaderActionIcon text="डायरेक्टरी" link="/directory">
//                 <img src={directoryIcon} alt="डायरेक्टरी" height="30" />
//               </HeaderActionIcon>
//               <HeaderActionIcon text="Login/Signup" link="/login">
//                 <img src={loginIcon} alt="Login/Signup" height="30" />
//               </HeaderActionIcon>
//             </Nav>

//           </Container>
//         </div>
//       </header>

//       {/* ===== लाइव न्यूज़ Marquee सेक्शन (इसमें कोई बदलाव नहीं) ===== */}
//       <div className="bg-white border-top border-bottom">
//         <Container fluid className="d-flex align-items-center p-0">
//           <span className="text-white fw-bold px-3 py-2 me-3 flex-shrink-0" style={{ backgroundColor: '#0d2d62', minWidth: '180px' }}>
//             Live News
//           </span>
//           <marquee behavior="scroll" direction="left" className="fw-bold py-2" style={{ flexGrow: 1, color: '#333' }}>
//             ब्रिक्स शिखर सम्मेलन में ईरान पर अमेरिका और इजरायली हमलों की निंदा की गई, जिसके बाद डोनाल्ड ट्रंप भड़क गए...
//           </marquee>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Header;
