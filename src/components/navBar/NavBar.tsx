import "./NavBar.scss";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ArrowIcon, CalendarIcon, ExitIcon, FinanceManagmentIcon, HomeIcon, MapIcon, ProfileSettingsIcon, SearchIcon, SettingsIcon, TablesIcon, VidgetsIcon } from '../../assets/icons/icons';
import { useRef } from 'react';

const NavBar = (): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>();

    const toggleDropdown = (): void => {
        ref.current?.classList.toggle("active");
    }

    return (
        <nav className='nav'>
            <p className="nav__title">Меню</p>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <HomeIcon />
                        </div>
                        <p className="nav__text">Главная</p>
                        <span className='nav__stick' />
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <SearchIcon />
                        </div>
                        <p className="nav__text">Поиск адресов</p>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./unused-address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <TablesIcon />
                        </div>
                        <p className="nav__text">Таблицы</p>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./unused-address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <CalendarIcon />
                        </div>
                        <p className="nav__text">Календарь</p>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./unused-address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <MapIcon />
                        </div>
                        <p className="nav__text">Карты</p>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./unused-address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <VidgetsIcon />
                        </div>
                        <p className="nav__text">Виджеты</p>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <div
                        className="nav__dropdown dropdown"
                        onClick={toggleDropdown}
                        ref={el => ref.current = el}
                    >
                        <div className="nav__icon">
                            <SettingsIcon />
                        </div>
                        <p className="nav__text">Настройки</p>
                        <div className="dropdown__icon">
                            <ArrowIcon />
                        </div>
                        <ul className="dropdown__list">
                            <li className="dropdown__item">
                                <NavLink
                                    to="./unused-address"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classNames("nav__link", "active")
                                            : "nav__link"
                                    }
                                >
                                    <div className="nav__icon">
                                        <ProfileSettingsIcon />
                                    </div>
                                    <p className="nav__text">Настройки профиля</p>
                                </NavLink>
                            </li>
                            <li className="dropdown__item">
                                <NavLink
                                    to="./unused-address"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classNames("nav__link", "active")
                                            : "nav__link"
                                    }
                                >
                                    <div className="nav__icon">
                                        <FinanceManagmentIcon />
                                    </div>
                                    <p className="nav__text">Управление финансами</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="./unused-address"
                        className={({ isActive }) =>
                            isActive
                                ? classNames("nav__link", "active")
                                : "nav__link"
                        }
                    >
                        <div className="nav__icon">
                            <ExitIcon />
                        </div>
                        <p className="nav__text">Выход</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;