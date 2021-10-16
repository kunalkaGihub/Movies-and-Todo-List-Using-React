import _ from "lodash"

export function paginate(totalmovies, currentPage, pageSize){
    
    const startIndex = (currentPage -1) * pageSize;
    return _(totalmovies).slice(startIndex).take(pageSize).value();

}