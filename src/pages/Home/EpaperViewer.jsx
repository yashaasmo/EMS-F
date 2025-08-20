// import React, { useState, useEffect, useRef } from 'react';
// import { Container, Row, Col, Image, Button, Form, InputGroup } from 'react-bootstrap';
// import { FaCut, FaFastBackward, FaArrowLeft, FaArrowRight, FaFastForward, FaSearchPlus, FaSearchMinus, FaDownload } from 'react-icons/fa';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// // स्थानीय इमेज को यहाँ इम्पोर्ट करें
// import jabalpurImage from '../../assets/jabalpur-thumb.jpg'; 
// import seoniImage from '../../assets/seoni-thumb.jpg'; 
// import balaImage from '../../assets/chhindwara-thumb.jpg'; 

// const allEditionsData = {
//     bhopal_edition: [
//         { pageNumber: 1, image: jabalpurImage, thumbnail: jabalpurImage },
//         { pageNumber: 2, image: seoniImage, thumbnail: seoniImage },
//         { pageNumber: 3, image: balaImage, thumbnail: balaImage },
//         { pageNumber: 4, image: seoniImage, thumbnail: seoniImage },
//         { pageNumber: 5, image: jabalpurImage, thumbnail: jabalpurImage },
//         { pageNumber: 6, image: seoniImage, thumbnail: seoniImage },
//         { pageNumber: 7, image: jabalpurImage, thumbnail: jabalpurImage },
//         { pageNumber: 8, image: balaImage, thumbnail: balaImage }
//     ],
// };

// // Toolbar Component (कोई बदलाव नहीं)
// const EpaperToolbar = ({ pageInfo, navigation, zoomHandlers, clipping, className }) => {
//     const { currentIndex, totalPages, currentImage } = pageInfo;
//     const { setCurrentPageIndex, handlePageInputChange, handlePageInputSubmit, pageInputRef } = navigation;
//     const { handleZoomIn, handleZoomOut } = zoomHandlers;
//     const { isClipping, setIsClipping } = clipping;

//     return (
//         <div className={`bg-light p-2 border d-flex justify-content-center align-items-center flex-wrap gap-2 ${className}`}>
//             <Button variant={isClipping ? "primary" : "outline-secondary"} size="sm" onClick={() => setIsClipping(!isClipping)}><FaCut /> Clip</Button>
//             <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(0)} disabled={currentIndex === 0}><FaFastBackward /></Button>
//             <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(p => p - 1)} disabled={currentIndex === 0}><FaArrowLeft /></Button>
//             <span style={{ width: '120px' }}>
//                 <Form onSubmit={handlePageInputSubmit} className="d-flex">
//                     <InputGroup size="sm">
//                         <Form.Control ref={pageInputRef} key={currentIndex} defaultValue={currentIndex + 1} onBlur={handlePageInputChange} type="number" className="text-center" />
//                         <InputGroup.Text>of {totalPages}</InputGroup.Text>
//                     </InputGroup>
//                 </Form>
//             </span>
//             <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(p => p + 1)} disabled={currentIndex === totalPages - 1}><FaArrowRight /></Button>
//             <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(totalPages - 1)} disabled={currentIndex === totalPages - 1}><FaFastForward /></Button>
//             <Button variant="outline-secondary" size="sm" onClick={handleZoomIn}><FaSearchPlus /> Zoom</Button>
//             <Button variant="outline-secondary" size="sm" onClick={handleZoomOut}><FaSearchMinus /></Button>
//             <Button as="a" href={currentImage} download="epaper-page.jpg" target="_blank" variant="outline-primary" size="sm"><FaDownload /> Download</Button>
//         </div>
//     );
// };

// // मुख्य कंपोनेंट
// const EpaperViewer = () => {
//     const editionId = 'bhopal_edition';
//     const pages = allEditionsData[editionId] || [];
    
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [isClipping, setIsClipping] = useState(false);
//     const [crop, setCrop] = useState();
//     const pageInputRef = useRef(null);

//     useEffect(() => { if (pageInputRef.current) pageInputRef.current.value = currentPageIndex + 1; }, [currentPageIndex]);

//     if (pages.length === 0) {
//         return <Container className="text-center my-5"><h2>इस संस्करण के लिए ई-पेपर उपलब्ध नहीं है।</h2></Container>;
//     }

//     const currentPage = pages[currentPageIndex];
//     const handleZoomIn = () => setZoomLevel(prev => Math.min(3, prev + 0.2));
//     const handleZoomOut = () => setZoomLevel(prev => Math.max(0.2, prev - 0.2));
//     const handlePageInputChange = (e) => {
//         const pageNum = parseInt(e.target.value, 10);
//         if (!isNaN(pageNum) && pageNum > 0 && pageNum <= pages.length) {
//             setCurrentPageIndex(pageNum - 1);
//         } else {
//             e.target.value = currentPageIndex + 1;
//         }
//     };
//     const handlePageInputSubmit = (e) => { e.preventDefault(); handlePageInputChange({ target: pageInputRef.current }); };
    
//     const pageInfo = { currentIndex: currentPageIndex, totalPages: pages.length, currentImage: currentPage.image };
//     const navigation = { setCurrentPageIndex, handlePageInputChange, handlePageInputSubmit, pageInputRef };
//     const zoomHandlers = { handleZoomIn, handleZoomOut };
//     const clipping = { isClipping, setIsClipping };

//     return (
//         <Container fluid className="py-3">
//             <Row className="g-3">
//                 {/* थंबनेल कॉलम */}
//                 <Col lg={2} className="d-none d-lg-block">
//                     <div className="sticky-top" style={{ top: '20px' }}>
//                         <div className="border rounded p-2 overflow-y-auto" style={{ height: 'calc(100vh - 40px)' }}>
//                             {pages.map((page, index) => (
//                                 <div key={index} className="mb-2 position-relative">
//                                     <Image src={page.thumbnail} thumbnail fluid onClick={() => setCurrentPageIndex(index)} style={{ cursor: 'pointer', border: index === currentPageIndex ? '3px solid #0d6efd' : '1px solid #ddd' }} />
//                                     <div className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1" style={{ fontSize: '0.8rem' }}>{index + 1}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </Col>
                
//                 {/* मुख्य व्युअर कॉलम */}
//                 <Col lg={10} md={12}>
//                     <EpaperToolbar 
//                         className="rounded-top"
//                         pageInfo={pageInfo} navigation={navigation} zoomHandlers={zoomHandlers} clipping={clipping} 
//                     />
                    
//                     <div className="border border-top-0 border-bottom-0 overflow-hidden d-flex justify-content-center align-items-center" style={{ 
//                         // --- मुख्य बदलाव यहाँ है ---
//                         height: 'calc(100vh - 105px)', // इमेज को बड़ा दिखाने के लिए ऊंचाई बढ़ाई गई
//                         backgroundColor: '#e9e9e9'
//                     }}>
//                         <div className="overflow-auto" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
//                              <div style={{ 
//                                 display: 'inline-block', // इसे इनलाइन-ब्लॉक बनाया ताकि ज़ूम सही से काम करे
//                                 transform: `scale(${zoomLevel})`, 
//                                 transformOrigin: 'center', 
//                                 transition: 'transform 0.2s',
//                                 height: '100%' // यह पैरेंट की पूरी ऊंचाई लेगा
//                             }}>
//                                 {isClipping ? (
//                                     <ReactCrop crop={crop} onChange={c => setCrop(c)}>
//                                         <Image src={currentPage.image} alt={`Epaper page ${currentPage.pageNumber}`} style={{ display: 'block', height: '100%', width: 'auto' }}/>
//                                     </ReactCrop>
//                                 ) : (
//                                     <Image 
//                                         src={currentPage.image}
//                                         alt={`Epaper page ${currentPage.pageNumber}`}
//                                         style={{ 
//                                             height: '100%', // कंटेनर की पूरी ऊंचाई लो
//                                             width: 'auto', // चौड़ाई अपने आप एडजस्ट हो जाएगी
//                                             objectFit: 'contain',
//                                             cursor: 'grab'
//                                         }} 
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
                    
//                     <EpaperToolbar 
//                         className="rounded-bottom"
//                         pageInfo={pageInfo} navigation={navigation} zoomHandlers={zoomHandlers} clipping={clipping} 
//                     />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default EpaperViewer;


import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Button, Form, InputGroup } from 'react-bootstrap';
import { FaCut, FaFastBackward, FaArrowLeft, FaArrowRight, FaFastForward, FaSearchPlus, FaSearchMinus, FaDownload } from 'react-icons/fa';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// स्थानीय इमेज को यहाँ इम्पोर्ट करें
import jabalpurImage from '../../assets/jabalpur-thumb.jpg'; 
import seoniImage from '../../assets/seoni-thumb.jpg'; 
import balaImage from '../../assets/chhindwara-thumb.jpg'; 

const allEditionsData = {
    bhopal_edition: [
        { pageNumber: 1, image: jabalpurImage, thumbnail: jabalpurImage },
        { pageNumber: 2, image: seoniImage, thumbnail: seoniImage },
        { pageNumber: 3, image: balaImage, thumbnail: balaImage },
        { pageNumber: 4, image: seoniImage, thumbnail: seoniImage },
        { pageNumber: 5, image: jabalpurImage, thumbnail: jabalpurImage },
        { pageNumber: 6, image: seoniImage, thumbnail: seoniImage },
        { pageNumber: 7, image: jabalpurImage, thumbnail: jabalpurImage },
        { pageNumber: 8, image: balaImage, thumbnail: balaImage }
    ],
};

// Toolbar Component (कोई बदलाव नहीं)
const EpaperToolbar = ({ pageInfo, navigation, zoomHandlers, clipping, className }) => {
    const { currentIndex, totalPages, currentImage } = pageInfo;
    const { setCurrentPageIndex, handlePageInputChange, handlePageInputSubmit, pageInputRef } = navigation;
    const { handleZoomIn, handleZoomOut } = zoomHandlers;
    const { isClipping, setIsClipping } = clipping;

    return (
        <div className={`bg-light p-2 border d-flex justify-content-center align-items-center flex-wrap gap-2 ${className}`}>
            <Button variant={isClipping ? "primary" : "outline-secondary"} size="sm" onClick={() => setIsClipping(!isClipping)}><FaCut /> Clip</Button>
            <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(0)} disabled={currentIndex === 0}><FaFastBackward /></Button>
            <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(p => p - 1)} disabled={currentIndex === 0}><FaArrowLeft /></Button>
            <span style={{ width: '120px' }}>
                <Form onSubmit={handlePageInputSubmit} className="d-flex">
                    <InputGroup size="sm">
                        <Form.Control ref={pageInputRef} key={currentIndex} defaultValue={currentIndex + 1} onBlur={handlePageInputChange} type="number" className="text-center" />
                        <InputGroup.Text>of {totalPages}</InputGroup.Text>
                    </InputGroup>
                </Form>
            </span>
            <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(p => p + 1)} disabled={currentIndex === totalPages - 1}><FaArrowRight /></Button>
            <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPageIndex(totalPages - 1)} disabled={currentIndex === totalPages - 1}><FaFastForward /></Button>
            <Button variant="outline-secondary" size="sm" onClick={handleZoomIn}><FaSearchPlus /> Zoom</Button>
            <Button variant="outline-secondary" size="sm" onClick={handleZoomOut}><FaSearchMinus /></Button>
            <Button as="a" href={currentImage} download="epaper-page.jpg" target="_blank" variant="outline-primary" size="sm"><FaDownload /> Download</Button>
        </div>
    );
};

// मुख्य कंपोनेंट (इसे सही कर दिया गया है)
const EpaperViewer = () => {
    const editionId = 'bhopal_edition';
    const pages = allEditionsData[editionId] || [];
    
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isClipping, setIsClipping] = useState(false);
    const [crop, setCrop] = useState();
    const pageInputRef = useRef(null);

    useEffect(() => { if (pageInputRef.current) pageInputRef.current.value = currentPageIndex + 1; }, [currentPageIndex]);

    if (pages.length === 0) {
        return <Container className="text-center my-5"><h2>इस संस्करण के लिए ई-पेपर उपलब्ध नहीं है।</h2></Container>;
    }

    const currentPage = pages[currentPageIndex];
    const handleZoomIn = () => setZoomLevel(prev => Math.min(3, prev + 0.2));
    const handleZoomOut = () => setZoomLevel(prev => Math.max(0.2, prev - 0.2));
    const handlePageInputChange = (e) => {
        const pageNum = parseInt(e.target.value, 10);
        if (!isNaN(pageNum) && pageNum > 0 && pageNum <= pages.length) {
            setCurrentPageIndex(pageNum - 1);
        } else {
            e.target.value = currentPageIndex + 1;
        }
    };
    const handlePageInputSubmit = (e) => { e.preventDefault(); handlePageInputChange({ target: pageInputRef.current }); };
    
    const pageInfo = { currentIndex: currentPageIndex, totalPages: pages.length, currentImage: currentPage.image };
    const navigation = { setCurrentPageIndex, handlePageInputChange, handlePageInputSubmit, pageInputRef };
    const zoomHandlers = { handleZoomIn, handleZoomOut };
    const clipping = { isClipping, setIsClipping };

    return (
        <Container fluid className="py-3">
            <Row className="g-3">
                {/* थंबनेल कॉलम */}
                <Col lg={2} className="d-none d-lg-block">
                    <div className="sticky-top" style={{ top: '20px' }}>
                        <div className="border rounded p-2 overflow-y-auto" style={{ height: 'calc(100vh - 40px)' }}>
                            {pages.map((page, index) => (
                                <div key={index} className="mb-2 position-relative">
                                    <Image src={page.thumbnail} thumbnail fluid onClick={() => setCurrentPageIndex(index)} style={{ cursor: 'pointer', border: index === currentPageIndex ? '3px solid #0d6efd' : '1px solid #ddd' }} />
                                    <div className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1" style={{ fontSize: '0.8rem' }}>{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                
                {/* मुख्य व्युअर कॉलम */}
                <Col lg={10} md={12}>
                    <EpaperToolbar 
                        className="rounded-top"
                        pageInfo={pageInfo} navigation={navigation} zoomHandlers={zoomHandlers} clipping={clipping} 
                    />
                    
                    {/* --- मुख्य समाधान यहाँ है --- */}
                    <div className="border border-top-0 border-bottom-0 overflow-auto d-flex justify-content-center align-items-center" style={{ 
                        height: 'calc(100vh - 150px)', // दोनों टूलबार की ऊंचाई घटाकर
                        backgroundColor: '#e9e9e9'
                    }}>
                        <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center', transition: 'transform 0.2s' }}>
                            {isClipping ? (
                                <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                                    <Image src={currentPage.image} alt={`Epaper page ${currentPage.pageNumber}`} style={{ display: 'block' }}/>
                                </ReactCrop>
                            ) : (
                                <Image 
                                    src={currentPage.image}
                                    alt={`Epaper page ${currentPage.pageNumber}`}
                                    style={{ 
                                        maxWidth: '100%', 
                                        maxHeight: '100%',
                                        cursor: 'grab',
                                        objectFit: 'contain' // यह सुनिश्चित करता है कि इमेज फिट रहे
                                    }} 
                                />
                            )}
                        </div>
                    </div>
                    
                    {/* निचला टूलबार वापस जोड़ दिया गया है */}
                    <EpaperToolbar 
                        className="rounded-bottom"
                        pageInfo={pageInfo} navigation={navigation} zoomHandlers={zoomHandlers} clipping={clipping} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default EpaperViewer;