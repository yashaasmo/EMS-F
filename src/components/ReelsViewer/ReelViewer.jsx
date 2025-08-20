

// // import React, { useRef, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { IoArrowBack } from "react-icons/io5";
// // import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// // import { BiCommentDetail, BiShare } from "react-icons/bi";
// // import {
// //   newsshorts,
// //   addLikeToShort,
// //   addCommentToShort,
// // } from "../../Services/authApi";

// // const ReelViewer = () => {
// //   const navigate = useNavigate();
// //   const [shorts, setShorts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [showCommentModal, setShowCommentModal] = useState(false);
// //   const [activeShort, setActiveShort] = useState(null);
// //   const [commentText, setCommentText] = useState("");
// //   const [isPosting, setIsPosting] = useState(false);
// //   const reelRefs = useRef([]);

// //   const fetchAllShorts = async () => {
// //     try {
// //       setIsLoading(true);
// //       const response = await newsshorts();
// //       if (response && Array.isArray(response.data)) {
// //         setShorts(response.data);
// //       } else {
// //         setShorts([]);
// //       }
// //     } catch (err) {
// //       console.error("Error fetching shorts:", err);
// //       setError("रील्स लोड करने में समस्या हुई");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAllShorts();
// //   }, []);

// //   const handleLike = async (shortId) => {
// //     const updatedShorts = shorts.map((short) => {
// //       if (short._id === shortId) {
// //         const isLiked = short.isLikedByCurrentUser;
// //         return {
// //           ...short,
// //           isLikedByCurrentUser: !isLiked,
// //           likesCount: isLiked ? short.likesCount - 1 : short.likesCount + 1,
// //         };
// //       }
// //       return short;
// //     });

// //     setShorts(updatedShorts);

// //     try {
// //       await addLikeToShort(shortId);
// //     } catch (err) {
// //       alert("लाइक करने में समस्या हुई");
// //       fetchAllShorts();
// //     }
// //   };

// //   const openCommentModal = (short) => {
// //     setActiveShort(short);
// //     setShowCommentModal(true);
// //   };

// //   const handlePostComment = async (e) => {
// //     e.preventDefault();
// //     if (!commentText.trim() || !activeShort) return;

// //     setIsPosting(true);
// //     try {
// //       await addCommentToShort(activeShort._id, { text: commentText });
// //       await fetchAllShorts();
// //       setShowCommentModal(false);
// //       setCommentText("");
// //     } catch (err) {
// //       alert("कमेंट भेजने में समस्या हुई");
// //     } finally {
// //       setIsPosting(false);
// //     }
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
// //         <h5>रील्स लोड हो रही हैं...</h5>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
// //         <h5>{error}</h5>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <div
// //         className="position-fixed top-0 start-0 w-100 vh-100 bg-black"
// //         style={{ zIndex: 9999 }}
// //       >
// //         <IoArrowBack
// //           className="position-absolute top-0 start-0 m-3 text-white h2"
// //           style={{ cursor: "pointer", zIndex: 10 }}
// //           onClick={() => navigate(-1)}
// //         />

// //         <div
// //           className="reels-list h-100 w-100 overflow-y-scroll"
// //           style={{ scrollSnapType: "y mandatory" }}
// //         >
// //           {shorts.map((short, index) => (
// //             <div
// //               key={short._id}
// //               className="h-100 w-100 d-flex justify-content-center align-items-center position-relative"
// //               style={{ scrollSnapAlign: "start" }}
// //             >
// //               <video
// //                 ref={(el) => (reelRefs.current[index] = el)}
// //                 src={short.videoUrl}
// //                 loop
// //                 autoPlay
// //                 muted
// //                 className="w-100 h-100"
// //                 style={{ objectFit: "cover" }}
// //                 onClick={(e) => {
// //                   e.target.muted = !e.target.muted;
// //                 }}
// //               ></video>

// //               <div
// //                 className="position-absolute bottom-0 start-0 w-100 p-3 text-white d-flex align-items-end"
// //                 style={{
// //                   background:
// //                     "linear-gradient(to top, rgba(0,0,0,0.7) 10%, transparent)",
// //                 }}
// //               >
// //                 <div className="flex-grow-1">
// //                   <h5 className="fw-bold m-0">
// //                     @{short.createdBy?.name ?? "User"}
// //                   </h5>
// //                   <p className="m-0 mt-1 small">{short.title}</p>
// //                 </div>

// //                 <div className="d-flex flex-column align-items-center gap-4">
// //                   <div
// //                     className="text-center"
// //                     style={{ cursor: "pointer" }}
// //                     onClick={() => handleLike(short._id)}
// //                   >
// //                     {short.isLikedByCurrentUser ? (
// //                       <AiFillHeart className="h1 text-danger" />
// //                     ) : (
// //                       <AiOutlineHeart className="h1 text-white" />
// //                     )}
// //                     <span className="d-block small fw-bold text-white">
// //                       {short.likesCount ?? 0}
// //                     </span>
// //                   </div>

// //                   <div
// //                     className="text-center"
// //                     style={{ cursor: "pointer" }}
// //                     onClick={() => openCommentModal(short)}
// //                   >
// //                     <BiCommentDetail className="h1 text-white" />
// //                     <span className="d-block small fw-bold text-white">
// //                       {short.comments?.length ?? 0}
// //                     </span>
// //                   </div>

// //                   <div className="text-center" style={{ cursor: "pointer" }}>
// //                     <BiShare className="h1 text-white" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Comment Modal */}
// //       {showCommentModal && activeShort && (
// //         <div
// //           className="modal fade show"
// //           tabIndex="-1"
// //           style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
// //         >
// //           <div className="modal-dialog modal-dialog-centered">
// //             <div className="modal-content">
// //               <div className="modal-header">
// //                 <h5 className="modal-title">एक कमेंट लिखें</h5>
// //                 <button
// //                   type="button"
// //                   className="btn-close"
// //                   onClick={() => setShowCommentModal(false)}
// //                 ></button>
// //               </div>
// //               <div className="modal-body">
// //                 <form onSubmit={handlePostComment}>
// //                   <div className="mb-3">
// //                     <textarea
// //                       className="form-control"
// //                       rows="3"
// //                       placeholder="आपका कमेंट..."
// //                       value={commentText}
// //                       onChange={(e) => setCommentText(e.target.value)}
// //                     ></textarea>
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="btn btn-primary"
// //                     disabled={isPosting}
// //                   >
// //                     {isPosting ? "पोस्ट हो रहा है..." : "पोस्ट करें"}
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default ReelViewer;

// import React, { useRef, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { BiCommentDetail, BiShare } from "react-icons/bi";
// import { newsshorts, addLikeToShort } from "../../Services/authApi";
// import CommentOffcanvas from './CommentOffcanvas';

// const ReelViewer = () => {
//   const navigate = useNavigate();
//   const [shorts, setShorts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showCommentBox, setShowCommentBox] = useState(false);
//   const [activeShort, setActiveShort] = useState(null);
//   const reelRefs = useRef([]);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   const fetchAllShorts = async () => {
//     try {
//       if (shorts.length === 0) setIsLoading(true);
//       const response = await newsshorts();
//       setShorts(response?.data || []);
//     } catch (err) {
//       setError("रील्स लोड करने में समस्या हुई");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllShorts();
//   }, []);

//   const handleLike = async (shortId) => {
//     const originalShorts = [...shorts];
//     const updatedShorts = shorts.map((s) => s._id === shortId ? { ...s, isLikedByCurrentUser: !s.isLikedByCurrentUser, likesCount: s.isLikedByCurrentUser ? s.likesCount - 1 : s.likesCount + 1 } : s);
//     setShorts(updatedShorts);
//     try {
//       await addLikeToShort(shortId);
//     } catch (err) {
//       alert("लाइक करने में समस्या हुई");
//       setShorts(originalShorts);
//     }
//   };

//   const openCommentBox = (short) => {
//     setActiveShort(short);
//     setShowCommentBox(true);
//   };

//   const handleCommentPosted = () => {
//     fetchAllShorts();
//   };

//   if (isLoading || error) {
//     return (
//       <div className="position-fixed top-0 start-0 w-100 vh-100 bg-black d-flex justify-content-center align-items-center" style={{ zIndex: 99999 }}>
//         <h5 className="text-white">{isLoading ? "रील्स लोड हो रही हैं..." : error}</h5>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="position-fixed top-0 start-0 w-100 vh-100 bg-black d-flex justify-content-center align-items-center" style={{ zIndex: 99999 }}>
//         <div className="reels-main-container h-100 position-relative" style={{ width: "100%", maxWidth: "420px", backgroundColor: '#000' }}>
//           <IoArrowBack className="position-absolute top-0 start-0 m-3 text-white h2" style={{ cursor: "pointer", zIndex: 10 }} onClick={() => navigate(-1)} />
//           <div className="reels-list h-100 overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>
//             {shorts.map((short) => (
//               <div key={short._id} className="h-100 w-100 d-flex justify-content-center align-items-center position-relative" style={{ scrollSnapAlign: "start" }}>
//                 <video src={short.videoUrl} loop autoPlay muted playsInline className="w-100 h-100" style={{ objectFit: "cover" }} onClick={(e) => { e.target.muted = !e.target.muted; }}></video>
//                 <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white d-flex align-items-end" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 10%, transparent)" }}>
//                   <div className="flex-grow-1">
//                     <h5 className="fw-bold m-0">@{short.createdBy?.name ?? "User"}</h5>
//                     <p className="m-0 mt-1 small">{short.title}</p>
//                   </div>
//                   <div className="d-flex flex-column align-items-center gap-4">
//                     <div className="text-center" style={{ cursor: "pointer" }} onClick={() => handleLike(short._id)}>
//                       <AiFillHeart className="h1 text-danger" />
//                       <span className="d-block small fw-bold text-white">{short.likesCount ?? 0}</span>
//                     </div>
//                     <div className="text-center" style={{ cursor: "pointer" }} onClick={() => openCommentBox(short)}>
//                       <BiCommentDetail className="h1 text-white" />
//                       <span className="d-block small fw-bold text-white">{short.comments?.length ?? 0}</span>
//                     </div>
//                     <div className="text-center" style={{ cursor: "pointer" }}>
//                       <BiShare className="h1 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <CommentOffcanvas show={showCommentBox} onHide={() => setShowCommentBox(false)} short={activeShort} onCommentPosted={handleCommentPosted} />
//     </>
//   );
// };

// export default ReelViewer;

import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { newsshorts, addLikeToShort } from "../../Services/authApi";
import CommentOffcanvas from "./CommentOffcanvas";
import logo from "../../assets/logo.png";   // 👈 यहाँ logo import किया

const ReelViewer = () => {
  const navigate = useNavigate();
  const [shorts, setShorts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [activeShort, setActiveShort] = useState(null);
  const reelRefs = useRef([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const fetchAllShorts = async () => {
    try {
      if (shorts.length === 0) setIsLoading(true);
      const response = await newsshorts();
      setShorts(response?.data || []);
    } catch (err) {
      setError("रील्स लोड करने में समस्या हुई");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllShorts();
  }, []);

  const handleLike = async (shortId) => {
    const originalShorts = [...shorts];
    const updatedShorts = shorts.map((s) =>
      s._id === shortId
        ? {
            ...s,
            isLikedByCurrentUser: !s.isLikedByCurrentUser,
            likesCount: s.isLikedByCurrentUser
              ? s.likesCount - 1
              : s.likesCount + 1,
          }
        : s
    );
    setShorts(updatedShorts);
    try {
      await addLikeToShort(shortId);
    } catch (err) {
      alert("लाइक करने में समस्या हुई");
      setShorts(originalShorts);
    }
  };

  const openCommentBox = (short) => {
    setActiveShort(short);
    setShowCommentBox(true);
  };

  const handleCommentPosted = () => {
    fetchAllShorts();
  };

  if (isLoading || error) {
    return (
      <div className="position-fixed top-0 start-0 w-100 vh-100 bg-black d-flex justify-content-center align-items-center"
        style={{ zIndex: 99999 }}>
        <h5 className="text-white">
          {isLoading ? "रील्स लोड हो रही हैं..." : error}
        </h5>
      </div>
    );
  }

  return (
    <>
      <div className="position-fixed top-0 start-0 w-100 vh-100 bg-black d-flex justify-content-center align-items-center"
        style={{ zIndex: 99999 }}>
        <div className="reels-main-container h-100 position-relative"
          style={{ width: "100%", maxWidth: "420px", backgroundColor: "#000" }}>
          <IoArrowBack className="position-absolute top-0 start-0 m-3 text-white h2"
            style={{ cursor: "pointer", zIndex: 10 }}
            onClick={() => navigate(-1)} />

          <div className="reels-list h-100 overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>
            {shorts.map((short) => (
              <div key={short._id}
                className="h-100 w-100 d-flex justify-content-center align-items-center position-relative"
                style={{ scrollSnapAlign: "start" }}>
                
                {/* Video */}
                <video
                  src={short.videoUrl}
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  onClick={(e) => {
                    e.target.muted = !e.target.muted;
                  }}
                ></video>

                {/* 🔥 Logo always on top */}
                {/* 🔥 Logo always on top left */}
<img
  src={logo}
  alt="Logo"
  className="position-absolute"
  style={{
    top: "10px",
    left: "10px",
    width: "200px",   // 👈 छोटा size
    opacity: 0.9,    // हल्की transparency
    zIndex: 20,
  }}
/>


                {/* Bottom overlay */}
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white d-flex align-items-end"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 10%, transparent)" }}>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold m-0">@{short.createdBy?.name ?? "User"}</h5>
                    <p className="m-0 mt-1 small">{short.title}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-4">
                    <div className="text-center" style={{ cursor: "pointer" }}
                      onClick={() => handleLike(short._id)}>
                      <AiFillHeart className="h1 text-danger" />
                      <span className="d-block small fw-bold text-white">
                        {short.likesCount ?? 0}
                      </span>
                    </div>
                    <div className="text-center" style={{ cursor: "pointer" }}
                      onClick={() => openCommentBox(short)}>
                      <BiCommentDetail className="h1 text-white" />
                      <span className="d-block small fw-bold text-white">
                        {short.comments?.length ?? 0}
                      </span>
                    </div>
                    <div className="text-center" style={{ cursor: "pointer" }}>
                      <BiShare className="h1 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comment Box */}
      <CommentOffcanvas
        show={showCommentBox}
        onHide={() => setShowCommentBox(false)}
        short={activeShort}
        onCommentPosted={handleCommentPosted}
      />
    </>
  );
};

export default ReelViewer;
