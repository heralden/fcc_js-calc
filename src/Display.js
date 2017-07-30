import React from 'react';
import './Display.css';

const Display = ({ text, subtext }) => (
  <div className="Display">
    <span className="Display-text">{constrictInp(european(text))}</span>
    <span className="Display-subtext">{constrictSub(reduceSubtext(subtext))}</span>
  </div>
);

const constrictInp = str => str.slice(0, 14)
const constrictSub = str => str.slice(0, 28)

const reduceSubtext = sub =>
  sub.reduce((acc, e) => acc.concat(european(e)), "")

const european = e => "".concat(e).replace(/\./g, ',').replace(/\*/g, '•')

export default Display;
