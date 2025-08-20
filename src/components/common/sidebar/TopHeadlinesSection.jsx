// // import React, { useState, useEffect } from 'react';
// // import { Image, Spinner } from 'react-bootstrap';
// // import { getHeadlines } from '../../../Services/authApi';

// // const TopHeadlinesSection = () => {
// //     const [headlines, setHeadlines] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);

// //     useEffect(() => {
// //         getHeadlines()
// //             .then(response => setHeadlines(response.data))
// //             .catch(err => console.error("Failed to load headlines", err))
// //             .finally(() => setIsLoading(false));
// //     }, []);

// //     if (isLoading) {
// //         return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;
// //     }

// //     return (
// //         <div className="mb-4">
// //             <h5 className="fw-bold mb-3">Top Headlines</h5> 
            
// //             {headlines.map((item, index) => (
// //                 <div key={index} className="mb-3">
// //                     {/* ✅ YAHAN PAR RED COLOR WAPAS LAGA DIYA GAYA HAI ✅ */}
// //                     <p className="text-danger small fw-bold mb-2">{item.category}</p>

// //                     <div className="d-flex align-items-center">
// //                         <Image 
// //                             src={item.image} 
// //                             width={100} 
// //                             height={75} 
// //                             style={{objectFit: 'cover'}} 
// //                             className="me-3" 
// //                         />
// //                         <p className="fw-bold m-0" style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
// //                             {item.text}
// //                         </p>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default TopHeadlinesSection;

// import React, { useState, useEffect } from 'react';
// import { Image, Spinner } from 'react-bootstrap';
// import { allNews } from '../../../Services/authApi';  // ✅ ab ye wala use hoga

// const TopHeadlinesSection = () => {
//     const [headlines, setHeadlines] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         allNews()
//             .then(response => {
//                 if (response?.success) {
//                     setHeadlines(response.data);  // ✅ "data" ke andar actual news hai
//                 }
//             })
//             .catch(err => console.error("Failed to load news", err))
//             .finally(() => setIsLoading(false));
//     }, []);

//     if (isLoading) {
//         return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;
//     }

//     return (
//         <div className="mb-4">
//             <h5 className="fw-bold mb-3">Top Headlines</h5> 
            
//             {headlines.map((item, index) => (
//                 <div key={item._id} className="mb-3">
//                     {/* ✅ Category red color me */}
//                     <p className="text-danger small fw-bold mb-2">
//                         {item.category?.name}
//                     </p>

//                     <div className="d-flex align-items-center">
//                         {item.media?.length > 0 && (
//                             <Image 
//                                 src={item.media[0].url} 
//                                 width={100} 
//                                 height={75} 
//                                 style={{objectFit: 'cover'}} 
//                                 className="me-3" 
//                             />
//                         )}
//                         <p className="fw-bold m-0" style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
//                             {item.title}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TopHeadlinesSection;


import React, { useState, useEffect } from 'react';
import { Image, Spinner, Button } from 'react-bootstrap';
import { allNews } from '../../../Services/authApi';

const TopHeadlinesSection = () => {
    const [headlines, setHeadlines] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        allNews()
            .then(response => {
                if (response?.success) {
                    setHeadlines(response.data);
                }
            })
            .catch(err => console.error("Failed to load news", err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="text-center my-4"><Spinner animation="border" size="sm" /></div>;
    }

    const displayedHeadlines = showAll ? headlines : headlines.slice(0, 5);

    return (
        <div className="mb-4">
            <h5 className="fw-bold mb-3">Top Headlines</h5> 
            
            {displayedHeadlines.map((item) => (
                <div key={item._id} className="mb-3">
                    <p className="text-danger small fw-bold mb-2">
                        {item.category?.name}
                    </p>

                    <div className="d-flex align-items-center">
                        {item.media?.length > 0 && (
                            <Image 
                                src={item.media[0].url} 
                                width={100} 
                                height={75} 
                                style={{objectFit: 'cover'}} 
                                className="me-3" 
                            />
                        )}
                        <p className="fw-bold m-0" style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}

            {headlines.length > 5 && (
                <div className="text-center mt-2">
                    <Button 
                        variant="link" 
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Read Less" : "Read More"}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TopHeadlinesSection;
