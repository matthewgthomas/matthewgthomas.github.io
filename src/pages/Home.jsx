import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogueBox from '../components/DialogueBox';
import './Home.css';

const DIALOGUE_TREE = {
    start: {
        text: "Explore the lab. Click on objects to view my work.",
        options: []
    },
    writing_hover: {
        text: "The Scribe's desk. Manuscripts and scrolls lie scattered here.",
        options: []
    },
    research_hover: {
        text: "The Archive. Ancient data and observations are stored here.",
        options: []
    },
    projects_hover: {
        text: "The Workbench. The Tinker's latest inventions.",
        options: []
    }
};

export default function Home() {
    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState(DIALOGUE_TREE.start.text);

    const handleHover = (key) => {
        if (DIALOGUE_TREE[key]) {
            setDisplayText(DIALOGUE_TREE[key].text);
        }
    };

    const handleLeave = () => {
        setDisplayText(DIALOGUE_TREE.start.text);
    };

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
                onMouseEnter={() => handleHover('writing_hover')}
                onMouseLeave={handleLeave}
            >
                <div className="hotspot-label">WRITING</div>
            </div>

            <div
                className="hotspot research-spot"
                onClick={() => navigate('/research')}
                onMouseEnter={() => handleHover('research_hover')}
                onMouseLeave={handleLeave}
            >
                <div className="hotspot-label">RESEARCH</div>
            </div>

            <div
                className="hotspot projects-spot"
                onClick={() => navigate('/projects')}
                onMouseEnter={() => handleHover('projects_hover')}
                onMouseLeave={handleLeave}
            >
                <div className="hotspot-label">PROJECTS</div>
            </div>

            {/* Persistent Dialogue Box at bottom */}
            <div className="scene-dialogue">
                <DialogueBox text={displayText} />
            </div>

            <div className="social-links-minimal">
                <a href="https://github.com/matthewgthomas" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://linkedin.com/in/matthewgthomas" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
        </div>
    );
}
