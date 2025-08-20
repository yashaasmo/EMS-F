
// import React, { useState, useRef, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { NavLink } from "react-router-dom";

// // Aapke saare imports...
// import IndiaFlagIconUrl from '../../assets/icons/india-flag.svg';
// import playStoreImage from '../../assets/playstore.png';
// import appStoreImage from '../../assets/appstore.png';

// const capitalizeFirstLetter = (string) => {
//   if (typeof string !== 'string' || string.length === 0) return '';
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// // NavItem component (isme koi badlav nahi hai)
// const NavItem = ({ to, emoji, iconUrl, text, style = {} }) => (
//     <NavLink 
//       to={to} 
//       className={({ isActive }) => "nav-link d-flex align-items-center fw-medium px-2 " + (isActive ? 'text-danger fw-bold' : 'text-dark')} 
//       end={to === "/"}
//       style={style}
//     >
//         <span style={{ width: '30px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
//             {iconUrl ? <img src={iconUrl} alt={text} style={{ height: '15px', width: 'auto' }} /> : <span style={{ fontSize: '1.2rem' }}>{emoji}</span>}
//         </span>
//         {text}
//     </NavLink>
// );

// const LeftSidebar = () => {
//   const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
//   const stateRef = useRef(null);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const stateSubItems = [
//     { to: "/state/madhya-pradesh", text: "Madhya Pradesh" },
//     { to: "/state/chhattisgarh", text: "Chhattisgarh" },
//     { to: "/state/delhi", text: "Delhi" },
//     { to: "/state/uttarakhand", text: "Uttarakhand" },
//     { to: "/state/uttar-pradesh", text: "Uttar Pradesh" },
//   ];

//   const handleMouseEnter = () => {
//     if (stateRef.current) {
//       const rect = stateRef.current.getBoundingClientRect();
//       setDropdownPosition({
//         top: rect.top - 8,
//         left: rect.right,
//       });
//     }
//     setIsStateDropdownOpen(true);
//   };

//   const DropdownMenu = () => {
//     const portalRoot = document.getElementById('portal-root');
//     if (!portalRoot) return null;

//     const menu = (
//       <div style={{ 
//         position: "fixed",
//         top: `${dropdownPosition.top}px`,
//         left: `${dropdownPosition.left}px`,
//         backgroundColor: "#c82333", 
//         borderRadius: "8px", 
//         padding: "10px 20px", 
//         width: "160px", 
//         zIndex: 9999,
//         boxShadow: "2px 2px 8px rgba(0,0,0,0.15)" 
//       }}>
//         <div style={{ position: 'absolute', top: '15px', right: '100%', width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '8px solid #c82333' }}></div>
//         {stateSubItems.map((subItem, subIndex) => (
//           <NavLink 
//             key={subIndex} 
//             to={subItem.to} 
//             onClick={() => setIsStateDropdownOpen(false)}
//             className={({ isActive }) => "d-block text-white text-nowrap text-decoration-none py-1 " + (isActive ? 'fw-bold' : 'fw-normal')}
//           >
//             {subItem.text}
//           </NavLink>
//         ))}
//       </div>
//     );
    
//     return ReactDOM.createPortal(menu, portalRoot);
//   };

//   return (
//     <div className="bg-white border-end p-2" style={{ width: "170px", height: '100%' }}>
      
//       {/* --- 👇 YAHAN PAR 2px ko 5px KIYA GAYA HAI (2px + 3px) 👇 --- */}
//       <NavItem 
//         to="/" 
//         emoji="🏠" 
//         text={capitalizeFirstLetter("home")} 
//         style={{ marginTop: '5px' }} 
//       />
      
//       <NavItem to="/india" iconUrl={IndiaFlagIconUrl} text={capitalizeFirstLetter("india")} />
      
//       <div 
//         onMouseEnter={handleMouseEnter} 
//         onMouseLeave={() => setIsStateDropdownOpen(false)}
//       >
//         <div ref={stateRef} className="nav-link d-flex align-items-center text-dark fw-medium py-1 px-2" style={{ cursor: "pointer" }}>
//           <span style={{ width: '30px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontSize: '1.2rem' }}>🏛</span>
//           {capitalizeFirstLetter("state")}
//         </div>
//         {isStateDropdownOpen && <DropdownMenu />}
//       </div>
      
//       <NavItem to="/entertainment" emoji="🎬" text={capitalizeFirstLetter("entertainment")} />
//       <NavItem to="/astrology" emoji="🔯" text={capitalizeFirstLetter("astrology")} />
//       <NavItem to="/sports" emoji="🏏" text={capitalizeFirstLetter("sports")} />
//       <NavItem to="/thoughts" emoji="💡" text={capitalizeFirstLetter("thoughts")} />
//       <NavItem to="/business" emoji="💼" text={capitalizeFirstLetter("business")} />
//       <NavItem to="/youth" emoji="🧑" text={capitalizeFirstLetter("youth")} />
//       <NavItem to="/directory" emoji="📁" text={capitalizeFirstLetter("directory")} />
      
//       {/* Download Section */}
            
//  <div className="pt-2">
//         <p className="small text-muted mb-0" style={{ fontSize: "0.75rem" }}>
//            Download App from
//            </p>
        
//            <a 
//             href="YOUR_PLAY_STORE_LINK" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="d-block"
//             style={{ marginBottom: "-95px" }} 
//         >
//             <img 
//                 src={playStoreImage} 
//                 alt="Get it on Google Play" 
//                 style={{ 
//                     width: '135px', 
//                     height: 'auto',
//                     display: 'block' 
//                 }} 
//             />
//         </a>
        
//         <a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer" className="d-block">
//             <img 
//                 src={appStoreImage} 
//                 alt="Download on the App Store" 
//                 style={{ 
//                     width: '135px', 
//                     height: 'auto', 
//                     display: 'block' 
//                 }} 
//             />
//         </a>
//       </div>

//     </div>
//   );
// };

// export default LeftSidebar;

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

// Aapke saare imports...
import IndiaFlagIconUrl from '../../assets/icons/india-flag.svg';
import playStoreImage from '../../assets/playstore.png';
import appStoreImage from '../../assets/appstore.png';

const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string' || string.length === 0) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// NavItem component (isme koi badlav nahi hai)
const NavItem = ({ to, emoji, iconUrl, text, style = {} }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => "nav-link d-flex align-items-center fw-medium px-2 " + (isActive ? 'text-danger fw-bold' : 'text-dark')} 
      end={to === "/"}
      style={style}
    >
        <span style={{ width: '30px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
            {iconUrl ? <img src={iconUrl} alt={text} style={{ height: '15px', width: 'auto' }} /> : <span style={{ fontSize: '1.2rem' }}>{emoji}</span>}
        </span>
        {text}
    </NavLink>
);

const LeftSidebar = () => {
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const stateRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const stateSubItems = [
    { to: "/state/madhya-pradesh", text: "Madhya Pradesh" },
    { to: "/state/chhattisgarh", text: "Chhattisgarh" },
    { to: "/state/delhi", text: "Delhi" },
    { to: "/state/uttarakhand", text: "Uttarakhand" },
    { to: "/state/uttar-pradesh", text: "Uttar Pradesh" },
  ];

  const handleMouseEnter = () => {
    if (stateRef.current) {
      const rect = stateRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top - 8,
        left: rect.right,
      });
    }
    setIsStateDropdownOpen(true);
  };

  const DropdownMenu = () => {
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    const menu = (
      <div style={{ 
        position: "fixed",
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        backgroundColor: "#c82333", 
        borderRadius: "8px", 
        padding: "10px 20px", 
        width: "160px", 
        zIndex: 9999,
        boxShadow: "2px 2px 8px rgba(0,0,0,0.15)" 
      }}>
        <div style={{ position: 'absolute', top: '15px', right: '100%', width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '8px solid #c82333' }}></div>
        {stateSubItems.map((subItem, subIndex) => (
          <NavLink 
            key={subIndex} 
            to={subItem.to} 
            onClick={() => setIsStateDropdownOpen(false)}
            className={({ isActive }) => "d-block text-white text-nowrap text-decoration-none py-1 " + (isActive ? 'fw-bold' : 'fw-normal')}
          >
            {subItem.text}
          </NavLink>
        ))}
      </div>
    );
    
    return ReactDOM.createPortal(menu, portalRoot);
  };

  return (
    <div className="bg-white border-end p-2 d-flex flex-column justify-content-between" style={{ width: "170px", height: '100%' }}>
      
      <div> {/* Ek extra wrapper div taki Download Section neeche rahe */}
        {/* --- 👇 YAHAN BADLAV KIYA GAYA HAI: `pt-3` ko wapas `pt-2` KIYA GAYA HAI 👇 --- */}
        <div className="d-flex flex-column pt-2" style={{ gap: '4px' }}> {/* <-- Aap is gap ko badal sakte hain */}
          <NavItem 
            to="/" 
            emoji="🏠" 
            text={capitalizeFirstLetter("home")} 
          />
          
          <NavItem to="/india" iconUrl={IndiaFlagIconUrl} text={capitalizeFirstLetter("india")} />
          
          <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={() => setIsStateDropdownOpen(false)}
          >
            <div ref={stateRef} className="nav-link d-flex align-items-center text-dark fw-medium px-2" style={{ cursor: "pointer" }}>
              <span style={{ width: '30px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontSize: '1.2rem' }}>🏛</span>
              {capitalizeFirstLetter("state")}
            </div>
            {isStateDropdownOpen && <DropdownMenu />}
          </div>
          
          <NavItem to="/entertainment" emoji="🎬" text={capitalizeFirstLetter("entertainment")} />
          <NavItem to="/astrology" emoji="🔯" text={capitalizeFirstLetter("astrology")} />
          <NavItem to="/sports" emoji="🏏" text={capitalizeFirstLetter("sports")} />
          <NavItem to="/thoughts" emoji="💡" text={capitalizeFirstLetter("thoughts")} />
          <NavItem to="/business" emoji="💼" text={capitalizeFirstLetter("business")} />
          <NavItem to="/youth" emoji="🧑" text={capitalizeFirstLetter("youth")} />
          <NavItem to="/directory" emoji="📁" text={capitalizeFirstLetter("directory")} />
        </div>
      </div>


      {/* Download Section */}
      <div className="pt-2">
        <p className="small text-muted mb-0" style={{ fontSize: "0.75rem" }}>
           Download App from
        </p>
        
        <a 
          href="YOUR_PLAY_STORE_LINK" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="d-block"
          style={{ marginBottom: "-95px" }} 
        >
          <img 
            src={playStoreImage} 
            alt="Get it on Google Play" 
            style={{ 
              width: '135px', 
              height: 'auto',
              display: 'block' 
            }} 
          />
        </a>
        
        <a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer" className="d-block">
          <img 
            src={appStoreImage} 
            alt="Download on the App Store" 
            style={{ 
              width: '135px', 
              height: 'auto', 
              display: 'block' 
            }} 
          />
        </a>``
      </div>

    </div>
  );
};

export default LeftSidebar;