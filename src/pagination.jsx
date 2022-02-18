import React from 'react';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <>
            {gotoPrevPage && <button onClick={gotoPrevPage} >Prev</button>}
            {gotoNextPage && <button onClick={gotoNextPage} >Next</button>}
        </>
    )
}

export default Pagination;