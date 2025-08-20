
// // // import React from 'react';
// // // import { Container, Row, Col, Image } from 'react-bootstrap';
// // // // ✅ <<< यहाँ आइकॉन के इम्पोर्ट को बदला गया है >>>
// // // import { BsFillPersonFill } from 'react-icons/bs';
// // // import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa';

// // // // ✅ <<< अपनी नई इमेज यहाँ इम्पोर्ट करें >>>
// // // // import bumrahImg from '../../assets/bumrah.png';
// // // // import fireImg from '../../assets/fire.png';
// // // // ...etc

// // // // अस्थायी प्लेसहोल्डर
// // // const placeholderSmallImg = "https://via.placeholder.com/120x80";
// // // const placeholderVideoImg = "https://via.placeholder.com/200x120";


// // // // ✅ <<< लेखक की जानकारी दिखाने वाले कंपोनेंट को अपडेट किया गया >>>
// // // const AuthorInfo = ({ name }) => (
// // //     <div className="d-flex align-items-center text-muted small mt-1">
// // //         {/* पीले बैकग्राउंड वाला गोलाकार आइकॉन */}
// // //         <div 
// // //             className="rounded-circle bg-warning me-1 d-flex align-items-center justify-content-center"
// // //             style={{ width: '20px', height: '20px' }}
// // //         >
// // //             <BsFillPersonFill className="text-white" size={12} />
// // //         </div>
// // //         <span style={{ fontSize: '0.75rem' }}>By {name}</span>
// // //     </div>
// // // );

// // // const HindiNewsSection = () => {
// // //     // --- डेटा ---
// // //     const leftArticles = [
// // //         { image: placeholderSmallImg, headline: 'इंग्लैंड ने रची थी बुमराह को चोटिल करने की साजिश, पूर्व भारतीय क्रिकेटर का दावा', datetime: 'Thu, 17 July 2025 12:45 PM', author: 'Aman Sanodiya' },
// // //         { image: placeholderSmallImg, headline: 'इराक के शॉपिंग मॉल में लगी भीषण आग, कम से कम 60 लोगों की मौत', datetime: 'Thu, 17 July 2025 12:08 PM', author: 'Aman Sanodiya' },
// // //         { image: placeholderSmallImg, headline: 'MNS वर्कर की गुंडागर्दी, राजस्थानी दुकानदार को WhatsApp स्टेटस के कारण पीटा', datetime: 'Thu, 17 July 2025 11:25 AM', author: 'Aman Sanodiya' },
// // //         { image: placeholderSmallImg, headline: 'प्रधान और यादव के नाम पर नहीं बन पा रही सहमति, अब कौन बनेगा BJP का अध्यक्ष?', datetime: 'Thu, 17 July 2025 10:20 AM', author: 'Aman Sanodiya' },
// // //         { image: placeholderSmallImg, headline: 'इजरायल के सीरिया से गाजा तक हमले, उधर ट्रंप की दावत उड़ाते रहे बड़े मुस्लिम देश', datetime: 'Thu, 17 July 2025 10:46 AM', author: 'Aman Sanodiya' },
// // //     ];
    
// // //     const monsoonLive = {
// // //         image: placeholderVideoImg,
// // //         headline: 'हिमाचल में अब-तक 109 की मौत, ₹818 करोड़ का नुकसान; अमरनाथ रूट पर लैंडस्लाइड, 1 की मौत; MP के बड़गंज में बाढ़ से पलायन'
// // //     };
    
// // //     const liveUpdates = [
// // //         '4 मिनट पहले: बिहार के बांका में 4 तालाब टूटे, कई गांवों से संपर्क कटा',
// // //         '15 मिनट पहले: राजस्थान में पार्वती बांध खतरे के निशान के करीब'
// // //     ];

// // //     const rightBottomArticles = [
// // //         { category: 'क्रिकेट', headline: 'भारतीय महिला टीम ने इंग्लैंड की सरजमीं पर रचा इतिहास, पहले वनडे में दी करारी शिकस्त' },
// // //         { category: 'मध्य प्रदेश', headline: 'इंदौर आठवीं बार बना देश का सबसे स्वच्छ शहर, ये शहर दूसरे नंबर पर' }
// // //     ];

// // //     return (
// // //         <Container fluid className="mt-4">
// // //             <div className="d-flex justify-content-between align-items-center mb-2">
// // //                 <h3 className="fw-bold m-0">Hindi News</h3>
// // //                 <a href="#" className="text-decoration-none fw-bold small text-primary">और देखें</a>
// // //             </div>

// // //             <div style={{ height: '150px', backgroundColor: '#007bff' }} className="mb-3 rounded"></div>

// // //             <Row>
// // //                 <Col lg={7} className="border-end-lg pe-lg-4">
// // //                     {leftArticles.map((article, index) => (
// // //                         <div key={index} className="d-flex align-items-start mb-3">
// // //                             <Image src={article.image} width={120} height={80} className="me-3 rounded" style={{ objectFit: 'cover' }} />
// // //                             <div>
// // //                                 <p className="fw-bold mb-1">{article.headline}</p>
// // //                                 <p className="text-muted small m-0">{article.datetime}</p>
// // //                                 <AuthorInfo name={article.author} />
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </Col>

// // //                 <Col lg={5} className="ps-lg-4">
// // //                     <div className="d-flex align-items-start mb-3">
// // //                         <div className="flex-grow-1">
// // //                             <p className="fw-bold mb-1">
// // //                                 <span className="badge bg-danger me-1">मानसून Live</span>
// // //                                 {monsoonLive.headline}
// // //                             </p>
// // //                         </div>
// // //                         <Image src={monsoonLive.image} width={120} height={80} className="ms-3 rounded" style={{ objectFit: 'cover' }} />
// // //                     </div>
                    
// // //                     <div className="mb-3">
// // //                         <p className="fw-bold text-danger small mb-1">लाइव अपडेट्स</p>
// // //                         <ul className="list-unstyled small">
// // //                             {liveUpdates.map((update, i) => (
// // //                                 <li key={i} className="mb-1">
// // //                                     <span className="text-danger me-2">•</span>{update}
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </div>
                    
// // //                     <div className="d-flex justify-content-between align-items-center mb-3">
// // //                         <a href="#" className="text-primary small text-decoration-none">देश  </a>
// // //                         <div className="d-flex">
// // //                             <a href="#" className="text-secondary text-decoration-none me-3"><FaFacebookF /></a>
// // //                             <a href="#" className="text-secondary text-decoration-none me-3"><FaTwitter /></a>
// // //                             <a href="#" className="text-secondary text-decoration-none"><FaLink /></a>
// // //                         </div>
// // //                     </div>

// // //                     {rightBottomArticles.map((article, index) => (
// // //                         <div key={index} className="border-top pt-3 mb-3">
// // //                             <p className="fw-bold text-danger small mb-1">{article.category}</p>
// // //                             <h5 className="fw-bold">{article.headline}</h5>
// // //                         </div>
// // //                     ))}
// // //                 </Col>
// // //             </Row>
// // //         </Container>
// // //     );
// // // };

// // // export default HindiNewsSection;


// // import React from 'react';
// // import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
// // import { BsFillPersonFill } from 'react-icons/bs';
// // import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa';

// // // अस्थायी प्लेसहोल्डर
// // const placeholderSmallImg = "https://via.placeholder.com/120x80";
// // const placeholderVideoImg = "https://via.placeholder.com/200x120";


// // const AuthorInfo = ({ name }) => (
// //     <div className="d-flex align-items-center text-muted small mt-1">
// //         <div 
// //             className="rounded-circle bg-warning me-1 d-flex align-items-center justify-content-center"
// //             style={{ width: '20px', height: '20px' }}
// //         >
// //             <BsFillPersonFill className="text-white" size={12} />
// //         </div>
// //         <span style={{ fontSize: '0.75rem' }}>By {name}</span>
// //     </div>
// // );

// // const HindiNewsSection = () => {
// //     // --- डेटा ---
// //     const leftArticles = [
// //         { image: placeholderSmallImg, headline: 'इंग्लैंड ने रची थी बुमराह को चोटिल करने की साजिश, पूर्व भारतीय क्रिकेटर का दावा', datetime: 'Thu, 17 July 2025 12:45 PM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'इराक के शॉपिंग मॉल में लगी भीषण आग, कम से कम 60 लोगों की मौत', datetime: 'Thu, 17 July 2025 12:08 PM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'MNS वर्कर की गुंडागर्दी, राजस्थानी दुकानदार को WhatsApp स्टेटस के कारण पीटा', datetime: 'Thu, 17 July 2025 11:25 AM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'प्रधान और यादव के नाम पर नहीं बन पा रही सहमति, अब कौन बनेगा BJP का अध्यक्ष?', datetime: 'Thu, 17 July 2025 10:20 AM', author: 'Aman Sanodiya' },
// //         { image: placeholderSmallImg, headline: 'इजरायल के सीरिया से गाजा तक हमले, उधर ट्रंप की दावत उड़ाते रहे बड़े मुस्लिम देश', datetime: 'Thu, 17 July 2025 10:46 AM', author: 'Aman Sanodiya' },
// //     ];
    
// //     const monsoonLive = {
// //         image: placeholderVideoImg,
// //         headline: 'हिमाचल में अब-तक 109 की मौत, ₹818 करोड़ का नुकसान; अमरनाथ रूट पर लैंडस्लाइड, 1 की मौत; MP के बड़गंज में बाढ़ से पलायन'
// //     };
    
// //     const liveUpdates = [
// //         '4 मिनट पहले: बिहार के बांका में 4 तालाब टूटे, कई गांवों से संपर्क कटा',
// //         '15 मिनट पहले: राजस्थान में पार्वती बांध खतरे के निशान के करीब'
// //     ];

// //     const rightBottomArticles = [
// //         { category: 'क्रिकेट', headline: 'भारतीय महिला टीम ने इंग्लैंड की सरजमीं पर रचा इतिहास, पहले वनडे में दी करारी शिकस्त' },
// //         { category: 'मध्य प्रदेश', headline: 'इंदौर आठवीं बार बना देश का सबसे स्वच्छ शहर, ये शहर दूसरे नंबर पर' }
// //     ];

// //     return (
// //         <Container fluid className="mt-4">
// //             <div className="d-flex justify-content-between align-items-center mb-2">
// //                 <h3 className="fw-bold m-0">Hindi News</h3>
// //                 <a href="#" className="text-decoration-none fw-bold small text-primary">और देखें</a>
// //             </div>

// //             {/* विज्ञापन प्लेसहोल्डर */}
// //             <div style={{ minHeight: '90px', backgroundColor: '#e9ecef' }} className="mb-3 rounded d-flex align-items-center justify-content-center text-muted">
// //                 Advertisement
// //             </div>

// //             <Row>
// //                 {/* बायां कॉलम - अब पूरी तरह रिस्पॉन्सिव */}
// //                 <Col lg={7} className="border-end-lg pe-lg-4">
// //                     {leftArticles.map((article, index) => (
// //                         // ✅ <<< d-flex को Row/Col से बदला गया >>>
// //                         <Row key={index} className="mb-3 gx-3">
// //                             <Col xs={4} md={3}>
// //                                 <Image src={article.image} fluid rounded />
// //                             </Col>
// //                             <Col xs={8} md={9}>
// //                                 <div>
// //                                     <p className="fw-bold mb-1">{article.headline}</p>
// //                                     <p className="text-muted small m-0">{article.datetime}</p>
// //                                     <AuthorInfo name={article.author} />
// //                                 </div>
// //                             </Col>
// //                         </Row>
// //                     ))}
// //                 </Col>

// //                 {/* दायां कॉलम - अब पूरी तरह रिस्पॉन्सिव */}
// //                 <Col lg={5} className="ps-lg-4">
// //                     {/* ✅ <<< मानसून लाइव सेक्शन को मोबाइल-फर्स्ट बनाया गया >>> */}
// //                     <Row className="mb-3">
// //                         {/* मोबाइल पर यह कॉलम 100% चौड़ाई लेगा और ऊपर दिखेगा */}
// //                         <Col md={5} className="mb-2 mb-md-0">
// //                             <Image src={monsoonLive.image} fluid rounded />
// //                         </Col>
// //                         {/* मोबाइल पर यह कॉलम नीचे दिखेगा, डेस्कटॉप पर साइड में */}
// //                         <Col md={7}>
// //                             <p className="fw-bold mb-1">
// //                                 <Badge bg="danger" className="me-1">मानसून Live</Badge>
// //                                 {monsoonLive.headline}
// //                             </p>
// //                         </Col>
// //                     </Row>
                    
// //                     <div className="mb-3">
// //                         <p className="fw-bold text-danger small mb-1">लाइव अपडेट्स</p>
// //                         <ul className="list-unstyled small">
// //                             {liveUpdates.map((update, i) => (
// //                                 <li key={i} className="mb-1">
// //                                     <span className="text-danger me-2">•</span>{update}
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
                    
// //                     <div className="d-flex justify-content-between align-items-center mb-3">
// //                         <a href="#" className="text-primary small text-decoration-none">देश</a>
// //                         <div className="d-flex">
// //                             <a href="#" className="text-secondary text-decoration-none me-3"><FaFacebookF /></a>
// //                             <a href="#" className="text-secondary text-decoration-none me-3"><FaTwitter /></a>
// //                             <a href="#" className="text-secondary text-decoration-none"><FaLink /></a>
// //                         </div>
// //                     </div>

// //                     {rightBottomArticles.map((article, index) => (
// //                         <div key={index} className="border-top pt-3 mb-3">
// //                             <p className="fw-bold text-danger small mb-1">{article.category}</p>
// //                             <h5 className="fw-bold">{article.headline}</h5>
// //                         </div>
// //                     ))}
// //                 </Col>
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default HindiNewsSection;



// // update 8/18/25 1.14


// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Image, Badge, Spinner, Alert } from 'react-bootstrap';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa';
// import { allNews } from '../../Services/authApi'; // ✅ आपकी API function

// const AuthorInfo = ({ name }) => (
//     <div className="d-flex align-items-center text-muted small mt-1">
//         <div 
//             className="rounded-circle bg-warning me-1 d-flex align-items-center justify-content-center"
//             style={{ width: '20px', height: '20px' }}
//         >
//             <BsFillPersonFill className="text-white" size={12} />
//         </div>
//         <span style={{ fontSize: '0.75rem' }}>By {name}</span>
//     </div>
// );

// const HindiNewsSection = () => {
//     const [newsData, setNewsData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const res = await allNews();
//                 if (res?.success) {
//                     setNewsData(res.data);
//                 } else {
//                     setError("Failed to load news");
//                 }
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchNews();
//     }, []);

//     if (loading) {
//         return (
//             <div className="text-center my-4">
//                 <Spinner animation="border" variant="primary" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <Alert variant="danger" className="my-4">
//                 Error loading news: {error}
//             </Alert>
//         );
//     }

//     // 👉 बायीं तरफ के लिए सिर्फ पहले 5 news
//     const leftArticles = newsData.slice(0, 5);

//     // 👉 दायीं तरफ के लिए पहली news (मानसून live जैसी)
//     const monsoonLive = newsData[0] || {};

//     // 👉 दायीं तरफ नीचे की 2 news
//     const rightBottomArticles = newsData.slice(5, 7);

//     return (
//         <Container fluid className="mt-4">
//             <div className="d-flex justify-content-between align-items-center mb-2">
//                 <h3 className="fw-bold m-0">Hindi News</h3>
//                 <a href="#" className="text-decoration-none fw-bold small text-primary">और देखें</a>
//             </div>

//             {/* विज्ञापन */}
//             <div style={{ minHeight: '90px', backgroundColor: '#e9ecef' }} className="mb-3 rounded d-flex align-items-center justify-content-center text-muted">
//                 Advertisement
//             </div>

//             <Row>
//                 {/* बायां कॉलम */}
//                 <Col lg={7} className="border-end-lg pe-lg-4">
//                     {leftArticles.map((article, index) => (
//                         <Row key={article._id || index} className="mb-3 gx-3">
//                             <Col xs={4} md={3}>
//                                 <Image 
//                                     src={article.media?.[0]?.url || "https://via.placeholder.com/120x80"} 
//                                     fluid rounded 
//                                 />
//                             </Col>
//                             <Col xs={8} md={9}>
//                                 <div>
//                                     <p className="fw-bold mb-1">{article.title}</p>
//                                     <p className="text-muted small m-0">
//                                         {new Date(article.createdAt).toLocaleString("hi-IN")}
//                                     </p>
//                                     <AuthorInfo name={article.createdBy?.name || "Unknown"} />
//                                 </div>
//                             </Col>
//                         </Row>
//                     ))}
//                 </Col>

//                 {/* दायां कॉलम */}
//                 <Col lg={5} className="ps-lg-4">
//                     {monsoonLive && (
//                         <Row className="mb-3">
//                             <Col md={5} className="mb-2 mb-md-0">
//                                 <Image 
//                                     src={monsoonLive.media?.[0]?.url || "https://via.placeholder.com/200x120"} 
//                                     fluid rounded 
//                                 />
//                             </Col>
//                             <Col md={7}>
//                                 <p className="fw-bold mb-1">
//                                     <Badge bg="danger" className="me-1">मानसून Live</Badge>
//                                     {monsoonLive.title}
//                                 </p>
//                             </Col>
//                         </Row>
//                     )}

//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <a href="#" className="text-primary small text-decoration-none">देश</a>
//                         <div className="d-flex">
//                             <a href="#" className="text-secondary text-decoration-none me-3"><FaFacebookF /></a>
//                             <a href="#" className="text-secondary text-decoration-none me-3"><FaTwitter /></a>
//                             <a href="#" className="text-secondary text-decoration-none"><FaLink /></a>
//                         </div>
//                     </div>

//                     {rightBottomArticles.map((article, index) => (
//                         <div key={article._id || index} className="border-top pt-3 mb-3">
//                             <p className="fw-bold text-danger small mb-1">{article.category?.name || "अन्य"}</p>
//                             <h5 className="fw-bold">{article.title}</h5>
//                         </div>
//                     ))}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default HindiNewsSection;


// update by shub


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Badge, Spinner, Alert } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa';
import { allNews } from '../../Services/authApi';
import { Link } from 'react-router-dom';

const AuthorInfo = ({ name }) => (
    <div className="d-flex align-items-center text-muted small mt-1">
        <div 
            className="rounded-circle bg-warning me-1 d-flex align-items-center justify-content-center"
            style={{ width: '20px', height: '20px' }}
        >
            <BsFillPersonFill className="text-white" size={12} />
        </div>
        <span style={{ fontSize: '0.75rem' }}>By {name}</span>
    </div>
);

const HindiNewsSection = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await allNews();
                if (res?.success) {
                    setNewsData(res.data);
                } else {
                    setError("Failed to load news");
                }
            } catch (err) {
                setError(err.message || "An unexpected error occurred.");
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
                <p>Loading News...</p>
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

    const leftArticles = newsData.slice(0, 5);
    const monsoonLive = newsData[0] || {};
    const rightBottomArticles = newsData.slice(5, 7);

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <Container fluid className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="fw-bold m-0">Hindi News</h3>
                <a href="#" className="text-decoration-none fw-bold small text-primary">और देखें</a>
            </div>

            <div style={{ minHeight: '90px', backgroundColor: '#e9ecef' }} className="mb-3 rounded d-flex align-items-center justify-content-center text-muted">
                Advertisement
            </div>

            <Row>
                <Col lg={7} className="border-end-lg pe-lg-4">
                    {leftArticles.map((article) => (
                        <Link to={`/news/${article._id}`} key={article._id} style={linkStyle}>
                            <Row className="mb-3 gx-3">
                                <Col xs={4} md={3}>
                                    <Image 
                                        src={article.media?.[0]?.url || "https://via.placeholder.com/120x80"} 
                                        fluid rounded 
                                        alt={article.title}
                                    />
                                </Col>
                                <Col xs={8} md={9}>
                                    <div>
                                        <p className="fw-bold mb-1">{article.title}</p>
                                        <p className="text-muted small m-0">
                                            {new Date(article.createdAt).toLocaleString("hi-IN")}
                                        </p>
                                        <AuthorInfo name={article.createdBy?.name || "Unknown"} />
                                    </div>
                                </Col>
                            </Row>
                        </Link>
                    ))}
                </Col>

                <Col lg={5} className="ps-lg-4">
                    {monsoonLive._id && (
                        <Link to={`/news/${monsoonLive._id}`} style={linkStyle}>
                            <Row className="mb-3">
                                <Col md={5} className="mb-2 mb-md-0">
                                    <Image 
                                        src={monsoonLive.media?.[0]?.url || "https://via.placeholder.com/200x120"} 
                                        fluid rounded 
                                        alt={monsoonLive.title}
                                    />
                                </Col>
                                <Col md={7}>
                                    <p className="fw-bold mb-1">
                                        <Badge bg="danger" className="me-1">मानसून Live</Badge>
                                        {monsoonLive.title}
                                    </p>
                                </Col>
                            </Row>
                        </Link>
                    )}

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <a href="#" className="text-primary small text-decoration-none">देश</a>
                        <div className="d-flex">
                            <a href="#" className="text-secondary text-decoration-none me-3"><FaFacebookF /></a>
                            <a href="#" className="text-secondary text-decoration-none me-3"><FaTwitter /></a>
                            <a href="#" className="text-secondary text-decoration-none"><FaLink /></a>
                        </div>
                    </div>

                    {rightBottomArticles.map((article) => (
                        <Link to={`/news/${article._id}`} key={article._id} style={linkStyle}>
                            <div className="border-top pt-3 mb-3">
                                <p className="fw-bold text-danger small mb-1">{article.category?.name || "अन्य"}</p>
                                <h5 className="fw-bold">{article.title}</h5>
                            </div>
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default HindiNewsSection;