import { FC, useMemo } from 'react';
import Spinner from '@components/spinner';
import { AddressListProps } from './AddressList.props';
import "./AddressList.scss";
import { useGetAddressesByStringQuery } from '@api/apiSlice';
import { ResponseList } from '@interfaces/response.interface';
import { nanoid } from '@reduxjs/toolkit';

interface AddressItemType {
    id: string,
    city: string,
    street: string,
    house: string
}

const AddressList: FC<AddressListProps> = ({ query }) => {

    const { data: response = [],
        isFetching,
        isLoading,
        isSuccess,
        isError
    } = useGetAddressesByStringQuery(query)

    const transformAddress = (address: ResponseList) => {
        return {
            id: nanoid(),
            city: address.data.city_type_full ? address.data.city_type_full + ' ' + address.data.city : '',
            street: address.data.street_type_full ? address.data.street_type_full + ' ' + address.data.street : '',
            house: address.data.house_type_full ? address.data.house_type_full + ' ' + address.data.house : ''
        }
    }

    const addressList = useMemo(() => {
        return response.suggestions?.map(transformAddress);
    }, [response, query])

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


    return (
        <>
            {isLoading || isFetching ? <div className='spinner'><Spinner /></div> : null}
            {isSuccess && addressList.length > 0 ? renderItems(addressList) : null}
            {isError ? <h2 className='error'>Error</h2> : null}
        </>
    )
}

export default AddressList;