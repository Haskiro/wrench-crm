import { FC, useEffect, useState } from 'react';
import Spinner from '@components/spinner';
import useApiService from '@services/apiService';
import { AddressListProps } from './AddressList.props';
import "./AddressList.scss";

interface AddressItemType {
    id: string,
    city: string,
    street: string,
    house: string
}

const setContent = (
    process: string,
    addressList: AddressItemType[] | undefined,
    renderItems: (addressList: AddressItemType[]
    ) => JSX.Element) => {
    switch (process) {
        case "loading":
            return <div className='spinner'><Spinner /></div>;
        case "confirmed":
            return (addressList && addressList.length > 0) ? renderItems(addressList) : null;
        case "error":
            return <h2 className='error'>Error</h2>
        default:
            break;
    }
}

const AddressList: FC<AddressListProps> = ({ query }) => {
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

    const content = setContent(process, addressList, renderItems);


    return (
        <>
            {content}
        </>
    )
}

export default AddressList;