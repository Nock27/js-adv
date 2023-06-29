function hero(arrOfStrings) {
    let result = [];
    for(let hero of arrOfStrings){
        let [name,level,items] = hero.split(" / ")
        level = Number(level);
        items = items ? items.split(", ") : [];
        result.push({name,level,items});
    } 
    console.log(JSON.stringify(result));
}
hero(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
// hero(['Jake / 1000 / Gauss, HolidayGrenade'] );