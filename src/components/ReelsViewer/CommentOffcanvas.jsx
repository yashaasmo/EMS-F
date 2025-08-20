// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { Offcanvas, Form, Button, ListGroup, Image } from 'react-bootstrap';
// // // import { addCommentToShort } from '../../Services/authApi';

// // // const CommentOffcanvas = ({ show, onHide, short, onCommentPosted }) => {
// // //     const [commentText, setCommentText] = useState('');
// // //     const [isPosting, setIsPosting] = useState(false);
// // //     const commentsEndRef = useRef(null);
// // //     const isLoggedIn = !!localStorage.getItem('token');

// // //     useEffect(() => {
// // //         if (show) {
// // //             setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
// // //         }
// // //     }, [show, short?.comments]);

// // //     const handlePostComment = async (e) => {
// // //         e.preventDefault();
// // //         if (!commentText.trim() || !isLoggedIn) return;
// // //         setIsPosting(true);
// // //         try {
// // //             await addCommentToShort(short._id, { text: commentText });
// // //             setCommentText('');
// // //             onCommentPosted();
// // //         } catch (err) {
// // //             alert('कमेंट भेजने में समस्या हुई।');
// // //         } finally {
// // //             setIsPosting(false);
// // //         }
// // //     };

// // //     return (
// // //         <Offcanvas
// // //             show={show}
// // //             onHide={onHide}
// // //             placement="bottom"
// // //             className="bg-dark text-white mx-auto"
// // //             style={{
// // //                 height: 'auto',
// // //                 minHeight: '40vh',
// // //                 maxHeight: '60vh',
// // //                 borderTopLeftRadius: '20px',
// // //                 borderTopRightRadius: '20px',
// // //                 maxWidth: '420px',
// // //                 width: '100%',
// // //                 border: '1px solid #444',
// // //                 zIndex: 100000 // Ensure it's above everything
// // //             }}
// // //         >
// // //             <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
// // //                 <Offcanvas.Title className="w-100 text-center fw-bold small">
// // //                     Comments ({short?.comments?.length ?? 0})
// // //                 </Offcanvas.Title>
// // //             </Offcanvas.Header>

// // //             <Offcanvas.Body className="d-flex flex-column p-0">
// // //                 <div className="flex-grow-1 overflow-auto px-3">
// // //                     <ListGroup variant="flush">
// // //                         {short?.comments && short.comments.length > 0 ? (
// // //                             short.comments.map((comment) => (
// // //                                 <ListGroup.Item key={comment._id} className="bg-dark text-white border-0 d-flex align-items-start py-2">
// // //                                     <Image src={comment.user?.profileImage || `https://ui-avatars.com/api/?name=${comment.user?.name?.charAt(0) || 'A'}&background=random&color=fff`} roundedCircle width="30" height="30" className="me-3" alt={comment.user?.name} />
// // //                                     <div className="flex-grow-1">
// // //                                         <p className="mb-1 small">
// // //                                             <strong className="me-2">{comment.user?.name ?? 'Anonymous'}</strong>
// // //                                             <span style={{ opacity: 0.9, wordBreak: 'break-word' }}>{comment.text}</span>
// // //                                         </p>
// // //                                     </div>
// // //                                 </ListGroup.Item>
// // //                             ))
// // //                         ) : (
// // //                             <div className="d-flex justify-content-center align-items-center py-5">
// // //                                 <p className="text-muted small">No comments yet.</p>
// // //                             </div>
// // //                         )}
// // //                         <div ref={commentsEndRef} />
// // //                     </ListGroup>
// // //                 </div>

// // //                 {isLoggedIn && (
// // //                     <div className="mt-auto p-3 border-top border-secondary bg-dark">
// // //                         <Form onSubmit={handlePostComment}>
// // //                             <Form.Group className="d-flex align-items-center">
// // //                                 <Form.Control
// // //                                     type="text"
// // //                                     placeholder="Add a comment..."
// // //                                     value={commentText}
// // //                                     // *** THIS IS THE FIX ***
// // //                                     onChange={(e) => setCommentText(e.target.value)}
// // //                                     disabled={isPosting}
// // //                                     className="form-control-sm bg-secondary text-white border-dark rounded-pill px-3"
// // //                                 />
// // //                                 <Button
// // //                                     variant="link"
// // //                                     type="submit"
// // //                                     className="text-primary fw-bold ps-3"
// // //                                     disabled={isPosting || !commentText.trim()}
// // //                                 >
// // //                                     {isPosting ? '...' : 'Post'}
// // //                                 </Button>
// // //                             </Form.Group>
// // //                         </Form>
// // //                     </div>
// // //                 )}
// // //             </Offcanvas.Body>
// // //         </Offcanvas>
// // //     );
// // // };

// // // export default CommentOffcanvas;



// // // src/components/ReelsViewer/CommentOffcanvas.jsx

// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { Offcanvas, Form, Button, ListGroup, Image, InputGroup } from 'react-bootstrap';
// // // import { SendFill } from 'react-bootstrap-icons';

// // // // =================================================================
// // // // UserAvatar Component
// // // // Yeh component check karega ki user ki image hai ya nahi.
// // // // =================================================================
// // // const UserAvatar = ({ user, size = 32 }) => {
// // //     if (!user) return null; // Agar user data nahi hai to kuch na dikhayein

// // //     // Agar user ki profile image hai, to use dikhayein
// // //     if (user.profileImage) {
// // //         return (
// // //             <Image
// // //                 src={user.profileImage}
// // //                 roundedCircle
// // //                 width={size}
// // //                 height={size}
// // //                 alt={user.name}
// // //                 style={{ objectFit: 'cover' }}
// // //             />
// // //         );
// // //     } else {
// // //         // Agar image nahi hai, to naam ka pehla akshar dikhayein
// // //         const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';
// // //         return (
// // //             <div
// // //                 className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
// // //                 style={{
// // //                     width: size,
// // //                     height: size,
// // //                     backgroundColor: '#dce8a0',
// // //                     color: '#333',
// // //                     fontSize: size / 2,
// // //                 }}
// // //             >
// // //                 {initial}
// // //             </div>
// // //         );
// // //     }
// // // };


// // // // =================================================================
// // // // Main CommentOffcanvas Component
// // // // =================================================================
// // // const CommentOffcanvas = ({ show, onHide, short, onCommentPosted, isPosting }) => {
// // //     const [commentText, setCommentText] = useState('');
// // //     const commentsEndRef = useRef(null);
// // //     const isLoggedIn = !!localStorage.getItem('token');

// // //     useEffect(() => {
// // //         // Naya comment aane par scroll karein
// // //         if (show) {
// // //             setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
// // //         }
// // //     }, [show, short?.comments]);

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         if (!commentText.trim()) return;
        
// // //         // Sirf likha hua text parent component (ReelViewer) ko bhejein
// // //         onCommentPosted(commentText);
        
// // //         // Text field ko khali kar dein
// // //         setCommentText('');
// // //     };

// // //     return (
// // //         <Offcanvas
// // //             show={show}
// // //             onHide={onHide}
// // //             placement="bottom"
// // //             className="bg-dark text-white mx-auto"
// // //             style={{
// // //                 height: 'auto', minHeight: '40vh', maxHeight: '60vh',
// // //                 borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
// // //                 maxWidth: '420px', width: '100%', zIndex: 100000
// // //             }}
// // //         >
// // //             <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
// // //                 <Offcanvas.Title className="w-100 text-center fw-bold fs-6">
// // //                     Comments ({short?.comments?.length ?? 0})
// // //                 </Offcanvas.Title>
// // //             </Offcanvas.Header>

// // //             <Offcanvas.Body className="d-flex flex-column p-0">
// // //                 <div className="flex-grow-1 overflow-auto px-3 pt-2">
// // //                     <ListGroup variant="flush">
// // //                         {short?.comments && short.comments.length > 0 ? (
// // //                             short.comments.map((comment) => (
// // //                                 <ListGroup.Item key={comment._id} className="bg-dark text-white border-0 d-flex align-items-start py-2">
// // //                                     <UserAvatar user={comment.user} size={32} />
// // //                                     <div className="flex-grow-1 ms-3">
// // //                                         <strong className="small d-block text-light">{comment.user?.name ?? 'Anonymous'}</strong>
// // //                                         <span style={{ opacity: 0.9, wordBreak: 'break-word', fontSize: '0.9rem' }}>{comment.text}</span>
// // //                                     </div>
// // //                                 </ListGroup.Item>
// // //                             ))
// // //                         ) : (
// // //                             <div className="d-flex justify-content-center align-items-center h-100">
// // //                                 <p className="text-muted small">Be the first to comment.</p>
// // //                             </div>
// // //                         )}
// // //                         <div ref={commentsEndRef} />
// // //                     </ListGroup>
// // //                 </div>

// // //                 {isLoggedIn && (
// // //                     <div className="mt-auto p-2 border-top border-secondary bg-dark">
// // //                         <Form onSubmit={handleSubmit}>
// // //                             <InputGroup>
// // //                                 <Form.Control
// // //                                     type="text"
// // //                                     placeholder="Add a comment..."
// // //                                     value={commentText}
// // //                                     onChange={(e) => setCommentText(e.target.value)}
// // //                                     disabled={isPosting} // isPosting prop parent se aayega
// // //                                     className="bg-secondary text-white border-0 rounded-pill px-3"
// // //                                     style={{ boxShadow: 'none' }}
// // //                                 />
// // //                                 <Button
// // //                                     variant="link"
// // //                                     type="submit"
// // //                                     className="d-flex align-items-center"
// // //                                     disabled={isPosting || !commentText.trim()}
// // //                                 >
// // //                                     {isPosting ? <span className="text-white">...</span> : <SendFill className="text-primary" size={20} />}
// // //                                 </Button>
// // //                             </InputGroup>
// // //                         </Form>
// // //                     </div>
// // //                 )}
// // //             </Offcanvas.Body>
// // //         </Offcanvas>
// // //     );
// // // };

// // // export default CommentOffcanvas;



// // import React, { useState, useEffect, useRef } from 'react';
// // import { Offcanvas, Form, Button, ListGroup, Image, InputGroup } from 'react-bootstrap';
// // import { SendFill } from 'react-bootstrap-icons';

// // // Helper Component: User ka avatar ya initial dikhane ke liye
// // const UserAvatar = ({ user, size = 32 }) => {
// //     if (!user) return null;

// //     if (user.profileImage) {
// //         return (
// //             <Image
// //                 src={user.profileImage}
// //                 roundedCircle
// //                 width={size}
// //                 height={size}
// //                 alt={user.name}
// //                 style={{ objectFit: 'cover' }}
// //             />
// //         );
// //     } else {
// //         const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';
// //         return (
// //             <div
// //                 className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
// //                 style={{
// //                     width: size,
// //                     height: size,
// //                     backgroundColor: '#dce8a0',
// //                     color: '#333',
// //                     fontSize: size / 2,
// //                 }}
// //             >
// //                 {initial}
// //             </div>
// //         );
// //     }
// // };

// // // Main Comment Offcanvas Component
// // const CommentOffcanvas = ({ show, onHide, short, onCommentPosted, isPosting }) => {
// //     const [commentText, setCommentText] = useState('');
// //     const commentsEndRef = useRef(null);
// //     const isLoggedIn = !!localStorage.getItem('token');

// //     // Naya comment aane par list ko neeche scroll karne ke liye
// //     useEffect(() => {
// //         if (show) {
// //             setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
// //         }
// //     }, [show, short?.comments]);

// //     // Form submit hone par
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (!commentText.trim()) return;
        
// //         // Comment text ko parent component (ReelViewer) ko bhejein
// //         onCommentPosted(commentText);
        
// //         // Text field ko khali kar dein
// //         setCommentText('');
// //     };

// //     return (
// //         <Offcanvas
// //             show={show}
// //             onHide={onHide}
// //             placement="bottom"
// //             className="bg-dark text-white mx-auto"
// //             style={{
// //                 height: 'auto', minHeight: '40vh', maxHeight: '60vh',
// //                 borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
// //                 maxWidth: '420px', width: '100%', zIndex: 100000
// //             }}
// //         >
// //             <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
// //                 <Offcanvas.Title className="w-100 text-center fw-bold fs-6">
// //                     Comments ({short?.comments?.length ?? 0})
// //                 </Offcanvas.Title>
// //             </Offcanvas.Header>

// //             <Offcanvas.Body className="d-flex flex-column p-0">
// //                 {/* Comments ki list */}
// //                 <div className="flex-grow-1 overflow-auto px-3 pt-2">
// //                     <ListGroup variant="flush">
// //                         {short?.comments && short.comments.length > 0 ? (
// //                             short.comments.map((comment) => (
// //                                 <ListGroup.Item key={comment._id} className="bg-dark text-white border-0 d-flex align-items-start py-2">
// //                                     <UserAvatar user={comment.user} size={32} />
// //                                     <div className="flex-grow-1 ms-3">
// //                                         <strong className="small d-block text-light">{comment.user?.name ?? 'Anonymous'}</strong>
// //                                         <span style={{ opacity: 0.9, wordBreak: 'break-word', fontSize: '0.9rem' }}>{comment.text}</span>
// //                                     </div>
// //                                 </ListGroup.Item>
// //                             ))
// //                         ) : (
// //                             <div className="d-flex justify-content-center align-items-center h-100">
// //                                 <p className="text-muted small">Be the first to comment.</p>
// //                             </div>
// //                         )}
// //                         <div ref={commentsEndRef} />
// //                     </ListGroup>
// //                 </div>

// //                 {/* Comment likhne ka form (sirf logged-in user ke liye) */}
// //                 {isLoggedIn && (
// //                     <div className="mt-auto p-2 border-top border-secondary bg-dark">
// //                         <Form onSubmit={handleSubmit}>
// //                             <InputGroup>
// //                                 <Form.Control
// //                                     type="text"
// //                                     placeholder="Add a comment..."
// //                                     value={commentText}
// //                                     onChange={(e) => setCommentText(e.target.value)}
// //                                     disabled={isPosting}
// //                                     className="bg-secondary text-white border-0 rounded-pill px-3"
// //                                     style={{ boxShadow: 'none' }}
// //                                     autoFocus
// //                                 />
// //                                 <Button
// //                                     variant="link"
// //                                     type="submit"
// //                                     className="d-flex align-items-center"
// //                                     disabled={isPosting || !commentText.trim()}
// //                                 >
// //                                     {isPosting ? <span className="text-white">...</span> : <SendFill className="text-primary" size={20} />}
// //                                 </Button>
// //                             </InputGroup>
// //                         </Form>
// //                     </div>
// //                 )}
// //             </Offcanvas.Body>
// //         </Offcanvas>
// //     );
// // };

// // export default CommentOffcanvas;


// //  update 8/6/2025

// import React, { useState, useEffect, useRef } from 'react';
// import { Offcanvas, Form, Button, ListGroup, Image } from 'react-bootstrap';
// import { addCommentToShort } from '../../Services/authApi';

// const CommentOffcanvas = ({ show, onHide, short, onCommentPosted }) => {
//     const [commentText, setCommentText] = useState('');
//     const [isPosting, setIsPosting] = useState(false);
//     const commentsEndRef = useRef(null);
//     const isLoggedIn = !!localStorage.getItem('token');

//     useEffect(() => {
//         if (show) {
//             setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
//         }
//     }, [show, short?.comments]);

//     const handlePostComment = async (e) => {
//         e.preventDefault();
//         if (!commentText.trim() || !isLoggedIn) return;
//         setIsPosting(true);
//         try {
//             await addCommentToShort(short._id, { text: commentText });
//             setCommentText('');
//             onCommentPosted();
//         } catch (err) {
//             alert('कमेंट भेजने में समस्या हुई।');
//         } finally {
//             setIsPosting(false);
//         }
//     };

//     return (
//         <Offcanvas
//             show={show}
//             onHide={onHide}
//             placement="bottom"
//             className="bg-dark text-white mx-auto"
//             style={{
//                 height: 'auto',
//                 minHeight: '40vh',
//                 maxHeight: '60vh',
//                 borderTopLeftRadius: '20px',
//                 borderTopRightRadius: '20px',
//                 maxWidth: '420px',
//                 width: '100%',
//                 border: '1px solid #444',
//                 zIndex: 100000 // Ensure it's above everything
//             }}
//         >
//             <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
//                 <Offcanvas.Title className="w-100 text-center fw-bold small">
//                     Comments ({short?.comments?.length ?? 0})
//                 </Offcanvas.Title>
//             </Offcanvas.Header>

//             <Offcanvas.Body className="d-flex flex-column p-0">
//                 <div className="flex-grow-1 overflow-auto px-3">
//                     <ListGroup variant="flush">
//                         {short?.comments && short.comments.length > 0 ? (
//                             short.comments.map((comment) => (
//                                 <ListGroup.Item key={comment._id} className="bg-dark text-white border-0 d-flex align-items-start py-2">
//                                     <Image src={comment.user?.profileImage || `https://ui-avatars.com/api/?name=${comment.user?.name?.charAt(0) || 'A'}&background=random&color=fff`} roundedCircle width="30" height="30" className="me-3" alt={comment.user?.name} />
//                                     <div className="flex-grow-1">
//                                         <p className="mb-1 small">
//                                             <strong className="me-2">{comment.user?.name ?? 'Anonymous'}</strong>
//                                             <span style={{ opacity: 0.9, wordBreak: 'break-word' }}>{comment.text}</span>
//                                         </p>
//                                     </div>
//                                 </ListGroup.Item>
//                             ))
//                         ) : (
//                             <div className="d-flex justify-content-center align-items-center py-5">
//                                 <p className="text-muted small">No comments yet.</p>
//                             </div>
//                         )}
//                         <div ref={commentsEndRef} />
//                     </ListGroup>
//                 </div>

//                 {isLoggedIn && (
//                     <div className="mt-auto p-3 border-top border-secondary bg-dark">
//                         <Form onSubmit={handlePostComment}>
//                             <Form.Group className="d-flex align-items-center">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Add a comment..."
//                                     value={commentText}
//                                     // *** THIS IS THE FIX ***
//                                     onChange={(e) => setCommentText(e.target.value)}
//                                     disabled={isPosting}
//                                     className="form-control-sm bg-secondary text-white border-dark rounded-pill px-3"
//                                 />
//                                 <Button
//                                     variant="link"
//                                     type="submit"
//                                     className="text-primary fw-bold ps-3"
//                                     disabled={isPosting || !commentText.trim()}
//                                 >
//                                     {isPosting ? '...' : 'Post'}
//                                 </Button>
//                             </Form.Group>
//                         </Form>
//                     </div>
//                 )}
//             </Offcanvas.Body>
//         </Offcanvas>
//     );
// };

// export default CommentOffcanvas;


/// compte run  8/7/25/time 12:10

// import React, { useState, useEffect, useRef } from 'react';
// import { Offcanvas, Form, Button, ListGroup, Image } from 'react-bootstrap';
// import { addCommentToShort, getCommentsForShort } from '../../Services/authApi';

// const CommentOffcanvas = ({ show, onHide, short }) => {
//     const [commentText, setCommentText] = useState('');
//     const [isPosting, setIsPosting] = useState(false);
//     const [comments, setComments] = useState([]);
//     const commentsEndRef = useRef(null);
//     const isLoggedIn = !!localStorage.getItem('token');

//     // ⏬ Fetch comments on open
//     useEffect(() => {
//         if (show && short?._id) {
//             fetchComments();
//         }
//     }, [show, short?._id]);

//     const fetchComments = async () => {
//         try {
//             const res = await getCommentsForShort(short._id);
//             setComments(res.data || []);
//             // Auto scroll to latest
//             setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
//         } catch (err) {
//             console.error("Error loading comments");
//         }
//     };

//     const handlePostComment = async (e) => {
//         e.preventDefault();
//         if (!commentText.trim() || !isLoggedIn) return;

//         setIsPosting(true);
//         try {
//             await addCommentToShort(short._id, { text: commentText });
//             setCommentText('');
//             fetchComments(); // ✅ Just fetch this short's comments again
//         } catch (err) {
//             alert('कमेंट भेजने में समस्या हुई।');
//         } finally {
//             setIsPosting(false);
//         }
//     };

//     return (
//         <Offcanvas
//             show={show}
//             onHide={onHide}
//             placement="bottom"
//             className="bg-dark text-white mx-auto"
//             style={{
//                 height: 'auto',
//                 minHeight: '40vh',
//                 maxHeight: '60vh',
//                 borderTopLeftRadius: '20px',
//                 borderTopRightRadius: '20px',
//                 maxWidth: '420px',
//                 width: '100%',
//                 border: '1px solid #444',
//                 zIndex: 100000
//             }}
//         >
//             <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
//                 <Offcanvas.Title className="w-100 text-center fw-bold small">
//                     Comments ({comments.length})
//                 </Offcanvas.Title>
//             </Offcanvas.Header>

//             <Offcanvas.Body className="d-flex flex-column p-0">
//                 <div className="flex-grow-1 overflow-auto px-3">
//                     <ListGroup variant="flush">
//                         {comments.length > 0 ? (
//                             comments.map((comment) => (
//                                 <ListGroup.Item key={comment._id} className="bg-dark text-white border-0 d-flex align-items-start py-2">
//                                     <Image
//                                         src={comment.user?.profileImage || `https://ui-avatars.com/api/?name=${comment.user?.name?.charAt(0) || 'A'}&background=random&color=fff`}
//                                         roundedCircle
//                                         width="30"
//                                         height="30"
//                                         className="me-3"
//                                         alt={comment.user?.name}
//                                     />
//                                     <div className="flex-grow-1">
//                                         <p className="mb-1 small">
//                                             <strong className="me-2">{comment.user?.name ?? 'Anonymous'}</strong>
//                                             <span style={{ opacity: 0.9, wordBreak: 'break-word' }}>{comment.text}</span>
//                                         </p>
//                                     </div>
//                                 </ListGroup.Item>
//                             ))
//                         ) : (
//                             <div className="d-flex justify-content-center align-items-center py-5">
//                                 <p className="text-muted small">No comments yet.</p>
//                             </div>
//                         )}
//                         <div ref={commentsEndRef} />
//                     </ListGroup>
//                 </div>

//                 {isLoggedIn && (
//                     <div className="mt-auto p-3 border-top border-secondary bg-dark">
//                         <Form onSubmit={handlePostComment}>
//                             <Form.Group className="d-flex align-items-center">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Add a comment..."
//                                     value={commentText}
//                                     onChange={(e) => setCommentText(e.target.value)}
//                                     disabled={isPosting}
//                                     className="form-control-sm bg-secondary text-white border-dark rounded-pill px-3"
//                                 />
//                                 <Button
//                                     variant="link"
//                                     type="submit"
//                                     className="text-primary fw-bold ps-3"
//                                     disabled={isPosting || !commentText.trim()}
//                                 >
//                                     {isPosting ? '...' : 'Post'}
//                                 </Button>
//                             </Form.Group>
//                         </Form>
//                     </div>
//                 )}
//             </Offcanvas.Body>
//         </Offcanvas>
//     );
// };

// export default CommentOffcanvas;


import React, { useState, useEffect, useRef } from 'react';
import { Offcanvas, Form, Button, ListGroup, Image } from 'react-bootstrap';
import { addCommentToShort, getCommentsForShort } from '../../Services/authApi';

import { AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';
const CommentOffcanvas = ({ show, onHide, short }) => {
    const [commentText, setCommentText] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [comments, setComments] = useState([]);
    const commentsEndRef = useRef(null);
    const isLoggedIn = !!localStorage.getItem('token');

    // ⏬ Fetch comments on open
    useEffect(() => {
        if (show && short?._id) {
            fetchComments();
        }
    }, [show, short?._id]);

    const fetchComments = async () => {
        try {
            const res = await getCommentsForShort(short._id);
            setComments(res.data || []);
            // Auto scroll to latest
            setTimeout(() => commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
        } catch (err) {
            console.error("Error loading comments");
        }
    };

    const handlePostComment = async (e) => {
        e.preventDefault();
        if (!commentText.trim() || !isLoggedIn) return;

        setIsPosting(true);
        try {
            await addCommentToShort(short._id, { text: commentText });
            setCommentText('');
            fetchComments(); // ✅ Just fetch this short's comments again
        } catch (err) {
            alert('कमेंट भेजने में समस्या हुई।');
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement="bottom"
            className="bg-dark text-white mx-auto"
            style={{
                height: 'auto',
                minHeight: '40vh',
                maxHeight: '60vh',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                maxWidth: '420px',
                width: '100%',
                border: '1px solid #444',
                zIndex: 100000,
            }}
        >
            <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary pb-2">
                <Offcanvas.Title className="w-100 text-center fw-bold small">
                    Comments ({comments.length})
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column p-0">
                <div className="flex-grow-1 overflow-auto px-3">
                    <ListGroup variant="flush">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <ListGroup.Item
                                    key={comment._id}
                                    className="bg-dark text-white border-0 d-flex align-items-start py-2"
                                >
                                    <Image
                                        src={
                                            comment.user?.profileImage ||
                                            `https://ui-avatars.com/api/?name=${comment.user?.name?.charAt(0) || 'A'}&background=random&color=fff`
                                        }
                                        roundedCircle
                                        width="30"
                                        height="30"
                                        className="me-3"
                                        alt={comment.user?.name}
                                    />
                                    <div className="flex-grow-1">
                                        <p className="mb-1 small">
                                            <strong className="me-2">{comment.user?.name ?? 'Anonymous'}</strong>
                                            <span style={{ opacity: 0.9, wordBreak: 'break-word' }}>{comment.text}</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                            ))
                        ) : (
                            <div className="d-flex justify-content-center align-items-center py-5">
                                <p className="text-muted small">No comments yet.</p>
                            </div>
                        )}
                        <div ref={commentsEndRef} />
                    </ListGroup>
                </div>

                {isLoggedIn && (
                    <div className="mt-auto px-3 py-2 border-top border-secondary bg-dark">
                        <Form onSubmit={handlePostComment}>
                            <div className="d-flex align-items-center gap-2">
                                {/* File Upload */}
                                {/* <label htmlFor="commentImageUpload" className="text-light mb-0" style={{ cursor: 'pointer' }}>
                                    <AiOutlinePaperClip size={20} />
                                    <input type="file" id="commentImageUpload" hidden />
                                </label> */}

                                {/* Comment Input */}
                              <Form.Control
    type="text"
    placeholder="Add a comment..."
    value={commentText}
    onChange={(e) => setCommentText(e.target.value)}
    disabled={isPosting}
    className="  rounded-pill px-3 py-1 form-control-sm flex-grow-1"
    style={{
        fontSize: '0.9rem',
        color: 'black',              // 👈 force text color
        backgroundColor: '#f8f8f8ff',     // 👈 make it darker (optional)
        borderColor: '#666',         // 👈 subtle border
    }}
/>

                                {/* Post Button */}
                                <Button
                                    variant="link"
                                    type="submit"
                                    className="text-primary p-0"
                                    disabled={isPosting || !commentText.trim()}
                                >
                                    <AiOutlineSend size={22} />
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CommentOffcanvas;
