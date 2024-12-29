import React from 'react'

//handle pagination
export const pager = ({
    totalCount,
    pageSize,
    selectedPageIndex,
    setSelectedPageIndex,
    loadSpecificPage,
    range = 2,

    apiURL,
    getAppointAndTherapistsData,
    orderParam,
    isAscending
    }) => {
    let pagination = [];
    const totalPages = Math.ceil(totalCount/pageSize);
    // const range = 2; // Number of pages to display before and after the selected page

    // Calculate start and end range for pagination
    let startPage = Math.max(1, selectedPageIndex - range);
    let endPage = Math.min(totalPages, selectedPageIndex + range);

    if (startPage > 1) {
        // Add the first page and ellipsis if necessary
        pagination.push(
            <div
                key={1}
                className={(1 === selectedPageIndex) ? "page-index-container selected-page-index-container" : "page-index-container" }
                onClick={() => {
                    // loadSpecificPage(1);
                    setSelectedPageIndex(1);
                    loadSpecificPage({
                        apiURL,
                        key:1,
                        getAppointAndTherapistsData,
                        orderParam,
                        isAscending
                    
                    })
                }}
            >
                <h5 className="page-index">1</h5>
            </div>
        );
        if (startPage > 2) {
            pagination.push(
                <div key="start-ellipsis" className="page-index-container">
                    <h5 className="page-index">...</h5>
                </div>
            );
        }
    }

    // Add pages in the calculated range
    for (let i = startPage; i <= endPage; i++) {
        pagination.push(
            <div
                key={i}
                className={(i === selectedPageIndex) ? "page-index-container selected-page-index-container" : "page-index-container" }
                onClick={() => {
                    // loadSpecificPage(i);
                    loadSpecificPage({
                        apiURL,
                        key:i,
                        getAppointAndTherapistsData,
                        orderParam,
                        isAscending
                    
                    })
                    setSelectedPageIndex(i);
                }}
            >
                <h5 className="page-index">{i}</h5>
            </div>
        );
    }

    if (endPage < totalPages) {
        // Add ellipsis and the last page if necessary
        if (endPage < totalPages - 1) {
            pagination.push(
                <div key="end-ellipsis" className="page-index-container">
                    <h5 className="page-index">...</h5>
                </div>
            );
        }
        pagination.push(
            <div
                key={totalPages}
                className={(totalPages === selectedPageIndex) ? "page-index-container selected-page-index-container" : "page-index-container" }
                onClick={() => {
                    // loadSpecificPage(totalPages);
                    loadSpecificPage({
                        apiURL,
                        key:totalPages,
                        getAppointAndTherapistsData,
                        orderParam,
                        isAscending
                    
                    })
                    setSelectedPageIndex(totalPages);
                }}
            >
                <h5 className="page-index">{totalPages}</h5>
            </div>
        );
    }

    return pagination;
};

//load next page
export const loadNextPage = ({
    nextPage,
    setSelectedPageIndex,
    getAppointAndTherapistsData

}) => {
    
    if (nextPage) {
        const index = Number(nextPage.substr(-1));
        setSelectedPageIndex(index);
        getAppointAndTherapistsData(nextPage);
    }
};

//load previous page
export const loadPrevPage = ({
    prevPage,
    setSelectedPageIndex,
    getAppointAndTherapistsData,
}) => {
    if (prevPage) {
        const index = prevPage.substr(-1);
        if(isNaN(index)){
            setSelectedPageIndex(1);
        }else{
            setSelectedPageIndex(Number(index));
        }
        
        getAppointAndTherapistsData(prevPage);
    }
};


//load previous page
export const loadSpecificPage = ({
    apiURL,
    key,
    getAppointAndTherapistsData,
    orderParam,
    isAscending

}) => {
    const specPage = apiURL+'/appointments/appointment/?page='+key
    if (specPage) {
        getAppointAndTherapistsData(specPage,orderParam,isAscending)
    }
};