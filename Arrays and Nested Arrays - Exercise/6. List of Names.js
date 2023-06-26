function sort(listOfNames) {
    listOfNames.sort((a,b) => a.localeCompare(b));
    for(let i = 0;i < listOfNames.length;i++){
        listOfNames[i] = (i+1) + '.' + listOfNames[i]
    }
    console.log(listOfNames.join('\n'));
}

sort(["John",
"Bob",
"Christina",
"Ema"]
);
