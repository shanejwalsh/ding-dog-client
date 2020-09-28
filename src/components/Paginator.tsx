import React, {
    useState,
    useEffect,
    FunctionComponent,
    ReactNodeArray
} from 'react';

interface PaginatorProps {
    itemsPerPage: number,
    style: object,
    children: ReactNodeArray
    showPageCount?: boolean,
};

const Paginator: FunctionComponent<PaginatorProps> = ({ itemsPerPage, children, showPageCount, style }) => {

    const makePageArray = (numberOfPages: number) => {
        const emptyArray = new Array(numberOfPages).fill(null);

        let start = 0;

        return emptyArray.map(i => {
            start++;
            return i = start.toString();
        });
    };

    let hash;

    if (window.location.hash) {
        hash = +window.location.hash.replace('#', '');
    }

    const [selectedPage, setSelectedPage] = useState(hash || '1');

    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);
        return () =>
            window.removeEventListener('hashchange', hashChangeHandler);
    }, []);

    const hashChangeHandler = () => {
        setSelectedPage(+window.location.hash.replace('#', ''));
    };

    const renderPageNumbers = (items: ReactNodeArray, number: number) => {
        const numberOfPages = Math.ceil(items.length / number);
        return makePageArray(numberOfPages).map((pageNumber, index) => {
            return (
                <li
                    key={pageNumber}
                    style={{
                    border: 'solid 0.25px grey',
                    borderLeft: index === 0 ? 'solid 0.25px grey' : 0,
                    padding: '.25rem 0',
                    width: '2rem',
                    cursor: 'pointer',
                    color:
                        selectedPage === pageNumber
                            ? 'rgb(37, 220, 163)'
                            : 'black',
                }}
                onClick={() => {
                    window.location.hash = pageNumber
                }}
            >
                {pageNumber}
            </li>)
        });
    };

    const startIndex = itemsPerPage * (+selectedPage - 1);
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
                        flexWrap: 'wrap',
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

Paginator.defaultProps = {
    itemsPerPage: 8,
};

export default Paginator;
