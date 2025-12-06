import CatSprite from '../components/CatSprite';
import cat2 from '../assets/cat_sprite_2.png';
import './Projects.css';

const projects = [
    {
        name: 'Fermi Estimation Tool',
        desc: 'Bayesian estimation tool for quick calculations.',
        tech: ['React', 'Math.js'],
        link: '#'
    },
    {
        name: 'Cat GAN',
        desc: 'Generating pixel art cats using adversarial networks.',
        tech: ['Python', 'PyTorch'],
        link: '#'
    },
    {
        name: 'Tensor Radiation',
        desc: 'This website! A retro adventure game portfolio.',
        tech: ['Vite', 'React'],
        link: '#'
    }
];

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={1} scale={0.4} />
                    </div>
                    <h1>Side Projects</h1>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-frame">
                                <h2>{project.name}</h2>
                                <p>{project.desc}</p>
                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                </div>
                                <a href={project.link} className="project-link">LAUNCH</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
