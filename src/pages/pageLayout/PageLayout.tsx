import Header from '../../components/header';
import NavBar from '../../components/navBar';
import "./PageLayout.scss";
import { Outlet } from 'react-router-dom';

const PageLayout = (): JSX.Element => {
    return (
        <>
            <Header />
            <main className='main'>
                <NavBar />
                <div className='main__content'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default PageLayout;