import Header from '@components/header';
import NavBar from '@components/navBar';
import "./PageLayout.scss";
import { Outlet } from 'react-router-dom';
import BurgerMenu from '@components/burgerMenu';
import { useState } from 'react';

const PageLayout = (): JSX.Element => {
    const [activeClass, setActiveClass] = useState('');

    const onChangeClass = () => {
        if (activeClass === '') {
            setActiveClass('active');
        } else setActiveClass('');
    }

    return (
        <>
            <Header />
            <main className='main'>
                <NavBar activeClass={activeClass} />
                <div className='main__content'>
                    <div className='main__burger'>
                        <BurgerMenu onChangeClass={onChangeClass} />
                    </div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default PageLayout;