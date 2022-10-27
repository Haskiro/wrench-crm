import "./NavBar.scss";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ArrowIcon, CalendarIcon, ExitIcon, FinanceManagmentIcon, HomeIcon, MapIcon, ProfileSettingsIcon, SearchIcon, SettingsIcon, TablesIcon, VidgetsIcon } from '@assets/icons/icons';
import { FC, useRef } from 'react';

interface NavBarProps {
    activeClass: string;
}

const NavBar: FC<NavBarProps> = ({ activeClass }) => {
    const ref = useRef<HTMLDivElement | null>();

    const toggleDropdown = (): void => {
        ref.current?.classList.toggle("active");
    }

    return (
        <nav className={classNames("nav", activeClass)}>
            <p className="nav__title">Меню</p>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink
                        end
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
                        <span className='nav__stick' />
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
                        <span className='nav__stick' />
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
                        <span className='nav__stick' />
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
                        <span className='nav__stick' />
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
                        <span className='nav__stick' />
                    </NavLink>
                </li>
                <li className="nav__item">
                    <div
                        className="nav__dropdown dropdown"
                        onClick={toggleDropdown}
                        ref={el => ref.current = el}
                        tabIndex={0}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === "Enter") {
                                toggleDropdown();
                            }
                        }}
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
                                    <span className='nav__stick' />
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
                                    <span className='nav__stick' />
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
                        <span className='nav__stick' />
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;