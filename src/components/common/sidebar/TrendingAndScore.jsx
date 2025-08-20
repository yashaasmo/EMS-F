// // import React, { useState, useEffect } from 'react';
// // import { Card, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
// // import { getTrendingTopics } from '../../../Services/authApi';

// // const TrendingAndScore = () => {
// //     const [activeTab, setActiveTab] = useState('live');
// //     const [trendingTopics, setTrendingTopics] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);

// //     useEffect(() => {
// //         getTrendingTopics()
// //             .then(response => setTrendingTopics(response.data))
// //             .catch(err => console.error("Failed to load trending topics", err))
// //             .finally(() => setIsLoading(false));
// //     }, []);

// //     const liveMatchData = {
// //         series: '2nd Test, South Africa tour of Zimbabwe, 2 Test Series, 2025',
// //         date: 'Jul 06, 13:30 (IST)', status: 'Stumps',
// //         teamA: { name: 'South Africa', flag: 'https://flagcdn.com/w80/za.png', score: '465/4', overs: '88.0 ov' },
// //         teamB: { name: 'Zimbabwe', flag: 'https://flagcdn.com/w80/zw.png', score: '-To Play' },
// //     };
  
// //     return (
// //       <>
// //         <style>{`.trending-topic-btn:hover, .trending-topic-btn:focus { background-color: #dc3545 !important; color: white !important; border-color: #dc3545 !important; }`}</style>
// //         <Card className="mb-3 border-0">
// //           <Card.Header as="h6" className="fw-bold bg-white border-0 px-1">Trending Topics</Card.Header>
// //           <Card.Body className="p-1">
// //              {isLoading ? <Spinner animation="border" size="sm" /> : (
// //                 <div className="d-flex flex-wrap gap-2">
// //                 {trendingTopics.map((topic) => (
// //                     <Button key={topic} variant="outline-secondary" size="sm" className="rounded px-3 trending-topic-btn">
// //                     {topic}
// //                     </Button>
// //                 ))}
// //                 </div>
// //              )}
// //           </Card.Body>
// //         </Card>
        
// //         <Card className="mb-4">
// //             <div className="d-flex justify-content-around bg-danger text-white p-2">
// //                 <div onClick={() => setActiveTab('live')} className={`fw-bold py-1 px-2 ${activeTab === 'live' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>• Live</div>
// //                 <div onClick={() => setActiveTab('upcoming')} className={`fw-bold text-uppercase py-1 px-2 ${activeTab === 'upcoming' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>Upcoming</div>
// //                 <div onClick={() => setActiveTab('recent')} className={`fw-bold text-uppercase py-1 px-2 ${activeTab === 'recent' ? 'border-bottom border-4 border-white' : ''}`} style={{ cursor: 'pointer' }}>Recent</div>
// //             </div>
// //              <Card.Body className="p-3">
// //             {activeTab === 'live' && (
// //               <div className="text-center">
// //                 <p className="text-muted small mb-1">{liveMatchData.series}</p>
// //                 <p className="text-muted small mb-3"><span className="fw-bold">{liveMatchData.date}</span> | <span className="text-danger fw-bold">{liveMatchData.status}</span></p>
// //                 <Row className="justify-content-center align-items-center">
// //                     <Col><h6 className="fw-bold mb-2">{liveMatchData.teamA.name}</h6></Col>
// //                     <Col xs="auto" style={{ width: '65px' }} />
// //                     <Col><h6 className="fw-bold mb-2">{liveMatchData.teamB.name}</h6></Col>
// //                 </Row>
// //                 <Row className="justify-content-center align-items-center">
// //                     <Col><Image src={liveMatchData.teamA.flag} roundedCircle width={50} height={50} className="border"/></Col>
// //                     <Col xs="auto"><div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold p-2">VS</div></Col>
// //                     <Col><Image src={liveMatchData.teamB.flag} roundedCircle width={50} height={50} className="border" /></Col>
// //                 </Row>
// //                 <Row className="justify-content-center align-items-start mt-1">
// //                     <Col>
// //                         <p className="fw-bold m-0">{liveMatchData.teamA.score}</p>
// //                         <p className="text-muted small m-0">({liveMatchData.teamA.overs})</p>
// //                     </Col>
// //                     <Col xs="auto" style={{ width: '65px' }} />
// //                     <Col>
// //                         <p className="fw-bold m-0">{liveMatchData.teamB.score}</p>
// //                         <p className="small m-0" style={{ visibility: 'hidden' }}>-</p> 
// //                     </Col>
// //                 </Row>
// //                 <p className="small mb-0 mt-3 fw-bold">{liveMatchData.teamA.name} - {liveMatchData.teamA.score} ({liveMatchData.teamA.overs}) | <span className="text-danger">{liveMatchData.teamB.name} - {liveMatchData.teamB.score}</span></p>
// //               </div>
// //             )}
// //             {activeTab !== 'live' && (<p className="text-center p-5">Match information for other tabs will be shown here.</p>)}
// //           </Card.Body>
// //         </Card>
// //       </>
// //     );
// // };

// // export default TrendingAndScore;


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Spinner, Alert, Button, Card } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Dummy Trending Topics
const getTrendingTopics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: ["#CricketFever", "#TeamIndia", "#IPL2025", "#WorldCup", "#T20Blast", "#BigBash"],
      });
    }, 1500);
  });
};

const CombinedSportsAndTrending = () => {
  const [matches, setMatches] = useState([]);
  const [loadingMatches, setLoadingMatches] = useState(true);
  const [errorMatches, setErrorMatches] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("live");
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [isLoadingTrending, setIsLoadingTrending] = useState(true);

  // Team score formatter
  const getFormattedTeamScore = (teamName, matchScores) => {
    let score = "-To Play";
    let overs = "";

    if (!matchScores || matchScores.length === 0) return { score, overs };

    let teamScoreEntry = null;
    for (let i = matchScores.length - 1; i >= 0; i--) {
      const s = matchScores[i];
      if (s.inning && s.inning.toLowerCase().includes(teamName.toLowerCase())) {
        teamScoreEntry = s;
        break;
      }
    }

    if (teamScoreEntry) {
      if (teamScoreEntry.r !== undefined && teamScoreEntry.w !== undefined) {
        score = `${teamScoreEntry.r}/${teamScoreEntry.w}`;
        overs = teamScoreEntry.o ? `(${teamScoreEntry.o} ov)` : "";
      } else if (teamScoreEntry.r) {
        score = `${teamScoreEntry.r}`;
      }
    }
    return { score, overs };
  };

  // Trending fetch
  useEffect(() => {
    getTrendingTopics()
      .then((res) => setTrendingTopics(res.data))
      .finally(() => setIsLoadingTrending(false));
  }, []);

  // Matches fetch
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch(
          "https://api.cricapi.com/v1/currentMatches?apikey=3a2d36c8-c02e-4e70-9c78-04b2e8ada6cd&offset=0"
         
        );
         console.log("api hite");
        const data = await res.json();
        if (data.status === "success") {
          setMatches(data.data || []);
        } else {
          setErrorMatches("क्रिकेट मैच फ़ेच करने में विफल रहा");
        }
      } catch (err) {
        setErrorMatches(err.message || "अज्ञात त्रुटि");
      } finally {
        setLoadingMatches(false);
      }
    };
    fetchMatches();
  }, []);

  // Auto Slide
  useEffect(() => {
    if (matches.length > 1 && activeTab === "live") {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % matches.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [matches, activeTab]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % matches.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);

  const currentMatch = matches[currentIndex];

  return (
    <Container className="py-4">
      {/* Trending Topics */}
      <Card className="mb-3 border-0 shadow-sm">
        <Card.Header as="h6" className="fw-bold bg-white border-0 px-2">
          🔥 Trending Topics
        </Card.Header>
        <Card.Body className="p-2">
          {isLoadingTrending ? (
            <div className="text-center">
              <Spinner animation="border" size="sm" />
            </div>
          ) : (
            <div className="d-flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <Button key={topic} variant="outline-danger" size="sm" className="rounded-pill px-3">
                  {topic}
                </Button>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Sports Section */}
{/* Sports Section */}
<Card
  className="border-0 shadow-sm mx-auto"
  style={{
    maxWidth: "420px",   // Fix card width
    borderRadius: "12px",
    overflow: "hidden",
  }}
>
  {/* Tabs */}
  <div
    className="d-flex justify-content-around text-white fw-bold small"
    style={{ background: "#dc3545", padding: "6px 0" }}
  >
    {["live", "upcoming", "recent"].map((tab) => (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        style={{
          cursor: "pointer",
          borderBottom: activeTab === tab ? "2px solid #fff" : "none",
          padding: "2px 6px",
        }}
      >
        {tab === "live" ? "• Live" : tab.charAt(0).toUpperCase() + tab.slice(1)}
      </div>
    ))}
  </div>

  <Card.Body className="text-center p-3">
    {/* Match Info */}
    <p className="small text-muted m-0">{currentMatch?.series || "Series"}</p>
    <p className="fw-bold small text-danger mb-2">{currentMatch?.status || "Status"}</p>

    {/* Teams Row */}
    <Row className="align-items-center">
      <Col className="text-center">
        <Image
          src={currentMatch?.teamInfo?.[0]?.img}
          roundedCircle
          width={40}
          height={40}
        />
        <h6 className="fw-bold mt-1 small">{currentMatch?.teams?.[0]}</h6>
        <span className="fw-bold">
          {getFormattedTeamScore(currentMatch?.teams?.[0], currentMatch?.score).score}
        </span>
        <p className="small text-muted mb-0">
          {getFormattedTeamScore(currentMatch?.teams?.[0], currentMatch?.score).overs}
        </p>
      </Col>
      <Col xs="auto">
        <div
          className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
          style={{ width: "30px", height: "30px", fontSize: "0.75rem" }}
        >
          VS
        </div>
      </Col>
      <Col className="text-center">
        <Image
          src={currentMatch?.teamInfo?.[1]?.img}
          roundedCircle
          width={40}
          height={40}
        />
        <h6 className="fw-bold mt-1 small">{currentMatch?.teams?.[1]}</h6>
        <span className="fw-bold">
          {getFormattedTeamScore(currentMatch?.teams?.[1], currentMatch?.score).score}
        </span>
        <p className="small text-muted mb-0">
          {getFormattedTeamScore(currentMatch?.teams?.[1], currentMatch?.score).overs}
        </p>
      </Col>
    </Row>

    {/* Bottom Summary */}
    <p className="fw-bold small mt-2 mb-2">
      {currentMatch?.teams?.[0]} - {getFormattedTeamScore(currentMatch?.teams?.[0], currentMatch?.score).score} |{" "}
      <span className="text-danger">
        {currentMatch?.teams?.[1]} - {getFormattedTeamScore(currentMatch?.teams?.[1], currentMatch?.score).score}
      </span>
    </p>

    {/* Next / Prev Buttons at Bottom */}
    <div className="d-flex justify-content-center gap-3 mt-2">
      <Button
        variant="outline-danger"
        size="sm"
        className="rounded-circle"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </Button>
      <Button
        variant="outline-danger"
        size="sm"
        className="rounded-circle"
        onClick={handleNext}
      >
        <FaArrowRight />
      </Button>
    </div>
  </Card.Body>
</Card>


    </Container>
  );
};

export default CombinedSportsAndTrending;
