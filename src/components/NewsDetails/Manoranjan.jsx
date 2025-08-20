// // // import React from 'react';
// // // import { Container, Row, Col, Image } from 'react-bootstrap';
// // // import { FaArrowRight } from 'react-icons/fa';

// // // // ✅ <<< अपनी नई इमेज यहाँ इम्पोर्ट करें >>>
// // // import salman from '../../assets/salman.png';
// // // // import gauravImg from '../../assets/gaurav.png';
// // // // import movie1962Img from '../../assets/movie-1962.png';
// // // // import pratikGandhiImg from '../../assets/pratik-gandhi.png';
// // // import sunny from '../../assets/sunny.png';
// // // // import bajrangiBhaijaanImg from '../../assets/bajrangi-bhaijaan.png';

// // // // अस्थायी प्लेसहोल्डर, आप इन्हें अपनी इमेज से बदल सकते हैं
// // // const placeholderImg = "https://via.placeholder.com/400x250";
// // // const placeholderSmallImg = "https://via.placeholder.com/120x80";


// // // const Manoranjan = () => {
// // //     // --- डेटा ---
// // //     const mainArticle = { image: salman, headline: 'सलमान खान ने अपनी हीरोइन के लिए लिखा पोस्ट, कहा- सोनाक्षी देवी...' };
// // //     const bottomArticle = { image: placeholderSmallImg, headline: 'गौहर से पलास्टर में लड़ रहे थे ऋषि कपूर, पीछे बैठे वीर दास ने अब बताई वजह', datetime: 'Thu, 17 July 2025 12:08 PM' };
// // //     const sideArticles = [
// // //         { image: placeholderSmallImg, headline: '1962 ने उस मिस्ट्री थ्रिलर से भी की सबसे ज्यादा कमाई, जीते थे 4 फिल्मफेयर', datetime: 'Thu, 17 July 2025 11:46 AM' },
// // //         { image: placeholderSmallImg, headline: 'कौन है प्रतीक गांधी की पत्नी? साराभाई वर्सेस साराभाई और खिचड़ी में आ चुकी है नजर', datetime: 'Thu, 17 July 2025 11:16 AM' },
// // //         { image: sunny, headline: 'आपने देखा सनी देओल का क्लीनशेव लुक? लोग बोले- रामायण की तैयारी के लिए हनुमान', datetime: 'Thu, 17 July 2025 10:53 AM' },
// // //         { image: placeholderSmallImg, headline: '‘रिलीज से पहले ही विवाद...’, कबीर बोले आज के वक्त में नहीं बना सकते बजरंगी भाईजान', datetime: 'Thu, 17 July 2025 10:36 AM' },
// // //     ];

// // //     return (
// // //         <Container fluid className="mt-4">
// // //             {/* ✅ <<< सेक्शन का हेडर (इसे "बिज़नेस" सेक्शन जैसा बनाया गया) >>> */}
// // //             <div style={{ width: '40px', height: '4px', backgroundColor: '#F8D7DA', marginBottom: '8px' }}></div>
// // //             <div className="d-flex align-items-center mb-3">
// // //                 <div className="d-flex align-items-center flex-shrink-0">
// // //                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
// // //                     <h5 className="fw-bold m-0">मनोरंजन</h5>
// // //                 </div>
                
// // //                 <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />
                
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
// // //                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}
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
// // //                                     <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
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

// // // export default Manoranjan;

// // import React from 'react';
// // import { Container, Row, Col, Image } from 'react-bootstrap';
// // import { FaArrowRight } from 'react-icons/fa';

// // // अपनी इमेज यहाँ इम्पोर्ट करें
// // import salman from '../../assets/salman.png';
// // import sunny from '../../assets/sunny.png';

// // // अस्थायी प्लेसहोल्डर
// // const placeholderSmallImg = "https://via.placeholder.com/120x80";

// // const Manoranjan = () => {
// //     // --- डेटा ---
// //     const mainArticle = { image: salman, headline: 'सलमान खान ने अपनी हीरोइन के लिए लिखा पोस्ट, कहा- सोनाक्षी देवी...' };
// //     const bottomArticle = { image: placeholderSmallImg, headline: 'गौहर से पलास्टर में लड़ रहे थे ऋषि कपूर, पीछे बैठे वीर दास ने अब बताई वजह', datetime: 'Thu, 17 July 2025 12:08 PM' };
// //     const sideArticles = [
// //         { image: placeholderSmallImg, headline: '1962 ने उस मिस्ट्री थ्रिलर से भी की सबसे ज्यादा कमाई, जीते थे 4 फिल्मफेयर', datetime: 'Thu, 17 July 2025 11:46 AM' },
// //         { image: placeholderSmallImg, headline: 'कौन है प्रतीक गांधी की पत्नी? साराभाई वर्सेस साराभाई और खिचड़ी में आ चुकी है नजर', datetime: 'Thu, 17 July 2025 11:16 AM' },
// //         { image: sunny, headline: 'आपने देखा सनी देओल का क्लीनशेव लुक? लोग बोले- रामायण की तैयारी के लिए हनुमान', datetime: 'Thu, 17 July 2025 10:53 AM' },
// //         { image: placeholderSmallImg, headline: '‘रिलीज से पहले ही विवाद...’, कबीर बोले आज के वक्त में नहीं बना सकते बजरंगी भाईजान', datetime: 'Thu, 17 July 2025 10:36 AM' },
// //     ];

// //     return (
// //         <Container fluid className="mt-4">
// //             {/* सेक्शन का हेडर */}
// //             <div style={{ width: '40px', height: '4px', backgroundColor: '#F8D7DA', marginBottom: '8px' }}></div>
// //             <div className="d-flex align-items-center mb-3">
// //                 <div className="d-flex align-items-center flex-shrink-0">
// //                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
// //                     <h5 className="fw-bold m-0">मनोरंजन</h5>
// //                 </div>
                
// //                 <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />
                
// //                 <a href="#" className="text-decoration-none fw-bold small flex-shrink-0" style={{ color: '#A12D2A' }}>
// //                     और पढ़ें <FaArrowRight size={12} />
// //                 </a>
// //             </div>

// //             {/* मुख्य कंटेंट ग्रिड */}
// //             <Row>
// //                 {/* बायाँ कॉलम */}
// //                 {/* ✅ <<< बाएं कॉलम को फ्लेक्स कंटेनर बनाया गया ताकि इमेज स्ट्रेच हो सके >>> */}
// //                 <Col lg={7} className="mb-4 mb-lg-0 d-lg-flex flex-column">
// //                     {/* मुख्य आर्टिकल */}
// //                     {/* ✅ <<< मुख्य इमेज कंटेनर को फ्लेक्स-ग्रो दिया गया >>> */}
// //                     <div className="position-relative mb-4 flex-grow-1">
// //                         {/* ✅ <<< इमेज को 100% ऊंचाई और object-fit दिया गया >>> */}
// //                         <Image src={mainArticle.image} fluid rounded className="w-100 h-100" style={{ objectFit: 'cover' }} />
// //                         <div 
// //                             className="position-absolute bottom-0 start-0 text-white w-100 p-3"
// //                             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)', borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)' }}
// //                         >
// //                             <h4 className="fw-bold">{mainArticle.headline}</h4>
// //                         </div>
// //                     </div>

// //                     {/* नीचे वाला आर्टिकल */}
// //                     {/* ✅ <<< d-flex को रिस्पॉन्सिव Row/Col से बदला गया >>> */}
// //                     <Row className="align-items-center">
// //                         <Col xs={4} md={3}>
// //                             <Image src={bottomArticle.image} fluid rounded />
// //                         </Col>
// //                         <Col xs={8} md={9} className="ps-2">
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
// //                             {/* ✅ <<< d-flex को रिस्पॉन्सिव Row/Col से बदला गया >>> */}
// //                             <Row className="align-items-center">
// //                                 <Col xs={4}>
// //                                     <Image src={article.image} fluid rounded />
// //                                 </Col>
// //                                 <Col xs={8} className="ps-2">
// //                                     <div>
// //                                         <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.headline}</p>
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

// // export default Manoranjan;

// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
// import { FaArrowRight } from 'react-icons/fa';
// import { allNews } from '../../Services/authApi'; // ✅ आपकी API function

// const Manoranjan = () => {
//     const [newsData, setNewsData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const res = await allNews();
//                 if (res?.success) {
//                     // ✅ सिर्फ "मनोरंजन" category वाली news filter कर रहे हैं
//                     const entertainmentNews = res.data.filter(
//                         (item) => item.category?.name === "Entertainment" || item.category?.name === "मनोरंजन"
//                     );
//                     setNewsData(entertainmentNews);
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

//     if (newsData.length === 0) {
//         return (
//             <Alert variant="warning" className="my-4">
//                 मनोरंजन की कोई खबर उपलब्ध नहीं है।
//             </Alert>
//         );
//     }

//     // 👉 डेटा को आपके डिज़ाइन के हिसाब से arrange करना
//     const mainArticle = newsData[0]; // पहली news main
//     const bottomArticle = newsData[1]; // दूसरी नीचे वाली
//     const sideArticles = newsData.slice(2, 6); // अगली 4 दायें कॉलम में

//     return (
//         <Container fluid className="mt-4">
//             {/* सेक्शन हेडर */}
//             <div style={{ width: '40px', height: '4px', backgroundColor: '#F8D7DA', marginBottom: '8px' }}></div>
//             <div className="d-flex align-items-center mb-3">
//                 <div className="d-flex align-items-center flex-shrink-0">
//                     <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
//                     <h5 className="fw-bold m-0">मनोरंजन</h5>
//                 </div>

//                 <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />

//                 <a href="#" className="text-decoration-none fw-bold small flex-shrink-0" style={{ color: '#A12D2A' }}>
//                     और पढ़ें <FaArrowRight size={12} />
//                 </a>
//             </div>

//             {/* कंटेंट ग्रिड */}
//             <Row>
//                 {/* बायाँ कॉलम */}
//                 <Col lg={7} className="mb-4 mb-lg-0 d-lg-flex flex-column">
//                     {/* मुख्य आर्टिकल */}
//                     {mainArticle && (
//                         <div className="position-relative mb-4 flex-grow-1">
//                             <Image
//                                 src={mainArticle.media?.[0]?.url || "https://via.placeholder.com/600x400"}
//                                 fluid rounded
//                                 className="w-100 h-100"
//                                 style={{ objectFit: 'cover' }}
//                             />
//                             <div
//                                 className="position-absolute bottom-0 start-0 text-white w-100 p-3"
//                                 style={{
//                                     background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)',
//                                     borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)'
//                                 }}
//                             >
//                                 <h4 className="fw-bold">{mainArticle.title}</h4>
//                             </div>
//                         </div>
//                     )}

//                     {/* नीचे वाला आर्टिकल */}
//                     {bottomArticle && (
//                         <Row className="align-items-center">
//                             <Col xs={4} md={3}>
//                                 <Image
//                                     src={bottomArticle.media?.[0]?.url || "https://via.placeholder.com/120x80"}
//                                     fluid rounded
//                                 />
//                             </Col>
//                             <Col xs={8} md={9} className="ps-2">
//                                 <div>
//                                     <p className="fw-bold mb-1">{bottomArticle.title}</p>
//                                     <p className="text-muted small m-0">
//                                         {new Date(bottomArticle.createdAt).toLocaleString("hi-IN")}
//                                     </p>
//                                 </div>
//                             </Col>
//                         </Row>
//                     )}
//                 </Col>

//                 {/* दायाँ कॉलम */}
//                 <Col lg={5}>
//                     {sideArticles.map((article, index) => (
//                         <React.Fragment key={article._id || index}>
//                             <Row className="align-items-center">
//                                 <Col xs={4}>
//                                     <Image
//                                         src={article.media?.[0]?.url || "https://via.placeholder.com/120x80"}
//                                         fluid rounded
//                                     />
//                                 </Col>
//                                 <Col xs={8} className="ps-2">
//                                     <div>
//                                         <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.title}</p>
//                                         <p className="text-muted small m-0">
//                                             {new Date(article.createdAt).toLocaleString("hi-IN")}
//                                         </p>
//                                     </div>
//                                 </Col>
//                             </Row>
//                             {index < sideArticles.length - 1 && <hr className="my-3" />}
//                         </React.Fragment>
//                     ))}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Manoranjan;


// update By shub ////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { allNews } from '../../Services/authApi';
import { Link } from 'react-router-dom'; // ✅ Step 1: Link component ko import karein

const Manoranjan = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await allNews();
                if (res?.success) {
                    const entertainmentNews = res.data.filter(
                        (item) => item.category?.name === "Entertainment" || item.category?.name === "मनोरंजन"
                    );
                    setNewsData(entertainmentNews);
                } else {
                    setError("Failed to load news");
                }
            } catch (err) {
                setError(err.message || "An error occurred");
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
                मनोरंजन की कोई खबर उपलब्ध नहीं है।
            </Alert>
        );
    }
    
    const mainArticle = newsData[0];
    const bottomArticle = newsData[1];
    const sideArticles = newsData.slice(2, 6);

    // ✅ Step 2: Link ki default styling hatane ke liye style object
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <Container fluid className="mt-4">
            {/* सेक्शन हेडर */}
            <div style={{ width: '40px', height: '4px', backgroundColor: '#F8D7DA', marginBottom: '8px' }}></div>
            <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center flex-shrink-0">
                    <div style={{ width: '5px', height: '24px', backgroundColor: '#A12D2A' }} className="me-2"></div>
                    <h5 className="fw-bold m-0">मनोरंजन</h5>
                </div>
                <hr className="flex-grow-1 mx-3" style={{ borderTop: '2px solid #A12D2A', opacity: 1 }} />
                <a href="#" className="text-decoration-none fw-bold small flex-shrink-0" style={{ color: '#A12D2A' }}>
                    और पढ़ें <FaArrowRight size={12} />
                </a>
            </div>

            {/* कंटेंट ग्रिड */}
            <Row>
                {/* बायाँ कॉलम */}
                <Col lg={7} className="mb-4 mb-lg-0 d-lg-flex flex-column">
                    {/* मुख्य आर्टिकल */}
                    {mainArticle && (
                        // ✅ Step 3: Main article ko Link se wrap karein
                        <Link to={`/news/${mainArticle._id}`} style={linkStyle} className="d-block position-relative mb-4 flex-grow-1">
                            <Image
                                src={mainArticle.media?.[0]?.url || "https://via.placeholder.com/600x400"}
                                fluid rounded
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                            <div
                                className="position-absolute bottom-0 start-0 text-white w-100 p-3"
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)',
                                    borderRadius: '0 0 var(--bs-border-radius) var(--bs-border-radius)'
                                }}
                            >
                                <h4 className="fw-bold">{mainArticle.title}</h4>
                            </div>
                        </Link>
                    )}

                    {/* नीचे वाला आर्टिकल */}
                    {bottomArticle && (
                         // ✅ Step 4: Bottom article ko Link se wrap karein
                        <Link to={`/news/${bottomArticle._id}`} style={linkStyle}>
                            <Row className="align-items-center">
                                <Col xs={4} md={3}>
                                    <Image
                                        src={bottomArticle.media?.[0]?.url || "https://via.placeholder.com/120x80"}
                                        fluid rounded
                                    />
                                </Col>
                                <Col xs={8} md={9} className="ps-2">
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
                        <React.Fragment key={article._id}>
                            
                            <Link to={`/news/${article._id}`} style={linkStyle}>
                                <Row className="align-items-center">
                                    <Col xs={4}>
                                        <Image
                                            src={article.media?.[0]?.url || "https://via.placeholder.com/120x80"}
                                            fluid rounded
                                        />
                                    </Col>
                                    <Col xs={8} className="ps-2">
                                        <div>
                                            <p className="fw-bold mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{article.title}</p>
                                            <p className="text-muted small m-0">
                                                {new Date(article.createdAt).toLocaleString("hi-IN")}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Link>
                            {index < sideArticles.length - 1 && <hr className="my-3" />}
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Manoranjan;
