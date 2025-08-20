
// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import {
// //   getNewsById,
// //   addLikeToNews,
// //   addCommentToNews,
// // } from "../../Services/authApi";
// // import "bootstrap-icons/font/bootstrap-icons.css";

// // const MediaRenderer = ({ mediaItem }) => {
// //   if (!mediaItem) {
// //     return null;
// //   }
// //   switch (mediaItem.type) {
// //     case "video":
// //       return (
// //         <video
// //           src={mediaItem.url}
// //           controls
// //           className="img-fluid w-100 rounded mb-3"
// //           style={{ maxHeight: "500px", backgroundColor: "#000" }}
// //         >
// //           Your browser does not support the video tag.
// //         </video>
// //       );
// //     case "image":
// //     default:
// //       return (
// //         <img
// //           src={mediaItem.url}
// //           alt={mediaItem.caption || "News Media"}
// //           className="img-fluid w-100 rounded mb-3"
// //         />
// //       );
// //   }
// // };

// // const NewsDetailPage = () => {
// //   const { newsId } = useParams();

// //   const [article, setArticle] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [likeCount, setLikeCount] = useState(0);
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [commentCount, setCommentCount] = useState(0);
// //   const [comments, setComments] = useState([]);
// //   const [showComments, setShowComments] = useState(false);
// //   const [newComment, setNewComment] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   useEffect(() => {
// //     if (!newsId) return;

// //     const fetchArticle = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);
// //         const res = await getNewsById(newsId);
// //         if (res.success) {
// //           setArticle(res.data);
// //           setLikeCount(res.data.likesCount || 0);
// //           setCommentCount(res.data.commentsCount || 0);
// //           setComments(res.data.comments || []);
// //           setIsLiked(false);
// //         } else {
// //           throw new Error(res.message || "Failed to fetch article");
// //         }
// //       } catch (err) {
// //         setError(
// //           err.message ||
// //             "A network error occurred. Please check the CORS policy on the server."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchArticle();
// //   }, [newsId]);

// //   const handleLikeClick = async () => {
// //     if (isLiked) return;

// //     setLikeCount((prevCount) => prevCount + 1);
// //     setIsLiked(true);

// //     try {
// //       await addLikeToNews(newsId);
// //     } catch (error) {
// //       console.error("Failed to like the news:", error);
// //       alert("Could not like the post. Please try again.");
// //       setLikeCount((prevCount) => prevCount - 1);
// //       setIsLiked(false);
// //     }
// //   };

// //   const handleCommentSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!newComment.trim()) return;

// //     setIsSubmitting(true);
// //     try {
// //       const response = await addCommentToNews(newsId, { text: newComment });
// //       if (response.success) {
// //         setComments([response.data, ...comments]);
// //         setCommentCount((prevCount) => prevCount + 1);
// //         setNewComment("");
// //       } else {
// //         throw new Error(response.message || "Failed to post comment");
// //       }
// //     } catch (error) {
// //       console.error("Failed to add comment:", error);
// //       alert("Could not add comment. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleShareClick = async () => {
// //     if (navigator.share && article) {
// //       try {
// //         await navigator.share({
// //           title: article.title,
// //           text: "Check out this interesting news!",
// //           url: window.location.href,
// //         });
// //       } catch (error) {
// //         console.error("Error sharing:", error);
// //       }
// //     } else {
// //       alert(
// //         "Sharing is not supported on your browser. Please copy the link manually."
// //       );
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="container text-center mt-5">
// //         <h4>Loading Article...</h4>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="container text-center mt-5">
// //         <h2>Error: Could not load the article.</h2>
// //         <p className="text-danger">{error}</p>
// //         <Link to="/" className="btn btn-secondary">
// //           Back to Home
// //         </Link>
// //       </div>
// //     );
// //   }

// //   if (!article) {
// //     return (
// //       <div className="container text-center mt-5">
// //         <h4>Article data not found.</h4>
// //         <Link to="/" className="btn btn-secondary">
// //           Back to Home
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div
// //       className="bg-white p-3 shadow-sm"
// //       style={{ border: "1px solid #eee" }}
// //     >
// //       <MediaRenderer mediaItem={article.media?.[0]} />
// //       <h1 className="fw-bold" style={{ fontSize: "1.8rem" }}>
// //         {article.title}
// //       </h1>
// //       <p className="text-muted border-bottom pb-2 mb-3">
// //         By {article.createdBy?.name || "Express Media Service"} | Published:{" "}
// //         {new Date(article.publishedAt).toLocaleDateString()}
// //       </p>
// //       <div
// //         className="article-content"
// //         style={{
// //           fontSize: "1rem",
// //           lineHeight: "1.8",
// //           whiteSpace: "pre-wrap",
// //         }}
// //       >
// //         {article.content}
// //       </div>

// //       <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top">
// //         <div
// //           onClick={handleLikeClick}
// //           className="d-flex align-items-center gap-2 text-muted"
// //           style={{ cursor: isLiked ? "default" : "pointer" }}
// //         >
// //           <i
// //             className={`fs-5 ${
// //               isLiked
// //                 ? "bi bi-hand-thumbs-up-fill text-primary"
// //                 : "bi bi-hand-thumbs-up"
// //             }`}
// //           ></i>
// //           <span>{likeCount}</span>
// //         </div>
// //         <div
// //           onClick={() => setShowComments(!showComments)}
// //           className="d-flex align-items-center gap-2 text-muted"
// //           style={{ cursor: "pointer" }}
// //         >
// //           <i className="bi bi-chat-dots fs-5"></i>
// //           <span>{commentCount}</span>
// //         </div>
// //         <div
// //           onClick={handleShareClick}
// //           className="d-flex align-items-center gap-2 text-muted"
// //           style={{ cursor: "pointer" }}
// //         >
// //           <i className="bi bi-share fs-5"></i>
// //         </div>
// //       </div>

// //       {showComments && (
// //         <div className="mt-4 border-top pt-3">
// //           <h4 className="mb-3">Comments ({commentCount})</h4>
// //           <form onSubmit={handleCommentSubmit} className="d-flex gap-2 mb-4">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Write a comment..."
// //               value={newComment}
// //               onChange={(e) => setNewComment(e.target.value)}
// //               disabled={isSubmitting}
// //             />
// //             <button
// //               type="submit"
// //               className="btn btn-primary"
// //               disabled={isSubmitting || !newComment.trim()}
// //             >
// //               {isSubmitting ? "..." : "Post"}
// //             </button>
// //           </form>
// //           <div className="comments-list">
// //             {comments.length > 0 ? (
// //               comments.map((comment) => (
// //                <div key={comment._id} className="border-bottom pb-2 mb-2">
// //   <strong>{comment.user?.name || "Anonymous"}</strong> 
// //   <p className="mb-0">{comment.text}</p>
// // </div>
// //               ))
// //             ) : (
// //               <p>No comments yet. Be the first to comment!</p>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default NewsDetailPage;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   getNewsById,
//   addLikeToNews, // Yeh function like/unlike dono karega
//   addCommentToNews,
//   // Comments ko refresh karne ke liye
// } from "../../Services/authApi";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const MediaRenderer = ({ mediaItem }) => {
//   if (!mediaItem) {
//     return null;
//   }
//   switch (mediaItem.type) {
//     case "video":
//       return (
//         <video
//           src={mediaItem.url}
//           controls
//           className="img-fluid w-100 rounded mb-3"
//           style={{ maxHeight: "500px", backgroundColor: "#000" }}
//         >
//           Your browser does not support the video tag.
//         </video>
//       );
//     case "image":
//     default:
//       return (
//         <img
//           src={mediaItem.url}
//           alt={mediaItem.caption || "News Media"}
//           className="img-fluid w-100 rounded mb-3"
//         />
//       );
//   }
// };

// const NewsDetailPage = () => {
//   const { newsId } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [likeCount, setLikeCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [commentCount, setCommentCount] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ✅ Comment list ko runtime par refresh karne ke liye function
//   const fetchComments = async () => {
//     if (!newsId) return;
//     try {
//       const res = await (newsId);
//       if (res.success) {
//         setComments(res.data || []);
//         setCommentCount(res.data.length || 0);
//       }
//     } catch (err) {
//       console.error("Could not fetch updated comments");
//     }
//   };

//   useEffect(() => {
//     if (!newsId) return;
//     const fetchArticle = async () => {
//       try {
//         setLoading(true);
//         const res = await getNewsById(newsId);
//         if (res.success) {
//           setArticle(res.data);
//           setLikeCount(res.data.likesCount || 0);
//           setCommentCount(res.data.commentsCount || 0);
//           setComments(res.data.comments || []);
//           // ✅ Backend se pata chalega ki like kiya hua hai ya nahi
//           setIsLiked(res.data.isLikedByCurrentUser || false);
//         } else {
//           throw new Error(res.message || "Failed to fetch article");
//         }
//       } catch (err) {
//         setError(err.message || "A network error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [newsId]);

//   // ✅ Bilkul ReelViewer jaisa like/unlike logic
//   const handleLikeClick = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in to like the post.");
//       return;
//     }

//     const originalIsLiked = isLiked;
//     const originalLikeCount = likeCount;

//     // UI ko turant update karo (Optimistic Update)
//     setIsLiked(!isLiked);
//     setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);

//     try {
//       // Background mein API call bhejo
//       await addLikeToNews(newsId);
//     } catch (error) {
//       // Fail hone par UI ko wapas purana kar do
//       alert("An error occurred. Please try again.");
//       setIsLiked(originalIsLiked);
//       setLikeCount(originalLikeCount);
//     }
//   };

//   // ✅ Bilkul CommentOffcanvas jaisa comment logic
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in to comment.");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await addCommentToNews(newsId, { text: newComment });
//       setNewComment("");
//       fetchComments(); // Naya comment post hone ke baad list ko refresh karo
//     } catch (error) {
//       alert("Could not add comment. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleShareClick = async () => {
//     if (navigator.share && article) {
//       try {
//         await navigator.share({
//           title: article.title,
//           text: "Check out this interesting news!",
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       alert("Sharing is not supported on your browser.");
//     }
//   };

//   if (loading) {
//     return <div className="container text-center mt-5"><h4>Loading Article...</h4></div>;
//   }

//   if (error) {
//     return <div className="container text-center mt-5"><h2>Error: Could not load the article.</h2><p className="text-danger">{error}</p><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
//   }

//   if (!article) {
//     return <div className="container text-center mt-5"><h4>Article data not found.</h4><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
//   }

//   return (
//     <div className="bg-white p-3 shadow-sm" style={{ border: "1px solid #eee" }}>
//       <MediaRenderer mediaItem={article.media?.[0]} />
//       <h1 className="fw-bold" style={{ fontSize: "1.8rem" }}>{article.title}</h1>
//       <p className="text-muted border-bottom pb-2 mb-3">
//         By {article.createdBy?.name || "Express Media Service"} | Published:{" "}
//         {new Date(article.publishedAt).toLocaleDateString()}
//       </p>
//       <div className="article-content" style={{ fontSize: "1rem", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
//         {article.content}
//       </div>

//       <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top">
//         <div onClick={handleLikeClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className={`fs-5 ${ isLiked ? "bi bi-hand-thumbs-up-fill text-primary" : "bi bi-hand-thumbs-up" }`}></i>
//           <span>{likeCount}</span>
//         </div>
//         <div onClick={() => setShowComments(!showComments)} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className="bi bi-chat-dots fs-5"></i>
//           <span>{commentCount}</span>
//         </div>
//         <div onClick={handleShareClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className="bi bi-share fs-5"></i>
//         </div>
//       </div>

//       {showComments && (
//         <div className="mt-4 border-top pt-3">
//           <h4 className="mb-3">Comments ({commentCount})</h4>
//           <form onSubmit={handleCommentSubmit} className="d-flex gap-2 mb-4">
//             <input type="text" className="form-control" placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} disabled={isSubmitting} />
//             <button type="submit" className="btn btn-primary" disabled={isSubmitting || !newComment.trim()}>{isSubmitting ? "..." : "Post"}</button>
//           </form>
//           <div className="comments-list">
//             {comments.length > 0 ? (
//               comments.map((comment) => (
//                 <div key={comment._id} className="border-bottom pb-2 mb-2">
//                   <strong>{comment.user?.name || "Anonymous"}</strong>
//                   <p className="mb-0">{comment.text}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No comments yet. Be the first to comment!</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsDetailPage;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   getNewsById,
//   addLikeToNews,
//   addCommentToNews,
// } from "../../Services/authApi";
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Media (Image/Video) ko render karne ke liye component
// const MediaRenderer = ({ mediaItem }) => {
//   if (!mediaItem) return null;

//   switch (mediaItem.type) {
//     case "video":
//       return (
//         <video src={mediaItem.url} controls className="img-fluid w-100 rounded mb-3" style={{ maxHeight: "500px", backgroundColor: "#000" }}>
//           Your browser does not support the video tag.
//         </video>
//       );
//     case "image":
//     default:
//       return (
//         <img src={mediaItem.url} alt={mediaItem.caption || "News Media"} className="img-fluid w-100 rounded mb-3" />
//       );
//   }
// };

// // ✅ NAYA COMPONENT: Profile Image ya Naam ka Pehla Letter Dikhane ke liye
// const UserAvatar = ({ user }) => {
//   const name = user?.name || "Anonymous";
//   const profileImage = user?.profileImage;

//   // Har naam ke liye ek alag, consistent color generate karne ka function
//   const stringToColor = (str) => {
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//       hash = str.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     let color = '#';
//     for (let i = 0; i < 3; i++) {
//       const value = (hash >> (i * 8)) & 0xFF;
//       color += ('00' + value.toString(16)).substr(-2);
//     }
//     return color;
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     marginRight: '10px',
//     objectFit: 'cover',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '1.2rem',
//     backgroundColor: stringToColor(name),
//   };

//   if (profileImage) {
//     return <img src={profileImage} alt={name} style={avatarStyle} />;
//   } else {
//     const initial = name.charAt(0).toUpperCase();
//     return (
//       <div style={avatarStyle}>
//         {initial}
//       </div>
//     );
//   }
// };


// const NewsDetailPage = () => {
//   const { newsId } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [likeCount, setLikeCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [commentCount, setCommentCount] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (!newsId) return;
//     const fetchArticle = async () => {
//       try {
//         setLoading(true);
//         const res = await getNewsById(newsId);
//         if (res.success) {
//           setArticle(res.data);
//           setLikeCount(res.data.likesCount || 0);
//           setCommentCount(res.data.commentsCount || 0);
//           setComments(res.data.comments || []);
//           setIsLiked(res.data.isLikedByCurrentUser || false);
//         } else {
//           throw new Error(res.message || "Failed to fetch article");
//         }
//       } catch (err) {
//         setError(err.message || "A network error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [newsId]);

//   const handleLikeClick = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in to like the post.");
//       return;
//     }

//     const originalIsLiked = isLiked;
//     const originalLikeCount = likeCount;

//     setIsLiked(!isLiked);
//     setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);

//     try {
//       await addLikeToNews(newsId);
//     } catch (error) {
//       alert(error.message || "Could not like the post. Please try again.");
//       setIsLiked(originalIsLiked);
//       setLikeCount(originalLikeCount);
//     }
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in to comment.");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const res = await addCommentToNews(newsId, { text: newComment });

//       if (res.success && res.comment) {
//         setComments((prevComments) => [res.comment, ...prevComments]);
//         setCommentCount(res.commentsCount);
//         setNewComment("");
//       } else {
//         throw new Error(res.message || "Failed to add comment.");
//       }
//     } catch (error) {
//       alert(error.message || "Could not add comment. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleShareClick = async () => {
//     if (navigator.share && article) {
//       try {
//         await navigator.share({
//           title: article.title,
//           text: "Check out this interesting news!",
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       alert("Sharing is not supported on your browser.");
//     }
//   };

//   if (loading) {
//     return <div className="container text-center mt-5"><h4>Loading Article...</h4></div>;
//   }

//   if (error) {
//     return <div className="container text-center mt-5"><h2>Error: Could not load the article.</h2><p className="text-danger">{error}</p><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
//   }

//   if (!article) {
//     return <div className="container text-center mt-5"><h4>Article not found.</h4><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
//   }

//   return (
//     <div className="bg-white p-3 shadow-sm" style={{ border: "1px solid #eee" }}>
//       <MediaRenderer mediaItem={article.media?.[0]} />
//       <h1 className="fw-bold" style={{ fontSize: "1.8rem" }}>{article.title}</h1>
//       <p className="text-muted border-bottom pb-2 mb-3">
//         By {article.createdBy?.name || "Express Media Service"} | Published:{" "}
//         {new Date(article.publishedAt).toLocaleDateString()}
//       </p>
//       <div className="article-content" style={{ fontSize: "1rem", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
//         {article.content}
//       </div>

//       <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top">
//         <div onClick={handleLikeClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className={`fs-5 ${ isLiked ? "bi bi-hand-thumbs-up-fill text-primary" : "bi bi-hand-thumbs-up" }`}></i>
//           <span>{likeCount}</span>
//         </div>
//         <div onClick={() => setShowComments(!showComments)} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className="bi bi-chat-dots fs-5"></i>
//           <span>{commentCount}</span>
//         </div>
//         <div onClick={handleShareClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
//           <i className="bi bi-share fs-5"></i>
//         </div>
//       </div>

//       {showComments && (
//         <div className="mt-4 border-top pt-3">
//           <h4 className="mb-3">Comments ({commentCount})</h4>
//           <form onSubmit={handleCommentSubmit} className="d-flex gap-2 mb-4">
//             <input type="text" className="form-control" placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} disabled={isSubmitting} />
//             <button type="submit" className="btn btn-primary" disabled={isSubmitting || !newComment.trim()}>{isSubmitting ? "..." : "Post"}</button>
//           </form>
//           <div className="comments-list">
//             {comments.length > 0 ? (
//               comments.map((comment) => (
//                 <div key={comment._id} className="border-bottom pb-2 mb-2">
//                    <div className="d-flex align-items-center mb-1">
//                     {/* ✅ YAHAN IMG TAG KI JAGAH NAYA COMPONENT USE KIYA HAI */}
//                     <UserAvatar user={comment.user} />
//                     <strong>{comment.user?.name || "Anonymous"}</strong>
//                   </div>
//                   <p className="mb-0" style={{ paddingLeft: '50px' }}>{comment.text}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No comments yet. Be the first to comment!</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsDetailPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getNewsById,
  addLikeToNews,
  addCommentToNews,
} from "../../Services/authApi";
import "bootstrap-icons/font/bootstrap-icons.css";

// Helper Component 1: Renders video or image based on media type
const MediaRenderer = ({ mediaItem }) => {
  if (!mediaItem) return null;

  switch (mediaItem.type) {
    case "video":
      return (
        <video src={mediaItem.url} controls className="img-fluid w-100 rounded mb-3" style={{ maxHeight: "500px", backgroundColor: "#000" }}>
          Your browser does not support the video tag.
        </video>
      );
    case "image":
    default:
      return (
        <img src={mediaItem.url} alt={mediaItem.caption || "News Media"} className="img-fluid w-100 rounded mb-3" />
      );
  }
};

// Helper Component 2: Renders user's profile image or a fallback initial
const UserAvatar = ({ user }) => {
  const name = user?.name || "Anonymous";
  const profileImage = user?.profileImage;

  // Function to generate a consistent color from a string (name)
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    backgroundColor: stringToColor(name),
  };

  if (profileImage) {
    return <img src={profileImage} alt={name} style={avatarStyle} />;
  } else {
    const initial = name.charAt(0).toUpperCase();
    return (
      <div style={avatarStyle}>
        {initial}
      </div>
    );
  }
};


const NewsDetailPage = () => {
  const { newsId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!newsId) return;
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const res = await getNewsById(newsId);
        if (res.success) {
          setArticle(res.data);
          setLikeCount(res.data.likesCount || 0);
          setCommentCount(res.data.commentsCount || 0);
          setComments(res.data.comments || []);
          setIsLiked(res.data.isLikedByCurrentUser || false);
        } else {
          throw new Error(res.message || "Failed to fetch article");
        }
      } catch (err) {
        setError(err.message || "A network error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [newsId]);

  const handleLikeClick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to like the post.");
      return;
    }

    const originalIsLiked = isLiked;
    const originalLikeCount = likeCount;

    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);

    try {
      await addLikeToNews(newsId);
    } catch (error) {
      alert(error.message || "Could not like the post. Please try again.");
      setIsLiked(originalIsLiked);
      setLikeCount(originalLikeCount);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to comment.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await addCommentToNews(newsId, { text: newComment });

      if (res.success && res.comment) {
        setComments((prevComments) => [res.comment, ...prevComments]);
        setCommentCount(res.commentsCount);
        setNewComment("");
      } else {
        throw new Error(res.message || "Failed to add comment.");
      }
    } catch (error) {
      alert(error.message || "Could not add comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareClick = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: "Check out this interesting news!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on your browser.");
    }
  };

  if (loading) {
    return <div className="container text-center mt-5"><h4>Loading Article...</h4></div>;
  }

  if (error) {
    return <div className="container text-center mt-5"><h2>Error: Could not load the article.</h2><p className="text-danger">{error}</p><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
  }

  if (!article) {
    return <div className="container text-center mt-5"><h4>Article not found.</h4><Link to="/" className="btn btn-secondary">Back to Home</Link></div>;
  }

  return (
    <div className="bg-white p-3 shadow-sm" style={{ border: "1px solid #eee" }}>
      <MediaRenderer mediaItem={article.media?.[0]} />
      <h1 className="fw-bold" style={{ fontSize: "1.8rem" }}>{article.title}</h1>
      <p className="text-muted border-bottom pb-2 mb-3">
        By {article.createdBy?.name || "Express Media Service"} | Published:{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <div className="article-content" style={{ fontSize: "1rem", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
        {article.content}
      </div>

      <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top">
        <div onClick={handleLikeClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
          <i className={`fs-5 ${ isLiked ? "bi bi-hand-thumbs-up-fill text-primary" : "bi bi-hand-thumbs-up" }`}></i>
          <span>{likeCount}</span>
        </div>
        <div onClick={() => setShowComments(!showComments)} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
          <i className="bi bi-chat-dots fs-5"></i>
          <span>{commentCount}</span>
        </div>
        <div onClick={handleShareClick} className="d-flex align-items-center gap-2 text-muted" style={{ cursor: "pointer" }}>
          <i className="bi bi-share fs-5"></i>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 border-top pt-3">
          <h4 className="mb-3">Comments ({commentCount})</h4>
          <form onSubmit={handleCommentSubmit} className="d-flex gap-2 mb-4">
            <input type="text" className="form-control" placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} disabled={isSubmitting} />
            <button type="submit" className="btn btn-primary" disabled={isSubmitting || !newComment.trim()}>{isSubmitting ? "..." : "Post"}</button>
          </form>
          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment._id} className="border-bottom pb-2 mb-2">
                   <div className="d-flex align-items-center mb-1">
                    <UserAvatar user={comment.user} />
                    <strong>{comment.user?.name || "Anonymous"}</strong>
                  </div>
                  <p className="mb-0" style={{ paddingLeft: '50px' }}>{comment.text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;