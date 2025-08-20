

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/common/LeftSidebar';
import RightSidebar from '../components/common/RightSidebar';

const HEADER_HEIGHT = '155px';

const LayoutWithBothSidebars = ({ sidebarStyle }) => {
    return (
        <Container fluid>
            <Row className="g-lg-4 align-items-start">
                <Col lg={2} className="d-none d-lg-block">
                    <div 
                        style={{ 
                            ...sidebarStyle, // Puraani style
                            // 👇 YAHI HAI SMOOTHNESS KA RAAZ 👇
                            transition: 'top 0.3s ease-in-out, bottom 0.3s ease-in-out'
                        }}
                    >
                        <LeftSidebar />
                    </div>
                </Col>
                <Col lg={7} md={12} className="py-3">
                   <Outlet />
                </Col>
                <Col lg={3} className="d-none d-lg-block">
                     <div style={{ position: 'sticky', top: HEADER_HEIGHT, zIndex: 10 }}>
                        <RightSidebar />
                     </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LayoutWithBothSidebars;


