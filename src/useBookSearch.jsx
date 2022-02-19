import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const UseBookSearch = (query, pageNumber) => {
    let cancel = useRef();
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel.current = c)
        }).then(res => {
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return;
        })
    }, [query, pageNumber])
    return () => cancel();
}

export default UseBookSearch;