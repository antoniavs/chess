import React from 'react';
import './Tile.css';

const Tile = ({ tile_color, image }) => {
    if (tile_color % 2 === 0) {
        return <div className='tile black-tile'>
           {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
        </div>;
    } else {
        return <div className='tile white-tile'>
           {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
        </div>;
    }
};

export default Tile;
