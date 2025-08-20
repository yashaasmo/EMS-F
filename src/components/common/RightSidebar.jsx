



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Library Imports
// import { Card, Row, Col, Image, Dropdown, Spinner, Form, Button } from 'react-bootstrap';
// import { FaPlayCircle, FaArrowRight, FaPoll } from 'react-icons/fa';
// import { 
//     GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, 
//     GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces 
// } from 'react-icons/gi';

// // ✅ API functions are now imported for all sections
// import { 
//     getAllPolls, 
//     voteOnPoll,
//     getTrendingTopics, // Placeholder
//     getVideos,          // Placeholder
//     getHeadlines,       // Placeholder
//     getHoroscope        // Placeholder
// } from '../../Services/authApi';


// // ======================================================================================
// // All sections are defined as separate components *within* this file.
// // ======================================================================================

// // SECTION 1: SIDEBAR SECTION HEADER
// const SidebarSectionHeader = ({ title, linkText }) => (
//     <div 
//         className="d-flex justify-content-between align-items-center mb-2 pb-1"
//         style={{ borderBottom: '2px solid #dc3545' }}
//     >
//         <h6 className="fw-bold m-0">{title}</h6>
//         {linkText && (
//             <a href="#!" className="text-decoration-none fw-bold small" style={{ color: '#fd7e14' }}>
//                 {linkText} <FaArrowRight size={12} />
//             </a>
//         )}
//     </div>
// );

// // SECTION 2: TRENDING AND SCORE (NOW DYNAMIC)
// const TrendingAndScore = () => {
//     const [activeTab, setActiveTab] = useState('live');
//     const [trendingTopics, setTrendingTopics] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         getTrendingTopics()
//             .then(response => setTrendingTopics(response.data))
//             .catch(err => console.error("Failed to load trending topics", err))
//             .finally(() => setIsLoading(false));
//     }, []);

//     // NOTE: Live match data is still static here, can be made dynamic similarly
//     const liveMatchData = {
//         series: '2nd Test, South Africa tour of Zimbabwe, 2 Test Series, 2025',
//         date: 'Jul 06, 13:30 (IST)', status: 'Stumps',
//         teamA: { name: 'South Africa', flag: 'https://flagcdn.com/w80/za.png', score: '465/4', overs: '88.0 ov' },
//         teamB: { name: 'Zimbabwe', flag: 'https://flagcdn.com/w80/zw.png', score: '-To Play' },
//     };
  
//     return (
//       <>
//         <style>{`.trending-topic-btn:hover, .trending-topic-btn:focus { background-color: #dc3545 !important; color: white !important; border-color: #dc3545 !important; }`}</style>
//         <Card className="mb-3 border-0">
//           <Card.Header as="h6" className="fw-bold bg-white border-0 px-1">Trending Topics</Card.Header>
//           <Card.Body className="p-1">
//              {isLoading ? <Spinner animation="border" size="sm" /> : (
//                 <div className="d-flex flex-wrap gap-2">
//                 {trendingTopics.map((topic) => (
//                     <Button key={topic} variant="outline-secondary" size="sm" className="rounded px-3 trending-topic-btn">
//                     {topic}
//                     </Button>
//                 ))}
//                 </div>
//              )}
//           </Card.Body>
//         </Card>
        
//         <Card className="mb-4">
//             {/* Live score part remains same for now */}
//             <div className="d-flex justify-content-around bg-danger text-white p-2">
//                 <div onClick={() => setActiveTab('live')} className={`fw-bold py-1 px-2 ${activeTab === 'live' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>• Live</div>
//                 <div onClick={() => setActiveTab('upcoming')} className={`fw-bold text-uppercase py-1 px-2 ${activeTab === 'upcoming' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>Upcoming</div>
//                 <div onClick={() => setActiveTab('recent')} className={`fw-bold text-uppercase py-1 px-2 ${activeTab === 'recent' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>Recent</div>
//             </div>
//              <Card.Body className="p-3">
//             {activeTab === 'live' && (
//               <div className="text-center">
//                 <p className="text-muted small mb-1">{liveMatchData.series}</p>
//                 <p className="text-muted small mb-3"><span className="fw-bold">{liveMatchData.date}</span> | <span className="text-danger fw-bold">{liveMatchData.status}</span></p>
//                 <Row className="justify-content-center align-items-center">
//                     <Col><h6 className="fw-bold mb-2">{liveMatchData.teamA.name}</h6></Col>
//                     <Col xs="auto" style={{ width: '65px' }} />
//                     <Col><h6 className="fw-bold mb-2">{liveMatchData.teamB.name}</h6></Col>
//                 </Row>
//                 <Row className="justify-content-center align-items-center">
//                     <Col><Image src={liveMatchData.teamA.flag} roundedCircle width={50} height={50} className="border"/></Col>
//                     <Col xs="auto"><div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold p-2">VS</div></Col>
//                     <Col><Image src={liveMatchData.teamB.flag} roundedCircle width={50} height={50} className="border" /></Col>
//                 </Row>
//                 <Row className="justify-content-center align-items-start mt-1">
//                     <Col>
//                         <p className="fw-bold m-0">{liveMatchData.teamA.score}</p>
//                         <p className="text-muted small m-0">({liveMatchData.teamA.overs})</p>
//                     </Col>
//                     <Col xs="auto" style={{ width: '65px' }} />
//                     <Col>
//                         <p className="fw-bold m-0">{liveMatchData.teamB.score}</p>
//                         <p className="small m-0" style={{ visibility: 'hidden' }}>-</p> 
//                     </Col>
//                 </Row>
//                 <p className="small mb-0 mt-3 fw-bold">{liveMatchData.teamA.name} - {liveMatchData.teamA.score} ({liveMatchData.teamA.overs}) | <span className="text-danger">{liveMatchData.teamB.name} - {liveMatchData.teamB.score}</span></p>
//               </div>
//             )}
//             {activeTab !== 'live' && (<p className="text-center p-5">Match information for other tabs will be shown here.</p>)}
//           </Card.Body>
//         </Card>
//       </>
//     );
// };

// // SECTION 3: VIDEOS (NOW DYNAMIC)
// const VideosSection = () => {
//     const [videos, setVideos] = useState({ mainVideo: null, videoList: [] });
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         getVideos()
//             .then(response => setVideos(response.data))
//             .catch(err => console.error("Failed to load videos", err))
//             .finally(() => setIsLoading(false));
//     }, []);

//     const VideoCard = ({ image, title, isMain = false }) => ( <div className="position-relative"> <Image src={image} fluid style={{ width: '100%', height: isMain ? 'auto' : '110px', objectFit: isMain ? 'contain' : 'cover' }} /> {isMain && (<FaPlayCircle color="white" size={40} className="position-absolute top-50 start-50 translate-middle" style={{ opacity: 0.8 }} />)} <div className="position-absolute bottom-0 start-0 end-0 text-white p-2" style={{ backgroundColor: 'rgba(204, 0, 0, 0.9)', fontSize: isMain ? '0.9rem' : '0.75rem' }}><p className="fw-bold mb-0">{title}</p></div> </div> );

//     if (isLoading) return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;

//     return ( 
//         <div className="mb-4">
//             <SidebarSectionHeader title="Videos" linkText="See More" /> 
//             {videos.mainVideo && <div className="mb-2"><VideoCard image={videos.mainVideo.image} title={videos.mainVideo.title} isMain={true} /></div>}
//             <Row>
//                 {videos.videoList.map((video, index) => (
//                     <Col key={index} xs={6} className="mb-2"><VideoCard image={video.image} title={video.title} /></Col>
//                 ))}
//             </Row> 
//         </div> 
//     );
// };

// // SECTION 4: HOROSCOPE (NOW DYNAMIC)
// const HoroscopeSection = () => {
//     const [selectedSign, setSelectedSign] = useState('Aries');
//     const [horoscope, setHoroscope] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
//     const signIcons = { Aries: <GiAries size={28} />, Taurus: <GiTaurus size={28} />, /* ... other icons */ };

//     useEffect(() => {
//         setIsLoading(true);
//         getHoroscope(selectedSign)
//             .then(response => setHoroscope(response.data))
//             .catch(err => console.error("Failed to load horoscope", err))
//             .finally(() => setIsLoading(false));
//     }, [selectedSign]);

//     const getIconWrapper = (icon) => (<div className="d-flex justify-content-center align-items-center rounded-circle me-3 flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: '#f0f2f5' }}>{icon}</div>);
    
//     return ( 
//         <div className="mb-4">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h5 className="fw-bold m-0">Today's Horoscope</h5> 
//                 <Dropdown onSelect={(eventKey) => setSelectedSign(eventKey)}>
//                     <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark text-decoration-none fw-bold p-0">{selectedSign}</Dropdown.Toggle> 
//                     <Dropdown.Menu>{signs.map(sign => (<Dropdown.Item key={sign} eventKey={sign}>{sign}</Dropdown.Item>))}</Dropdown.Menu> 
//                 </Dropdown> 
//             </div> 
//             {isLoading ? <Spinner animation="border" size="sm" /> : horoscope && (
//                 <div className="d-flex align-items-start">
//                     {getIconWrapper(signIcons[horoscope.name])}
//                     <div>
//                         <h6 className="fw-bold">{horoscope.name}</h6>
//                         <p className="small text-muted">{horoscope.description}</p>
//                     </div>
//                 </div>
//             )}
//             <div className="text-end"><a href="#!" className="text-decoration-none fw-bold small" style={{ color: '#fd7e14' }}>Read More</a></div> 
//         </div> 
//     );
// };

// // SECTION 5: TOP HEADLINES (NOW DYNAMIC)
// const TopHeadlinesSection = () => {
//     const [headlines, setHeadlines] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         getHeadlines()
//             .then(response => setHeadlines(response.data))
//             .catch(err => console.error("Failed to load headlines", err))
//             .finally(() => setIsLoading(false));
//     }, []);

//     if (isLoading) return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;

//     return(
//         <div className="mb-4">
//             <h5 className="fw-bold mb-3">Top Headlines</h5> 
//             {headlines.map((item, index) => (
//                 <div key={index} className="mb-3">
//                     <p className="text-danger small fw-bold mb-2">{item.category}</p>
//                     <div className="d-flex align-items-center">
//                         <Image src={item.image} width={100} height={75} style={{objectFit: 'cover'}} className="me-3" />
//                         <p className="fw-bold m-0" style={{fontSize: '0.9rem', lineHeight: '1.4'}}>{item.text}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// // SECTION 6: POLL SECTION (ALREADY DYNAMIC)
// // ✅ =================================================================================
// // ✅ SECTION 6: POLL SECTION (IMPROVED WITH WHATSAPP-STYLE LOGIC)
// // ✅ =================================================================================
// // const PollSection = () => {
// //     const [poll, setPoll] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [isVoting, setIsVoting] = useState(false);
// //     const navigate = useNavigate();
// //     const currentUser = JSON.parse(localStorage.getItem('user'));

// //     useEffect(() => {
// //         const fetchPoll = async () => {
// //             try {
// //                 const response = await getAllPolls();
// //                 const firstActivePoll = response.data?.find(p => p.isActive);
// //                 setPoll(firstActivePoll);
// //             } catch (err) {
// //                 setError("Polls could not be loaded.");
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         };
// //         fetchPoll();
// //     }, []);

// //     const handleVote = async (optionIndex) => {
// //         if (isVoting) return;

// //         const userVote = poll.votes.find(v => v.user === currentUser?._id);
// //         if (userVote && userVote.optionIndex === optionIndex) {
// //             return; 
// //         }

// //         setIsVoting(true);
// //         const originalPoll = JSON.parse(JSON.stringify(poll));

// //         const pollToUpdate = { ...originalPoll, options: originalPoll.options.map(o => ({...o})), votes: originalPoll.votes.map(v => ({...v})) };
        
// //         if (userVote) {
// //             const prevIndex = userVote.optionIndex;
// //             if (typeof prevIndex === 'number' && pollToUpdate.options[prevIndex]) {
// //                 pollToUpdate.options[prevIndex].votes -= 1;
// //             }
// //             pollToUpdate.options[optionIndex].votes += 1;
            
// //             const voteToUpdateInArray = pollToUpdate.votes.find(v => v.user === currentUser?._id);
// //             voteToUpdateInArray.optionIndex = optionIndex;
// //         } else {
// //             pollToUpdate.options[optionIndex].votes += 1;
// //             pollToUpdate.totalVotes += 1;
// //             pollToUpdate.hasVoted = true;
// //             pollToUpdate.votes.push({ user: currentUser?._id, optionIndex });
// //         }
// //         setPoll(pollToUpdate);

// //         try {
// //             const response = await voteOnPoll(poll._id, { optionIndex });
// //             setPoll(response.data);
// //         } catch (err) {
// //             alert("There was a problem submitting your vote.");
// //             setPoll(originalPoll);
// //         } finally {
// //             setIsVoting(false);
// //         }
// //     };
    
// //     const handleViewVotes = () => {
// //         if(poll) navigate(`/poll-results/${poll._id}`);
// //     };

// //     if (isLoading) return <div className="d-flex justify-content-center my-4"><Spinner animation="border" variant="danger" /></div>;
// //     if (error || !poll) return <Card border="0" className="text-center p-4 my-4 shadow-sm"><Card.Text className="text-muted">{error || "No active poll available."}</Card.Text></Card>;

// //     const userVote = poll.votes.find(v => v.user === currentUser?._id);
// //     const userHasVoted = !!userVote;
// //     const votedOptionIndex = userHasVoted ? userVote.optionIndex : null;

// //     return (
// //         <Card border="0" className="my-4 px-2 shadow-sm">
// //             <Card.Body>
// //                 <div className="d-flex justify-content-between align-items-center">
// //                     <h5 className="fw-bold m-0">{poll.question}</h5>
// //                 </div>
// //                 <p className="text-muted small d-flex align-items-center gap-2 mb-3">
// //                     <FaPoll /> {userHasVoted ? "You can change your vote." : "Select an option to vote."}
// //                 </p>
                
// //                 <div className="mt-3">
// //                     {/* === YAHAN SE LOGIC SHURU HOTA HAI === */}
// //                     {userHasVoted ? (
// //                         // 1. AGAR USER NE VOTE KAR DIYA HAI (RESULTS VIEW)
// //                         <div>
// //                             {poll.options.map((option, index) => {
// //                                 const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0;
// //                                 const isChecked = votedOptionIndex === index;

// //                                 return (
// //                                     <div 
// //                                         key={option._id || index} 
// //                                         className="mb-2 p-2 rounded"
// //                                         onClick={() => handleVote(index)} 
// //                                         style={{ 
// //                                             cursor: isVoting ? 'wait' : 'pointer',
// //                                             border: isChecked ? '2px solid #007bff' : '1px solid #eee',
// //                                         }}
// //                                     >
// //                                         <div className="d-flex justify-content-between align-items-center fw-medium">
// //                                             <span>{option.text}{isChecked && " (Your vote)"}</span>
// //                                             <span>{`${Math.round(percentage)}%`}</span>
// //                                         </div>
// //                                         <div className="mt-2" style={{ 
// //                                             height: '8px', 
// //                                             backgroundColor: '#e9edef',
// //                                             borderRadius: '4px',
// //                                             overflow: 'hidden'
// //                                         }}>
// //                                             <div style={{
// //                                                 height: '100%',
// //                                                 width: `${percentage}%`,
// //                                                 backgroundColor: isChecked ? '#007bff' : '#00a884',
// //                                                 borderRadius: '4px',
// //                                                 transition: 'width 0.5s ease-in-out'
// //                                             }}></div>
// //                                         </div>
// //                                     </div>
// //                                 );
// //                             })}
// //                              <div className="text-center mt-3">
// //                                 <Button variant="outline-primary" size="sm" onClick={handleViewVotes}>
// //                                     View Detailed Results
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                     ) : (
// //                         // 2. AGAR USER NE VOTE NAHI KIYA HAI (VOTING VIEW)
// //                         <div>
// //                             {poll.options.map((option, index) => (
// //                                 <div 
// //                                     key={option._id || index} 
// //                                     className="mb-2 p-2 rounded"
// //                                     onClick={() => handleVote(index)} 
// //                                     style={{ 
// //                                         cursor: isVoting ? 'wait' : 'pointer',
// //                                         border: '1px solid #eee'
// //                                     }}
// //                                 >
// //                                     <div className="d-flex align-items-center">
// //                                         <Form.Check 
// //                                             type="radio"
// //                                             name="pollOptions"
// //                                             id={`poll-option-${index}`}
// //                                             readOnly
// //                                             disabled={isVoting}
// //                                             className="me-3"
// //                                         />
// //                                         <span className="fw-medium">{option.text}</span>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     )}
// //                 </div>
// //             </Card.Body>
// //         </Card>
// //     );
// // };

// const PollSection = () => {
//     const [poll, setPoll] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isVoting, setIsVoting] = useState(false);
//     const navigate = useNavigate();
//     const currentUser = JSON.parse(localStorage.getItem('user'));

//     useEffect(() => {
//         const fetchPoll = async () => {
//             try {
//                 const response = await getAllPolls();
//                 const firstActivePoll = response.data?.find(p => p.isActive);
//                 setPoll(firstActivePoll);
//             } catch (err) {
//                 setError("Polls could not be loaded.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchPoll();
//     }, []);

//     const handleVote = async (optionIndex) => {
//         if (isVoting) return;

//         const userVote = poll.votes.find(v => v.user === currentUser?._id);
//         if (userVote && userVote.optionIndex === optionIndex) {
//             return;
//         }

//         setIsVoting(true);
//         const originalPoll = JSON.parse(JSON.stringify(poll));

//         const pollToUpdate = {
//             ...originalPoll,
//             options: originalPoll.options.map(o => ({ ...o })),
//             votes: originalPoll.votes.map(v => ({ ...v }))
//         };

//         if (userVote) {
//             const prevIndex = userVote.optionIndex;
//             if (typeof prevIndex === "number" && pollToUpdate.options[prevIndex]) {
//                 pollToUpdate.options[prevIndex].votes -= 1;
//             }
//             pollToUpdate.options[optionIndex].votes += 1;

//             const voteToUpdateInArray = pollToUpdate.votes.find(v => v.user === currentUser?._id);
//             voteToUpdateInArray.optionIndex = optionIndex;
//         } else {
//             pollToUpdate.options[optionIndex].votes += 1;
//             pollToUpdate.totalVotes += 1;
//             pollToUpdate.votes.push({ user: currentUser?._id, optionIndex });
//         }

//         setPoll(pollToUpdate); // Optimistic update

//         try {
//             const response = await voteOnPoll(poll._id, { optionIndex });
//             const updatedPoll = response.data;

//             // force update userVote status
//             const updatedUserVote = updatedPoll.votes.find(v => v.user === currentUser?._id);
//             updatedPoll.hasVoted = !!updatedUserVote;

//             setPoll(updatedPoll); // Final sync with backend
//         } catch (err) {
//             alert("There was a problem submitting your vote.");
//             setPoll(originalPoll);
//         } finally {
//             setIsVoting(false);
//         }
//     };

//     const handleViewVotes = () => {
//         if (poll) navigate(`/poll-results/${poll._id}`);
//     };

//     if (isLoading) {
//         return (
//             <div className="d-flex justify-content-center my-4">
//                 <Spinner animation="border" variant="danger" />
//             </div>
//         );
//     }

//     if (error || !poll) {
//         return (
//             <Card border="0" className="text-center p-4 my-4 shadow-sm">
//                 <Card.Text className="text-muted">{error || "No active poll available."}</Card.Text>
//             </Card>
//         );
//     }

//     const userVote = poll.votes.find(v => v.user === currentUser?._id);
//     const userHasVoted = !!userVote;
//     const votedOptionIndex = userHasVoted ? userVote.optionIndex : null;

//     return (
//         <Card border="0" className="my-4 px-2 shadow-sm">
//             <Card.Body>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <h5 className="fw-bold m-0">{poll.question}</h5>
//                 </div>
//                 <p className="text-muted small d-flex align-items-center gap-2 mb-3">
//                     <FaPoll /> {userHasVoted ? "You can change your vote." : "Select an option to vote."}
//                 </p>

//                 <div className="mt-3">
//                     {poll.options.map((option, index) => {
//                         const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0;
//                         const isChecked = votedOptionIndex === index;

//                         return (
//                             <div
//                                 key={option._id || index}
//                                 className="mb-2 p-2 rounded"
//                                 onClick={() => handleVote(index)}
//                                 style={{
//                                     cursor: isVoting ? "wait" : "pointer",
//                                     border: isChecked ? "2px solid #007bff" : "1px solid #eee",
//                                 }}
//                             >
//                                 <div className="d-flex justify-content-between align-items-center fw-medium">
//                                     <span>
//                                         {option.text}
//                                         {isChecked && " (Your vote)"}
//                                     </span>
//                                     <span>{`${Math.round(percentage)}%`}</span>
//                                 </div>
//                                 <div
//                                     className="mt-2"
//                                     style={{
//                                         height: "8px",
//                                         backgroundColor: "#e9edef",
//                                         borderRadius: "4px",
//                                         overflow: "hidden",
//                                     }}
//                                 >
//                                     <div
//                                         style={{
//                                             height: "100%",
//                                             width: `${percentage}%`,
//                                             backgroundColor: isChecked ? "#007bff" : "#00a884",
//                                             borderRadius: "4px",
//                                             transition: "width 0.5s ease-in-out",
//                                         }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         );
//                     })}

//                     <div className="text-center mt-3">
//                         <Button
//                             variant="outline-primary"
//                             size="sm"
//                             onClick={handleViewVotes}
//                             disabled={isVoting}
//                         >
//                             View Detailed Results
//                         </Button>
//                     </div>
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// };



// // ======================================================================================
// // FINAL MAIN COMPONENT
// // ======================================================================================
// const RightSidebar = () => {
//     return (
//         <div>
//             <TrendingAndScore />
//             <PollSection /> 
//             <VideosSection />
//             <HoroscopeSection />
//             <TopHeadlinesSection />
            
//             <div style={{ backgroundColor: 'black', height: '250px', width: '100%' }} className="my-4">
//                 {/* Advertisement Placeholder */}
//             </div>
//         </div>
//     );
// };

// export default RightSidebar;


import React from 'react';

// ✅ Har section ko uski apni file se import karein
import TrendingAndScore from './sidebar/TrendingAndScore';
import VideosSection from './sidebar/VideosSection';
import HoroscopeSection from './sidebar/HoroscopeSection';
import TopHeadlinesSection from './sidebar/TopHeadlinesSection';
import PollSection from './sidebar/PollSection';

const RightSidebar = () => {
    return (
        <div>
            {/* Saare components ko yahan assemble karein */}
            <TrendingAndScore />
            <PollSection /> 
            <VideosSection /> 
            <TopHeadlinesSection />  
            < HoroscopeSection/>
            
            <div style={{ backgroundColor: 'black', height: '250px', width: '100%' }} className="my-4">
                {/* Advertisement Placeholder */}
            </div>
        </div>
    );
};

export default RightSidebar;