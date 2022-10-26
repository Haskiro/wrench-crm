import { useApi } from '../hooks/api.hook';
import uuid from 'react-uuid';
import { ResponseList, Search } from '../interfaces/search.interface';

const useApiService = () => {
    const { request, clearError, process, setProcess } = useApi();

    const _apiBase: string = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const _apiKey = "7a2bb29ca95c45b30a03c6d73d9d34bc3de6212a";

    const getAddresses = async (query: string) => {
        const res: Search = await request(_apiBase, query, _apiKey);
        return res.suggestions.map(_transformAddress);
    }

    const _transformAddress = (address: ResponseList) => {
        return {
            id: uuid(),
            city: address.data.city_type_full ? address.data.city_type_full + ' ' + address.data.city : null,
            street: address.data.street_type_full ? address.data.street_type_full + ' ' + address.data.street : null,
            house: address.data.house_type_full ? address.data.house_type_full + ' ' + address.data.house : null
        }
    }

    return {
        process,
        setProcess,
        getAddresses,
        clearError
    }
}

export default useApiService;