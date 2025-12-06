import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import './Research.css';

const publications = [
    {
        year: '2019',
        title: 'Testing adaptive hypotheses of alloparenting in Agta foragers',
        authors: 'Page A E, Thomas M G, Smith D, Dyble M, Viguier S, Chaudhary N, Salali G D, Thompson J, Mace R, Migliano A B',
        journal: 'Nature Human Behaviour',
        link: 'https://doi.org/10.1038/s41562-019-0679-2'
    },
    {
        year: '2019',
        title: 'Comparison of social complexity in two independent pastoralist societies',
        authors: 'Du J, Thomas M G, Bårdsen B-J, Mace R, Næss M W',
        journal: 'Behavioral Ecology and Sociobiology',
        link: 'https://link.springer.com/article/10.1007%2Fs00265-018-2611-6'
    },
    {
        year: '2018',
        title: 'Kinship underlies costly cooperation in Mosuo villages',
        authors: 'Thomas M G, Ji T, Wu J, He Q, Tao Y, Mace R',
        journal: 'Royal Society Open Science',
        link: 'http://rsos.royalsocietypublishing.org/content/5/2/171535'
    },
    {
        year: '2018',
        title: 'The narrow gap between norms and cooperative behaviour in a reindeer herding community',
        authors: 'Thomas M G, Bårdsen B-J, Næss M W',
        journal: 'Royal Society Open Science',
        link: 'http://rsos.royalsocietypublishing.org/content/5/2/171221'
    },
    {
        year: '2018',
        title: 'Population structured by witchcraft beliefs',
        authors: 'Mace R, Thomas M G, Wu J, He Q, Ji T, Tao Y',
        journal: 'Nature Human Behaviour',
        link: 'http://dx.doi.org/10.1038/s41562-017-0271-6'
    },
    {
        year: '2016',
        title: 'Smaller Saami herding groups cooperate more in a public goods experiment',
        authors: 'Thomas M G, Næss M W, Bårdsen B-J, Mace R',
        journal: 'Human Ecology',
        link: 'http://dx.doi.org/10.1007/s10745-016-9848-3'
    },
    {
        year: '2015',
        title: 'Saami reindeer herders cooperate with social group members and genetic kin',
        authors: 'Thomas M G, Næss M W, Bårdsen B-J, Mace R',
        journal: 'Behavioral Ecology',
        link: 'http://10.1093/beheco/arv106'
    },
    {
        year: '2015',
        title: 'A dynamic framework for the study of optimal birth intervals reveals the importance of sibling competition and mortality risks',
        authors: 'Thomas M G, Shanley D P, Houston A I, McNamara J M, Mace R, Kirkwood T B L',
        journal: 'Journal of Evolutionary Biology',
        link: 'http://dx.doi.org/10.1111/jeb.12613'
    }
];

export default function Research() {
    return (
        <div className="research-page">
            <div className="research-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={2} scale={0.4} />
                    </div>
                    <h1>Research</h1>
                </div>

                <div className="research-intro">
                    <p>
                        My anthropology research uses evolutionary theory to look at how people cooperate (or not) in households, families and larger groups.
                    </p>
                </div>

                <p>I did my PhD (titled 'The Dynamics of Human Cooperative Groups') in the <a href="http://www.ucl.ac.uk/anthropology/research/heeg" target="_blank" rel="noopener nofollow">Human Evolutionary Ecology Group</a> at UCL in London. You can <a href="http://discovery.ucl.ac.uk/1473717/" rel="nofollow">read it here</a>. Afterwards, I worked as a postdoc for the <a href="http://niku.no/" rel="nofollow">Norwegian Institute for Cultural Heritage Research (NIKU)</a> and the <a href="http://www.nina.no/" rel="nofollow">Norwegian Institute for Nature Research (NINA)</a>, as part of the project, <a href="https://pastoralism-climate-change-policy.com/projects/reign/" target="_blank" rel="noopener nofollow">"ReiGN: Reindeer husbandry in a Globalizing North"</a>.</p>
                <p>Here's a haiku summary of my research:</p>
                <blockquote>
                    <p>People sometimes help<br />friends, fam, neighbours, not witches.<br />But sometimes they don't.</p>
                </blockquote>
                <p>... and a summary written using only <a href="http://xkcd.com/1133/" target="_blank" rel="noopener nofollow">the ten hundred most common</a> English words:</p>
                <blockquote>
                    <p>We think we know what people are like from how they act in rooms where brain-people in white jackets make them do things. But I want to check how people act in real life. I looked at how people work together in two places - one where they keep animals in the cold land at the top of the world and another place where they grow food around a body of water in a big big land. The people helped their friends, family and other close people. They liked good people and didn't help bad people.</p>
                </blockquote>
                <p>I used a mixture of theoretical models and actual, real-life fieldwork to understand patterns of cooperation.</p>
                <p>For the theoretical bit, I made mathematical models and computer simulations of evolutionary dynamics to look at how mortality in the environment and competition between siblings <a title="Paper about how sibling competition and mortality risks affect birth intervals" href="https://tangledwoof.wordpress.com/2015/03/09/new-paper-about-how-sibling-competition-and-mortality-risks-affect-birth-intervals/">shape birth patterns</a> (<a href="http://onlinelibrary.wiley.com/doi/10.1111/jeb.12613/abstract" target="_blank" rel="noopener nofollow">published in the Journal of Evolutionary Biology</a>).</p>
                <p>For the empirical bit, I worked with Saami reindeer herders in the county of Finnmark, Norway. I used <a href="http://en.wikipedia.org/wiki/Public_goods_game" target="_blank" rel="noopener nofollow">experimental economic games</a> and statistics to understand how Saami people worked together in herding groups. I've also looked at how kinship, reputation and reciprocity affect how Mosuo farmers work together in southwestern China.</p>
                <p>You can academically socialise with me on <a href="https://www.researchgate.net/profile/Matthew_Thomas3/" target="_blank" rel="noopener nofollow">ResearchGate</a>, <a href="https://ucl.academia.edu/matthewgthomas" target="_blank" rel="noopener nofollow">Academia.edu</a> or <a href="https://scholar.google.co.uk/citations?user=3nB91QoAAAAJ&amp;hl=en" target="_blank" rel="noopener nofollow">Google Scholar</a>.</p>

                <h2>Publications</h2>
                <ul className="publication-list">
                    {publications.map((pub, index) => (
                        <li key={index} className="publication-item">
                            <span className="pub-year">[{pub.year}]</span>
                            <div className="pub-details">
                                <a href={pub.link} className="pub-title">{pub.title}</a>
                                {pub.authors}
                                <span className="pub-journal">{pub.journal}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
