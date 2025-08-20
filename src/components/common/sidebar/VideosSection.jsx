import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Spinner } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';
import { getVideos } from '../../../Services/authApi';
import SidebarSectionHeader from './SidebarSectionHeader';

const VideoCard = ({ image, title, isMain = false }) => (
    <div className="position-relative">
        <Image 
            src={image} 
            fluid 
            style={{ 
                width: '100%', 
                height: isMain ? 'auto' : '110px', 
                objectFit: isMain ? 'contain' : 'cover' 
            }} 
        />
        {isMain && (
            <FaPlayCircle 
                color="white" 
                size={40} 
                className="position-absolute top-50 start-50 translate-middle" 
                style={{ opacity: 0.8 }} 
            />
        )}
        <div 
            className="position-absolute bottom-0 start-0 end-0 text-white p-2" 
            style={{ 
                backgroundColor: 'rgba(204, 0, 0, 0.9)', 
                fontSize: isMain ? '0.9rem' : '0.75rem' 
            }}
        >
            <p className="fw-bold mb-0">{title}</p>
        </div>
    </div>
);

const VideosSection = () => {
    const [videos, setVideos] = useState({ mainVideo: null, videoList: [] });
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getVideos()
            .then(response => setVideos(response.data))
            .catch(err => console.error("Failed to load videos", err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;
    }

    return ( 
        <div className="mb-4">
            <SidebarSectionHeader title="Videos" linkText="See More" /> 
            
            {videos.mainVideo && (
                <div className="mb-2">
                    <VideoCard image={videos.mainVideo.image} title={videos.mainVideo.title} isMain={true} />
                </div>
            )}

            <Row>
                {videos.videoList.map((video, index) => (
                    <Col key={index} xs={6} className="mb-2">
                        <VideoCard image={video.image} title={video.title} />
                    </Col>
                ))}
            </Row> 
        </div> 
    );
};

export default VideosSection;