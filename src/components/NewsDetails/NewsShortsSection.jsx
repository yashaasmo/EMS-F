// src/components/NewsShortsSection.js

import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { BsFillCollectionPlayFill, BsShareFill } from "react-icons/bs";
import { newsshorts } from "../../Services/authApi";
import { useNavigate } from "react-router-dom";

const NewsShortsSection = () => {
  const [shorts, setShorts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await newsshorts();
        setShorts(response?.data || []);
      } catch (error) {
        console.error("Error fetching shorts:", error);
      }
    };
    fetchShorts();
  }, []);

  const handleReelClick = (index) => {
    navigate('/shorts', { state: { shorts: shorts, currentIndex: index } });
  };

  return (
    <div className="mt-4">
      {/* हेडर */}
      <div className="d-flex align-items-center mb-2">
        <h5 className="fw-bold m-0" style={{ color: "#A12D2A", flexShrink: 0 }}>
          News Shorts
        </h5>
        <div
          className="flex-grow-1 border-bottom mx-3"
          style={{ borderColor: "#2E6E9E" }}
        ></div>
        <a
          href="#"
          className="fw-bold text-decoration-none"
          style={{ color: "#2E6E9E", flexShrink: 0 }}
        >
          और देखें
        </a>
      </div>

      <style>
        {`.news-shorts-scroll-container::-webkit-scrollbar { display: none; }`}
      </style>

      <div className="d-flex flex-nowrap overflow-auto news-shorts-scroll-container">
        {shorts.map((short, index) => (
          <Col key={short.id || short._id} xs={6} sm={4} md={3} className="p-1">
            <Card 
              className="text-white border-0 rounded-3 position-relative bg-dark"
              onClick={() => handleReelClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {short.videoUrl && short.videoUrl.endsWith(".mp4") ? (
                // --- मुख्य बदलाव यहाँ है ---
                <video
                  src={short.videoUrl}
                  autoPlay // वीडियो को ऑटोप्ले करने के लिए इसे वापस जोड़ें
                  loop     // वीडियो को लूप करने के लिए इसे वापस जोड़ें
                  muted    // ऑटोप्ले के लिए muted होना ज़रूरी है
                  poster={short.thumbnailUrl || "https://via.placeholder.com/300x300?text=..."}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                    pointerEvents: 'none', // यह ज़रूरी है ताकि कार्ड पर क्लिक काम करे
                  }}
                />
              ) : (
                <Card.Img
                  src={short.thumbnailUrl || "https://via.placeholder.com/300x300?text=No+Media"}
                  alt={short.title}
                  style={{ height: "300px", objectFit: "cover", borderRadius: "0.25rem" }}
                />
              )}
              <div className="position-absolute top-0 start-0 p-2">
                <BsFillCollectionPlayFill size={20} />
              </div>
              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end p-2 rounded-3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 20%, transparent)" }}
              >
                  <p className="card-text fw-bold small lh-sm mb-2">{short.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small" style={{ fontSize: "0.65rem", opacity: 0.8 }}>
                      {new Date(short.publishedAt).toLocaleDateString("en-IN", { dateStyle: "medium" })}
                    </span>
                    <BsShareFill size={12} style={{ opacity: 0.8 }} />
                  </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default NewsShortsSection;