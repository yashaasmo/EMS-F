 
import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import placementConsultantsImg from '../assets/placement-consultants.jpg';
import realEstateAgentsImg from '../assets/real-estate-agents.jpg';
import websiteDesigningServicesImg from '../assets/website-designing.jpg';
import travelAgentsImg from '../assets/travel-agents.jpg';
import websiteDevelopmentServicesImg from '../assets/website-development.jpg';
import tourOperatorsImg from '../assets/tour-operators.jpg';
import recruitmentAgencyImg from '../assets/recruitment-agency.jpg';
import hrSolutionsImg from '../assets/hr-solutions.jpg';
import airConditionerRepairingImg from '../assets/air-conditioner-repairing.jpg';
import exportConsultantsImg from '../assets/export-consultants.jpg';
import companyRegistrationImg from '../assets/company-registration.jpg';
import mobileApplicationDevelopmentImg from '../assets/mobile-application-development.jpg';
import interiorDesigningServicesImg from '../assets/interior-designing-services.jpg';
import securityGuardsImg from '../assets/security-guards.jpg';
import overseasPlacementServicesImg from '../assets/overseas-placement-services.jpg';
import liaisoningServicesImg from '../assets/liaisoning-services.jpg';
import freightForwardingServicesImg from '../assets/freight-forwarding-services.jpg';
import carRentalServicesImg from '../assets/car-rental-services.jpg';
import buildingContractorsImg from '../assets/building-contractors.jpg';
import vastuConsultancyImg from '../assets/vastu-consultancy.jpg';
import architecturalServicesImg from '../assets/architectural-services.jpg';
import realEstateDevelopersImg from '../assets/real-estate-developers.jpg';
import housekeepingServiceImg from '../assets/housekeeping-service.jpg';
import careerConsultantsImg from '../assets/career-consultants.jpg';
import manpowerServiceImg from '../assets/manpower-service.jpg';
import incomeTaxConsultantImg from '../assets/income-tax-consultant.jpg';
import laptopRepairingServicesImg from '../assets/laptop-repairing-services.jpg';
import falseCeilingServicesImg from '../assets/false-ceiling-services.jpg';
import electricalControlPanelImg from '../assets/electrical-control-panel.jpg';
import offsetPrintingServicesImg from '../assets/offset-printing-services.jpg';
import legalConsultantImg from '../assets/legal-consultant.jpg';
import photographyServicesImg from '../assets/photography-services.jpg';
import websiteOptimizationServiceImg from '../assets/website-optimization-service.jpg';
import logisticServicesImg from '../assets/logistic-services.jpg';
import transportationServicesImg from '../assets/transportation-services.jpg';
import isoCertificationServicesImg from '../assets/iso-certification-services.jpg';
import turnkeyProjectsImg from '../assets/turnkey-projects.jpg';
import cabServiceImg from '../assets/cab-service.jpg';
import civilContractorsImg from '../assets/civil-contractors.jpg';
import interiorArchitectureImg from '../assets/interior-architecture.jpg';
import graniteSlabsImg from '../assets/granite-slabs.jpg';
import dishwashLiquidImg from '../assets/dishwash-liquid.jpg';
import semiHuskedCoconutsImg from '../assets/semi-husked-coconuts.jpg';
import badiElaichiImg from '../assets/badi-elaichi.jpg';
import poloMensTshirtsImg from '../assets/polo-mens-t-shirts.jpg';
import pepperSeedsImg from '../assets/pepper-seeds.jpg';
import wheatFlourImg from '../assets/wheat-flour.jpg';
import milletSeedImg from '../assets/millet-seed.jpg';
import fennelSeedsImg from '../assets/fennel-seeds.jpg';
import mensRoundNeckTshirtImg from '../assets/mens-round-neck-t-shirt.jpg';
import jeeraPowderImg from '../assets/jeera-powder.jpg';
import toorDalImg from '../assets/toor-dal.jpg';
import dhaniyaPowderImg from '../assets/dhaniya-powder.jpg';
import dryRedChilliImg from '../assets/dry-red-chilli.jpg';
import corianderSeedsImg from '../assets/coriander-seeds.jpg';
import turmericFingerImg from '../assets/turmeric-finger.jpg';
import cuminSeedsImg from '../assets/cumin-seeds.jpg';
import plasticRoofingSheetsImg from '../assets/plastic-roofing-sheets.jpg';
import frpRoofingSheetsImg from '../assets/frp-roofing-sheets.jpg';
import vBeltsImg from '../assets/v-belts.jpg';
 
// --- स्टेप 2: iconMap में import किए गए variables का उपयोग करें ---
const iconMap = {
    // Services
    'Placement Consultants': placementConsultantsImg,
    'Real Estate Agents': realEstateAgentsImg,
    'Website Designing Services': websiteDesigningServicesImg,
    'Travel Agents': travelAgentsImg,
    'Website Development Services': websiteDevelopmentServicesImg,
    'Tour Operators': tourOperatorsImg,
    'Recruitment Agency': recruitmentAgencyImg,
    'HR Solutions': hrSolutionsImg,
    'Air Conditioner Repairing': airConditionerRepairingImg,
    'Export Consultants': exportConsultantsImg,
    'Company Registration': companyRegistrationImg,
    'Mobile Application Development': mobileApplicationDevelopmentImg,
    'Interior Designing Services': interiorDesigningServicesImg,
    'Security Guards': securityGuardsImg,
    'Overseas Placement Services': overseasPlacementServicesImg,
    'Liaisoning Services': liaisoningServicesImg,
    'Freight Forwarding Services': freightForwardingServicesImg,
    'Car Rental Services': carRentalServicesImg,
    'Building Contractors': buildingContractorsImg,
    'Vastu Consultancy': vastuConsultancyImg,
    'Architectural Services': architecturalServicesImg,
    'Real Estate Developers': realEstateDevelopersImg,
    'Housekeeping Service': housekeepingServiceImg,
    'Career Consultants': careerConsultantsImg,
    'Manpower Service': manpowerServiceImg,
    'Income Tax Consultant': incomeTaxConsultantImg,
    'Laptop Repairing Services': laptopRepairingServicesImg,
    'False Ceiling Services': falseCeilingServicesImg,
    'Electrical Control Panel Service': electricalControlPanelImg,
    'Offset Printing Services': offsetPrintingServicesImg,
    'Legal Consultant': legalConsultantImg,
    'Photography Services': photographyServicesImg,
    'Website Optimization Service': websiteOptimizationServiceImg,
    'Logistic Services': logisticServicesImg,
    'Transportation Services': transportationServicesImg,
    'ISO Certification Services': isoCertificationServicesImg,
    'Turnkey Projects': turnkeyProjectsImg,
    'CAB Service': cabServiceImg,
    'Civil Contractors': civilContractorsImg,
    'Interior Architecture': interiorArchitectureImg,
    // Products
    'Granite Slabs': graniteSlabsImg,
    'Dishwash Liquid': dishwashLiquidImg,
    'Semi Husked Coconuts': semiHuskedCoconutsImg,
    'Badi Elaichi': badiElaichiImg,
    'Polo Mens T-shirts': poloMensTshirtsImg,
    'Pepper Seeds': pepperSeedsImg,
    'Wheat Flour': wheatFlourImg,
    'Millet Seed': milletSeedImg,
    'Fennel Seeds': fennelSeedsImg,
    'Mens Round Neck T-shirt': mensRoundNeckTshirtImg,
    'Jeera Powder': jeeraPowderImg,
    'Toor Dal': toorDalImg,
    'Dhaniya Powder': dhaniyaPowderImg,
    'Dry Red Chilli': dryRedChilliImg,
    'Coriander Seeds': corianderSeedsImg,
    'Turmeric Finger': turmericFingerImg,
    'Cumin Seeds': cuminSeedsImg,
    'Plastic Roofing Sheets': plasticRoofingSheetsImg,
    'FRP Roofing Sheets': frpRoofingSheetsImg,
    'V-belts': vBeltsImg,
};
const placeholderImageUrl = 'https://via.placeholder.com/90';
 
const serviceNames = ['Placement Consultants', 'Real Estate Agents', 'Website Designing Services', 'Travel Agents', 'Website Development Services', 'Tour Operators', 'Recruitment Agency', 'HR Solutions', 'Air Conditioner Repairing', 'Export Consultants', 'Company Registration', 'Mobile Application Development', 'Interior Designing Services', 'Security Guards', 'Overseas Placement Services', 'Liaisoning Services', 'Freight Forwarding Services', 'Car Rental Services', 'Building Contractors', 'Vastu Consultancy', 'Architectural Services', 'Real Estate Developers', 'Housekeeping Service', 'Career Consultants', 'Manpower Service', 'Income Tax Consultant', 'Laptop Repairing Services', 'False Ceiling Services', 'Electrical Control Panel Service', 'Offset Printing Services', 'Legal Consultant', 'Photography Services', 'Website Optimization Service', 'Logistic Services', 'Transportation Services', 'ISO Certification Services', 'Turnkey Projects', 'CAB Service', 'Civil Contractors', 'Interior Architecture'];
const productNames = ['Granite Slabs', 'Dishwash Liquid', 'Semi Husked Coconuts', 'Badi Elaichi', 'Polo Mens T-shirts', 'Pepper Seeds', 'Wheat Flour', 'Millet Seed', 'Fennel Seeds', 'Mens Round Neck T-shirt', 'Jeera Powder', 'Toor Dal', 'Dhaniya Powder', 'Dry Red Chilli', 'Coriander Seeds', 'Turmeric Finger', 'Cumin Seeds', 'Plastic Roofing Sheets', 'FRP Roofing Sheets', 'V-belts'];
 
const servicesData = serviceNames.map((name, index) => ({ id: `service-${index}`, name, imageUrl: iconMap[name] || placeholderImageUrl }));
const productsData = productNames.map((name, index) => ({ id: `product-${index}`, name, imageUrl: iconMap[name] || placeholderImageUrl }));
 
// --- लेआउट कंपोनेंट्स ---
const CategoryItem = ({ item }) => {
    const { imageUrl, name } = item;
    return (
        <Col className="mb-4 text-center d-flex justify-content-center px-2">
            {/* --- बदलाव यहाँ है: className में 'category-link' हमेशा रहेगा --- */}
            <a href="#" className="text-decoration-none text-dark d-flex flex-column align-items-center category-link" style={{ width: '120px' }}>
                <div
                    className="bg-white d-flex align-items-center justify-content-center rounded-3 overflow-hidden"
                    style={{
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        width: '35px',
                        height: '35px',
                    }}
                >
                   <img
                        src={imageUrl}
                        alt={name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        onError={(e) => { e.target.onerror = null; e.target.src=placeholderImageUrl }}
                    />
                </div>
                {/* --- बदलाव यहाँ है: className और इनलाइन स्टाइल हटा दिए गए हैं --- */}
                <p className="mt-2 mb-0 category-text" style={{ fontSize: '0.8rem', fontWeight: '500', lineHeight: '1.2' }}>
                    {name}
                </p>
            </a>
        </Col>
    );
};
 
const SectionHeader = ({ title, city }) => (
    <h2 className="text-center mb-4 fw-bold">
        {title} in <span style={{ color: '#007bff' }}>{city}</span>
    </h2>
);
 
// --- मुख्य पेज कंपोनेंट ---
const DirectoryPage = () => {
    return (
        <>
            {/* --- बदलाव यहाँ है: होवर के लिए CSS स्टाइल जोड़ा गया है --- */}
            <style type="text/css">
                {`
                    .category-text {
                        color: #212529; /* Default text color */
                        transition: color 0.2s ease-in-out;
                        text-decoration: none; /* Default no underline */
                    }
                    .category-link:hover .category-text {
                        color: #0d6efd; /* Blue color on hover */
                        text-decoration: underline; /* Underline on hover */
                    }
                `}
            </style>
            <div style={{ backgroundColor: '#fff' }}>
                <div
                    className="py-5 d-flex align-items-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg')`,
                        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px',
                    }}
                >
                    <Container className="text-center text-white">
                        <h5 className="fw-light">डायरेक्टरी</h5>
                        <h1 className="display-4 fw-bold">Explore Best Places In City</h1>
                        <p className="lead mb-4">Find some of the best tips from around the city from our partners and friends.</p>
                        <Row className="justify-content-center">
                            <Col lg={8} md={10}>
                                <InputGroup>
                                    <Form.Control placeholder="All State +" style={{ maxWidth: '150px' }}/>
                                    <Form.Control placeholder="City +" style={{ maxWidth: '150px' }}/>
                                    <Form.Control placeholder="What are you looking for..." />
                                    <Button variant="danger" style={{ backgroundColor: '#c00', borderColor: '#c00', padding: '0 2rem' }}>Search</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
 
                <Container className="py-5">
                    <section className="mb-5">
                        <SectionHeader title="Popular Services" city="Indore" />
                        <Row xs={2} sm={3} md={4} lg={5} className="g-3 justify-content-center">
                            {servicesData.map(service => <CategoryItem key={service.id} item={service} />)}
                        </Row>
                    </section>
 
                    <section>
                        <SectionHeader title="Selling Products" city="Indore" />
                        <Row xs={2} sm={3} md={4} lg={5} className="g-3 justify-content-center">
                            {productsData.map(product => <CategoryItem key={product.id} item={product} />)}
                        </Row>
                    </section>
 
                    <div className="text-center mt-5">
                        <Button size="lg" variant="danger" style={{ backgroundColor: '#c00', borderColor: '#c00', padding: '0.5rem 2.5rem' }}>View More</Button>
                    </div>
                </Container>
            </div>
        </>
    );
};
 
export default DirectoryPage;