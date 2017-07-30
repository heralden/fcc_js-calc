import React from 'react';
import './Interface.css';
import { buttons } from './static';

const Interface = props => (
  <table className="Interface">
    <colgroup>
      <col width="25%"/>
      <col width="25%"/>
      <col width="25%"/>
      <col width="25%"/>
    </colgroup>
    <tbody>
      {buttons.map(row => (
        <tr className="Interface-row">
          {row.map(e => (
            <td className="Interface-cell"
              rowSpan={e.rowSpan || 1}
              colSpan={e.colSpan || 1}
            >
              <button type="button" 
                className={getButtonClass("Interface-button", e)}
                onClick={props.onAction(e.text)}>
                {e.text}
              </button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const getButtonClass = (def, e) => {
  let c = def;
  if (e.oper) c += " operator";
  else if (e.func) c += " function";
  if (e.rowSpan === 2) c += " dualheight";
  else if (e.colSpan === 2) c += " dualwidth";
  return c;
}

export default Interface;
