// import React from 'react';
// // अगर react-icons इंस्टॉल नहीं है, तो टर्मिनल में npm install react-icons चलाएँ
// import { FaBolt } from 'react-icons/fa';
// import { BsCardImage } from 'react-icons/bs';

// const dummyStories = [
//     { 
//         category: 'बिहार', 
//         text: 'गोपाल खेमका हत्याकांड: अंतिम यात्रा से एक शख्स को पुलिस ने उठाया, शूटर के इलाके का पता चला!', 
//         icon: <FaBolt /> 
//     },
//     { 
//         category: 'उत्तर प्रदेश और उत्तराखंड', 
//         text: 'सोशल मीडिया पर लड़की बनकर ठगी करने वाले दो युवक गिरफ्तार, शादी का झांसा देकर करते थे ठगी', 
//         icon: <FaBolt /> 
//     },
//     { 
//         category: 'टेक्नोलॉजी', 
//         text: 'इन डिवाइसों में बंद हो जाएगा WhatsApp! फटाफट चेक करें कहीं आपका फोन भी तो नहीं है शामिल', 
//         icon: <FaBolt />
//     },
//     { 
//         category: 'टेलीविजन', 
//         text: 'स्मृति ईरानी को हूज़ कहने पर ट्रोल हुए थे राम कपूर, अब एक्टर ने दी सफाई', 
//         icon: <FaBolt /> 
//     },
//     { 
//         category: 'पंजाब', 
//         text: 'पंजाब के होशियारपुर में दर्दनाक हादसा, बस पलटने से 10 लोगों की मौत, कई घायल', 
//         icon: <FaBolt /> 
//     },
//     { 
//         category: 'राजस्थान', 
//         text: 'Watch: चांदी का पेट्रोल पंप देखा है कभी? मन्नत पूरी होने पर शख्स ने मंदिर में दान की अनोखी भेंट, वीडियो वायरल', 
//         icon: <FaBolt /> 
//     }
// ];


// const LatestNewsSection = ({ stories = dummyStories }) => (
//   <div className="container my-4">
//     {/* शीर्षक और "और देखें" लिंक */}
//     <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 style={{ color: '#C00000', fontWeight: 'bold' }}>लेटेस्ट न्यूज़</h2>
//         <a href="#" style={{ color: '#0185C6', textDecoration: 'none', fontWeight: 'bold' }}>
//             और देखें
//         </a>
//     </div>

//     <div className="row g-0">
//         {stories.map((news, index) => {
//             // ---- बदलाव: क्लास को रिस्पॉन्सिव बनाया गया ----
//             // col-12: मोबाइल पर 1 कॉलम, col-md-6: डेस्कटॉप पर 2 कॉलम
//             let classes = 'col-12 col-md-6 p-3 position-relative border-bottom'; 
            
//             // border-md-end: वर्टिकल लाइन सिर्फ डेस्कटॉप पर दिखेगी
//             if (index % 2 === 0) {
//                 classes += ' border-md-end';
//             }
            
//             return (
//               <div key={index} className={classes}>
//                 <p 
//                   className="text-danger small m-0" 
//                   style={{ fontWeight: 'bold !important' }}
//                 >
//                   {news.category}
//                 </p>
                
//                 <p className="m-0 mt-2">{news.text}</p>
                
//                 <span style={{ 
//                     position: 'absolute', 
//                     top: '1rem', 
//                     right: '1rem', 
//                     color: '#C00000' 
//                 }}>
//                   {news.icon}
//                 </span>
//               </div>
//             );
//         })}
//     </div>
//    <div className="px-3">
//         <div style={{ height: '250px', backgroundColor: '#0066ff' }} className="mb-3"></div>
//     </div>
    
//   </div>
// );

// export default LatestNewsSection;



// update By shub


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Link ko import karein
import { FaBolt } from 'react-icons/fa';
import { allNews } from '../../Services/authApi'; // ✅ Step 2: Apni API function ko import karein

const LatestNewsSection = () => {
    // ✅ Step 3: Data, loading, aur error ke liye state banayein
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // ✅ Step 4: Component load hone par API se data fetch karein
        const fetchLatestNews = async () => {
            try {
                const res = await allNews();
                if (res?.success) {
                    // Sirf shuru ki 6 khabrein dikhani hain
                    setNewsData(res.data.slice(0, 6));
                } else {
                    setError("Failed to load news");
                }
            } catch (err) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchLatestNews();
    }, []); // Empty array ka matlab hai ki yeh effect sirf ek baar chalega

    // Loading state handle karna
    if (loading) {
        return <div className="container my-4">Loading latest news...</div>;
    }

    // Error state handle karna
    if (error) {
        return <div className="container my-4 text-danger">Error: {error}</div>;
    }
    
    // ✅ Step 5: Link ki default styling (underline, blue color) hatane ke liye style object
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 style={{ color: '#C00000', fontWeight: 'bold' }}>लेटेस्ट न्यूज़</h2>
                <a href="#" style={{ color: '#0185C6', textDecoration: 'none', fontWeight: 'bold' }}>
                    और देखें
                </a>
            </div>

            <div className="row g-0">
                {/* Ab hum dummy data ke bajaye API se aaye 'newsData' par map karenge */}
                {newsData.map((news, index) => {
                    let classes = 'col-12 col-md-6 p-3 position-relative border-bottom'; 
                    
                    if (index % 2 === 0) {
                        classes += ' border-md-end';
                    }
                    
                    return (
                        // ✅ Step 6: Har news item ko Link se wrap karein
                        <Link to={`/news/${news._id}`} key={news._id} style={linkStyle} className={classes}>
                            <div> {/* Extra div to avoid direct styling conflicts with Link */}
                                <p 
                                    className="text-danger small m-0" 
                                    style={{ fontWeight: 'bold !important' }}
                                >
                                    {/* API data se category ka naam use karein */}
                                    {news.category?.name || 'General'}
                                </p>
                                
                                <p className="m-0 mt-2">
                                    {/* API data se title use karein */}
                                    {news.title}
                                </p>
                                
                                <span style={{ 
                                    position: 'absolute', 
                                    top: '1rem', 
                                    right: '1rem', 
                                    color: '#C00000' 
                                }}>
                                    {/* Icon ko static rakh sakte hain */}
                                    <FaBolt />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
            
            <div className="px-3 mt-3"> {/* Added mt-3 for spacing */}
                {/* Yeh advertisement wala div hai */}
                <div style={{ 
                    height: '150px', 
                    backgroundColor: '#e9ecef', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6c757d'
                    }} 
                    className="mb-3 rounded">
                    Advertisement
                </div>
            </div>
        </div>
    );
};

export default LatestNewsSection;