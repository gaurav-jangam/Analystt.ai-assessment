import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Pagination = ({ totalPosts, postPerpage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++) {
        pages.push(i);
    }

    const pageDecrement = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const pageIncrement = () => {
        if(currentPage < Math.ceil(totalPosts / postPerpage)){
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className='pagination'>
            <AiOutlineDoubleLeft
                size={26}
                onClick={pageDecrement}
                style={{ cursor: 'pointer' }}
            />
            {pages.map((page, index) => (

                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? 'btnactive' : ''}
                >
                    {page}
                </button>

            ))}
            <AiOutlineDoubleRight
                size={26}  
                onClick={pageIncrement}
                style={{ cursor: 'pointer' }}
            />
        </div>
    )
}

export default Pagination