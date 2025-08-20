// import React from 'react';

// const OtherNews = () => {
//   // समाचारों का पूरा डेटा
//   const allNewsData = [
//     {
//       id: 1,
//       headline: "दिल्ली-NCR में झमाझम बारिश, जानें अन्य राज्यों में कैसा रहेगा मौसम का हाल",
//       category: "राष्ट्रीय",
//       categoryColor: "#e74c3c",
//       dateTime: "| 07 Jul 2025, 6:47 AM",
//       summary: "दिल्ली-एनसीआर के लोगों को भीषण उमस से राहत मिली है। सोमवार की सुबह दिल्ली सहित आसपास के इलाकों में बारिश हुई है। बारिश की वजह से तापमान में गिरावट भी दर्ज की गई है।",
//     },
//     {
//       id: 2,
//       headline: "पिता का शव मलबे में मिला, मां और दादी को सैलाब बहा ले गया, 10 महीने की निकिता रह गई अकेली, अब कहां जाएगी?",
//       category: "राष्ट्रीय",
//       categoryColor: "#e74c3c",
//       dateTime: "| 06 Jul 2025, 9:03 PM",
//       summary: "मंगलवार को जब तलवारा गांव में नितिका के पिता रमेश कुमार अपने घर के अंदर घुस रहे पानी को रोकने की कोशिश कर रहे थे तभी बादल फटने से गांव में तबाही मच गई। उनका शव मलबे में मिला।",
//     },
//     // ... (बाकी का डेटा जैसा पहले था)
//     {
//       id: 3,
//       headline: "देश के इस राज्य में अगले 4 दिनों तक होगी जमकर बारिश, जारी हुआ अलर्ट, सीएम ने किया हवाई निरीक्षण",
//       category: "राष्ट्रीय",
//       categoryColor: "#e74c3c",
//       dateTime: "| 06 Jul 2025, 7:27 PM",
//       summary: "देश के अधिकतर राज्यों में बारिश हो रही है। सब जगह हो रही बारिश मानसून की बारिश है। पहाड़ी राज्यों में बारिश के साथ-साथ भूस्खलन और बादल फटने का भी डर बना हुआ है।",
//     },
//     {
//       id: 4,
//       headline: "कृषि मंत्री शिवराज सिंह का बड़ा ऐलान, कहा- 'किसानों के साथ धोखा हुआ, उन्हें राहत और मुआवजा मिलना चाहिए'",
//       category: "राजनीति",
//       categoryColor: "#e74c3c",
//       dateTime: "| 06 Jul 2025, 6:53 PM",
//       summary: "कृषि मंत्री ने स्वीकार किया कि किसानों के साथ धोखा हुआ है। इसके साथ ही उन्होंने यह भी कहा कि किसानों को राहत और मुआवजा मिलना चाहिए। उन्होंने अपनी जिम्मेदारी स्वीकार करते हुए कहा कि किसानों को न्याय दिलाना उनका कर्तव्य है।",
//     },
//     {
//       id: 5,
//       headline: "VIDEO: तेज बारिश और बाढ़, बादल फटने, लैंडस्लाइड की क्या है वजह? मानसून ने क्यों बदली अपनी चाल, जानें",
//       category: "राष्ट्रीय",
//       categoryColor: "#e74c3c",
//       dateTime: "| 06 Jul 2025, 6:28 PM",
//       summary: "पिछले कई वर्षों में मानसून ने अपनी दशा और दिशा दोनों बदल ली है। तेज बारिश और बाढ़ तो कहीं सूखा, कहीं बादल फटने की घटनाएं तो कहीं लैंडस्लाइड, आखिर मानसून ने क्यों अपनी चाल बदली है? जानें...",
//     },
//     {
//       id: 6,
//       headline: "नई दिल्ली रेलवे स्टेशन का भी बदलेगा नाम, जानें क्या होगा नामकरण? BJP MP ने रेल मंत्री को लिखा पत्र",
//       category: "राष्ट्रीय",
//       categoryColor: "#e74c3c",
//       dateTime: "| 06 Jul 2025, 5:01 PM",
//       summary: "नई दिल्ली रेलवे स्टेशन का नाम बदलकर अटल बिहारी वाजपेयी रेलवे स्टेशन किया जाना चाहिए। सांसद खंडेलवाल ने रेल मंत्री को पत्र लिखकर ये मांग की है। इससे पहले पुरानी दिल्ली रेलवे स्टेशन का नाम बदलने की भी मांग की गई थी।",
//     },
//   ];

//   // इमेज की जगह दिखने वाले ग्रे बॉक्स के लिए इनलाइन स्टाइल
//   const imagePlaceholderStyle = {
//     width: '150px',
//     height: '100px',
//     backgroundColor: '#e9ecef',
//     objectFit: 'cover'
//   };

//   const redColor = '#c0392b'; // लाल रंग को एक वेरिएबल में रखा

//   return (
//     <div className="container my-5">
      
//       <div className="d-flex align-items-center mb-3">
//         <h3 className="fw-bold mb-0 flex-shrink-0 me-3" style={{ color: redColor }}>
//           भारत की अन्य खबरें
//         </h3>
//         <div className="flex-grow-1" style={{ height: '3px', backgroundColor: redColor }}></div>
//       </div>

//       {/* समाचारों की सूची */}
//       <div>
//         {/* ======== यहाँ बदलाव किया गया है ======== */}
//         {allNewsData.map((newsItem, index) => (
//           // हम जाँच कर रहे हैं कि क्या यह आखिरी आइटम है।
//           // अगर यह आखिरी आइटम नहीं है, तभी 'border-bottom' क्लास जोड़ें।
//           <div 
//             className={`d-flex py-3 ${index < allNewsData.length - 1 ? 'border-bottom' : ''}`} 
//             key={newsItem.id}
//           >
            
//             <div className="rounded flex-shrink-0 me-3" style={imagePlaceholderStyle}></div>

//             <div className="d-flex flex-column">
//               <h5 className="fw-bold mb-1" style={{ lineHeight: '1.4' }}>
//                 {newsItem.headline}
//               </h5>
//               <div className="mb-2">
//                 <span className="fw-bold" style={{ color: newsItem.categoryColor, fontSize: '0.9rem' }}>
//                   {newsItem.category}
//                 </span>
//                 <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>
//                   {newsItem.dateTime}
//                 </span>
//               </div>
//               <p className="mb-0 text-secondary" style={{ fontSize: '0.95rem' }}>
//                 {newsItem.summary}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OtherNews;


// src/components/IndiaPage/OtherNews.jsx (Poora Updated Code)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allNews } from '../../Services/authApi'; // Sahi path se import karein
import { Spinner, Alert } from 'react-bootstrap';

// Date ko sundar format mein dikhane ke liye helper function
const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('hi-IN', options);
};

const OtherNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await allNews();
                // Hum pehli 5 news chhod kar agli news lenge
                setNewsData(response.data.slice(5) || []);
            } catch (err) {
                setError("अन्य समाचार लोड करने में विफल।");
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    const imagePlaceholderStyle = {
        width: '150px',
        height: '100px',
        backgroundColor: '#e9ecef',
        objectFit: 'cover'
    };
    const redColor = '#c0392b';

    if (loading) {
        return <div className="text-center my-5"><Spinner animation="border" variant="danger" /></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container my-5">
            <div className="d-flex align-items-center mb-3">
                <h3 className="fw-bold mb-0 flex-shrink-0 me-3" style={{ color: redColor }}>
                    भारत की अन्य खबरें
                </h3>
                <div className="flex-grow-1" style={{ height: '3px', backgroundColor: redColor }}></div>
            </div>
            <div>
                {newsData.map((newsItem, index) => (
                    <Link to={`/news/${newsItem._id}`} key={newsItem._id} className="text-decoration-none text-dark">
                        <div className={`d-flex py-3 ${index < newsData.length - 1 ? 'border-bottom' : ''}`}>
                            {newsItem.media && newsItem.media[0] ? (
                                <img src={newsItem.media[0].url} alt={newsItem.title} className="rounded flex-shrink-0 me-3" style={imagePlaceholderStyle} />
                            ) : (
                                <div className="rounded flex-shrink-0 me-3" style={imagePlaceholderStyle}></div>
                            )}

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold mb-1" style={{ lineHeight: '1.4' }}>
                                    {newsItem.title}
                                </h5>
                                <div className="mb-2">
                                    {/* ✅✅✅ YEH HAI ASLI FIX ✅✅✅ */}
                                    {/* Ab hum object se sirf 'name' property dikha rahe hain */}
                                    <span className="fw-bold" style={{ color: redColor, fontSize: '0.9rem' }}>
                                        {newsItem.category?.name || 'Category'} 
                                    </span>
                                    <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>
                                        | {formatDate(newsItem.publishedAt || newsItem.createdAt)}
                                    </span>
                                </div>
                                <p className="mb-0 text-secondary" style={{ fontSize: '0.95rem' }}>
                                    {newsItem.summary}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default OtherNews;