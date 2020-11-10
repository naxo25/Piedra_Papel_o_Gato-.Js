import React from 'react';
import axios from 'axios';
import useMoves from './get_moves';

const My = () => {

  const moves = useMoves();

	  return(   
      <table>
        <thead>
          <tr>
            <td style={{ padding: '10px', textAlign: "left" }}> Move </td>
            <td style={{ padding: '10px', textAlign: "right" }}> Kills </td>
          </tr>
        </thead>
        {
          moves.map((move) => (
            <tbody>
              <tr>
                <td style={{ padding: '10px', textAlign: "left" }}> { move.move } </td>
                <td style={{ padding: '10px', textAlign: "right" }}> { move.kills } </td>
              </tr>
            </tbody>
        ))}
      </table> 
	  )
};

export default My;