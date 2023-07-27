function ticketSorter(arrOfStrings, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let arrOfTickets = [];
  arrOfStrings.map((element) => {
    let [destination, price, status] = element.split("|");
    price = Number(price);
    arrOfTickets.push(new Ticket(destination, price, status));
  }); 

 arrOfTickets.sort((a,b) => {
    if(typeof a[sortingCriteria] === 'number'){
        return a[sortingCriteria] - b[sortingCriteria];
    }else{
        return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    }
 })

  return arrOfTickets;
}

console.log(
  ticketSorter(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
