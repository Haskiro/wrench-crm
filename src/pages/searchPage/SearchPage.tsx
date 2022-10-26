import "./SearchPage.scss";
import SearchForm from './components/searchForm';
import AddressList from './components/addressList';
import { useState } from 'react';

const SearchPage = (): JSX.Element => {
    const [query, setQuery] = useState('');

    const onChangeQuery = (query: string) => {
        setQuery(query);
    }

    return (
        <div className='search'>
            <p className="search__heading">Поиск адресов</p>
            <p className="search__text">Введите интересующий вас адрес</p>
            <SearchForm onChange={onChangeQuery} />
            <AddressList query={query} />
        </div>
    )
}

export default SearchPage;