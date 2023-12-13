/* eslint-disable array-callback-return */

export const dateVisits = (selectOption,array) => {

    const visits = array.map((item) => {
        if((item[0] === selectOption)){
            return item
        }
    }).filter((item) => {
        return item
    })

    const filterVisits = visits.map((item) => {
        return item[1]
    }).filter((item) => {
        return item
    })

const visitsArray = filterVisits.map((item) => {
    return Object.values(item)
    .map((entry) => {
        if(entry?.visits?.date){
            return entry.visits.date
        }
    }).filter((item) => {
        return item
    })
})

return visitsArray[0]

}

export default dateVisits