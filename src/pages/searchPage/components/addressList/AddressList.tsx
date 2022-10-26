import { useEffect, useState } from 'react';
import Spinner from '../../../../components/spinner';
import useApiService from '../../../../services/apiService';
import { AddressListProps } from './AddressList.props';
import "./AddressList.scss";

interface AddressItemType {
    id: string,
    city: string,
    street: string,
    house: string
}

const AddressList = ({ query }: AddressListProps): JSX.Element => {
    const { getAddresses, process, setProcess, clearError } = useApiService();

    const [addressList, setAddressList] = useState<AddressItemType[]>();

    const onDataLoaded = (data: AddressItemType[]) => {
        setAddressList(data);
        setProcess("confirmed");
    }

    const request = (query: string) => {
        getAddresses(query)
            .then(onDataLoaded)
            .catch(() => console.log('Error'));
    }

    useEffect(() => {
        clearError();
        request(query);
        // eslint-disable-next-line
    }, [query])

    const renderItems = (addressList: AddressItemType[]): (JSX.Element) => {
        const content = addressList?.map(item => {
            if (!item.city) {
                return null;
            } else {
                let itemArr = Object.values(item).filter(i => i);
                itemArr.shift();
                const result = itemArr.join(', ');
                return (
                    <li key={item.id} className="address-list__item">
                        {result}
                    </li>
                )
            }
        }
        )

        return (
            <div className='address-list'>
                <h2 className='address-list__heading'>Адреса</h2>
                <ul className="address-list__list">
                    {content}
                </ul>
            </div>
        );
    }

    let content;
    switch (process) {
        case "loading":
            content = <div className='spinner'><Spinner /></div>;
            break;
        case "confirmed":
            content = (addressList && addressList.length > 0) ? renderItems(addressList) : null;
            break;
        case "error":
            content = <h2 className='error'>Error</h2>
            break;
        default:
            break;
    }


    return (
        <>
            {content}
        </>
    )
}

export default AddressList;