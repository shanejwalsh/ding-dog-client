import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Paginator = ({ itemsPerPage, children, showPageCount, style  }) => {

    const [selectedPage, setSelectedPage] = useState(1);

    const renderPageNumbers = (items, number) => {
        const numberOfPages = Math.ceil(items.length / number);

        let pageNumbers = [];

        for (let i = 0; i < numberOfPages; i++) {
            pageNumbers = [...pageNumbers, i + 1]
        }

        return (
            pageNumbers.map(
                pageNumber => (
                    <span
                        key={pageNumber}
                        style={{margin: '0 .5rem', cursor: 'pointer'}}
                        onClick={() => {
                            setSelectedPage(pageNumber)
                        }}
                    >
                        {pageNumber}
                    </span>)
            )
        );
    };

    return (
        <>
            <div className='paginator-container' style={style}>
                {children.filter((child, index) => {
                    const startIndex = itemsPerPage * (selectedPage - 1)
                    return index >= startIndex && index < (startIndex + itemsPerPage)
                })}
            </div>
            <div className="page-selector">
                { renderPageNumbers(children, itemsPerPage) }
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
