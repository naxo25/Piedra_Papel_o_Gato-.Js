import { useEffect, useState } from 'react';
import axios from 'axios';

function useMoves () {

  const [moves, setMoves ] = useState([]);

  const getMoves = async () => {
    
    const moves = [
      { move: "paper", kills: "rock"},
      { move: "rock", kills: "scissors"},
      { move: "scissors", kills: "paper"}
    ]
    setMoves(moves); 
    //axios.get('http://localhost:4000/moves').then(moves => setMoves(moves.data));
  };

  // Inicia
  useEffect(() => {
    getMoves();
  }, []);

	return moves;
};

export default useMoves;