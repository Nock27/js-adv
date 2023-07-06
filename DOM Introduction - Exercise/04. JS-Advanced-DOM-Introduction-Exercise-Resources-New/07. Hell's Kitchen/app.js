function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

     let input = JSON.parse(document.querySelector('#inputs textarea').value);
     let avgSalary = 0;
     let totalSalary = 0;
     let currAvgSalary = 0;
     let bestName = '';
     let output = {};

     for(let line of input){
      let restourantInfo = line.split(' - ');
      let restourantName = restourantInfo.shift();
      let workersData = restourantInfo[0].split(', ')

      for(let worker of workersData){
         let [name,salary] = worker.split(' ');
         if(!output.hasOwnProperty(restourantName)){
            output[restourantName] = {};
         }
         if(output.hasOwnProperty(restourantName)){
            output[restourantName][name] = Number(salary);
         }
      }
     }
     let entries = Object.entries(output);
     for(let entry of entries){
      let key = entry[0];
      let values = Object.entries(entry[1]);

      for(let [name,salary] of values){
         totalSalary += salary;
      }
      avgSalary = totalSalary / values.length;
      if(avgSalary > currAvgSalary){
         currAvgSalary = avgSalary;
         bestName = key;
         totalSalary = 0;
      }
     }
     let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);
     let print = '';

     result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
     document.querySelector(`#bestRestaurant p`).textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`
     document.querySelector('#workers p').textContent = print;
   }
}



// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]

// let bestSalary = 0;
// let totalSalary = 0
// let avgSalary = 0;
// let workerCounter = 0;
// let result = {};
// let input = JSON.parse(document.querySelector('#inputs textarea').value);
// for(let line of input){
//    let restourantInfo = line.split(' - ');
//    let restourantName = restourantInfo[0];
//    let workers = Array.from(String(restourantInfo[1]).split(', '));
//    let resultObj = 0
 
//    for(let work of workers){
//       let workerName = work.split(' ')[0]
//       let workerSalary = work.split(' ')[1];
//       if(bestSalary < workerSalary){
//          bestSalary = workerSalary;
//       }
//       workerCounter++;
//       totalSalary += workerSalary;
//    }
//    avgSalary = totalSalary / workerCounter;
//    console.log(avgSalary);
//    workerCounter = 0;
//    totalSalary = 0;
// }


// }