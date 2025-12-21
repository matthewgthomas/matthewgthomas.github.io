import { Link } from 'react-router-dom';
import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './Now.css';

export default function Now() {
    return (
        <div className="page-wrapper">
            <div className="fixed-background" />
            <div className="content-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={1} scale={0.4} />
                    </div>
                    <h1>What I'm Up To</h1>
                    <div className="mascot-wrapper">
                        <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={2} scale={0.4} />
                    </div>
                </div>

                <div className="intro-text">
                    <p>
                        This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>. I'll share some of what I'm doing now (ish) here. Explore the rest of <Link to="/">my website</Link> to learn more.
                    </p>
                </div>
                <div className="content-body">
                    <h3>Creating</h3>
                    <ul>
                        <li>This website, inspired by the classic <a href="https://lucasfilm.fandom.com/wiki/LucasArts_adventure_games" target="_blank" rel="noopener noreferrer">LucasArts point-and-click adventure games</a>.</li>
                        <li>Writing an article about the skills humanitarian analysts should nurture now, to prepare for how the humanitarian ecosystem and artificial intelligence are likely to change over the next 3-5 years.</li>
                    </ul>

                    <h3>Baking</h3>
                    <ul>
                        <li><a href="https://smittenkitchen.com/2025/11/pumpkin-basque-cheesecake/" target="_blank">Pumpkin Basque Cheesecake</a></li>
                        <li><a href="https://www.bbcgoodfood.com/recipes/christmas-sticky-toffee-pudding" target="_blank">Christmas Sticky Toffee Pudding</a></li>
                    </ul>

                    <h3>Reading</h3>
                    <ul>
                        <li>About to embark on <a href="https://www.goodreads.com/book/show/17899948-rebecca" target="_blank">Rebecca</a> by Daphne du Maurier.</li>
                        <li>Just finished <a href="https://www.goodreads.com/book/show/228587642-the-rose-field" target="_blank">The Rose Field</a> by Philip Pullma.</li>
                        <li>Learning about chocolate supply chains with <a href="https://www.goodreads.com/book/show/38623593-cocoa" target="_blank">Cocoa</a> by Kristy Leissle.</li>
                    </ul>

                    <div className="now-date">
                        Last updated: December 2025
                    </div>
                </div>
            </div>
        </div>
    );
}
