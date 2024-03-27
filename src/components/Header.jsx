import { Link } from 'react-router-dom';
import { SavedMeal } from './SavedMeal';
import Sidebar from './Sidebar';
import { Search } from './Search';
import { Login } from './Login';
import { LoginPage } from '../pages/LoginPage';

function Header() {
    return (
        <nav className="red darken-1 ">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    FoodStore
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/LoginPage">
                            <SavedMeal quantity={10} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
