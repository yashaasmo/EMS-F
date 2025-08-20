
// // import React from 'react';
// // import { Container, Row, Col } from 'react-bootstrap';
// // import { Outlet } from 'react-router-dom';
// // import LeftSidebar from '../components/common/LeftSidebar'; // पाथ चेक कर लें

// // const HEADER_HEIGHT = '155px';

// // const LayoutWithLeftSidebarOnly = () => {
// //     return (
// //         <Container fluid>
// //             <Row className="g-lg-4 align-items-start">
// //                 {/* लेफ्ट साइडबार */}
// //                 <Col lg={2} className="d-none d-lg-block">
// //                    <div style={{ position: 'sticky', top: HEADER_HEIGHT, zIndex: 10 }}>
// //                         <LeftSidebar />
// //                    </div>
// //                 </Col>

// //                 {/* मेन कंटेंट (सुझाव: p-3 क्लास से पैडिंग जोड़ी गई है) */}
// //                 <Col lg={10} md={12} className="p-35">
// //                    <Outlet />
// //                 </Col>
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default LayoutWithLeftSidebarOnly;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';
// import LeftSidebar from '../components/common/LeftSidebar';

// const LayoutWithLeftSidebarOnly = ({ sidebarStyle }) => {
//     return (
//         <Container fluid>
//             <Row className="g-lg-4 align-items-start">
//                 <Col lg={2} className="d-none d-lg-block">
//                    <div 
//                         style={{ 
//                             ...sidebarStyle, // Puraani style
//                             // 👇 YAHI HAI SMOOTHNESS KA RAAZ 👇
//                             transition: 'top 0.3s ease-in-out, bottom 0.3s ease-in-out'
//                         }}
//                    >
//                         <LeftSidebar />
//                    </div>
//                 </Col>
//                 <Col lg={10} md={12} className="p-35">
//                    <Outlet />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default LayoutWithLeftSidebarOnly;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/common/LeftSidebar';

const LayoutWithLeftSidebarOnly = ({ sidebarStyle }) => {
    return (
        <Container fluid>
            {/* <<< बदलाव 1: g-lg-4 को g-0 कर दिया गया है >>> */}
            <Row className="g-0 align-items-start">
                <Col lg={2} className="d-none d-lg-block">
                   <div 
                        style={{ 
                            ...sidebarStyle,
                            transition: 'top 0.3s ease-in-out, bottom 0.3s ease-in-out'
                        }}
                   >
                        <LeftSidebar />
                   </div>
                </Col>
                
                {/* <<< बदलाव 2: p-35 एक गलत क्लास है, इसे p-3 या px-3 कर दिया है >>> */}
                <Col lg={10} md={12} className="p-3">
                   <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default LayoutWithLeftSidebarOnly;