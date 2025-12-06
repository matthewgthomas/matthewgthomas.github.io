import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import './Writing.css';

const articles = [
    {
        category: 'AI',
        title: 'Don’t let AI do your thinking for you',
        link: 'https://medium.com/@matthewgthomas/dont-let-ai-do-your-thinking-for-you-6504a2d225e3',
        summary: 'Artificial intelligence can boost your creativity and critical thinking, if you use it wisely.'
    },
    {
        category: 'Humanitarian',
        title: 'An opinionated guide to the Indices of Deprivation',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/an-opinionated-guide-to-the-indices-of-deprivation-703d1fadecde',
        summary: "Nearly 8 million people on low incomes don't live in deprived areas. How can we be smarter about how we use deprivation data?"
    },
    {
        category: 'Science Journalism',
        title: 'BioNews',
        link: 'https://www.progress.org.uk/about-us/people/matthew-thomas/',
        summary: 'I used to write for BioNews, a publication focusing on the science, law and ethics of reproduction and genetics. I covered a variety of topics over the years, eventually specialising in genetic ancestry testing.'
    }
];

export default function Writing() {
    return (
        <div className="writing-page">
            <div className="writing-container">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={1} scale={0.4} />
                    </div>
                    <h1>Writing</h1>
                </div>

                <div className="blurb">
                    <p>
                        Over the years, I've published a variety of non-fiction (science journalism, pop anthropology, op eds and essays) and fiction (short stories and poetry).
                    </p>
                </div>

                <div className="categories-filter">
                    <button className="filter-btn active">ALL</button>
                    <button className="filter-btn">AI</button>
                    <button className="filter-btn">HUMANITARIAN</button>
                    <button className="filter-btn">POEMS</button>
                    <button className="filter-btn">SCIENCE JOURNALISM</button>
                    <button className="filter-btn">STORIES</button>
                </div>

                <div className="articles-grid">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            className="article-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="card-header">
                                <span className="category-tag">{article.category}</span>
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <span className="read-more">READ &gt;</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
