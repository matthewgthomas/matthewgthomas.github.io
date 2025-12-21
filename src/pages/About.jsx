import { Link } from 'react-router-dom';
import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './About.css';

export default function About() {
    return (
        <div className="page-wrapper">
            <div className="fixed-background" />
            <div className="content-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={2} scale={0.4} />
                    </div>
                    <h1>About Me</h1>
                    <div className="mascot-wrapper">
                        <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={1} scale={0.4} />
                    </div>
                </div>

                <div className="content-body">
                    <p>
                        I'm a researcher, writer and humanitarian data scientist with a muddled background in computer science and <Link to="/research">evolutionary anthropology</Link>. I also bake, write <Link to="/writing">poems and stories</Link>, and <Link to="/projects">make nerdy things</Link>.
                    </p>

                    <p>
                        Nowadays, I lead a team of researchers, analysts and data scientists at the British Red Cross. Our job is to make sense of the world &ndash; and how it's changing &ndash; so we can better anticipate and respond to humanitarian crises.
                    </p>

                    <p>
                        You can professionally socialise with me on <a href="https://www.linkedin.com/in/matthewgthomas/" target="_blank" rel="noopener nofollow">LinkedIn</a> or academically socialise with me on <a href="https://www.researchgate.net/profile/Matthew_Thomas3/" target="_blank" rel="noopener nofollow">ResearchGate</a>, <a href="https://ucl.academia.edu/matthewgthomas" target="_blank" rel="noopener nofollow">Academia.edu</a> or <a href="https://scholar.google.co.uk/citations?user=3nB91QoAAAAJ&amp;hl=en" target="_blank" rel="noopener nofollow">Google Scholar</a>. The code for my nerdy projects is available on <a href="https://github.com/matthewgthomas" target="_blank" rel="noopener nofollow">GitHub</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
