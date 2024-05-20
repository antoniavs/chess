import React, { useRef } from 'react';
import Tile from '../Tile';
import '../chessboard/Chessboard.css';

const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const y = ['1', '2', '3', '4', '5', '6', '7', '8'];

const pieces = [];
for (let i = 0; i < 8; i++) {
    pieces.push({ image: "images/Chess_pdt60.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: "images/Chess_plt60.png", x: i, y: 1 });
}

for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "d" : "l";
    const y = p === 0 ? 7 : 0;

    pieces.push({ image: `images/Chess_r${type}t60.png`, x: 0, y });
    pieces.push({ image: `images/Chess_r${type}t60.png`, x: 7, y });
    pieces.push({ image: `images/Chess_n${type}t60.png`, x: 1, y });
    pieces.push({ image: `images/Chess_r${type}t60.png`, x: 6, y });
    pieces.push({ image: `images/Chess_b${type}t60.png`, x: 2, y });
    pieces.push({ image: `images/Chess_b${type}t60.png`, x: 5, y });
    pieces.push({ image: `images/Chess_q${type}t60.png`, x: 3, y });
    pieces.push({ image: `images/Chess_k${type}t60.png`, x: 4, y });
}

let activePiece = null;

function grabPiece(e) {
    const element = e.target;
    if (element.classList.contains("chess-piece")) {
        const x = e.clientX - 50;
        const y = e.clientY - 50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        activePiece = element;
    }
}

function movePiece(e) {
    if (activePiece) {
        const x = e.clientX - 50;
        const y = e.clientY - 50;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
    }
}

function dropPiece() {
    if (activePiece) {
        activePiece = null;
    }
}

const Chessboard = () => {
    const chessboardRef = useRef(null);
    
    let board = [];

    for (let j = y.length - 1; j >= 0; j--) {
        for (let i = 0; i < x.length; i++) {
            let tile_color = j + i + 2;
            let pieceImage = null;

            const piece = pieces.find(p => p.x === i && p.y === j);
            if (piece) {
                pieceImage = piece.image;
            }

            board.push(
                <Tile
                    key={`${x[i]}${y[j]}`}
                    image={pieceImage}
                    tile_color={tile_color}
                />
            );
        }
    }

    return (
        <div
            className="chessboard"
            ref={chessboardRef}
            onMouseMove={movePiece}
            onMouseDown={grabPiece}
            onMouseUp={dropPiece}
        >
            {board}
        </div>
    );
}

export default Chessboard;
