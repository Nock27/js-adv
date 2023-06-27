function townPopulation(string) {
  let towns = {};
  for (let element of string) {
    let temp = element.split(" <-> ");
    let town = temp[0];
    let population = Number(temp[1]);
    if (!towns[town]) {
      towns[town] = 0;
    }
    towns[town] += population;
  }
  for (key in towns) {
    console.log(`${key} : ${towns[key]}`);
  }
}
// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
