import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Paginator = ({ itemsPerPage, children, showPageCount, style }) => {
    const makePageArray = numberOfPages => {
        const emptyArray = new Array(numberOfPages).fill();

        let start = 0;

        return emptyArray.map(placeholder => {
            start++;
            return (placeholder = start);
        });
    };

    let hash;
    if (window.location.hash) {
        hash = +window.location.hash.replace('#', '');
    }

    const [selectedPage, setSelectedPage] = useState(hash || 1);

    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);
        return () =>
            console.log('unmount') ||
            window.removeEventListener('hashchange', hashChangeHandler);
    }, []);

    const hashChangeHandler = () => {
        setSelectedPage(+window.location.hash.replace('#', ''));
    };

    const renderPageNumbers = (items, number) => {
        const numberOfPages = Math.ceil(items.length / number);
        return makePageArray(numberOfPages).map(pageNumber => (
            <li
                key={pageNumber}
                style={{
                    border: 'solid 0.25px grey',
                    borderLeft: pageNumber === 1 ? 'solid 0.25px grey' : 0,
                    padding: '.25rem 0',
                    width: '2rem',
                    // margin: '0 .5rem',
                    cursor: 'pointer',
                    color:
                        selectedPage === pageNumber
                            ? 'rgb(37, 220, 163)'
                            : 'black',
                }}
                onClick={() => {
                    window.location.hash = pageNumber;
                }}
            >
                {pageNumber}
            </li>
        ));
    };

    const startIndex = itemsPerPage * (selectedPage - 1);
    const endIndex = startIndex + itemsPerPage;

    return (
        <>
            <div className="paginator-container" style={style}>
                {children.slice(startIndex, endIndex)}
            </div>
            <div className="page-selector">
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap,',
                        listStyle: 'none',
                        padding: 0,
                    }}
                >
                    {renderPageNumbers(children, itemsPerPage)}
                </ul>
            </div>
            {showPageCount && <div> {`Showing ${itemsPerPage} per page`} </div>}
        </>
    );
};

Paginator.propTypes = {
    itemsPerPage: PropTypes.number,
};

Paginator.defaultProps = {
    itemsPerPage: 6,
};

export default Paginator;
