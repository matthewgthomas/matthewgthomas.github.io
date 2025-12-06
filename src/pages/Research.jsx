import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import './Research.css';

const publications = [
    {
        year: '2024',
        title: 'The Social Life of Algorithms',
        journal: 'Journal of Digital Anthropology',
        link: '#'
    },
    {
        year: '2023',
        title: 'Ethnography in the Age of Generative AI',
        journal: 'Computational Culture Vol 8',
        link: '#'
    },
    {
        year: '2022',
        title: 'Data Void: Missing Humans in Humanitarian Data',
        journal: 'Big Data & Society',
        link: '#'
    }
];

export default function Research() {
    return (
        <div className="research-container">
            <div className="page-header">
                <div className="mascot-wrapper">
                    <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={2} scale={0.4} />
                    <span className="mascot-label">THE SCRIBE</span>
                </div>
                <h1>Research Overview</h1>
            </div>

            <div className="research-intro">
                <p>
                    My research focuses on the intersection of human culture and machine intelligence.
                    I use ethnographic methods to understand how AI systems reshape social dynamics.
                </p>
            </div>

            <h2>Selected Publications</h2>
            <ul className="publication-list">
                {publications.map((pub, index) => (
                    <li key={index} className="publication-item">
                        <span className="pub-year">[{pub.year}]</span>
                        <div className="pub-details">
                            <a href={pub.link} className="pub-title">{pub.title}</a>
                            <span className="pub-journal">{pub.journal}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
