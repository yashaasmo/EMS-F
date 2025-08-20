// // // // // import React from 'react';

// // // // // const TopStory = ({ image, headline }) => (
// // // // //   <div className="position-relative">
// // // // //     <img src={image} className="img-fluid" alt="Top Story" />
// // // // //     <div
// // // // //       className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
// // // // //       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))' }}
// // // // //     >
// // // // //       <h2 className="fs-4 fw-bold">{headline}</h2>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // export default TopStory;

// // // // import React from 'react';

// // // // const TopStory = ({ image, headline }) => (
// // // //   <div className="position-relative">
// // // //     <img src={image} className="img-fluid" alt="Top Story" />
// // // //     <div
// // // //       className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 text-white" // रेस्पॉन्सिव पैडिंग
// // // //       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))' }}
// // // //     >
// // // //       {/* छोटे स्क्रीन के लिए छोटा फॉन्ट, बड़े स्क्रीन के लिए बड़ा फॉन्ट */}
// // // //       <h2 className="fs-5 fs-md-4 fw-bold m-0">{headline}</h2>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default TopStory;


// // // import React, { useEffect, useState } from 'react';

// // // const TopStory = ({ data }) => {
// // //   const topStories = data.slice(0, 5); // यहीं slice हो रहा है
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSlide(prev => (prev + 1) % topStories.length);
// // //     }, 4000);

// // //     return () => clearInterval(interval);
// // //   }, [topStories.length]);

// // //   return (
// // //     <>
// // //       {topStories.length > 0 && (
// // //         <div
// // //           style={{
// // //             position: 'relative',
// // //             overflow: 'hidden',
// // //             height: '280px',
// // //             borderRadius: '8px',
// // //             marginBottom: '1rem',
// // //           }}
// // //         >
// // //           {topStories.map((news, index) => (
// // //             <div
// // //               key={news._id}
// // //               style={{
// // //                 position: 'absolute',
// // //                 top: 0,
// // //                 left: index === currentSlide ? 0 : '100%',
// // //                 width: '100%',
// // //                 height: '100%',
// // //                 opacity: index === currentSlide ? 1 : 0,
// // //                 transition: 'all 0.8s ease-in-out',
// // //                 zIndex: index === currentSlide ? 2 : 1,
// // //               }}
// // //             >
// // //               <div
// // //                 className="position-relative"
// // //                 style={{ height: '289px', overflow: 'hidden' }}
// // //               >
// // //                 <img
// // //                   src={news?.media?.[0]?.url || ''}
// // //                   className="img-fluid w-100 h-100"
// // //                   alt="Top Story"
// // //                   style={{ objectFit: 'cover' }}
// // //                 />

// // //                 <div
// // //                   className="position-absolute bottom-0 start-0 w-100 text-white p-2 p-md-3"
// // //                   style={{
// // //                     background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
// // //                   }}
// // //                 >
// // //                   <h2 className="fs-5 fs-md-4 fw-bold m-0">{news?.title || ''}</h2>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default TopStory;

// // import React, { useEffect, useState } from 'react';

// // const TopStory = ({ data }) => {
// //   const topStories = data.slice(0, 5);
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % topStories.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, [topStories.length]);

// //   return (
// //     <>
// //       {topStories.length > 0 && (
// //         <div
// //           style={{
// //             position: 'relative',
// //             overflow: 'hidden',
// //             height: '380px',
// //             width:'770px',
// //             borderRadius: '8px',
// //             marginBottom: '1rem',
// //           }}
// //         >
// //           {topStories.map((news, index) => (
// //             <div
// //               key={news._id}
// //               style={{
// //                 position: 'absolute',
// //                 top: 0,
// //                 left: index === currentSlide ? 0 : '100%',
// //                 width: '100%',
// //                 height: '100%',
// //                 opacity: index === currentSlide ? 1 : 0,
// //                 transition: 'all 0.8s ease-in-out',
// //                 zIndex: index === currentSlide ? 2 : 1,
// //               }}
// //             >
// //               <div className="position-relative h-100">
// //                 <img
// //                   src={news?.media?.[0]?.url || ''}
// //                   className="img-fluid w-100 h-100"
// //                   alt="Top Story"
// //                   style={{ objectFit: 'cover' }}
// //                 />
// //                 <div
// //                   className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 text-white"
// //                   style={{
// //                     background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
// //                   }}
// //                 >
// //                   <h2 className="fs-5 fs-md-4 fw-bold m-0">
// //                     {news?.title || ''}
// //                   </h2>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default TopStory;

// // chagne 8/18/25  16:30

   

// import React, { useEffect, useState } from 'react';

// const TopStory = ({ data }) => {
//   const topStories = data.slice(0, 5);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % topStories.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [topStories.length]);

//   return (
//     <>
//       {topStories.length > 0 && (
//         <div
//           style={{
//             position: 'relative',
//             overflow: 'hidden',
//             height: '380px',
//             width:'770px',
//             borderRadius: '8px',
//             marginBottom: '1rem',
//           }}
//         >
//           {topStories.map((news, index) => (
//             <div
//               key={news._id}
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: index === currentSlide ? 0 : '100%',
//                 width: '100%',
//                 height: '100%',
//                 opacity: index === currentSlide ? 1 : 0,
//                 transition: 'all 0.8s ease-in-out',
//                 zIndex: index === currentSlide ? 2 : 1,
//               }}
//             >
//               <div className="position-relative h-100">
//                          <img
//   src={news?.media?.[0]?.url || ''}
//   className="img-fluid w-100 h-100"
//   alt="Top Story"
//   style={{
//     objectFit: 'contain',   // ✅ image पूरी दिखाई देगी
//     backgroundColor: '#000' // ✅ खाली जगह black दिखेगी
//   }}
// />
//                 <div
//                   className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 text-white"
//                   style={{
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
//                   }}
//                 >
//                   <h2 className="fs-5 fs-md-4 fw-bold m-0">
//                     {news?.title || ''}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default TopStory;



// update by  shub 


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link

const TopStory = ({ data }) => {
  const topStories = data.slice(0, 5);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (topStories.length === 0) return; // Prevent interval if no stories

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [topStories.length]);

  if (topStories.length === 0) {
    return <div>Loading Top Stories...</div>; // Handle loading state
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "380px",
          width: "770px",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        {topStories.map((news, index) => (
          // 2. Wrap the slide content in a Link component
          <Link
            key={news._id}
            to={`/news/${news._id}`} // 3. Set the destination URL dynamically
            style={{
              position: "absolute",
              top: 0,
              left:
                index > currentSlide
                  ? "100%"
                  : index < currentSlide
                  ? "-100%"
                  : "0", // Added better sliding
              width: "100%",
              height: "100%",
              opacity: index === currentSlide ? 1 : 0,
              transition: "all 0.8s ease-in-out",
              zIndex: index === currentSlide ? 2 : 1,
              cursor: "pointer",
              textDecoration: "none", // Remove link underline
              color: "inherit",
            }}
          >
            <div className="position-relative h-100">
              <img
                src={news?.media?.[0]?.url || ""}
                className="img-fluid w-100 h-100"
                alt="Top Story"
                style={{
                  objectFit: "cover", // Use 'cover' to fill the space
                }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 text-white"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
                }}
              >
                <h2 className="fs-5 fs-md-4 fw-bold m-0">
                  {news?.title || ""}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopStory;
