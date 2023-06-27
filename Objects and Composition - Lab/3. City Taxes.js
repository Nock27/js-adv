function cityTaxes(name,population,treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
            Math.floor(this.treasury);

        },
        applyGrowth(percentage){
            percentage /= 100
            this.population *= percentage + 1;
            Math.floor(this.population);
            
        },
        applyRecession(percentage){
            percentage /= 100
            this.treasury *= 1 - percentage;
            Math.floor(this.treasury);
        },
    };
    return city;
}
// const city =
//  cityTaxes('Tortuga',
//  7000,
//  15000);
// console.log(city);

const city =
 cityTaxes('Tortuga',
 7000,
 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

