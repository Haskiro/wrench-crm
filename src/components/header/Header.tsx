import { Link } from 'react-router-dom';
import { LogoIcon, PersonIcon } from '@assets/icons/icons';
import "./Header.scss";

const Header = (): JSX.Element => {
    return (
        <header className='header'>
            <div className='header__body container'>
                <div className="header__block">
                    <Link to="/" className="header__icon">
                        <LogoIcon />
                    </Link>
                    <p className="header__text">Wrench CRM</p>
                </div>
                <div className="header__block">
                    <div className="header__icon">
                        <PersonIcon />
                    </div>
                    <p className="header__text">Павел Кондратьев</p>
                </div>
            </div>
        </header>
    )
}

export default Header;