function dateCalculator(year,month,day) {
    let inputDate = `${year}-${month}-${day}`;
    let date = new Date(inputDate);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
   
}
dateCalculator(2016, 9, 30);
dateCalculator(2015, 5, 10 );
