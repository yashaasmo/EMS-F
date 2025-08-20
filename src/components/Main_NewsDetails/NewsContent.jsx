// // import React from 'react';
// // // <<< Row और Col को हटा दिया गया है क्योंकि इनकी जरूरत नहीं है >>>

// // // --- कंपोनेंट इम्पोर्ट्स ---
// // import SectionHeader from '../NewsDetails/SectionHeader';
// // import TopStory from '../NewsDetails/TopStory';
// // import HindiNewsSection from '../NewsDetails/HindiNewsSection';
// // import NewsShortsSection from '../NewsDetails/NewsShortsSection';
// // import LatestNewsSection from '../NewsDetails/LatestNewsSection';
// // import Manoranjan from '../NewsDetails/Manoranjan';
// // import PremiereSection from '../NewsDetails/PremiereSection';
// // import SportsSection from '../NewsDetails/SportsSection';
// // import BusinessSection from '../NewsDetails/BusinessSection';
// // import City from '../NewsDetails/City';
// // // --- इमेज इम्पोर्ट्स ---
// // import trump from '../../assets/trump.jpg';
// // import manson from "../../assets/img5.png";
// // import utilityImg from "../../assets/img1.jpg";
// // import healthImg1 from "../../assets/img2.jpg";
// // import indiaImg from "../../assets/img3.jpg";
// // import healthImg2 from "../../assets/img4.png";
// // import card1 from "../../assets/card1.png";
// // import card2 from "../../assets/card2.png";
// // import card3 from "../../assets/card3.png";
// // import card4 from "../../assets/card4.png";
// // import card5 from "../../assets/card5.png";


// // // मुख्य पेज कंपोनेंट
// // const NewsPage = () => {
// //     // सारा डेटा यहीं पर परिभाषित है
   
// //     const monsoonUpdates = [ '5 मिनट पहले: महाराष्ट्र के नागपुर में तेज बारिश जारी', '8 मिनट पहले: राजस्थान के सीकर में तेज बारिश से नदी में बाढ़ के हालात', ];
// //     const newsShorts = [ { text: 'टेस्ट क्रिकेट में एक मैच में दोहरा शतक...', image: card1 }, { text: 'टेस्ट मैच की एक पारी में सबसे ज्यादा छक्के...', image: card2 }, { text: 'टेस्ट की दोनों पारियों में शतक जड़ने वाले...', image: card3 }, { text: 'टेस्ट क्रिकेट में सबसे ज्यादा दोहरा शतक...', image: card4 }, { text: 'एम्बेस्टन में 6 या उससे ज्यादा विकेट...', image: card5 }, ];
// //     const latestNews = [
// //         { category: 'बिहार', text: 'गोपाल खेमका हत्याकांड: अंतिम यात्रा से एक शख्स को पुलिस ने उठाया, शूटर के इलाके का पता चला!' }, 
// //         { category: 'उत्तर प्रदेश और उत्तराखंड', text: 'सोशल मीडिया पर लड़की बनकर ठगी करने वाले दो युवक गिरफ्तार, शादी का झांसा देकर करते थे ठगी' }, 
// //         { category: 'टेक्नोलॉजी', text: 'इन डिवाइसों में बंद हो जाएगा WhatsApp! फटाफट चेक करें कहीं आपका फोन भी तो नहीं है शामिल', prefixIcon: true }, 
// //         { category: 'टेलीविजन', text: 'स्मृति ईरानी को हूज़ कहने पर ट्रोल हुए थे राम कपूर, अब एक्टर ने दी सफाई' }, 
// //         { category: 'पंजाब', text: 'पंजाब के होशियारपुर में दर्दनाक हादसा, बस पलटने से 10 लोगों की मौत, कई घायल' }, 
// //         { category: 'राजस्थान', text: 'Watch: चांदी का पेट्रोल पंप देखा है कभी? मन्नत पूरी होने पर शख्स ने मंदिर में दान की अनोखी भेंट, वीडियो वायरल' }
// //     ];

// //   return (
// //     // <<< कोई container, Row, या Col नहीं। सिर्फ एक सीधा div। >>>
// //     // अब यह अपने पेरेंट (main टैग) की पूरी चौड़ाई लेगा।
// //     <div>
// //         {/* MainContent वाला हिस्सा सीधे यहीं रेंडर किया गया है */}
// //         <div className="bg-white p-0 shadow-sm" style={{ border: '1px solid #eee' }}>
// //             <TopStory image={trump} headline="ट्रंप ने BRICS में शामिल देशों को दी एक्स्ट्रा टैरिफ की धमकी, क्या भारत पर भी बढ़ाएंगे टैक्स?" />
// //             <hr className="my-2" />
         
// //             <HindiNewsSection  />
// //             <hr className="my-2" />
          
// //             <NewsShortsSection/>
// //             <hr className="my-2" />
            
// //             <LatestNewsSection stories={latestNews} />
          
// //         </div>

// //         {/* बाकी सारे सेक्शन एक के बाद एक सही क्रम में */}
// //         <City />
// //         <Manoranjan />
// //         <PremiereSection />
// //         <SportsSection />
// //         <BusinessSection />
// //     </div>
   
// //   );
// // };

// // // NewsPage को डिफ़ॉल्ट रूप से एक्सपोर्ट करना सुनिश्चित करें
// // export default NewsPage;



// import React, { useEffect, useState } from 'react';
// import { allNews } from '../../Services/authApi';

// // Components
// import TopStory from '../NewsDetails/TopStory';
// import LatestNewsSection from '../NewsDetails/LatestNewsSection';
// import City from '../NewsDetails/City';
// import Manoranjan from '../NewsDetails/Manoranjan';
// import PremiereSection from '../NewsDetails/PremiereSection';
// import SportsSection from '../NewsDetails/SportsSection';
// import BusinessSection from '../NewsDetails/BusinessSection';
// import NewsShortsSection from '../NewsDetails/NewsShortsSection';
// import HindiNewsSection from '../NewsDetails/HindiNewsSection';

// const NewsPage = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     fetchNewsData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % 10); // सिर्फ 5 स्लाइड के लिए
//     }, 4000); // 4 सेकंड में स्लाइड बदले

//     return () => clearInterval(interval);
//   }, [newsData]);

//   const fetchNewsData = async () => {
//     try {
//       const res = await allNews();
//       if (res.success) {
//         setNewsData(res.data);
//       }
//     } catch (err) {
//       console.error("News fetch error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading news...</div>;

//   const topStories = newsData.slice(0, 5); // Top 5 items

//   return (
//     <div>
//       <div className="bg-white p-0 shadow-sm" style={{ border: '1px solid #eee' }}>
//         {/* --- ✅ Auto Rotating TopStory Section --- */}
//         {topStories.length > 0 && (
//   <div style={{
//     position: 'relative',
//     overflow: 'hidden',
//     height: '280px', // same as static version ka look
//     borderRadius: '8px',
//     marginBottom: '1rem',
//   }}>
//     {topStories.map((news, index) => (
//       <div
//         key={news._id}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: index === currentSlide ? 0 : '100%',
//           width: '100%',
//           height: '100%',
//           opacity: index === currentSlide ? 1 : 0,
//           transition: 'all 0.8s ease-in-out',
//           zIndex: index === currentSlide ? 2 : 1,
//         }}
//       >
//         <TopStory
//           image={news?.media?.[0]?.url || ''}
//           headline={news?.title || ''}
//         />
//       </div>
//     ))}
//   </div>
// )}


//         <hr className="my-2" />
//         <HindiNewsSection />
//         <hr className="my-2" />
//         <NewsShortsSection />
//         <hr className="my-2" />

//         <LatestNewsSection
//           stories={newsData.slice(5, 10).map(news => ({
//             category: news?.category?.name || "General",
//             text: news?.title || "",
//             prefixIcon: false
//           }))}
//         />
//       </div>

//       {/* बाकी सेक्शन */}
//       <City />
//       <Manoranjan />
//       <PremiereSection />
//       <SportsSection />
//       <BusinessSection />
//     </div>
//   );
// };

// export default NewsPage;

import React, { useEffect, useState } from 'react';
import { allNews } from '../../Services/authApi';
import TopStory from '../NewsDetails/TopStory';
import LatestNewsSection from '../NewsDetails/LatestNewsSection';
import City from '../NewsDetails/City';
import Manoranjan from '../NewsDetails/Manoranjan';
import PremiereSection from '../NewsDetails/PremiereSection';
import SportsSection from '../NewsDetails/SportsSection';
import BusinessSection from '../NewsDetails/BusinessSection';
import NewsShortsSection from '../NewsDetails/NewsShortsSection';
import HindiNewsSection from '../NewsDetails/HindiNewsSection';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const res = await allNews();
        if (res.success) {
          setNewsData(res.data);
        }
      } catch (err) {
        console.error("News fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) return <div>Loading news...</div>;

  return (
    <div>
      <div className="bg-white p-0 shadow-sm" style={{ border: '1px solid #eee' }}>
        {/* ✅ TopStory component ko full data de rahe hain */}
        <TopStory data={newsData} />

        {/* बाकी सेक्शन बाद में */}

         <hr className="my-2" />
       {/* <HindiNewsSection /> */}
       <HindiNewsSection
  stories={newsData.slice(10, 15)} // 10 से 15 वाली news Hindi section को दो
/>
         <hr className="my-2" />
        <NewsShortsSection />
<hr className="my-2" />

        <LatestNewsSection
          stories={newsData.slice(5, 10).map(news => ({
            category: news?.category?.name || "General",
            text: news?.title || "",
            prefixIcon: false
          }))}
        />
      </div>

   {/* बाकी सेक्शन */}
      <City />
      <Manoranjan />
      <PremiereSection />
      <SportsSection />
      <BusinessSection />
      
    </div>
  );
};

export default NewsPage;
