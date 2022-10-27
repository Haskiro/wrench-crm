import { FC, useState } from 'react';
import { SearchIcon } from '@assets/icons/icons';
import { SearchFormProps } from './SearchForm.props';
import "./SearchForm.scss";

const SearchForm: FC<SearchFormProps> = ({ onChange }): JSX.Element => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);

    type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

    const onButtonClick = (e: ButtonEvent, query: string): void => {
        e.preventDefault();
        if (query.length > 2) {
            setError(false);
            onChange(query)
        } else {
            setError(true);
        }
    }

    return (
        <>
            <form className='form'>
                <input
                    type="text"
                    className='form__input'
                    placeholder='Введите интересующий вас адрес'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button
                    className='form__button'
                    onClick={(e) => onButtonClick(e, query)}
                >
                    <SearchIcon />
                    <p className="form__text">Поиск</p>
                </button>
            </form>
            {error ? <p className="form__error">Минимальная длина 3 символа!</p> : null}
        </>
    )
}

export default SearchForm;
