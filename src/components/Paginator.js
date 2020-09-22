import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Paginator = ({ itemsPerPage, children, showPageCount, style  }) => {

    const makePageArray = numberOfPages => {
        const emptyArray = new Array(numberOfPages).fill();

        let start = 0;

        return emptyArray.map(i => {
            start++;
            return i = start;
        });

    };

    let hash;
    if (window.location.hash) {
        hash = window.location.hash.replace('#', '');
    }

    const [selectedPage, setSelectedPage] = useState(hash || 1);

    useEffect(() => {
        window.addEventListener('hashchange', () => setSelectedPage(window.location.hash.replace('#', '')))
        return window.removeEventListener('hashchange', () => setSelectedPage(window.location.hash.replace('#', '')))
    });

    const renderPageNumbers = (items, number) => {
        const numberOfPages = Math.ceil(items.length / number);
        return (
            makePageArray(numberOfPages).map(
                pageNumber => (
                    <li
                        key={pageNumber}
                        style={{margin: '0 .5rem', cursor: 'pointer'}}
                        onClick={() => {
                            // setSelectedPage(pageNumber)
                            window.location.hash = pageNumber;
                        }}
                    >
                        {pageNumber}
                    </li>)
            )
        );
    };

    const startIndex = itemsPerPage * (selectedPage - 1);
    const endIndex = startIndex + itemsPerPage;

    return (
        <>
            <div className='paginator-container' style={style}>
                {children.slice(startIndex, endIndex)}
            </div>
            <div className="page-selector">
                <ul>
                    {renderPageNumbers(children, itemsPerPage) }
                </ul>
            </div>
            {showPageCount && <div> {`Showing ${itemsPerPage} per page`}  </div>}
        </>

    );
};

Paginator.propTypes = {

};

Paginator.defaultProps = {
    itemsPerPage: 6,
};

export default Paginator;
