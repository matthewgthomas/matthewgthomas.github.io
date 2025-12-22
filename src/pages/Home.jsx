import { useNavigate, Link } from 'react-router-dom';
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
                <Link to="/about">WHO AM I</Link>
                <Link to="/now">WHAT AM I DOING</Link>
            </div>
        </div>
    );
}
