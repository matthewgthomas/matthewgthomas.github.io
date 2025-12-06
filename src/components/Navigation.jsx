import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="scumm-bar">
            <ul className="verb-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/writing">WRIT</Link></li>
                <li><Link to="/research">RSRCH</Link></li>
                <li><Link to="/projects">PROJ</Link></li>
            </ul>
        </nav>
    );
}
