// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { allNews } from '../../Services/authApi'; // अपनी API फ़ाइल का सही पाथ दें

// // खाली बॉक्स (प्लेसहोल्डर) के लिए एक अलग कंपोनेंट
// const PlaceholderCard = ({ style }) => {
//   return (
//     <div className="card border-0 rounded-0 h-100 bg-light" style={style}>
//       {/* आप चाहें तो यहाँ कोई आइकन या टेक्स्ट भी डाल सकते हैं */}
//     </div>
//   );
// };


// const TopNews = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await allNews();
//         setNews(response.data || []);
//       } catch (err) {
//         setError("समाचार लोड करने में विफल।");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, []);

//   // स्टाइल ऑब्जेक्ट्स
//   const gradientOverlay = { background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent)', color: 'white', };
//   const topImageStyle = { objectFit: 'cover', height: '100%', width: '100%' };
//   const bottomImageStyle = { objectFit: 'cover', aspectRatio: '16/9' };

//   if (loading) return <div className="text-center my-5"><h5>लोड हो रहा है...</h5></div>;
//   if (error) return <div className="alert alert-danger my-5">{error}</div>;

//   // --- डेटा को स्लॉट के अनुसार असाइन करें ---
//   // अगर डेटा मौजूद नहीं है, तो वेरिएबल 'undefined' रहेगा
//   const topStory1 = news[0];
//   const topStory2 = news[1];
//   const bottomStory1 = news[2];
//   const bottomStory2 = news[3];
//   const bottomStory3 = news[4];

//   return (
//     <div className="container my-4">
//       <h3 className="fw-bold" style={{ color: '#ff0000' }}>होम- भारत</h3>
//       <hr className="mb-3" style={{ borderTop: '2px solid #e0e0e0' }} />
      
//       <div className="container-fluid px-0">
        
//         {/* ======== ऊपर की पंक्ति (हमेशा दिखेगी) ======== */}
//         <div className="row g-3 mb-3">
//           {/* कार्ड स्लॉट 1 */}
//           <div className="col-lg-6 col-md-6" style={{ height: "40vh"}}>
//             {topStory1 ? (
//               <Link to={`/news/${topStory1._id}`} className="text-decoration-none">
//                 <div className="card border-0 rounded-0 h-100">
//                   <img src={topStory1.media[0]?.url || 'https://via.placeholder.com/600x400'} alt={topStory1.title} className="card-img" style={topImageStyle} />
//                   <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={gradientOverlay}>
//                     <h4 className="card-title fw-bold text-white">{topStory1.title}</h4>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <PlaceholderCard style={{ height: '200px' }} />
//             )}
//           </div>

//           {/* कार्ड स्लॉट 2 */}
//           <div className="col-lg-6 col-md-6" style={{ height: "40vh"}}>
//             {topStory2 ? (
//               <Link to={`/news/${topStory2._id}`} className="text-decoration-none">
//                 <div className="card border-0 rounded-0 h-100">
//                   <img src={topStory2.media[0]?.url || 'https://via.placeholder.com/600x400'} alt={topStory2.title} className="card-img" style={topImageStyle} />
//                   <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={gradientOverlay}>
//                     <h5 className="card-title fw-bold text-white">{topStory2.title}</h5>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <PlaceholderCard style={{ height: '200px' }} />
//             )}
//           </div>
//         </div>

//         {/* ======== नीचे की पंक्ति (हमेशा दिखेगी) ======== */}
//         <div className="row g-3">
//           {/* कार्ड स्लॉट 1 */}
//           <div className="col-lg-4 col-md-6">
//             {bottomStory1 ? (
//               <Link to={`/news/${bottomStory1._id}`} className="text-decoration-none text-dark">
//                 <div className="card border-0 rounded-0 h-100">
//                   <img src={bottomStory1.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory1.title} style={bottomImageStyle} />
//                   <div className="card-body px-2 py-3">
//                     <p className="card-text fw-bold">{bottomStory1.title}</p>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <PlaceholderCard />
//             )}
//           </div>

//           {/* कार्ड स्लॉट 2 */}
//           <div className="col-lg-4 col-md-6">
//             {bottomStory2 ? (
//               <Link to={`/news/${bottomStory2._id}`} className="text-decoration-none text-dark">
//                 <div className="card border-0 rounded-0 h-100">
//                   <img src={bottomStory2.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory2.title} style={bottomImageStyle} />
//                   <div className="card-body px-2 py-3">
//                     <p className="card-text fw-bold">{bottomStory2.title}</p>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <PlaceholderCard />
//             )}
//           </div>

//           {/* कार्ड स्लॉट 3 */}
//           <div className="col-lg-4 col-md-12">
//             {bottomStory3 ? (
//               <Link to={`/news/${bottomStory3._id}`} className="text-decoration-none text-dark">
//                 <div className="card border-0 rounded-0 h-100">
//                   <img src={bottomStory3.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory3.title} style={bottomImageStyle} />
//                   <div className="card-body px-2 py-3">
//                     <p className="card-text fw-bold">{bottomStory3.title}</p>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <PlaceholderCard />
//             )}
//           </div>
//         </div>
//       </div>
      
//       <hr style={{ borderTop: '4px solid red', marginTop: '2rem' }} />
//     </div>
//   );
// };

// export default TopNews;



// src/components/...?/TopNews.jsx (Poora Updated Code)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allNews } from '../../Services/authApi'; // Apni API file ka sahi path dein
import { Spinner, Alert } from 'react-bootstrap';

// Khali box (placeholder) ke liye ek alag component
const PlaceholderCard = ({ style }) => {
  return (
    <div className="card border-0 rounded-0 h-100 bg-light" style={style}>
      {/* Aap chahein to yahan koi icon ya text bhi daal sakte hain */}
    </div>
  );
};


const TopNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await allNews();
        // API se mile data ko state mein save karein
        setNews(response.data || []); 
      } catch (err) {
        setError("समाचार लोड करने में विफल।");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Style objects
  const gradientOverlay = { background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent)', color: 'white', };
  const topImageStyle = { objectFit: 'cover', height: '100%', width: '100%' };
  const bottomImageStyle = { objectFit: 'cover', aspectRatio: '16/9' };

  if (loading) {
    // Loading state mein Spinner dikhayein
    return <div className="text-center my-5"><Spinner animation="border" variant="danger" /><h5 className="mt-3">समाचार लोड हो रहा है...</h5></div>;
  }
  
  if (error) {
    // Error state mein Alert dikhayein
    return <div className="alert alert-danger my-5">{error}</div>;
  }

  // --- Data ko slot ke anusaar assign karein ---
  // Agar data maujood nahi hai, to variable 'undefined' rahega
  const topStory1 = news[0];
  const topStory2 = news[1];
  const bottomStory1 = news[2];
  const bottomStory2 = news[3];
  const bottomStory3 = news[4];

  return (
    <div className="container my-4">
      <h3 className="fw-bold" style={{ color: '#ff0000' }}>होम- भारत</h3>
      <hr className="mb-3" style={{ borderTop: '2px solid #e0e0e0' }} />
      
      <div className="container-fluid px-0">
        
        {/* ======== Upar ki pankti (Top Row) ======== */}
        <div className="row g-3 mb-3">
          {/* Card Slot 1 */}
          <div className="col-lg-6 col-md-6" style={{ height: "40vh"}}>
            {topStory1 ? (
              // ✅ Link ko dynamic ID se joda gaya hai
              <Link to={`/news/${topStory1._id}`} className="text-decoration-none">
                <div className="card border-0 rounded-0 h-100">
                  <img src={topStory1.media[0]?.url || 'https://via.placeholder.com/600x400'} alt={topStory1.title} className="card-img" style={topImageStyle} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={gradientOverlay}>
                    <h4 className="card-title fw-bold text-white">{topStory1.title}</h4>
                  </div>
                </div>
              </Link>
            ) : (
              <PlaceholderCard style={{ height: '200px' }} />
            )}
          </div>

          {/* Card Slot 2 */}
          <div className="col-lg-6 col-md-6" style={{ height: "40vh"}}>
            {topStory2 ? (
              // ✅ Link ko dynamic ID se joda gaya hai
              <Link to={`/news/${topStory2._id}`} className="text-decoration-none">
                <div className="card border-0 rounded-0 h-100">
                  <img src={topStory2.media[0]?.url || 'https://via.placeholder.com/600x400'} alt={topStory2.title} className="card-img" style={topImageStyle} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={gradientOverlay}>
                    <h5 className="card-title fw-bold text-white">{topStory2.title}</h5>
                  </div>
                </div>
              </Link>
            ) : (
              <PlaceholderCard style={{ height: '200px' }} />
            )}
          </div>
        </div>

        {/* ======== Neeche ki pankti (Bottom Row) ======== */}
        <div className="row g-3">
          {/* Card Slot 1 */}
          <div className="col-lg-4 col-md-6">
            {bottomStory1 ? (
              // ✅ Link ko dynamic ID se joda gaya hai
              <Link to={`/news/${bottomStory1._id}`} className="text-decoration-none text-dark">
                <div className="card border-0 rounded-0 h-100">
                  <img src={bottomStory1.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory1.title} style={bottomImageStyle} />
                  <div className="card-body px-2 py-3">
                    <p className="card-text fw-bold">{bottomStory1.title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <PlaceholderCard />
            )}
          </div>

          {/* Card Slot 2 */}
          <div className="col-lg-4 col-md-6">
            {bottomStory2 ? (
              // ✅ Link ko dynamic ID se joda gaya hai
              <Link to={`/news/${bottomStory2._id}`} className="text-decoration-none text-dark">
                <div className="card border-0 rounded-0 h-100">
                  <img src={bottomStory2.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory2.title} style={bottomImageStyle} />
                  <div className="card-body px-2 py-3">
                    <p className="card-text fw-bold">{bottomStory2.title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <PlaceholderCard />
            )}
          </div>

          {/* Card Slot 3 */}
          <div className="col-lg-4 col-md-12">
            {bottomStory3 ? (
              // ✅ Link ko dynamic ID se joda gaya hai
              <Link to={`/news/${bottomStory3._id}`} className="text-decoration-none text-dark">
                <div className="card border-0 rounded-0 h-100">
                  <img src={bottomStory3.media[0]?.url || 'https://via.placeholder.com/400x225'} className="card-img-top rounded-0" alt={bottomStory3.title} style={bottomImageStyle} />
                  <div className="card-body px-2 py-3">
                    <p className="card-text fw-bold">{bottomStory3.title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <PlaceholderCard />
            )}
          </div>
        </div>
      </div>
      
      <hr style={{ borderTop: '4px solid red', marginTop: '2rem' }} />
    </div>
  );
};

export default TopNews;