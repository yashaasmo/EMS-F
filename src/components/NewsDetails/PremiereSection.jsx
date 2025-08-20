// // // src/folder/NewsDetails/RegionalNewsSection.jsx

// // import React from 'react';
// // import { Row, Col, Image } from 'react-bootstrap';
// // import img1 from '../../assets/niraua.png';

// // // --- डेटा ---
// // const rightSidebarNews = [
// //     { category: 'ओटीटी', headline: "'पंचायत सीजन 5 की स्क्रिप्ट लीक हो चुकी है', नीना गुप्ता का बड़ा खुलासा" },
// //     { category: 'बॉलीवुड', headline: "फिल्म में एक्टिंग कर चुके हैं एमएस धोनी, इस बड़े डायरेक्टर के साथ किया था काम" },
// //     { category: 'तमिल सिनेमा', headline: "आमिर खान ने रखा विष्णु विशाल-ज्वाला गुट्टा की बेटी का खास नाम, कपल ने तस्वीरें की शेयर" },
// //     { category: 'टेलीविजन', headline: "क्या पेरेंट्स बनने वाले हैं अंकिता-विक्की? कपल ने प्रेग्नेंसी रूमर्स पर तोड़ी चुप्पी" },
// //     { category: 'टेलीविजन', headline: "'तुम से तुम तक' के लिए मोटी फीस वसूलने के रूमर्स पर शरद केलकर ने तोड़ी चुप्पी, बोले- 'जलो मत'" },
// // ];

// // const bottomNews = [
// //     { category: 'टेलीविजन', headline: 'स्मृति ईरानी को हूज़ कहने पर ट्रोल हुए थे राम कपूर, अब एक्टर ने दी सफाई' },
// //     { category: 'बॉलीवुड', headline: 'इस हॉलीवुड फिल्म ने तीन दिन में ही अनुराग बसु की फिल्म को छोड़ दिया पीछे, जान लीजिए किया कितना...' },
// // ];

// // // राज्यों के नामों की लिस्ट
// // const stateLinks = ['मध्य प्रदेश', 'छत्तीसगढ़', 'दिल्ली', 'उत्तराखंड', 'उत्तर प्रदेश'];


// // // --- कंपोनेंट की परिभाषा ---
// // const RegionalNewsSection = () => {

// //     // --- स्टाइल की परिभाषाएँ ---
// //     const categoryStyle = {
// //         color: '#d9534f',
// //         fontWeight: 'bold',
// //         fontSize: '0.9rem'
// //     };

// //     const stateLinkStyle = {
// //         color: '#205f7c',
// //         fontWeight: 700,
// //         fontSize: '1rem'
// //     };
    
// //     const activeStateLinkStyle = {
// //         ...stateLinkStyle,
// //         color: '#d9534f',
// //     };

// //     return (
// //         <div className="bg-white p-3 mt-4 shadow-sm" style={{ border: '1px solid #eee' }}>
// //             {/* सेक्शन हेडर */}
// //             <div className="d-flex align-items-baseline" style={{ paddingBottom: '0.25rem' }}>
// //                 <h3 style={{ color: '#d9534f', fontWeight: 'bold', margin: 0, whiteSpace: 'nowrap' }}>रीजनल खबरें</h3>
                
// //                 <div className="ms-4 d-flex">
// //                     {stateLinks.map((stateName, index) => (
// //                         <a
// //                             href="#"
// //                             key={index}
// //                             className="text-decoration-none me-5"
// //                             style={stateName === 'मध्य प्रदेश' ? activeStateLinkStyle : stateLinkStyle}
// //                         >
// //                             {stateName}
// //                         </a>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* मुख्य कंटेंट रो */}
// //             <Row className="mt-3"> {/* ++ लाइन हटाने के बाद थोड़ा मार्जिन जोड़ा गया ++ */}
// //                 {/* बायाँ कॉलम (बड़ी खबर) */}
// //                 <Col md={7}>
// //                     <div>
// //                         <span style={categoryStyle} className="mb-2 d-block">भोजपुरी सिनेमा</span>
                        
// //                         <div className="ratio ratio-4x3">
// //                             <Image
// //                                 src={img1}
// //                                 alt="निरहुआ की तस्वीर"
// //                                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                             />
// //                         </div>
                        
// //                         <div className='mt-2'>
// //                             <h4 className="fw-bold">
// //                                 'मैं मराठी नहीं बोलता, किसी में दम हो तो महाराष्ट्र से निकालकर दिखाओ', 'निरहुआ' ने दिया चैलेंज
// //                             </h4>
// //                             <div className="d-flex align-items-center text-muted small mt-2">
// //                                 <span>👁 800</span>
// //                                 <span className="ms-3">💬 201</span>
// //                                 <span className="ms-3">🔗 122</span>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </Col>

// //                 {/* दायाँ कॉलम (छोटी खबरों की लिस्ट) */}
// //                 <Col md={5}>
// //                     {rightSidebarNews.map((news, index) => (
// //                         // ++ यहाँ से border-bottom क्लास हटा दी गई है ++
// //                         <div key={index} className="mb-4"> {/* स्पेस के लिए mb-3 की जगह mb-4 किया गया */}
// //                             <span style={categoryStyle}>{news.category}</span>
// //                             <p className="fw-bold mb-0">{news.headline}</p>
// //                         </div>
// //                     ))}
// //                 </Col>
// //             </Row>

// //             {/* ++ मुख्य सेपरेटर लाइन <hr> को यहाँ से हटा दिया गया है ++ */}

// //             {/* नीचे की दो खबरें */}
// //             <Row className="mt-2">
// //                 {bottomNews.map((news, index) => (
// //                     <Col md={6} key={index}>
// //                          <span style={categoryStyle}>{news.category}</span>
// //                          <p className='fw-bold'>{news.headline}</p>
// //                     </Col>
// //                 ))}
// //             </Row>

// //         </div>
// //     );
// // };

// // export default RegionalNewsSection;


// // src/folder/NewsDetails/PremiereSection.jsx

// import React from 'react';
// // ++ 'Image' कंपोनेंट को इम्पोर्ट करें ++
// import { Row, Col, Image } from 'react-bootstrap';

// // ++ अपनी तीनों इमेज यहाँ इम्पोर्ट करें ++
// import premiereImg1 from '../../assets/Premiere1.png'; // पहली इमेज
// import premiereImg2 from '../../assets/Premiere2.png'; // दूसरी इमेज
// import premiereImg3 from '../../assets/Premiere3.png'; // तीसरी इमेज

// // --- इस सेक्शन के लिए डेटा ---
// // ++ अब हर ऑब्जेक्ट में एक 'image' प्रॉपर्टी है ++
// const premiereArticles = [
//     {
//         category: 'Premier',
//         headline: 'Sonali dances to Marathi songs in England, dances to poetry, video goes viral',
//         author: 'Apurva Kulkarni',
//         time: '2 hours ago',
//         readTime: '2 min read',
//         image: premiereImg1, // पहली इमेज का रेफरेंस
//     },
//     {
//         category: 'Personal Finance',
//         headline: 'Kapil Sharma: How rich is Kapil Sharma? He is among the highest-paid artists after Salman Khan.',
//         author: 'Rahul Shelke',
//         time: '2 hours ago',
//         readTime: '1 min read',
//         image: premiereImg2, // दूसरी इमेज का रेफरेंस
//     },
//     {
//         category: 'Premier',
//         headline: "Namit Malhotra's 'Ramayana' teaser is being discussed; curiosity among the audience has increased",
//         author: 'Kimaya Narayan',
//         time: '18 hours ago',
//         readTime: '2 min read',
//         image: premiereImg3, // तीसरी इमेज का रेफरेंस
//     }
// ];

// // --- कंपोनेंट की परिभाषा ---
// const PremiereSection = () => {
//     return (
//         <div className="bg-white p-3 mt-4 shadow-sm" style={{ border: '1px solid #eee' }}>
//             {/* सेक्शन हेडर */}
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div>
//                     <h3 style={{ fontWeight: 'bold', margin: 0, color: '#333' }}>Premiere</h3>
//                     <div style={{ width: '25px', height: '3px', backgroundColor: '#0d6efd', marginTop: '4px' }}></div>
//                 </div>
//                 <a href="#" className="text-decoration-none" style={{ color: '#0066cc', fontWeight: 'bold' }}>और देखें</a>
//             </div>

//             {/* आर्टिकल ग्रिड */}
//             <Row>
//                 {premiereArticles.map((article, index) => (
//                     <Col md={4} key={index} className="mb-4">
//                         <div>
//                             {/* --- अपनी इमेज यहाँ जोड़ें --- */}
//                             <div className="ratio ratio-16x9 bg-light rounded mb-2">
//                                 {/* ++ अब हम article ऑब्जेक्ट से डायनामिक इमेज सोर्स ले रहे हैं ++ */}
//                                 <Image 
//                                     src={article.image} 
//                                     alt={article.headline}
//                                     className="rounded"
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                             </div>

//                             {/* कैटेगरी */}
//                             <p className="mb-1" style={{ color: '#0d6efd', fontWeight: 'bold', fontSize: '0.8rem' }}>
//                                 {article.category}
//                             </p>
                            
//                             {/* हेडलाइन */}
//                             <p className="fw-bold mb-2" style={{ fontSize: '0.9rem', color: '#212529', lineHeight: '1.4' }}>
//                                 {article.headline}
//                             </p>

//                             {/* मेटाडेटा */}
//                             <div className="text-muted small">
//                                 <span>{article.author}</span>
//                                 <span className="mx-1">·</span>
//                                 <span>{article.time}</span>
//                                 <span className="mx-1">·</span>
//                                 <span>{article.readTime}</span>
//                             </div>
//                         </div>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };

// export default PremiereSection;



// update 8/18/20025 17:04

import React, { useEffect, useState } from "react";
import { Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import { allNews } from "../../Services/authApi"; // ✅ API function

const PremiereSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await allNews();
        if (res?.success) {
          // ✅ सिर्फ Premiere category वाली news filter कर रहे हैं
          const premiereNews = res.data.filter(
            (item) =>
              item.category?.name === "Entertainment" || item.category?.name === "मनोरंजन"
          );
          setNewsData(premiereNews);
        } else {
          setError("Failed to load news");
        }
      } catch (err) {
        setError(err.message || "Error fetching news");
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
      <Alert variant="warning" className="my-4">
        Premiere की कोई खबर उपलब्ध नहीं है।
      </Alert>
    );
  }

  return (
    <div
      className="bg-white p-3 mt-4 shadow-sm"
      style={{ border: "1px solid #eee" }}
    >
      {/* सेक्शन हेडर */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 style={{ fontWeight: "bold", margin: 0, color: "#333" }}>
            Premiere
          </h3>
          <div
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "#0d6efd",
              marginTop: "4px",
            }}
          ></div>
        </div>
        <a
          href="#"
          className="text-decoration-none"
          style={{ color: "#0066cc", fontWeight: "bold" }}
        >
          और देखें
        </a>
      </div>

      {/* आर्टिकल ग्रिड */}
      <Row>
        {newsData.slice(0, 3).map((article, index) => (
          <Col md={4} key={article._id || index} className="mb-4">
            <div>
              {/* --- इमेज --- */}
              <div className="ratio ratio-16x9 bg-light rounded mb-2">
                <Image
                  src={
                    article.media?.[0]?.url ||
                    "https://via.placeholder.com/300x200"
                  }
                  alt={article.title}
                  className="rounded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* कैटेगरी */}
              <p
                className="mb-1"
                style={{
                  color: "#0d6efd",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                }}
              >
                {article.category?.name}
              </p>

              {/* हेडलाइन */}
              <p
                className="fw-bold mb-2"
                style={{
                  fontSize: "0.9rem",
                  color: "#212529",
                  lineHeight: "1.4",
                }}
              >
                {article.title}
              </p>

              {/* मेटाडेटा */}
              <div className="text-muted small">
                <span>{article.author || "अनाम"}</span>
                <span className="mx-1">·</span>
                <span>
                  {new Date(article.createdAt).toLocaleString("hi-IN")}
                </span>
                <span className="mx-1">·</span>
                <span>2 min read</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PremiereSection;
