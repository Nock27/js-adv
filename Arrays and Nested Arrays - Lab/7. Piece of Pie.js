function pieCutter(arr,firstTarget,secondTarget){
let indexOfFirstTarget = arr.indexOf(firstTarget)
let IndexOfSecondTarget = arr.indexOf(secondTarget)
let newArr = arr.slice(indexOfFirstTarget,IndexOfSecondTarget + 1)
return newArr;
}
pieCutter(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
pieCutter(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
