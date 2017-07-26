import React from 'react';
import './Display.css';

const Display = ({ text, subtext }) => (
  <div className="Display">
    <span className="Display-text">{text}</span>
    <span className="Display-subtext">{subtext}</span>
  </div>
);

export default Display;
