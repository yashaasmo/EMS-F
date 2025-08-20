import React, { useState, useEffect } from 'react';
import { Dropdown, Spinner } from 'react-bootstrap';
import { 
    GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, 
    GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces 
} from 'react-icons/gi';
import { getHoroscope } from '../../../Services/authApi';

const HoroscopeSection = () => {
    const [selectedSign, setSelectedSign] = useState('Aries');
    const [horoscope, setHoroscope] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    
    const signIcons = { 
        Aries: <GiAries size={28} />, Taurus: <GiTaurus size={28} />, Gemini: <GiGemini size={28} />,
        Cancer: <GiCancer size={28} />, Leo: <GiLeo size={28} />, Virgo: <GiVirgo size={28} />,
        Libra: <GiLibra size={28} />, Scorpio: <GiScorpio size={28} />, Sagittarius: <GiSagittarius size={28} />,
        Capricorn: <GiCapricorn size={28} />, Aquarius: <GiAquarius size={28} />, Pisces: <GiPisces size={28} />,
    };

    useEffect(() => {
        setIsLoading(true);
        getHoroscope(selectedSign)
            .then(response => setHoroscope(response.data))
            .catch(err => console.error("Failed to load horoscope", err))
            .finally(() => setIsLoading(false));
    }, [selectedSign]);

    const getIconWrapper = (icon) => (
        <div className="d-flex justify-content-center align-items-center rounded-circle me-3 flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: '#f0f2f5' }}>
            {icon}
        </div>
    );
    
    return ( 
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* ✅ YAHAN PAR TITLE KA COLOR RED KAR DIYA GAYA HAI ✅ */}
                <h5 className="fw-bold m-0 text-danger">Today's Horoscope</h5> 
                
                <Dropdown onSelect={(eventKey) => setSelectedSign(eventKey)}>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark text-decoration-none fw-bold p-0">
                        {selectedSign}
                    </Dropdown.Toggle> 
                    <Dropdown.Menu>
                        {signs.map(sign => (
                            <Dropdown.Item key={sign} eventKey={sign}>{sign}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu> 
                </Dropdown> 
            </div> 
            
            {isLoading ? <Spinner animation="border" size="sm" /> : horoscope && (
                <div className="d-flex align-items-start">
                    {getIconWrapper(signIcons[horoscope.name])}
                    <div>
                        <h6 className="fw-bold">{horoscope.name}</h6>
                        <p className="small text-muted">{horoscope.description}</p>
                    </div>
                </div>
            )}

            <div className="text-end">
                <a href="#!" className="text-decoration-none fw-bold small" style={{ color: '#fd7e14' }}>
                    Read More
                </a>
            </div> 
        </div> 
    );
};

export default HoroscopeSection;