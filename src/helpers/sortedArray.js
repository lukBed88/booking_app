const sortedArray = (patientArray) => {
let sortedNames = patientArray.sort((a, b) => {
    return a.localeCompare(b);
});

return sortedNames
}

export default sortedArray