import "./SearchPage.scss";
import SearchForm from './components/searchForm';
import AddressList from './components/addressList';
import { FC, useCallback, useState } from 'react';
import ErrorBoundary from '@components/errorBoundary';

const SearchPage: FC = () => {
    const [query, setQuery] = useState('');

    const onChangeQuery = useCallback((query: string) => {
        setQuery(query);
        // eslint-disable-next-line
    }, [query])

    return (
        <div className='search'>
            <p className="search__heading">Поиск адресов</p>
            <p className="search__text">Введите интересующий вас адрес</p>
            <ErrorBoundary>
                <SearchForm onChange={onChangeQuery} />
            </ErrorBoundary>
            <div className='search__content'>
                <ErrorBoundary>
                    <AddressList query={query} />
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default SearchPage;