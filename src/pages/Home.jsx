import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CatSprite from '../components/CatSprite';
import DialogueBox from '../components/DialogueBox';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './Home.css';

const DIALOGUE_TREE = {
    start: {
        text: "Welcome, traveler. Two guides await you. Who will you consult?",
        options: []
    },
    cat1_intro: {
        text: "I am The Scribe. I catalog knowledge and stories.",
        options: [
            { label: "Show me your Writings", action: "go_writing" },
            { label: "Show me your Research", action: "go_research" },
            { label: "Nevermind", action: "close" }
        ]
    },
    cat2_intro: {
        text: "I am The Tinker. I build machines and tools.",
        options: [
            { label: "Show me your Projects", action: "go_projects" },
            { label: "Check GitHub Comms", action: "open_github" },
            { label: "Nevermind", action: "close" }
        ]
    }
};

export default function Home() {
    const navigate = useNavigate();
    const [dialogueKey, setDialogueKey] = useState('start');
    const [activeCat, setActiveCat] = useState(null);
    const [showDialogue, setShowDialogue] = useState(true);

    // Close the initial welcome message after 4 seconds if no interaction
    React.useEffect(() => {
        if (dialogueKey === 'start') {
            const timer = setTimeout(() => setShowDialogue(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [dialogueKey]);

    const handleCatClick = (catKey) => {
        setActiveCat(catKey);
        setDialogueKey(`${catKey}_intro`);
        setShowDialogue(true);
    };

    const handleOptionClick = (option) => {
        if (option.action === 'go_writing') navigate('/writing');
        if (option.action === 'go_research') navigate('/research');
        if (option.action === 'go_projects') navigate('/projects');
        if (option.action === 'open_github') window.open('https://github.com/matthewgthomas', '_blank');
        if (option.action === 'close') {
            setShowDialogue(false);
            setActiveCat(null);
        }
    };

    return (
        <div className="home-container">
            <div className="title-section">
                <h1 className="glitch-text">MATTHEW GWYNFRYN THOMAS</h1>
                <p className="subtitle">CHOOSE YOUR GUIDE</p>
            </div>

            <div className="cats-display">
                {/* Cat 1: The Scribe */}
                <div
                    className={`cat-wrapper interactive ${activeCat === 'cat1' ? 'active' : ''}`}
                    onClick={() => handleCatClick('cat1')}
                >
                    <div className="cat-label">THE SCRIBE</div>
                    <CatSprite
                        image={cat1}
                        totalWidth={1024}
                        totalHeight={790}
                        row={activeCat === 'cat1' ? 1 : 0}
                        scale={0.5}
                        duration="1s"
                    />
                </div>

                {/* Cat 2: The Tinker */}
                <div
                    className={`cat-wrapper interactive ${activeCat === 'cat2' ? 'active' : ''}`}
                    onClick={() => handleCatClick('cat2')}
                >
                    <div className="cat-label">THE TINKER</div>
                    <CatSprite
                        image={cat2}
                        totalWidth={1024}
                        totalHeight={764}
                        row={activeCat === 'cat2' ? 2 : 1} // Row 2 might be a different pose
                        scale={0.5}
                        duration="1.2s"
                    />
                </div>
            </div>

            {showDialogue && (
                <DialogueBox
                    text={DIALOGUE_TREE[dialogueKey].text}
                    options={DIALOGUE_TREE[dialogueKey].options}
                    onOptionClick={handleOptionClick}
                />
            )}

            <div className="social-links-minimal">
                {/* Fallback links */}
                <a href="https://linkedin.com/in/matthewgthomas" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
        </div>
    );
}
