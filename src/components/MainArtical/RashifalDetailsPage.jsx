import React from 'react';
// <<< बदलाव: अपनी बैनर इमेज को यहाँ इम्पोर्ट करें >>>
import ariesBannerImage from '../../assets/Mesh.jpg'; // <-- यहाँ अपनी इमेज का सही पाथ डालें

// आइकॉन लाइब्रेरी से इम्पोर्ट
import {
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces
} from 'react-icons/gi';


// --- डेटा सेक्शन ---

// 1. मुख्य राशिफल का डेटा
const horoscopeData = {
  zodiacName: "मेष",
  zodiacNameEn: "Aries", 
  positive: "सकारात्मक विचार रखना और कोशिश करके अधिकतर काम स्वयं ही करने की आदत आपको सफलता देगी। दिक्कत आने पर किसी वरिष्ठ व्यक्ति की मदद आपके लिए बहुत ही सहायक रहेगी। कोई रूकी हुई या उधार भी हुई पेमेंट मिलने का अनुकूल समय है।",
  negative: "कहीं भी निवेश करने अथवा उधार देते समय उससे संबंधित पहलुओं पर सोच-विचार अवश्य करें। पुरानी नकारात्मक बातों को संबंधों पर हावी न होने दें। संबंधों को मधुर बनाए रखने के लिए अगर कोई समझौता भी करना पड़े तो कर लें।",
  business: "कारोबार में आंतरिक व्यवस्था और कार्य प्रणाली में सुधार आएगा। कोई महत्वपूर्ण ऑर्डर आने की संभावना है। अपनी सामर्थ्य से ज्यादा पैसा निवेश न करें। ऑफिस में सामंजस्य बिठाने में कुछ दिक्कतें सहन करनी पड़ सकती है। सहयोगियों अथवा उच्चाधिकारियों से मदद मिलेगी।",
  love: "वैवाहिक संबंधों में मधुरता रहेगी। घर परिवार की जरूरतों का ध्यान रखना भी आपका दायित्व है।",
  health: "स्वास्थ्य ठीक रहेगा। नजला, जुकाम जैसी परेशानी होने पर लापरवाही न बरतें तथा आयुर्वेदिक चीजों का सेवन करें।",
  luckyColor: "लाल",
  luckyNumber: "9",
};

// सभी राशियों के लिए आइकॉन
const allZodiacSigns = [
  { name: 'Aries', icon: <GiAries /> },
  { name: 'Taurus', icon: <GiTaurus /> },
  { name: 'Gemini', icon: <GiGemini /> },
  { name: 'Cancer', icon: <GiCancer /> },
  { name: 'Leo', icon: <GiLeo /> },
  { name: 'Virgo', icon: <GiVirgo /> },
  { name: 'Libra', icon: <GiLibra /> },
  { name: 'Scorpio', icon: <GiScorpio /> },
  { name: 'Sagittarius', icon: <GiSagittarius /> },
  { name: 'Capricorn', icon: <GiCapricorn /> },
  { name: 'Aquarius', icon: <GiAquarius /> },
  { name: 'Pisces', icon: <GiPisces /> },
];

// 3. अन्य राशिफल खबरों का पूरा डेटा (7 खबरें)
const otherHoroscopeNews = [
    // ... (बाकी डेटा पहले जैसा ही रहेगा) ...
  {
    id: 1,
    title: "इन राशियों के लिए यह हफ्ता नए अवसर ला सकता है, बस इन बातों का रखना होगा ध्यान; पढ़ें साप्ताहिक बिजनेस राशिफल",
    englishTitle: "Weekly Business Horoscope 7th to 13th July 2025: आइए मशहूर ज्योतिषी...",
    dateTime: "06 Jul 2025, 11:19 AM",
  },
  {
    id: 2,
    title: "ये राशियां गुस्से के कारण अपने पार्टनर करेंगी मनमुटाव, थोड़ा रहें अलर्ट; पढ़ें लव राशिफल",
    englishTitle: "Love Horoscope 6 July 2025: आज का दिन (6 जुलाई) आपकी लव लाइफ के लिए...",
    dateTime: "06 Jul 2025, 6:29 AM",
  },
  {
    id: 3,
    title: "Aaj Ka Rashifal 6 July 2025: इस राशि को आज हो सकती है बड़ी समस्या, संभलकर रहने की है जरूरत; पढ़ें दैनिक राशिफल",
    englishTitle: "Aaj Ka Rashifal 6 July 2025: मशहूर ज्योतिष आचार्य इंदु प्रकाश से जानिए...",
    dateTime: "06 Jul 2025, 6:01 AM",
  },
  {
    id: 4,
    title: "इन 2 राशियों को कार्यक्षेत्र में बड़े बदलाव के कारण होगी परेशानी, धैर्य बनाएं रखें स्थिति सुधरेगी, पढ़ें करियर राशिफल",
    englishTitle: "Weekly Career Horoscope 7th to 13th July 2025: आइए जानते हैं इस हफ्ते...",
    dateTime: "05 Jul 2025, 1:37 PM",
  },
  {
    id: 5,
    title: "प्रेम जीवन में इन 3 राशियों के अच्छे दिन होंगे शुरू, यह हफ्ता रहेगा बेहद यादगार, पढ़ें साप्ताहिक लव राशिफल",
    englishTitle: "Weekly Love Horoscope 7th to 13th July 2025: आइए जानते हैं इस हफ्ते...",
    dateTime: "05 Jul 2025, 1:30 PM",
  },
  {
    id: 6,
    title: "धन से जुड़े मामले बढ़ाएंगे 3 राशियों की टेंशन, निवेश करने से पहले कर लें विचार, पढ़ें साप्ताहिक आर्थिक राशिफल",
    englishTitle: "Weekly Finance Horoscope 7th to 13th July 2025: आइए जानते हैं इस हफ्ते...",
    dateTime: "05 Jul 2025, 1:36 PM",
  },
  {
    id: 7,
    title: "ये 2 राशियां अपने गुस्से के कारण प्रेम जीवन में करेंगी तनाव का सामना, अपशब्द कहना पड़ेगा भारी, पढ़ें लव राशिफल",
    englishTitle: "Love Horoscope 5 July 2025: आज का दिन (5 जुलाई) आपकी लव लाइफ के लिए...",
    dateTime: "05 Jul 2025, 6:00 AM",
  },
];


const RashifalDetailsPage = () => {
  const mainRedColor = '#e74c3c';
  const darkOrangeColor = '#FF8C00'; 
  
  return (
    <div className=" my-4" style={{  fontFamily: 'sans-serif' }}>
      
      {/* 1. टॉप हेडर सेक्शन */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="mb-1 fw-bold" style={{ fontSize: '0.8rem', color: mainRedColor }}>होम- ज्योतिष</p>
          <h4 className="fw-bold mb-0" style={{ color: mainRedColor }}>
            आज का {horoscopeData.zodiacName} राशिफल
          </h4>
        </div>
        <span className="text-dark small">own ads</span>
      </div>
      
      {/* 2. बैनर इमेज सेक्शन */}
      <div className="my-3 p-2 border rounded" style={{borderStyle: 'dotted', borderColor: '#aaa'}}>
        <img 
            src={ariesBannerImage} 
            alt="मेष राशिफल बैनर"
            style={{width: '100%', display: 'block'}}
        />
      </div>

      {/* 3. राशिफल का विवरण */}
      <div className="px-1" style={{ lineHeight: '1.8', color: '#343a40' }}>
        <p className="mb-2 fw-bold"><span className="text-dark">पॉजिटिव-</span> {horoscopeData.positive}</p>
        <p className="mb-2 fw-bold"><span className="text-dark">नेगेटिव-</span> {horoscopeData.negative}</p>
        <p className="mb-2 fw-bold"><span className="text-dark">व्यवसाय-</span> {horoscopeData.business}</p>
        <p className="mb-2 fw-bold"><span className="text-dark">लव-</span> {horoscopeData.love}</p>
        <p className="mb-2 fw-bold"><span className="text-dark">स्वास्थ्य-</span> {horoscopeData.health}</p>
      </div>

      <div className="px-1 mt-4" style={{ color: '#343a40' }}>
        <p className="mb-1"><span className="fw-bold text-dark">भाग्यशाली रंग-</span> {horoscopeData.luckyColor}</p>
        <p><span className="fw-bold text-dark">भाग्यशाली अंक-</span> {horoscopeData.luckyNumber}</p>
      </div>

      <div className="row text-center mt-4 g-3">
        {allZodiacSigns.map((sign) => {
            const isActive = sign.name === horoscopeData.zodiacNameEn;
            
            let iconColor;
            if (sign.name === 'Aries' || sign.name === 'Leo') {
              iconColor = darkOrangeColor; 
            } else if (isActive) {
              iconColor = darkOrangeColor;
            } else {
              iconColor = '#6c757d';
            }

            return (
                <div className="col-2" key={sign.name}>
                    <div 
                        className="mx-auto d-flex justify-content-center align-items-center"
                        style={{
                            width: '45px',
                            height: '45px',
                            filter: iconColor === '#6c757d' ? 'grayscale(100%)' : 'none',
                            opacity: iconColor === '#6c757d' ? 0.6 : 1,
                        }} 
                    >
                        {React.cloneElement(sign.icon, { 
                            size: '30px', 
                            color: iconColor
                        })}
                    </div>
                    <p className="small mt-1 mb-0" style={{ color: iconColor }}>
                        {sign.name}
                    </p>
                </div>
            )
        })}
      </div>
      
      <div className="mt-5">
        <h4 className="">राशिफल की अन्य खबरें</h4>
        <hr/>
        
        <div>
          {otherHoroscopeNews.map((news, index) => (
            <div 
              className={`d-flex py-3 ${index < otherHoroscopeNews.length - 1 ? 'border-bottom' : ''}`}
              key={news.id}
            >
              <div style={{width: '120px', height: '80px', backgroundColor: '#e9ecef', borderRadius: '8px'}} className="flex-shrink-0 me-3"></div>
              <div className="d-flex flex-column">
                <h6 className="mb-1" style={{ lineHeight: '1.4' }}>{news.title}</h6>
                <p className="text-muted small mb-1">{news.dateTime}</p>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.5' }}>{news.englishTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RashifalDetailsPage;