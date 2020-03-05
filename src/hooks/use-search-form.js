import { useQueryParams } from 'hookrouter';
import { useState, useCallback } from 'react';

export const useSearchForm = () => {
    const [queryParams, setQueryParams] = useQueryParams();
    const [search, setSearch] = useState(queryParams.searchTerm || '');

    const handleInputChange = useCallback(e => {
        setSearch(e.target.value);
    }, []);

    const updateQueryParams = useCallback(() => {
        setQueryParams({ searchTerm: search });
    }, [setQueryParams, search]);

    return [search, handleInputChange, updateQueryParams, queryParams];
};
