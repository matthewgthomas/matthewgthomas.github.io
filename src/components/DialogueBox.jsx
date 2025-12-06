import React, { useState, useEffect } from 'react';
import './DialogueBox.css';

export default function DialogueBox({ text, options = [], onOptionClick }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        setDisplayedText('');
        setIsTyping(true);
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, 30); // Typing speed

        return () => clearInterval(timer);
    }, [text]);

    return (
        <div className="dialogue-overlay">
            <div className="dialogue-box">
                <p className="dialogue-text">{displayedText}</p>

                {!isTyping && options.length > 0 && (
                    <div className="dialogue-options">
                        {options.map((option, idx) => (
                            <button
                                key={idx}
                                className="dialogue-btn"
                                onClick={() => onOptionClick(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
