const idSlotDay = (tab,selectOption,date) => {
    const fullDate = (typeof date === 'object') ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear(date)}` : date;

    const visits = tab
      .filter(item => item[0] === selectOption)
      .map(item => item[1])
      .filter(item => item);
       
    const dayIdSlot = Object.entries(visits[0])
      .filter(entry => entry[1].visits?.date === fullDate)
      .map(entry => entry[0])
      .filter(item => item);
       
    return dayIdSlot[0];
}

export default idSlotDay