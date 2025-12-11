import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './Projects.css';

const projects = [
    {
        name: 'Burn After Burning',
        desc: 'An interactive story about gratitude.',
        tech: ['Python', 'R', 'Svelte'],
        link: 'https://matthewgthomas.co.uk/gratitude/',
        code: 'https://github.com/matthewgthomas/gratitude'
    },
    {
        name: 'Flavours',
        desc: "Exploring Niki Segnit's The Flavour Thesaurus.",
        tech: ['R', 'Svelte'],
        link: 'https://matthewgthomas.co.uk/flavours/',
        code: 'https://github.com/matthewgthomas/flavours'
    },
    {
        name: 'Seat Seer: Track election forecasts',
        desc: 'A tracker and explorer for seat projections in the 2024 UK General Election.',
        tech: ['R', 'Shiny'],
        link: 'https://matthewgthomas.shinyapps.io/seatseer/',
        code: 'https://github.com/matthewgthomas/track-uk-election-forecasts'
    },
    {
        name: 'Bayesian Fermi Estimation',
        desc: 'A web app for estimating unknown quantities based on back-of-the-envelope calculations using expert knowledge.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://matthewgthomas.co.uk/fermi/',
        code: 'https://github.com/matthewgthomas/fermi'
    },
    {
        name: 'Track price changes',
        desc: 'Explore inflation trends in the UK.',
        tech: ['R', 'Svelte'],
        link: 'https://matthewgthomas.co.uk/price-changes/',
        code: 'https://github.com/matthewgthomas/price-changes'
    },
    {
        name: 'Explore deprivation in England',
        desc: 'Shiny app exploring the Indices of Deprivation in England.',
        tech: ['R', 'Shiny'],
        link: 'https://matthewgthomas.shinyapps.io/deprivation-explorer/',
        code: 'https://github.com/matthewgthomas/deprivation-explorer'
    },
    {
        name: 'Compare risk maps',
        desc: 'Shiny app comparing the overlaps and differences between various disaster risk / resilience / vulnerability maps, such as flooding, heatwaves, deprivation, and social fabric.',
        tech: ['R', 'Shiny'],
        link: 'https://matthewgthomas.shinyapps.io/compare-risk-maps/',
        code: 'https://github.com/matthewgthomas/compare-risk-maps'
    },
    {
        name: 'NHS winter sitrep explorer',
        desc: 'R Shiny dashboard for exploring NHS England winter situation reports.',
        tech: ['R', 'Shiny'],
        link: 'https://britishredcross.shinyapps.io/sitrep-explorer/',
        code: 'https://github.com/matthewgthomas/sitrep-explorer'
    },
    {
        name: 'Geographical health inequalities',
        desc: 'Explore differences in (healthy) life expectancy and deprivation by regions in England.',
        tech: ['R'],
        link: 'https://matthewgthomas.co.uk/geographical-health-inequities/',
        code: 'https://github.com/matthewgthomas/geographical-health-inequities'
    },
    {
        name: 'Covid-19 and regional deprivation',
        desc: 'Exploring associations between Covid-19 and regional deprivation in England.',
        tech: ['R'],
        link: 'https://matthewgthomas.co.uk/covid-19-regional-deprivation/',
        code: 'https://github.com/matthewgthomas/covid-19-regional-deprivation'
    }
];

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="fixed-background" />
            <div className="projects-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={1} scale={0.4} />
                    </div>
                    <h1>Nerdy Projects</h1>
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={2} scale={0.4} />
                    </div>
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
                                <a href={project.code} className="project-link">VIEW CODE</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
