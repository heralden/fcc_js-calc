import React from 'react';
import './Display.css';

const Display = ({ text, subtext }) => (
  <div className="Display">
    <span className="Display-text">{text}</span>
    <span className="Display-subtext">{reduceSubtext(subtext)}</span>
  </div>
);

const reduceSubtext = sub =>
  sub.reduce((acc, e) => acc.concat(european(e)), "")

const european = e => "".concat(e).replace('.', ',').replace('*', '•')

export default Display;
