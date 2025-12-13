import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-scene">

            {/* Title Overlay */}
            <div className="scene-title">
                <h1>MATTHEW GWYNFRYN THOMAS</h1>
            </div>

            {/* Hotspots */}
            <div
                className="hotspot writing-spot"
                onClick={() => navigate('/writing')}
            >
                <div className="hotspot-label">WRITING</div>
            </div>

            <div
                className="hotspot research-spot"
                onClick={() => navigate('/research')}
            >
                <div className="hotspot-label">RESEARCH</div>
            </div>

            <div
                className="hotspot projects-spot"
                onClick={() => navigate('/projects')}
            >
                <div className="hotspot-label">PROJECTS</div>
            </div>

            <div className="social-links-minimal">
                <a href="https://github.com/matthewgthomas" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://linkedin.com/in/matthewgthomas" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
        </div>
    );
}
