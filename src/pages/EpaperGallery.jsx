// import React from "react";
// import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";

// // --- ✅ आपके दिए हुए HTML से निकाला गया सभी संस्करणों का असली डेटा ---
// const epaperEditions = {
//   jabalpurExpress: [
//     {
//       id: "jabalpur_edition",
//       name: "Jabalpur",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264632.jpg",
//     },
//     {
//       id: "chhindwara_edition",
//       name: "Chhindwara",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264594.jpg",
//     },
//     {
//       id: "balaghat_edition",
//       name: "Balaghat",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264589.jpg",
//     },
//     {
//       id: "seoni_edition",
//       name: "Seoni",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264579.jpg",
//     },
//     {
//       id: "mandla_edition",
//       name: "Mandla",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264587.jpg",
//     },
//     {
//       id: "narsinghpur_edition",
//       name: "Narsinghpur",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/thumb/page_image_thumb_264621.jpg",
//     },
//   ],
//   expressNews: [
//     {
//       id: "bhopal_edition",
//       name: "Bhopal",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/page/page_image_264581.jpg",
//     },
//     {
//       id: "gwalior_edition",
//       name: "Gwalior",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/page/page_image_264584.jpg",
//     },
//     {
//       id: "katni_edition",
//       name: "Katni",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/page/page_image_264614.jpg",
//     },
//     {
//       id: "bilaspur_edition",
//       name: "Bilaspur",
//       thumbnail:
//         "http://www.jabalpurexpress.com/admin/ajax/show_image.php?path=../../pages/page/page_image_264606.jpg",
//     },
//   ],
// };

// // --- थंबनेल ग्रिड बनाने वाला छोटा कंपोनेंट ---
// const GallerySection = ({ title, editions }) => (
//   <>
//     <h4 className="fw-bold border-bottom pb-2 mb-3 mt-4">{title}</h4>
//     <Row xs={2} md={4} lg={6} className="g-4">
//       {editions.map((edition) => (
//         <Col key={edition.id}>
//           <Link
//             to={`/epaper/viewer/${edition.id}`}
//             className="text-decoration-none"
//           >
//             <Card className="text-center shadow-sm h-100">
//               <div
//                 style={{
//                   height: "200px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   padding: "10px",
//                   backgroundColor: "#f8f9fa",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={edition.thumbnail}
//                   style={{
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>
//               <Card.Footer className="p-2">
//                 <h6 className="fw-bold text-dark mb-0">{edition.name}</h6>
//               </Card.Footer>
//             </Card>
//           </Link>
//         </Col>
//       ))}
//     </Row>
//   </>
// );

// const EpaperGallery = () => {
//   return (
//     <Container fluid className="p-0">
//       {/* --- हीरो बैनर (स्क्रीनशॉट जैसा) --- */}
//       <Carousel
//         indicators={false}
//         style={{ backgroundColor: "#214660", color: "white" }}
//       >
//         <Carousel.Item>
//           <Container className="p-5">
//             <Row className="align-items-center">
//               <Col md={3}>
//                 <h3>Jabalpur Express</h3>
//                 <p>
//                   Jabalpur Express, the leading newspaper of Mahakoshal
//                   territory, published from Jabalpur, Chhindwara, Balaghat...
//                 </p>
//               </Col>
//               <Col md={3}>
//                 <img
//                   src="http://www.jabalpurexpress.com/images/ep1.png"
//                   className="img-fluid"
//                   alt="Jabalpur Express"
//                 />
//                 <h5 className="text-center mt-2">
//                   महाकौशल का विश्वसनीय समाचार पत्र
//                 </h5>
//               </Col>
//               <Col md={3} className="text-center">
//                 <h3>Express News</h3>
//                 <p>
//                   Express news started in the year 1997 has its a editions
//                   published from Bhopal...
//                 </p>
//               </Col>
//               <Col md={3}>
//                 <img
//                   src="http://www.jabalpurexpress.com/images/ep2.png"
//                   className="img-fluid"
//                   alt="Express News"
//                 />
//                 <h5 className="text-center mt-2">
//                   मध्यप्रदेश-छत्तीसगढ़ का विश्वसनीय समाचार पत्र
//                 </h5>
//               </Col>
//             </Row>
//           </Container>
//         </Carousel.Item>
//       </Carousel>

//       {/* --- नीचे के थंबनेल --- */}
//       <Container className="my-4">
//         <GallerySection
//           title="Jabalpur Express"
//           editions={epaperEditions.jabalpurExpress}
//         />
//         <GallerySection
//           title="Express News"
//           editions={epaperEditions.expressNews}
//         />
//       </Container>
//     </Container>
//   );
// };

// export default EpaperGallery;


import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

// --- गैलरी पेज के लिए सभी छवियों को 'src/assets/' से इम्पोर्ट करें ---

// --- बैनर की तस्वीरें पहले से ही कमेंटेड हैं ---
// import bannerEp1 from '../assets/banner-ep1.png';
// import bannerEp2 from '../assets/banner-ep2.png';

// "Jabalpur Express" के थंबनेल (ये सही हैं और मौजूद हैं)
import jabalpurThumb from '../assets/jabalpur-thumb.jpg';
import chhindwaraThumb from '../assets/chhindwara-thumb.jpg';
import balaghatThumb from '../assets/balaghat-thumb.jpg';
import seoniThumb from '../assets/seoni-thumb.jpg';
import mandlaThumb from '../assets/mandla-thumb.jpg';
import narsinghpurThumb from '../assets/narsinghpur-thumb.jpg';

// --- "Express News" के सभी थंबनेल अब कमेंट कर दिए गए हैं ---
// import bhopalThumb from '../assets/bhopal-thumb.jpg'; 
// import gwaliorThumb from '../assets/gwalior-thumb.jpg';
// import katniThumb from '../assets/katni-thumb.jpg';
// import bilaspurThumb from '../assets/bilaspur-thumb.jpg';

// --- डेटा ऑब्जेक्ट ---
const epaperEditions = {
  jabalpurExpress: [
    { id: "jabalpur_edition", name: "Jabalpur", thumbnail: jabalpurThumb },
    { id: "chhindwara_edition", name: "Chhindwara", thumbnail: chhindwaraThumb },
    { id: "balaghat_edition", name: "Balaghat", thumbnail: balaghatThumb },
    { id: "seoni_edition", name: "Seoni", thumbnail: seoniThumb },
    { id: "mandla_edition", name: "Mandla", thumbnail: mandlaThumb },
    { id: "narsinghpur_edition", name: "Narsinghpur", thumbnail: narsinghpurThumb },
  ],
  // --- expressNews की सभी एंट्रीज कमेंट कर दी गई हैं, क्योंकि इमेज नहीं हैं ---
  expressNews: [
    // { id: "bhopal_edition", name: "Bhopal", thumbnail: bhopalThumb },
    // { id: "gwalior_edition", name: "Gwalior", thumbnail: gwaliorThumb },
    // { id: "katni_edition", name: "Katni", thumbnail: katniThumb },
    // { id: "bilaspur_edition", name: "Bilaspur", thumbnail: bilaspurThumb },
  ],
};

// --- कंपोनेंट्स ---
const GallerySection = ({ title, editions }) => (
  <>
    <h4 className="fw-bold border-bottom pb-2 mb-3 mt-4">{title}</h4>
    <Row xs={2} md={4} lg={6} className="g-4">
      {editions.map((edition) => (
        <Col key={edition.id}>
          <Link to={`/epaper/viewer/${edition.id}`} className="text-decoration-none">
            <Card className="text-center shadow-sm h-100">
              <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", backgroundColor: "#f8f9fa" }}>
                <Card.Img variant="top" src={edition.thumbnail} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}/>
              </div>
              <Card.Footer className="p-2">
                <h6 className="fw-bold text-dark mb-0">{edition.name}</h6>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </>
);

const EpaperGallery = () => {
  return (
    <Container fluid className="p-0">
      <Carousel indicators={false} style={{ backgroundColor: "#214660", color: "white" }}>
        <Carousel.Item>
          <Container className="p-5">
            {/* बैनर से "Express News" का हिस्सा हटा दिया गया है */}
            <Row className="align-items-center justify-content-center text-center">
              <Col md={8}>
                <h3>EMS Express</h3>
                <p>Ems Express, the leading newspaper of Mahakoshal territory...</p>
                <h5 className="mt-2">महाकौशल का विश्वसनीय समाचार पत्र</h5>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <Container className="my-4">
        <GallerySection title="Jabalpur Express" editions={epaperEditions.jabalpurExpress} />
        
        {/* "Express News" सेक्शन अब नहीं दिखाया जाएगा क्योंकि उसमें कोई संस्करण नहीं है */}
        { epaperEditions.expressNews.length > 0 && 
            <GallerySection title="Express News" editions={epaperEditions.expressNews} /> 
        }
      </Container>
    </Container>
  );
};

export default EpaperGallery;