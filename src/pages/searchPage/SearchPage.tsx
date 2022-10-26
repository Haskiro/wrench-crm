import useApiService from '../../services/apiService';
import "./SearchPage.scss";
import { useEffect } from "react";

const SearchPage = (): JSX.Element => {
    const { getAddresses } = useApiService();

    useEffect(() => {
        getAddresses("Москва")
            .then(data => console.log(data));
    }, [])

    return <>Search Page</>
}

export default SearchPage;