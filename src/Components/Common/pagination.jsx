import React, { Component } from 'react';
import _ from "lodash";


const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage} = props

    const pagesCount = Math.ceil(itemsCount/pageSize);
    console.log(pagesCount) // ...3
   if(pagesCount===1) return null;
    const pages = _.range(1, pagesCount+1);
    console.log(pages)//...[1,2,3]

    return ( 
            <nav>
                <ul className="pagination">
                    {pages.map(page=>
                    <li className={page === currentPage? "page-item active":"page-item"}>
                        <a onClick={()=> onPageChange(page)} className="page-link">{page}</a>
                    </li>)}
                        
                </ul>

            </nav>
     )
}
 
export default Pagination;
