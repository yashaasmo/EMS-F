// // src/folder/NewsDetails/SportsSection.jsx

// import React from "react";
// import img1 from "../../assets/sports1.png";
// import { Row, Col, Button, Container } from "react-bootstrap";

// // --- इस सेक्शन के लिए डेटा ---
// const mainArticle = {
//   category: "Sports",
//   headline:
//     "Global Club Championship: Pakistan likely to be eliminated; World Club Championship: Five teams participating",
//   description:
//     "Pakistan Cricket Board: There is a question mark over whether the Pakistan team will participate in the World Club Cricket Championship starting in 2026. The PCB has been ...",
// };

// const sideArticles = [
//   {
//     category: "Sports",
//     headline:
//       "Asian Para Archery 2025: India ranks second in the medal table; Asian Para Archery Championship: Chinese team tops with 17 medals",
//   },
//   {
//     category: "Sports",
//     headline:
//       "Wimbledon 2025: Djokovic, Sinner win brilliantly in singles; Wimbledon Grand Slam, defending champion Barbora Krejcikova suffers shock defeat",
//   },
//   {
//     category: "Cricket",
//     headline:
//       "HBD MS Dhoni: 5 records in MS Dhoni's name that are very difficult for anyone to break",
//   },
// ];

// const farRightArticles = [
//   {
//     category: "Cricket",
//     headline:
//       "ENG vs IND: Will Bumrah play in Lord's Test or not? Captain Gill made it clear after the second Test win",
//   },
//   {
//     category: "Cricket",
//     headline:
//       "MS Dhoni Birthday: Do you know these records that prove why Dhoni is a legendary player?",
//   },
//   {
//     category: "Cricket",
//     headline:
//       "Shubman Gill: With India's biggest win, captain Gill broke Gavaskar's 49-year-old record and created new history",
//   },
// ];


// const SportsSection = () => {
//   // <<< बदलाव 1: हल्के टेक्स्ट के लिए एक नया स्टाइल ऑब्जेक्ट बनाया गया है >>>
//   const mutedTextStyle = {
//     color: 'rgba(248, 249, 250, 0.75)', // हल्का सफेद रंग
//   };

//   return (
//     <div
//       className="mt-4"
//       style={{ backgroundColor: "#2c2c2c", color: "#f8f9fa" }}
//     >
//       <Container className="py-4">
//         {/* सेक्शन हेडर */}
//         <div className="d-flex align-items-center mb-4">
//           <div className="me-4">
//             <h3 className="fw-bold m-0">Sports</h3>
//             <div
//               style={{
//                 width: "30px",
//                 height: "3px",
//                 backgroundColor: "#0d6efd",
//                 marginTop: "4px",
//               }}
//             ></div>
//           </div>
//           {/* <<< बदलाव 2: 'text-muted' को हटाकर नया स्टाइल लगाया गया है >>> */}
//           <h3 className="m-0" style={mutedTextStyle}>EMS TV</h3>
//         </div>

//         {/* मुख्य कंटेंट ग्रिड */}
//         <Row>
//           {/* बायाँ कॉलम (बड़ा आर्टिकल) */}
//           <Col md={5} className="mb-3">
//             <div className="ratio ratio-16x9 bg-secondary rounded mb-2">
//                 {/* <img src={img1} alt={mainArticle.headline} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
//             </div>

//             {/* <<< बदलाव 3: यहाँ भी text-muted को हटाकर नया स्टाइल लगाया गया है >>> */}
//             <p className="small mb-1" style={mutedTextStyle}>{mainArticle.category}</p>
//             <h5 className="fw-bold">{mainArticle.headline}</h5>
//             <p className="small" style={mutedTextStyle}>{mainArticle.description}</p>
//           </Col>

//           {/* दायाँ कॉलम (छोटे आर्टिकल्स) */}
//           <Col md={7}>
//             <Row>
//               {/* मध्य कॉलम */}
//               <Col md={6}>
//                 {sideArticles.map((article, index) => (
//                   <div key={index} className="d-flex mb-3">
//                     <div
//                       className="bg-secondary rounded me-2"
//                       style={{ width: "100px", height: "70px", flexShrink: 0 }}
//                     >
//                         {/* <img src={...} alt={article.headline} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
//                     </div>

//                     <div>
//                       {/* <<< बदलाव 4: यहाँ भी text-muted को हटाकर नया स्टाइल लगाया गया है >>> */}
//                       <p className="small mb-0" style={mutedTextStyle}>
//                         {article.category}
//                       </p>
//                       <p className="fw-bold small mb-0">{article.headline}</p>
//                     </div>
//                   </div>
//                 ))}
//               </Col>
//               {/* सबसे दायाँ कॉलम */}
//               <Col md={6}>
//                 {farRightArticles.map((article, index) => (
//                   <div key={index} className="d-flex mb-3">
//                     <div
//                       className="bg-secondary rounded me-2"
//                       style={{ width: "100px", height: "70px", flexShrink: 0 }}
//                     >
//                         {/* <img src={...} alt={article.headline} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
//                     </div>

//                     <div>
//                       {/* <<< बदलाव 5: यहाँ भी text-muted को हटाकर नया स्टाइल लगाया गया है >>> */}
//                       <p className="small mb-0" style={mutedTextStyle}>
//                         {article.category}
//                       </p>
//                       <p className="fw-bold small mb-0">{article.headline}</p>
//                     </div>
//                   </div>
//                 ))}
//               </Col>
//             </Row>
//           </Col>
//         </Row>

//         {/* और देखें बटन */}
//         <div className="text-center mt-3">
//           <Button variant="outline-light">और देखें</Button>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SportsSection;


import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, Image, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Step 1: Link component ko import karein
import { allNews } from "../../Services/authApi"; // ✅ Step 2: API function ko import karein

const SportsSection = () => {
  // ✅ Step 3: Dummy data ko hata kar state banayein
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await allNews();
      if (res?.success) {
        // Sports और उसकी subCategory दोनों चेक करें
        const sportsNews = res.data.filter(
          (item) =>
            item.category?.name?.toLowerCase() === "sports" ||
            item.subCategory?.name?.toLowerCase() === "cricket"
        );

        setNewsData(sportsNews);
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

  
  // Loading, error, aur no-data states handle karna
  if (loading) {
    return (
      <div className="text-center my-4" style={{ backgroundColor: "#2c2c2c", color: "#f8f9fa", padding: '2rem 0' }}>
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  if (error) {
    return <Container className="my-4"><Alert variant="danger">Error: {error}</Alert></Container>;
  }



  // ✅ Step 5: API data ko layout ke hisaab se baantein
  const mainArticle = newsData[0];
  const sideArticles = newsData.slice(1, 4); // Agli 3 news
  const farRightArticles = newsData.slice(4, 7); // Uske baad ki 3 news

  const mutedTextStyle = { color: "rgba(248, 249, 250, 0.75)" };
  
  // ✅ Step 6: Link ki default styling hatane ke liye style object
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="mt-4" style={{ backgroundColor: "#2c2c2c", color: "#f8f9fa" }}>
      <Container className="py-4">
        {/* सेक्शन हेडर */}
        <div className="d-flex align-items-center mb-4">
          <div className="me-4">
            <h3 className="fw-bold m-0">Sports</h3>
            <div style={{ width: "30px", height: "3px", backgroundColor: "#0d6efd", marginTop: "4px" }}></div>
          </div>
         
        </div>

        {/* मुख्य कंटेंट ग्रिड */}
        <Row>
          {/* बायाँ कॉलम (बड़ा आर्टिकल) */}
          <Col md={5} className="mb-3">
            {mainArticle && (
              // ✅ Step 7: Main article ko Link se wrap karein
              <Link to={`/news/${mainArticle._id}`} style={linkStyle}>
                <div className="ratio ratio-16x9 bg-secondary rounded mb-2">
                  <Image src={mainArticle.media?.[0]?.url || "https://via.placeholder.com/400x225"} alt={mainArticle.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="rounded" />
                </div>
                <p className="small mb-1" style={mutedTextStyle}>{mainArticle.category?.name}</p>
                <h5 className="fw-bold">{mainArticle.title}</h5>
                <p className="small" style={mutedTextStyle}>{mainArticle.content.substring(0, 150)}...</p>
              </Link>
            )}
          </Col>

          {/* दायाँ कॉलम (छोटे आर्टिकल्स) */}
          <Col md={7}>
            <Row>
              {/* मध्य कॉलम */}
              <Col md={8}>
                {sideArticles.map((article) => (
                  // ✅ Step 8: Side articles ko Link se wrap karein
                  <Link to={`/news/${article._id}`} key={article._id} style={linkStyle}>
                    <div className="d-flex mb-3">
                      <div className="bg-secondary rounded me-2" style={{ width: "100px", height: "70px", flexShrink: 0 }}>
                        <Image src={article.media?.[0]?.url || "https://via.placeholder.com/100x70"} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="rounded" />
                      </div>
                      <div>
                        <p className="small mb-0" style={mutedTextStyle}>{article.category?.name}</p>
                        <p className="fw-bold small mb-0">{article.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
              {/* सबसे दायाँ कॉलम */}
              <Col md={6}>
                {farRightArticles.map((article) => (
                  // ✅ Step 9: Far-right articles ko Link se wrap karein
                  <Link to={`/news/${article._id}`} key={article._id} style={linkStyle}>
                    <div className="d-flex mb-3">
                      <div className="bg-secondary rounded me-2" style={{ width: "100px", height: "70px", flexShrink: 0 }}>
                        <Image src={article.media?.[0]?.url || "https://via.placeholder.com/100x70"} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="rounded" />
                      </div>
                      <div>
                        <p className="small mb-0" style={mutedTextStyle}>{article.category?.name}</p>
                        <p className="fw-bold small mb-0">{article.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>

        {/* और देखें बटन */}
        <div className="text-center mt-3">
          <Button variant="outline-light">और देखें</Button>
        </div>
      </Container>
    </div>
  );
};

export default SportsSection;