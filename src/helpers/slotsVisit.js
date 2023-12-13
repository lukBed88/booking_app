// ZWRACA WIZYTY ZE SLOTAMIW DANYM DNIU
const slotsVisit = (tab,selectOption,date) => {
  let fullDate = '';
  const visits = tab
    .filter(item => item[0] === selectOption)
    .map(item => item[1])
    .filter(item => item);

  const doctorData = visits
    .map(data => Object.values(data)
      .map(entry => entry?.visits)
      .filter(item => item)
    );

  if (typeof date === 'object') {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear(date);
    fullDate = `${day}-${month}-${year}`;
  } else {
    fullDate = date;
  }

  const dayValue = doctorData[0]
    .filter(item => item.date === fullDate)
    .map(item => item.valueSlot)
    .filter(item => item);
  
  return dayValue;

}

export default slotsVisit 