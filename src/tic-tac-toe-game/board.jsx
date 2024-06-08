import React, { useState } from 'react';
import Square from './square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isxTurn, setisXTurn] = useState(true);
    const checkWinner = () => {
        const winComb = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let comb of winComb) {
            const [a, b, c] = comb;
            if (state[a] !== null && state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return false;
    };
  
    const isWinner = checkWinner();
    const handleClick = (index) => {
        if (state[index]!==null || isWinner) {
            return;
        }

        const copyState = [...state];
        copyState[index] = isxTurn ? "X" : "0";
        setState(copyState);
        setisXTurn(!isxTurn);
    };
    const handleReset = () => {
        setState(Array(9).fill(null));
        setisXTurn(true);
    };
    return (
        <div className='board-containter'>
            {isWinner ? (
                <>
                    {isWinner} Won the Game <button onClick={handleReset}>PLay Again</button>
                </>) :
                <>
                    <h1>Player {isxTurn ? "X" : "0"} Please Move</h1>
                        <div className="board-row">
                        <Square onClick={() => { handleClick(0) }} value={state[0]} />
                        <Square onClick={() => { handleClick(1) }} value={state[1]} />
                        <Square onClick={() => { handleClick(2) }} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => { handleClick(3) }} value={state[3]} />
                        <Square onClick={() => { handleClick(4) }} value={state[4]} />
                        <Square onClick={() => { handleClick(5) }} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => { handleClick(6) }} value={state[6]} />
                        <Square onClick={() => { handleClick(7) }} value={state[7]} />
                        <Square onClick={() => { handleClick(8) }} value={state[8]} />
                    </div> </>}

        </div>
    );
};



export default Board;