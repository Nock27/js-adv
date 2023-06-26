function sortingBy2Criteria(arrOfStrings) {
    arrOfStrings.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(arrOfStrings.join('\n'));
}
sortingBy2Criteria(['alpha',
'beta','gamma']);
sortingBy2Criteria(['Isacc',
'Theodor','Jack', 
'Harrison', 
'George']);
sortingBy2Criteria(['test', 
'Deny', 'omen', 
'Default']);
