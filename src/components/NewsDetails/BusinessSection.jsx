// // // import React from 'react';
// // // import { Container, Row, Col, Image } from 'react-bootstrap';
// // // import { FaArrowRight } from 'react-icons/fa';

// // // // --- प्लेसहोल्डर इमेज (ये पहले से इम्पोर्टेड हैं) ---
// // // import ram from '../../assets/ramdev.png';
// // // import DM from '../../assets/DM.png';
// // // import ismrti from '../../assets/ismrti.png';
// // // import rss from '../../assets/rss.png';

// // // const BusinessSection = () => {
// // //     // --- डेटा ---
// // //     const mainArticle = { image: ram, headline: 'डिविडेंड के बाद अब बोनस शेयर का ऐलान, हर 1 पर 2 शेयर फ्री देगी दिग्गज कंपनी' };
// // //     const bottomArticle = { image: DM, headline: 'एनटीपीसी के सीएमडी को लेकर सरकार का बड़ा फैसला, शेयर पर कैसा हुआ असर', datetime: 'Thu, 17 July 2025 12:34 PM' };
// // //     const sideArticles = [
// // //         { image: ismrti, headline: '2 साल से कम में 543% की तेजी, 2.70 रुपये से 17 रुपये के पार पहुंचा पेनी स्टॉक', datetime: 'Thu, 17 July 2025 12:01 PM' },
// // //         { image: rss, headline: 'शानदार जून तिमाही नतीजे के बाद निवेशक गदगद, शेयर खरीदने की लूट, ₹200 से कम दाम', datetime: 'Thu, 17 July 2025 11:30 AM' },
// // //         { image: DM, headline: 'सावधान! इस बार ITR में गलती नहीं चलेगी, ‘राजू’ से सीधे नोटिस से बचे रहेंगे', datetime: 'Thu, 17 July 2025 11:01 AM' },
// // //         { image: rss, headline: 'पावर कंपनी से मिला बड़ा ऑर्डर, शेयर खरीदने की मची लूट, ₹375 तक जाएगा भाव!', datetime: 'Thu, 17 July 2025 10:46 AM' },
// // //     ];

// // //     return (
// // //         <Container fluid className="mt-4">
// // //             {/* ✅ <<< सेक्शन का हेडर (लाइन और फॉन्ट सही किया गया) >>> */}
// // //             <div className="d-flex align-items-center mb-3">
// // //                 {/* हेडिंग */}
// // //                 <div className="d-flex align-items-center flex-shrink-0">
// // //                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
// // //                     <h5 className="fw-bold m-0">बिज़नेस</h5>
// // //                 </div>
                
// // //                 {/* लाइन जो बीच की जगह लेगी */}
// // //                 <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />
                
// // //                 {/* "और पढ़ें" लिंक */}
// // //                 <a href="#" className="text-decoration-none fw-bold small flex-shrink-0" style={{ color: '#A12D2A' }}>
// // //                     और पढ़ें <FaArrowRight size={12} />
// // //                 </a>
// // //             </div>

// // //             {/* मुख्य कंटेंट ग्रिड */}
// // //             <Row>
// // //                 {/* बायाँ कॉलम */}
// // //                 <Col lg={7} className="mb-4 mb-lg-0 d-flex flex-column">
// // //                     {/* मुख्य आर्टिकल */}
// // //                     <div className="position-relative mb-4 flex-grow-1">
// // //                         <Image src={mainArticle.image} className="rounded w-100 h-100" style={{ objectFit: 'cover' }} />
// // //                         <div 
// // //                             className="position-absolute bottom-0 start-0 text-white w-100 p-3"
// // //                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}
// // //                         >
// // //                             <h4 className="fw-bold">{mainArticle.headline}</h4>
// // //                         </div>
// // //                     </div>

// // //                     {/* नीचे वाला आर्टिकल */}
// // //                     <div className="d-flex align-items-center">
// // //                         <Image src={bottomArticle.image} width={120} height={80} className="me-3 rounded" style={{ objectFit: 'cover' }} />
// // //                         <div>
// // //                             <p className="fw-bold mb-1">{bottomArticle.headline}</p>
// // //                             <p className="text-muted small m-0">{bottomArticle.datetime}</p>
// // //                         </div>
// // //                     </div>
// // //                 </Col>

// // //                 {/* दायाँ कॉलम */}
// // //                 <Col lg={5}>
// // //                     {sideArticles.map((article, index) => (
// // //                         <React.Fragment key={index}>
// // //                             <div className="d-flex align-items-center">
// // //                                 <Image src={article.image} width={100} height={70} className="me-3 rounded" style={{ objectFit: 'cover' }} />
// // //                                 <div>
// // //                                     {/* ✅ <<< फॉन्ट को fw-medium किया गया >>> */}
// // //                                     <p className="fw-medium mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
// // //                                     <p className="text-muted small m-0">{article.datetime}</p>
// // //                                 </div>
// // //                             </div>
// // //                             {index < sideArticles.length - 1 && <hr className="my-3" />}
// // //                         </React.Fragment>
// // //                     ))}
// // //                 </Col>
// // //             </Row>
// // //         </Container>
// // //     );
// // // };

// // // export default BusinessSection;


// // import React from 'react';
// // import { Container, Row, Col, Image } from 'react-bootstrap';
// // import { FaArrowRight } from 'react-icons/fa';

// // // --- प्लेसहोल्डर इमेज (ये पहले से इम्पोर्टेड हैं) ---
// // import ram from '../../assets/ramdev.png';
// // import DM from '../../assets/DM.png';
// // import ismrti from '../../assets/ismrti.png';
// // import rss from '../../assets/rss.png';

// // const BusinessSection = () => {
// //     // --- डेटा ---
// //     const mainArticle = { image: ram, headline: 'डिविडेंड के बाद अब बोनस शेयर का ऐलान, हर 1 पर 2 शेयर फ्री देगी दिग्गज कंपनी' };
// //     const bottomArticle = { image: DM, headline: 'एनटीपीसी के सीएमडी को लेकर सरकार का बड़ा फैसला, शेयर पर कैसा हुआ असर', datetime: 'Thu, 17 July 2025 12:34 PM' };
// //     const sideArticles = [
// //         { image: ismrti, headline: '2 साल से कम में 543% की तेजी, 2.70 रुपये से 17 रुपये के पार पहुंचा पेनी स्टॉक', datetime: 'Thu, 17 July 2025 12:01 PM' },
// //         { image: rss, headline: 'शानदार जून तिमाही नतीजे के बाद निवेशक गदगद, शेयर खरीदने की लूट, ₹200 से कम दाम', datetime: 'Thu, 17 July 2025 11:30 AM' },
// //         { image: DM, headline: 'सावधान! इस बार ITR में गलती नहीं चलेगी, ‘राजू’ से सीधे नोटिस से बचे रहेंगे', datetime: 'Thu, 17 July 2025 11:01 AM' },
// //         { image: rss, headline: 'पावर कंपनी से मिला बड़ा ऑर्डर, शेयर खरीदने की मची लूट, ₹375 तक जाएगा भाव!', datetime: 'Thu, 17 July 2025 10:46 AM' },
// //     ];

// //     return (
// //         <Container fluid className="mt-4">
// //             {/* सेक्शन का हेडर (यह पहले से ही रिस्पॉन्सिव है) */}
// //             <div className="d-flex align-items-center mb-3">
// //                 <div className="d-flex align-items-center flex-shrink-0">
// //                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
// //                     <h5 className="fw-bold m-0">बिज़नेस</h5>
// //                 </div>
// //                 <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />
// //                 <a href="#" className="text-decoration-none fw-bold small flex-shrink-0" style={{ color: '#A12D2A' }}>
// //                     और पढ़ें <FaArrowRight size={12} />
// //                 </a>
// //             </div>

// //             {/* मुख्य कंटेंट ग्रिड */}
// //             <Row>
// //                 {/* बायाँ कॉलम */}
// //                 <Col lg={7} className="mb-4 mb-lg-0 d-flex flex-column">
// //                     {/* मुख्य आर्टिकल */}
// //                     <div className="position-relative mb-4 flex-grow-1">
// //                         <Image src={mainArticle.image} className="rounded w-100 h-100" style={{ objectFit: 'cover' }} />
// //                         <div
// //                             className="position-absolute bottom-0 start-0 text-white w-100 p-3"
// //                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}
// //                         >
// //                             {/* ✅ <<< हेडलाइन का साइज मोबाइल के लिए बेहतर किया गया >>> */}
// //                             <h5 className="fw-bold">{mainArticle.headline}</h5>
// //                         </div>
// //                     </div>

// //                     {/* नीचे वाला आर्टिकल - अब पूरी तरह रिस्पॉन्सिव */}
// //                     {/* ✅ <<< उत्तरदायी ग्रिड और fluid इमेज का उपयोग >>> */}
// //                     <Row className="align-items-center">
// //                         <Col xs={4} sm={3}>
// //                             <Image src={bottomArticle.image} fluid rounded />
// //                         </Col>
// //                         <Col xs={8} sm={9} className="ps-2">
// //                             <div>
// //                                 <p className="fw-bold mb-1">{bottomArticle.headline}</p>
// //                                 <p className="text-muted small m-0">{bottomArticle.datetime}</p>
// //                             </div>
// //                         </Col>
// //                     </Row>
// //                 </Col>

// //                 {/* दायाँ कॉलम */}
// //                 <Col lg={5}>
// //                     {sideArticles.map((article, index) => (
// //                         <React.Fragment key={index}>
// //                             {/* ✅ <<< हर साइड आर्टिकल के लिए उत्तरदायी ग्रिड और fluid इमेज >>> */}
// //                             <Row className="align-items-center">
// //                                 <Col xs={4}>
// //                                     <Image src={article.image} fluid rounded />
// //                                 </Col>
// //                                 <Col xs={8} className="ps-2">
// //                                     <div>
// //                                         <p className="fw-medium mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
// //                                         <p className="text-muted small m-0">{article.datetime}</p>
// //                                     </div>
// //                                 </Col>
// //                             </Row>
// //                             {index < sideArticles.length - 1 && <hr className="my-3" />}
// //                         </React.Fragment>
// //                     ))}
// //                 </Col>
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default BusinessSection;


// // update by yash 8/18/25

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";
// import { allNews } from "../../Services/authApi"; // ✅ आपकी API function

// const BusinessSection = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await allNews();
//         if (res?.success) {
//           // ✅ सिर्फ "Business" category वाली news filter कर रहे हैं
//           const businessNews = res.data.filter(
//             (item) =>
//               item.category?.name === "Business" ||
//               item.category?.name === "बिज़नेस"
//           );
//           setNewsData(businessNews);
//         } else {
//           setError("Failed to load news");
//         }
//       } catch (err) {
//         setError(err.message || "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center my-4">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <Alert variant="danger" className="my-4">
//         Error loading news: {error}
//       </Alert>
//     );
//   }

//   if (newsData.length === 0) {
//     return (
//       <Alert variant="warning" className="my-4">
//         बिज़नेस की कोई खबर उपलब्ध नहीं है।
//       </Alert>
//     );
//   }

//   // 👉 डेटा arrange करना (Design वही रहेगा)
//   const mainArticle = newsData[0]; // पहली news main
//   const bottomArticle = newsData[1]; // दूसरी नीचे वाली
//   const sideArticles = newsData.slice(2, 6); // अगली 4 दायें कॉलम में

//   return (
//     <Container fluid className="mt-4">
//       {/* सेक्शन का हेडर */}
//       <div className="d-flex align-items-center mb-3">
//         <div className="d-flex align-items-center flex-shrink-0">
//           <div
//             style={{ width: "5px", height: "24px", backgroundColor: "#A12D2A" }}
//             className="me-2"
//           ></div>
//           <h5 className="fw-bold m-0">बिज़नेस</h5>
//         </div>
//         <hr
//           className="flex-grow-1 mx-3"
//           style={{ borderTop: "2px solid #A12D2A", opacity: 1 }}
//         />
//         <a
//           href="#"
//           className="text-decoration-none fw-bold small flex-shrink-0"
//           style={{ color: "#A12D2A" }}
//         >
//           और पढ़ें <FaArrowRight size={12} />
//         </a>
//       </div>

//       {/* मुख्य कंटेंट ग्रिड */}
//       <Row>
//         {/* बायाँ कॉलम */}
//         <Col lg={7} className="mb-4 mb-lg-0 d-flex flex-column">
//           {/* मुख्य आर्टिकल */}
//           {mainArticle && (
//             <div className="position-relative mb-4 flex-grow-1">
//               <Image
//                 src={
//                   mainArticle.media?.[0]?.url ||
//                   "https://via.placeholder.com/600x400"
//                 }
//                 className="rounded w-100 h-100"
//                 style={{ objectFit: "cover" }}
//               />
//               <div
//                 className="position-absolute bottom-0 start-0 text-white w-100 p-3"
//                 style={{
//                   background:
//                     "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
//                   borderRadius:
//                     "0 0 var(--bs-border-radius) var(--bs-border-radius)",
//                 }}
//               >
//                 <h5 className="fw-bold">{mainArticle.title}</h5>
//               </div>
//             </div>
//           )}

//           {/* नीचे वाला आर्टिकल */}
//           {bottomArticle && (
//             <Row className="align-items-center">
//               <Col xs={4} sm={3}>
//                 <Image
//                   src={
//                     bottomArticle.media?.[0]?.url ||
//                     "https://via.placeholder.com/120x80"
//                   }
//                   fluid
//                   rounded
//                 />
//               </Col>
//               <Col xs={8} sm={9} className="ps-2">
//                 <div>
//                   <p className="fw-bold mb-1">{bottomArticle.title}</p>
//                   <p className="text-muted small m-0">
//                     {new Date(bottomArticle.createdAt).toLocaleString("hi-IN")}
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           )}
//         </Col>

//         {/* दायाँ कॉलम */}
//         <Col lg={5}>
//           {sideArticles.map((article, index) => (
//             <React.Fragment key={article._id || index}>
//               <Row className="align-items-center">
//                 <Col xs={4}>
//                   <Image
//                     src={
//                       article.media?.[0]?.url ||
//                       "https://via.placeholder.com/120x80"
//                     }
//                     fluid
//                     rounded
//                   />
//                 </Col>
//                 <Col xs={8} className="ps-2">
//                   <div>
//                     <p
//                       className="fw-medium mb-1"
//                       style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
//                     >
//                       {article.title}
//                     </p>
//                     <p className="text-muted small m-0">
//                       {new Date(article.createdAt).toLocaleString("hi-IN")}
//                     </p>
//                   </div>
//                 </Col>
//               </Row>
//               {index < sideArticles.length - 1 && <hr className="my-3" />}
//             </React.Fragment>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BusinessSection;


// update By shub ///////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { allNews } from "../../Services/authApi";
import { Link } from "react-router-dom"; // ✅ Step 1: Link component ko import karein

const BusinessSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await allNews();
        if (res?.success) {
          const businessNews = res.data.filter(
            (item) =>
              item.category?.name === "Business" ||
              item.category?.name === "बिज़नेस"
          );
          setNewsData(businessNews);
        } else {
          setError("Failed to load news");
        }
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-4">
        Error loading news: {error}
      </Alert>
    );
  }

  if (newsData.length === 0) {
    return (
      <Alert variant="info" className="my-4">
        बिज़नेस की कोई खबर उपलब्ध नहीं है।
      </Alert>
    );
  }

  const mainArticle = newsData[0];
  const bottomArticle = newsData[1];
  const sideArticles = newsData.slice(2, 6);

  // ✅ Step 2: Link ki default styling hatane ke liye style object
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Container fluid className="mt-4">
      {/* सेक्शन का हेडर */}
      <div className="d-flex align-items-center mb-3">
        <div className="d-flex align-items-center flex-shrink-0">
          <div
            style={{ width: "5px", height: "24px", backgroundColor: "#A12D2A" }}
            className="me-2"
          ></div>
          <h5 className="fw-bold m-0">बिज़नेस</h5>
        </div>
        <hr
          className="flex-grow-1 mx-3"
          style={{ borderTop: "2px solid #A12D2A", opacity: 1 }}
        />
        <a
          href="#"
          className="text-decoration-none fw-bold small flex-shrink-0"
          style={{ color: "#A12D2A" }}
        >
          और पढ़ें <FaArrowRight size={12} />
        </a>
      </div>

      {/* मुख्य कंटेंट ग्रिड */}
      <Row>
        {/* बायाँ कॉलम */}
        <Col lg={7} className="mb-4 mb-lg-0 d-flex flex-column">
          {/* मुख्य आर्टिकल */}
          {mainArticle && (
            // ✅ Step 3: Main article ko Link se wrap karein
            <Link to={`/news/${mainArticle._id}`} style={linkStyle} className="d-block position-relative mb-4 flex-grow-1">
              <Image
                src={
                  mainArticle.media?.[0]?.url ||
                  "https://via.placeholder.com/600x400"
                }
                className="rounded w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 text-white w-100 p-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                  borderRadius:
                    "0 0 var(--bs-border-radius) var(--bs-border-radius)",
                }}
              >
                <h5 className="fw-bold">{mainArticle.title}</h5>
              </div>
            </Link>
          )}

          {/* नीचे वाला आर्टिकल */}
          {bottomArticle && (
            // ✅ Step 4: Bottom article ko Link se wrap karein
            <Link to={`/news/${bottomArticle._id}`} style={linkStyle}>
                <Row className="align-items-center">
                <Col xs={4} sm={3}>
                    <Image
                    src={
                        bottomArticle.media?.[0]?.url ||
                        "https://via.placeholder.com/120x80"
                    }
                    fluid
                    rounded
                    />
                </Col>
                <Col xs={8} sm={9} className="ps-2">
                    <div>
                    <p className="fw-bold mb-1">{bottomArticle.title}</p>
                    <p className="text-muted small m-0">
                        {new Date(bottomArticle.createdAt).toLocaleString("hi-IN")}
                    </p>
                    </div>
                </Col>
                </Row>
            </Link>
          )}
        </Col>

        {/* दायाँ कॉलम */}
        <Col lg={5}>
          {sideArticles.map((article, index) => (
            // ✅ Step 5: Side articles ko Link se wrap karein
            <Link to={`/news/${article._id}`} key={article._id || index} style={linkStyle}>
                <React.Fragment>
                    <Row className="align-items-center">
                        <Col xs={4}>
                        <Image
                            src={
                            article.media?.[0]?.url ||
                            "https://via.placeholder.com/120x80"
                            }
                            fluid
                            rounded
                        />
                        </Col>
                        <Col xs={8} className="ps-2">
                        <div>
                            <p
                            className="fw-medium mb-1"
                            style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                            >
                            {article.title}
                            </p>
                            <p className="text-muted small m-0">
                            {new Date(article.createdAt).toLocaleString("hi-IN")}
                            </p>
                        </div>
                        </Col>
                    </Row>
                    {index < sideArticles.length - 1 && <hr className="my-3" />}
                </React.Fragment>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BusinessSection;