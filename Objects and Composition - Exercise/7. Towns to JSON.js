function towns(arrOfStrings) {
    let result = [];
    let headings = arrOfStrings[0].split(/\s*\|\s*/);
    headings.shift();
    headings.pop();
    let Town = headings[0];
    let Latitude = headings[1];
    let Longtitude = headings[2];
    for(let i = 1;i < arrOfStrings.length;i++){
    let info = arrOfStrings[i].split(/\s*\|\s*/);
    info.shift();
    info.pop();
    let TownInfo = info[0];
    let LatitudeInfo = Number(info[1]);
    let LongtitudeInfo = Number(info[2]);
    let obj = {};
    obj[Town] = TownInfo;
    obj[Latitude] = Math.round(LatitudeInfo * 100) / 100;
    obj[Longtitude] = Math.round(LongtitudeInfo * 100) / 100;
    result.push(obj);
    }
    let finalResult = JSON.stringify(result);
    console.log(finalResult);
}
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
// towns(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']);
