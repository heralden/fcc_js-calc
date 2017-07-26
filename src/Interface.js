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
    {buttons.map(row => (
      <tr>
        {row.map(e => (
          <td className="Interface-cell"
            rowSpan={e.rowSpan || 1}
            colSpan={e.colSpan || 1}
          >
            <button className="Interface-button" type="button">
              {e.text}
            </button>
          </td>
        ))}
      </tr>
    ))}
  </table>
);

export default Interface;
