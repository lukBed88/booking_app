const parseDate = (date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear(date)
    const fullDateParse = `${day}-${month}-${year}`

    return fullDateParse
}

export default parseDate