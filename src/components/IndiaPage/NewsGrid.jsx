// import React from 'react';

// // आपको इस कंपोनेंट के अलावा किसी और फाइल की जरूरत नहीं है।

// const NewsGrid = () => {
//   // समाचारों का पूरा डेटा एक ही जगह पर
//   const allNewsData = [
//     { id: 1, headline: "योगी सरकार ने कन्वर्जन बिल को बनाया और सख्त, धर्मांतरण को..." },
//     { id: 2, headline: "बाबा सिद्दीकी के मोबाइल नंबर से फ्रॉड की थी साजिश, दिल्ली से..." },
//     { id: 3, headline: "VIDEO: शादी में खुलेआम फायरिंग कर मचाई थी दहशत, पुलिस" },
//     { id: 4, headline: "VIDEO: लखनऊ के 'आम महोत्सव' में मची लूट, जिसे जो मिला उसी..." },
//     { id: 5, headline: "MH: समुद्र तट पर बहकर आई संदिग्ध नाव, दूसरे देश की होने..." },
//     { id: 6, headline: "दिल्ली की हवा लगातार 11वें दिन सबसे साफ रही, जानिए सोमवार को..." },
//     { id: 7, headline: "गाजियाबाद: जालिम इंजीनियर बहू ने सास से की हैवानियत की सारी..." },
//     { id: 8, headline: "राज ठाकरे ने सभी पदाधिकारियों को दिया आदेश, 'उद्धव ठाकरे'..." },
//     { id: 9, headline: "दिल्ली से सीरियल किलर अजय लांबा गिरफ्तार, कैब ड्राइवर..." },
//     { id: 10, headline: "सब गोलमाल है! फर्जी NSG कमांडो गिरफ्तार, पिस्टल और वायरलेस" },
//     { id: 11, headline: "मुंबई दंगों का आरोपी 32 साल बाद गिरफ्तार, वडाला इलाके से पुलिस" },
//     { id: 12, headline: "दिल्ली: तिहाड़ जेल से फरलो मिलने के बाद गैंगस्टर सोहराब फरार," },
//     { id: 13, headline: "आज PK की 'जन सुराज' ज्वाइन करेंगे मनीष कश्यप, इस सीट..." },
//     { id: 14, headline: "मोहर्रम के दौरान उज्जैन में हुआ बवाल, BJP विधायक रामेश्वर शर्मा" },
//     { id: 15, headline: "राजस्थान के बारां में पिकअप वैन से टक्कर में कार के उड़े परखच्चे," },
//     { id: 16, headline: "गोपाल खेमका की अंतिम यात्रा में शामिल हुआ संदिग्ध हत्यारा," },
//     { id: 17, headline: "मध्य प्रदेश में बड़ा प्रशासनिक फेरबदल, 9 IAS अफसरों का हुआ..." },
//     { id: 18, headline: "नकली दरोगा असली दरोगा को देती थी ट्रेनिंग, अफसरों पर भी..." },
//     { id: 19, headline: "बिहार में अपराध बेलगाम, अब नालंदा में सिर में गोली मारकर..." },
//     { id: 20, headline: "दमोह: पूर्व विधायक से दिव्यांग पति ने मांगा गुजारा भत्ता, हर महीने..." },
//     { id: 21, headline: "राजस्थान के कई जिलों में 8 जुलाई तक भारी बारिश का अलर्ट, सीकर" },
//     { id: 22, headline: "पटना में एक और मर्डर से सनसनी, स्कूल प्रबंधक के सिर में मारी..." },
//     { id: 23, headline: "भोपाल रेलवे स्टेशन पर बड़ी लापरवाही, प्लेटफॉर्म पर खुलेआम..." },
//     { id: 24, headline: "भीलवाड़ा: प्याज के ठेले को टक्कर लगने पर युवक की पीट-पीटकर..." },
//   ];

//   // इमेज की जगह दिखने वाले ग्रे बॉक्स के लिए इनलाइन स्टाइल
//   const imagePlaceholderStyle = {
//     width: '80px',
//     height: '60px',
//     backgroundColor: '#e9ecef', // हल्का ग्रे रंग
//   };

//   return (
//     // एक हल्का ग्रे बैकग्राउंड वाला मुख्य कंटेनर
//     <div className="container py-4" style={{ backgroundColor: '#f8f9fa' }}>
//       {/* बूटस्ट्रैप ग्रिड सिस्टम */}
//       <div className="row g-3">
//         {/* map() का उपयोग करके हर खबर के लिए एक कार्ड बनाएं */}
//         {allNewsData.map((newsItem) => (
//           // बड़ी स्क्रीन पर 3 कॉलम, टैबलेट पर 2 और मोबाइल पर 1 कॉलम
//           <div className="col-lg-4 col-md-6 col-12" key={newsItem.id}>
//             {/* यह एक सिंगल समाचार कार्ड है */}
//             <div className="bg-white rounded shadow-sm p-2 d-flex align-items-center h-100">
              
//               {/* इमेज के लिए ग्रे बॉक्स (प्लेसहोल्डर) */}
//               <div
//                 className="rounded flex-shrink-0"
//                 style={imagePlaceholderStyle}
//               ></div>
              
//               {/* समाचार का शीर्षक */}
//               <p className="ms-3 mb-0 fw-semibold" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
//                 {newsItem.headline}
//               </p>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsGrid;



// src/components/...?/NewsGrid.jsx (Poora Updated Code)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allNews } from '../../Services/authApi'; // Sahi path se import karein
import { Spinner, Alert } from 'react-bootstrap';

const NewsGrid = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await allNews();
                // Hum sirf pehle 24 news items lenge, jaisa aapke static data mein tha
                setNewsData(response.data.slice(0, 24) || []);
            } catch (err) {
                setError("समाचार लोड करने में विफल।");
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    const imagePlaceholderStyle = {
        width: '80px',
        height: '60px',
        backgroundColor: '#e9ecef',
        objectFit: 'cover' // Image ke liye
    };

    if (loading) {
        return <div className="text-center my-5"><Spinner animation="border" variant="danger" /></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container py-4" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="row g-3">
                {newsData.map((newsItem) => (
                    <div className="col-lg-4 col-md-6 col-12" key={newsItem._id}>
                        {/* ✅ Har item ab ek clickable Link hai */}
                        <Link to={`/news/${newsItem._id}`} className="text-decoration-none text-dark">
                            <div className="bg-white rounded shadow-sm p-2 d-flex align-items-center h-100">
                                {/* ✅ Image ab dynamic aayegi */}
                                {newsItem.media && newsItem.media[0] ? (
                                    <img src={newsItem.media[0].url} alt={newsItem.title} className="rounded flex-shrink-0" style={imagePlaceholderStyle} />
                                ) : (
                                    <div className="rounded flex-shrink-0" style={imagePlaceholderStyle}></div>
                                )}
                                <p className="ms-3 mb-0 fw-semibold" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                                    {newsItem.title}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsGrid;