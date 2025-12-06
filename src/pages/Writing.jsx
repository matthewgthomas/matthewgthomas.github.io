import './Writing.css';

const articles = [
    {
        category: 'AI & Data Science',
        title: 'The Ghost in the Latent Space',
        link: '#',
        summary: 'Exploring the emergent behaviors of large language models.'
    },
    {
        category: 'Science Journalism',
        title: 'Quantum Weirdness in Biological Systems',
        link: '#',
        summary: 'How photosynthesis might rely on quantum coherence.'
    },
    {
        category: 'Fiction',
        title: 'Neon Rain',
        link: '#',
        summary: 'A short story about a detective in a city altering its own layout.'
    }
];

export default function Writing() {
    return (
        <div className="writing-container">
            <h1>Writing Portfolio</h1>

            <div className="categories-filter">
                <button className="filter-btn active">ALL</button>
                <button className="filter-btn">AI</button>
                <button className="filter-btn">FICTION</button>
                <button className="filter-btn">JOURNALISM</button>
            </div>

            <div className="articles-grid">
                {articles.map((article, index) => (
                    <div key={index} className="article-card">
                        <div className="card-header">
                            <span className="category-tag">{article.category}</span>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <a href={article.link} className="read-more">READ &gt;</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
