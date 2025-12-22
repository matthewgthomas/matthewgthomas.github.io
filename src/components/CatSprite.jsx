import React from 'react';
import './CatSprite.css';

export default function CatSprite({
    image,
    totalWidth = 1024,
    totalHeight = 790,
    cols = 4,
    rows = 3,
    row = 0, // 0-indexed row for specific animation (walk, sit, etc)
    scale = 1,
    duration = '4s'
}) {
    const frameWidth = totalWidth / cols;
    const frameHeight = totalHeight / rows;
    const offsetY = -(row * frameHeight);

    const style = {
        backgroundImage: `url(${image})`,
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        '--sprite-width': `-${totalWidth}px`,
        '--offset-y': `${offsetY}px`,
        '--steps': cols,
        '--duration': duration,
        transform: `scale(${scale})`,
    };

    return <div className="cat-sprite" style={style} />;
}
