
// // import React, { useState } from 'react';
// // import { Container, Row, Col, Image } from 'react-bootstrap';
// // import { FaLandmarkDome, FaMosque, FaBookOpen, FaMountainSun, FaTractor, FaFilm } from 'react-icons/fa6';
// // import { GiMineWagon, GiCastle, GiHeartWings } from 'react-icons/gi';
// // import { BsPersonCircle } from 'react-icons/bs';

// // import rcb from '../../assets/rcb.png';

// // // अस्थायी प्लेसहोल्डर
// // const placeholderSmallImg = "https://via.placeholder.com/120x80";

// // const City = () => {
// //     const [activeState, setActiveState] = useState('NCR');

// //     const statesData = [
// //         { name: 'NCR', icon: <FaLandmarkDome size={24} /> },
// //         { name: 'उत्तर प्रदेश', icon: <FaMosque size={24} /> },
// //         { name: 'बिहार', icon: <FaBookOpen size={24} /> },
// //         { name: 'उत्तराखंड', icon: <FaMountainSun size={24} /> },
// //         { name: 'झारखंड', icon: <GiMineWagon size={24} /> },
// //         { name: 'राजस्थान', icon: <GiCastle size={24} /> },
// //         { name: 'मध्य प्रदेश', icon: <GiHeartWings size={24} /> },
// //         { name: 'महाराष्ट्र', icon: <FaFilm size={24} /> },
// //         { name: 'हरियाणा', icon: <FaTractor size={24} /> },
// //     ];
    
// //     const citiesData = ['नई दिल्ली', 'नोएडा', 'गुरुग्राम', 'फरीदाबाद', 'गाजियाबाद', 'ग्रेटर नोएडा', 'ट्रेंडिंग'];

// //     const mainArticle = { image: rcb, headline: 'कर्नाटक सरकार ने RCB पर फोड़ा झगड़ का ठीकरा, विराट कोहली का भी नाम लिया' };
// //     const bottomArticle = { image: placeholderSmallImg, headline: 'धर्मेंद्र प्रधान और भूपेंद्र यादव के नाम पर RSS से नहीं बन पा रही सहमति, कौन बनेगा भाजपा अध्यक्ष?', datetime: 'Thu, 17 July 2025 09:38 AM', author: 'Aman Sanodiya' };
// //     const sideArticles = [
// //         { image: placeholderSmallImg, headline: 'रेलवे यात्रियों के लिए अलर्ट, बदल गया तत्काल टिकट बुकिंग का तरीका; यहां जानें नया नियम', datetime: 'Thu, 17 July 2025 10:04 AM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: '8वीं बार जीता स्वच्छता का पहला खिताब, इंदौर ने फिर किया कमाल, जानिए दूसरा, तीसरा कौन?', datetime: 'Thu, 17 July 2025 12:21 PM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'हम करेंगे नेतृत्व और मैं बनूंगा मुख्यमंत्री, BJP के इस साथी दल ने कर दिया सीधा ऐलान', datetime: 'Thu, 17 July 2025 07:20 AM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'पति का अफेयर, ससुर जबरन करता था सेक्स; केरल की महिला ने बेटी के साथ शारजाह में कर ली आत्महत्या', datetime: 'Thu, 17 July 2025 07:52 AM', author: 'Aman Sanodiya' },
// //     ];

// //     const AuthorInfo = ({ name }) => (
// //         <div className="d-flex align-items-center text-muted small mt-1">
// //             <BsPersonCircle className="me-1" />
// //             <span style={{ fontSize: '0.75rem' }}>By {name}</span>
// //         </div>
// //     );

// //     return (
// //         <Container fluid className="mt-4">
// //             {/* सेक्शन का हेडर */}
// //             <div className="d-flex align-items-center mb-3">
// //                 <div className="d-flex align-items-center flex-shrink-0">
// //                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }}></div>
// //                     <h5 className="fw-bold m-0 ms-2">अपना शहर चुनें</h5>
// //                 </div>
// //                 <hr className="flex-grow-1 mx-3 border-danger border-2 opacity-100" />
// //             </div>

// //             {/* राज्य और शहर चयनकर्ता (रिस्पॉन्सिव) */}
// //             <div>
// //                 {/* Bootstrap की Row अपने आप रिस्पॉन्सिव होती है और फ्लेक्स-रैप का इस्तेमाल करती है */}
// //                 <Row className="g-0 border-bottom">
// //                     {statesData.map(state => (
// //                         <Col 
// //                             xs="auto" // हर कॉलम अपनी सामग्री के हिसाब से चौड़ाई लेगा
// //                             key={state.name}
// //                             className={`text-center py-2 px-md-3 px-2 ${activeState === state.name ? 'bg-dark text-white rounded-top' : ''}`}
// //                             onClick={() => setActiveState(state.name)}
// //                             style={{ cursor: 'pointer', flex: '1 1 0' }} // सभी को बराबर जगह देने के लिए
// //                         >
// //                             <div style={{ height: '28px' }} className="d-flex justify-content-center align-items-center">
// //                                 {state.icon}
// //                             </div>
// //                             <p className="small fw-bold m-0 mt-1">{state.name}</p>
// //                         </Col>
// //                     ))}
// //                 </Row>
// //                 <div className="d-flex align-items-center bg-dark text-white p-2 flex-nowrap overflow-x-auto">
// //                     {citiesData.map(city => (
// //                         <a href="#" key={city} className="text-white text-decoration-none me-4 small fw-bold flex-shrink-0">{city}</a>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* समाचार सेक्शन (रिस्पॉन्सिव) */}
// //             {/* यह Row बड़ी स्क्रीन (lg) पर 7:5 के अनुपात में और छोटी स्क्रीन पर स्टैक्ड रहेगी */}
// //             <Row className="mt-4">
// //                 {/* बायां कॉलम (मुख्य समाचार) */}
// //                 <Col lg={7} className="mb-4 mb-lg-0">
// //                     <div className="position-relative mb-4">
// //                         <Image src={mainArticle.image} fluid rounded />
// //                         <div className="position-absolute bottom-0 start-0 text-white w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}>
// //                             <h4 className="fw-bold">{mainArticle.headline}</h4>
// //                         </div>
// //                     </div>
// //                     <div className="d-flex">
// //                         <Image src={bottomArticle.image} width={120} height={80} className="me-3 rounded" style={{ objectFit: 'cover' }} />
// //                         <div>
// //                             <p className="fw-bold mb-1">{bottomArticle.headline}</p>
// //                             <p className="text-muted small m-0">{bottomArticle.datetime}</p>
// //                             <AuthorInfo name={bottomArticle.author} />
// //                         </div>
// //                     </div>
// //                 </Col>
                
// //                 {/* दायां कॉलम (साइड समाचार) */}
// //                 <Col lg={5}>
// //                     {sideArticles.map((article, index) => (
// //                         <React.Fragment key={index}>
// //                             <div className="d-flex">
// //                                 <Image src={article.image} width={100} height={70} className="me-3 rounded" style={{ objectFit: 'cover' }} />
// //                                 <div>
// //                                     <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
// //                                     <p className="text-muted small m-0">{article.datetime}</p>
// //                                     <AuthorInfo name={article.author} />
// //                                 </div>
// //                             </div>
// //                             {index < sideArticles.length - 1 && <hr className="my-3" />}
// //                         </React.Fragment>
// //                     ))}
// //                 </Col>
// //             </Row>

// //             <div style={{ width: '60px', height: '4px', backgroundColor: '#F8D7DA' }} className="mt-4"></div>
// //         </Container>
// //     );
// // };

// // export default City;
// import React, { useState } from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import { FaLandmarkDome, FaMosque, FaBookOpen, FaMountainSun, FaTractor, FaFilm } from 'react-icons/fa6';
// import { GiMineWagon, GiCastle, GiHeartWings } from 'react-icons/gi';
// import { BsPersonCircle } from 'react-icons/bs';

// import rcb from '../../assets/rcb.png';

// // अस्थायी प्लेसहोल्डर
// const placeholderSmallImg = "https://via.placeholder.com/120x80";

// const City = () => {
//     const [activeState, setActiveState] = useState('NCR');

//     const statesData = [
//         { name: 'NCR', icon: <FaLandmarkDome size={24} /> },
//         { name: 'उत्तर प्रदेश', icon: <FaMosque size={24} /> },
//         { name: 'बिहार', icon: <FaBookOpen size={24} /> },
//         { name: 'उत्तराखंड', icon: <FaMountainSun size={24} /> },
//         { name: 'झारखंड', icon: <GiMineWagon size={24} /> },
//         { name: 'राजस्थान', icon: <GiCastle size={24} /> },
//         { name: 'मध्य प्रदेश', icon: <GiHeartWings size={24} /> },
//         { name: 'महाराष्ट्र', icon: <FaFilm size={24} /> },
//         { name: 'हरियाणा', icon: <FaTractor size={24} /> },
//     ];
    
//     const citiesData = ['नई दिल्ली', 'नोएडा', 'गुरुग्राम', 'फरीदाबाद', 'गाजियाबाद', 'ग्रेटर नोएडा', 'ट्रेंडिंग'];

//     const mainArticle = { image: rcb, headline: 'कर्नाटक सरकार ने RCB पर फोड़ा झगड़ का ठीकरा, विराट कोहली का भी नाम लिया' };
//     const bottomArticle = { image: placeholderSmallImg, headline: 'धर्मेंद्र प्रधान और भूपेंद्र यादव के नाम पर RSS से नहीं बन पा रही सहमति, कौन बनेगा भाजपा अध्यक्ष?', datetime: 'Thu, 17 July 2025 09:38 AM', author: 'Aman Sanodiya' };
//     const sideArticles = [
//         { image: placeholderSmallImg, headline: 'रेलवे यात्रियों के लिए अलर्ट, बदल गया तत्काल टिकट बुकिंग का तरीका; यहां जानें नया नियम', datetime: 'Thu, 17 July 2025 10:04 AM', author: 'Aman Sanodiya' },
//         { image: placeholderSmallImg, headline: '8वीं बार जीता स्वच्छता का पहला खिताब, इंदौर ने फिर किया कमाल, जानिए दूसरा, दूसरा कौन?', datetime: 'Thu, 17 July 2025 12:21 PM', author: 'Aman Sanodiya' },
//         { image: placeholderSmallImg, headline: 'हम करेंगे नेतृत्व और मैं बनूंगा मुख्यमंत्री, BJP के इस साथी दल ने कर दिया सीधा ऐलान', datetime: 'Thu, 17 July 2025 07:20 AM', author: 'Aman Sanodiya' },
//         { image: placeholderSmallImg, headline: 'पति का अफेयर, ससुर जबरन करता था सेक्स; केरल की महिला ने बेटी के साथ शारजाह में कर ली आत्महत्या', datetime: 'Thu, 17 July 2025 07:52 AM', author: 'Aman Sanodiya' },
//     ];

//     const AuthorInfo = ({ name }) => (
//         <div className="d-flex align-items-center text-muted small mt-1">
//             <BsPersonCircle className="me-1" />
//             <span style={{ fontSize: '0.75rem' }}>By {name}</span>
//         </div>
//     );

//     return (
//         <Container fluid className="mt-4">
//             {/* सेक्शन का हेडर */}
//             <div className="d-flex align-items-center mb-3">
//                 <div className="d-flex align-items-center flex-shrink-0">
//                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }}></div>
//                     <h5 className="fw-bold m-0 ms-2">अपना शहर चुनें</h5>
//                 </div>
//                 <hr className="flex-grow-1 mx-3 border-danger border-2 opacity-100" />
//             </div>

//             {/* राज्य और शहर चयनकर्ता */}
//             <div>
//                 <Row className="g-0 border-bottom">
//                     {statesData.map(state => (
//                         <Col
//                             xs="auto" 
//                             key={state.name}
//                             className={`text-center py-2 px-3 ${activeState === state.name ? 'bg-dark text-white rounded-top' : ''}`}
//                             onClick={() => setActiveState(state.name)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <div style={{ height: '28px' }} className="d-flex justify-content-center align-items-center">
//                                 {state.icon}
//                             </div>
//                             <p className="small fw-bold m-0 mt-1" style={{fontSize: '0.75rem'}}>{state.name}</p>
//                         </Col>
//                     ))}
//                 </Row>
//                 <div className="d-flex align-items-center bg-dark text-white p-2 flex-nowrap overflow-x-auto">
//                     {citiesData.map(city => (
//                         <a href="#" key={city} className="text-white text-decoration-none me-4 small fw-bold flex-shrink-0">{city}</a>
//                     ))}
//                 </div>
//             </div>

//             {/* समाचार सेक्शन */}
//             <Row className="mt-4">
//                 {/* ✅ <<< बाएं कॉलम को फ्लेक्स कंटेनर बनाया गया (सिर्फ lg स्क्रीन पर) >>> */}
//                 <Col lg={7} className="mb-4 mb-lg-0 d-lg-flex flex-column">
                    
//                     {/* ✅ <<< मुख्य इमेज कंटेनर को फ्लेक्स-ग्रो दिया गया >>> */}
//                     <div className="position-relative mb-4 flex-grow-1">
//                         {/* ✅ <<< इमेज को 100% ऊंचाई दी गई >>> */}
//                         <Image src={mainArticle.image} fluid rounded className="w-100 h-100" style={{ objectFit: 'cover' }} />
//                         <div className="position-absolute bottom-0 start-0 text-white w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}>
//                             <h5 className="fw-bold">{mainArticle.headline}</h5>
//                         </div>
//                     </div>
                    
//                     {/* यह फ्लेक्स कंटेनर में सिकुड़ जाएगा (shrink) */}
//                     <Row className="align-items-center">
//                         <Col xs={4} md={3}>
//                             <Image src={bottomArticle.image} fluid rounded />
//                         </Col>
//                         <Col xs={8} md={9} className="ps-2">
//                             <div>
//                                 <p className="fw-bold mb-1">{bottomArticle.headline}</p>
//                                 <p className="text-muted small m-0">{bottomArticle.datetime}</p>
//                                 <AuthorInfo name={bottomArticle.author} />
//                             </div>
//                         </Col>
//                     </Row>
//                 </Col>
                
//                 {/* दायां कॉलम (इसकी कुल ऊंचाई के आधार पर बाएं कॉलम की ऊंचाई तय होगी) */}
//                 <Col lg={5}>
//                     {sideArticles.map((article, index) => (
//                         <React.Fragment key={index}>
//                             <Row className="align-items-center">
//                                 <Col xs={4}>
//                                     <Image src={article.image} fluid rounded />
//                                 </Col>
//                                 <Col xs={8} className="ps-2">
//                                     <div>
//                                         <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
//                                         <p className="text-muted small m-0">{article.datetime}</p>
//                                         <AuthorInfo name={article.author} />
//                                     </div>
//                                 </Col>
//                             </Row>
//                             {index < sideArticles.length - 1 && <hr className="my-3" />}
//                         </React.Fragment>
//                     ))}
//                 </Col>
//             </Row>

//             <div style={{ width: '60px', height: '4px', backgroundColor: '#F8D7DA' }} className="mt-4"></div>
//         </Container>
//     );
// };

// export default City;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, Alert, Button } from "react-bootstrap";
import { FaLandmarkDome } from "react-icons/fa6";
import axios from "axios";
import { allNews } from "../../Services/authApi";
import { getStatesByCountry, getCitiesByState } from "../../Services/authApi";

const City = () => {
  const [activeState, setActiveState] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [expandedNews, setExpandedNews] = useState({});
  const [showAllStates, setShowAllStates] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);

  // ✅ Fetch News
// ✅ News Fetch Function
const fetchNews = async (stateId = null, cityId = null) => {
  setLoading(true);
  try {
    const res = await allNews(); // direct call, ये response देगा

    if (res?.success) {
      let filteredNews = res.data;

      // ✅ अगर stateId मिला तो state-based filter
      if (stateId) {
        filteredNews = filteredNews.filter(
          (item) => item.state?._id === stateId
        );
      }

      // ✅ अगर cityId मिला तो city-based filter
      if (cityId) {
        filteredNews = filteredNews.filter(
          (item) => item.city?._id === cityId
        );
      }

      setNews(filteredNews);
    } else {
      setNews([]);
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    setNews([]);
  }
  setLoading(false);
};


  // ✅ State Select
  const handleStateClick = async (state) => {
    setActiveState(state);
    setActiveCity(null);
    fetchNews(state._id, null);

    try {
      const citiesRes = await getCitiesByState(state._id);
      setCities(citiesRes.data || []);
      setShowAllCities(false); // reset when state changes
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  };

  // ✅ City Select
  const handleCityClick = (city) => {
    setActiveCity(city);
    fetchNews(activeState?._id, city._id);
  };

  // ✅ Load States on Mount
  useEffect(() => {
    fetchNews();
    getStatesByCountry("687a1e2185f0230715032380").then((res) => {
      setStates(res.data || []);
    });
  }, []);

  // ✅ Toggle Read More for News
  const toggleReadMore = (id) => {
    setExpandedNews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container fluid className="mt-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <div className="d-flex align-items-center flex-shrink-0">
          <div style={{ width: "5px", height: "24px", backgroundColor: "#A12D2A" }}></div>
          <h5 className="fw-bold m-0 ms-2">अपना शहर चुनें</h5>
        </div>
        <hr className="flex-grow-1 mx-3 border-danger border-2 opacity-100" />
      </div>

      {/* ✅ States Selector */}
      {!showAllStates ? (
        <Row className="g-0 border-bottom flex-nowrap overflow-x-auto">
          {states.slice(0, 5).map((state) => (
            <Col
              xs="auto"
              key={state._id}
              className={`text-center py-2 px-3 ${activeState?._id === state._id ? "bg-dark text-white rounded-top" : ""}`}
              onClick={() => handleStateClick(state)}
              style={{ cursor: "pointer", minWidth: "90px" }}
            >
              <div style={{ height: "28px" }} className="d-flex justify-content-center align-items-center">
                <FaLandmarkDome size={20} />
              </div>
              <p className="small fw-bold m-0 mt-1">{state.name}</p>
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="g-2 border-bottom">
          {states.map((state) => (
            <Col
              xs={6} sm={4} md={3} lg={2}
              key={state._id}
              className={`text-center py-2 px-3 ${activeState?._id === state._id ? "bg-dark text-white rounded" : ""}`}
              onClick={() => handleStateClick(state)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ height: "28px" }} className="d-flex justify-content-center align-items-center">
                <FaLandmarkDome size={20} />
              </div>
              <p className="small fw-bold m-0 mt-1">{state.name}</p>
            </Col>
          ))}
        </Row>
      )}

      {/* Read More / Less for States */}
      {states.length > 5 && (
        <div className="text-center my-2">
          <Button variant="outline-danger" size="sm" onClick={() => setShowAllStates(!showAllStates)}>
            {showAllStates ? "Read Less" : " Read More"}
          </Button>
        </div>
      )}

 {cities.length > 0 && (
  <>
    {!showAllCities ? (
      <div className="d-flex align-items-center bg-dark text-white p-2 flex-nowrap overflow-x-auto">
        {cities.slice(0, 7).map((city) => (
          <span
            key={city._id}
            onClick={() => handleCityClick(city)}
            className={`me-4 small fw-bold flex-shrink-0 ${
              activeCity?._id === city._id ? "text-warning" : "text-white"
            }`}
            style={{ cursor: "pointer" }}
          >
            {city.name}
          </span>
        ))}

        {/* ✅ Button को Cities bar के Right Side पर दिखाएँ */}
        {cities.length > 5 && (
          <Button
            variant="outline-light"
            size="sm"
            className="ms-3 flex-shrink-0"
            onClick={() => setShowAllCities(true)}
          >
             Read More
          </Button>
        )}
      </div>
    ) : (
      <div className="bg-dark text-white p-2">
        <Row className="g-2">
          {cities.map((city) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={city._id}
              className="fw-bold small text-center"
              style={{ cursor: "pointer" }}
              onClick={() => handleCityClick(city)}
            >
              <span
                className={
                  activeCity?._id === city._id ? "text-warning" : "text-white"
                }
              >
                {city.name}
              </span>
            </Col>
          ))}
        </Row>

        {/* ✅ Grid Mode में नीचे Center पर button */}
        {cities.length > 5 && (
          <div className="text-center my-2">
            <Button
              variant="outline-light"
              size="sm"
              onClick={() => setShowAllCities(false)}
            >
              Read Less
            </Button>
          </div>
        )}
      </div>
    )}
  </>
)}


      {/* ✅ News Section */}
      <div className="mt-4">
        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : news.length === 0 ? (
          <Alert variant="warning">कोई खबर नहीं मिली!</Alert>
        ) : (
          news.map((item) => {
            const isExpanded = expandedNews[item._id];
            const summary = item.summary || "";
            const shortText = summary.length > 100 ? summary.slice(0, 100) + "..." : summary;

            return (
              <Row key={item._id} className="mb-3 border-bottom pb-2">
                <Col xs={12} md={4} className="mb-2">
                  <Image
                    src={item.media?.[0]?.url || "https://via.placeholder.com/150"}
                    fluid
                    rounded
                    className="w-100"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted small">
                    {item.createdAtDate} | {item.createdBy?.name}
                  </p>
                  <p className="small">
                    {isExpanded ? summary : shortText}
                    {summary.length > 100 && (
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 ms-1"
                        onClick={() => toggleReadMore(item._id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </Button>
                    )}
                  </p>
                </Col>
              </Row>
            );
          })
        )}
      </div>
    </Container>
  );
};

export default City;
