import { useState } from 'react';
import CatSprite from '../components/CatSprite';
import cat1 from '../assets/cat_sprite_1.png';
import cat2 from '../assets/cat_sprite_2.png';
import './Writing.css';

const articles = [
    {
        category: 'Humanitarian',
        title: 'An opinionated guide to the Indices of Deprivation',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/an-opinionated-guide-to-the-indices-of-deprivation-703d1fadecde',
        summary: "Nearly 8 million people on low incomes don't live in deprived areas. How can we be smarter about how we use deprivation data?"
    },
    {
        category: 'AI',
        title: "Don't let AI do your thinking for you",
        link: 'https://medium.com/@matthewgthomas/dont-let-ai-do-your-thinking-for-you-6504a2d225e3',
        summary: 'Artificial intelligence can boost your creativity and critical thinking, if you use it wisely.'
    },
    {
        category: 'AI',
        title: 'Will AI destroy the planet?',
        link: 'https://matthewgthomas.medium.com/will-ai-destroy-the-planet-cd6220a7bb3e',
        summary: 'Artificial intelligence is power-hungry. What can you do to reduce your AI carbon footprint?'
    },
    {
        category: 'Humanitarian',
        title: 'Making disaster risk maps more equitable',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/making-disaster-risks-maps-more-equitable-aad4ca65255f',
        summary: "If we don't build intersectionality into our disaster risk maps, how many disproportionately vulnerable people might miss out on life-saving aid?"
    },
    {
        category: 'Humanitarian',
        title: 'Researchers and data scientists must think like designers',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/researchers-and-data-scientists-must-think-like-designers-ac14783b86ba',
        summary: 'Design thinking opens new ways to approach our research and analysis - helping us create products that drive humanitarian decisions and action.'
    },
    {
        category: 'Humanitarian',
        title: 'Telling impactful stories with data during emergencies',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/telling-impactful-stories-with-data-during-emergencies-4ce72e35cc45',
        summary: "What we've learnt from half a decade of informing humanitarian decision-making in emergencies."
    },
    {
        category: 'AI',
        title: 'Humans and machines, imagining futures together',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/humans-and-machines-imagining-futures-together-68767ea8c673',
        summary: 'At its best, foresight brings together diverse voices and perspectives to imagine "what if." So what if we included artificial intelligence...?'
    },
    {
        category: 'Humanitarian',
        title: 'Neighborliness Matters to Your Health',
        link: 'https://www.sapiens.org/biology/neighborliness-health-disparities/',
        summary: 'Drawing from cross-cultural research, an anthropologist shows how neighborliness can lessen wealth-based health disparities.'
    },
    {
        category: 'AI',
        title: 'How could artificial intelligence help (and hinder) our humanitarian work?',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/how-could-artificial-intelligence-help-and-hinder-our-humanitarian-work-95bd412bfb5e',
        summary: 'Reflections on a hackathon a British Red Cross.'
    },
    {
        category: 'Poems',
        title: 'The Spring a Time for Calving and Cleaving',
        link: 'https://www.sapiens.org/culture/the-spring-a-time-for-calving-and-cleaving/',
        summary: 'A poet-anthropologist joins Sámi reindeer herders in Norway who are preparing for the spring migration. As an outsider, he feels a longing to connect, even as he remains "outside the fences."'
    },
    {
        category: 'Humanitarian',
        title: 'Anthropology offers a strangely familiar approach to understanding decisions',
        link: 'https://medium.com/data-and-insight-hub-at-british-red-cross/anthropology-offers-a-strangely-familiar-approach-to-understanding-decisions-3b21fd1bf01',
        summary: 'Around nine years ago, I was told the secret to making good decisions. "You must go and tell David Cameron," the reindeer herder told me.'
    },
    {
        category: 'AI',
        title: 'The Age of Digital Divination',
        link: 'https://www.sapiens.org/culture/digital-divination/',
        summary: 'An anthropologist asks what algorithms and astrology have in common in a digital era of predictive technologies.'
    },
    {
        category: 'Stories',
        title: 'Atomic Covenant',
        link: 'https://365tomorrows.com/2020/11/20/atomic-covenant/',
        summary: "Shena's fingernail glistened under the afternoon sun. This one didn't hurt when it came off - it fell like a mere petal onto the dusty ground."
    },
    {
        category: "Poems",
        title: "Yoik",
        link: 'https://www.sapiens.org/culture/sami-reindeer-herders/',
        summary: 'Like smoky spirals, two cultures weave together in a SAPIENS contest-winning poem by an anthropologist who worked with Sámi reindeer herders in the Arctic Circle.'
    },
    {
        category: 'AI',
        title: 'Is Artificial Intelligence Magic?',
        link: 'https://www.sapiens.org/culture/ai-as-magic/',
        summary: 'What does the anthropology of magic reveal about how people create and use AI?'
    },
    {
        category: 'AI',
        title: 'The Age of Cultured Machines',
        link: 'https://www.sapiens.org/culture/artificial-intelligence-culture/',
        summary: 'Researchers have built a robot that can transfer its skills to other robots. Could this advance pave the way for a robot form of culture?'
    },
    {
        category: 'AI',
        title: 'What If Machines Could Learn the Way Children Do?',
        link: 'https://www.sapiens.org/culture/machine-learning-anthropology/',
        summary: 'Modern-day machines, such as Siri and Amazon’s Alexa, lack intelligence and empathy. Insights from hunter-gatherer communities could pave the way toward more sophisticated gadgets.'
    },
    {
        category: 'AI',
        title: 'Learning to Trust Machines That Learn',
        link: 'https://www.sapiens.org/culture/game-theory-anthropology/',
        summary: 'What can studies of human relationships tell us about whether or not we should trust artificial intelligence?'
    },
    {
        category: 'Science Journalism',
        title: 'BioNews',
        link: 'https://www.progress.org.uk/about-us/people/matthew-thomas/',
        summary: 'I used to write for BioNews, a publication focusing on the science, law and ethics of reproduction and genetics. I covered a variety of topics over the years, eventually specialising in genetic ancestry testing.'
    },
    {
        category: 'Poems',
        title: 'Agnostics and Alcoholics',
        link: 'https://vimeo.com/gwynfryn/agnosticsalcoholics?share=copy&fl=sv&fe=ci',
        summary: 'My first film-poem.'
    }
];

export default function Writing() {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const categories = ['ALL', 'AI', 'HUMANITARIAN', 'POEMS', 'SCIENCE JOURNALISM', 'STORIES'];

    const filteredArticles = activeCategory === 'ALL'
        ? articles
        : articles.filter(article => article.category.toUpperCase() === activeCategory);

    return (
        <div className="page-wrapper">
            <div className="fixed-background" />
            <div className="content-container wide">
                <div className="page-header">
                    <div className="mascot-wrapper">
                        <CatSprite image={cat1} totalWidth={1024} totalHeight={790} row={1} scale={0.4} />
                    </div>
                    <h1>Writing</h1>
                    <div className="mascot-wrapper">
                        <CatSprite image={cat2} totalWidth={1024} totalHeight={764} row={2} scale={0.4} />
                    </div>
                </div>

                <div className="intro-text">
                    <p>
                        Over the years, I've published a variety of non-fiction (science journalism, pop anthropology, op eds and essays) and fiction (short stories and poetry). Here's a selection.
                    </p>
                    <p>
                        You can read everything I wrote for <a href="https://www.sapiens.org/authors/matthew-gwynfryn-thomas/">Sapiens magazine</a> and <a href="https://www.progress.org.uk/about-us/people/matthew-thomas/">BioNews</a>.
                        I also have an old WordPress blog with my <a href="https://tangledwoof.wordpress.com/tag/fieldwork-2/" target="_blank">anthropology fieldwork journal</a> and
                        my published <a href="https://tangledwoof.wordpress.com/tag/poems-and-stories/" target="_blank">poems, film-poems and stories</a>.
                    </p>
                </div>

                <div className="categories-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="articles-grid">
                    {filteredArticles.map((article, index) => (
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
