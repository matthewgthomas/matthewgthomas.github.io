import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="title-section">
                <h1 className="glitch-text">MATTHEW GWYNFRYN THOMAS</h1>
                <p className="subtitle">ADVENTURER & RESEARCHER</p>
            </div>

            <div className="cats-display">
                {/* Cat 1: Walking (Row 0 usually) */}
                <div className="cat-wrapper">
                    <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={0} scale={0.5} duration="1s" />
                </div>
                {/* Cat 2: Sitting/Idle (Row 1 usually) */}
                <div className="cat-wrapper">
                    <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={1} scale={0.5} duration="1.2s" />
                </div>
            </div>

            <div className="social-links">
                <a href="https://github.com/matthewgthomas" target="_blank" rel="noopener noreferrer" className="retro-btn">
                    GITHUB
                </a>
                <a href="https://linkedin.com/in/matthewgthomas" target="_blank" rel="noopener noreferrer" className="retro-btn">
                    LINKEDIN
                </a>
            </div>
        </div>
    );
}
