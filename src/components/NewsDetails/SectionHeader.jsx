import React from 'react';

const SectionHeader = ({ title }) => (
  <div className="d-flex justify-content-between align-items-center px-3 py-2">
    <h4 className="fw-bold m-0">{title}</h4>
    <a href="#" className="text-primary text-decoration-none">और देखें</a>
  </div>
);

export default SectionHeader