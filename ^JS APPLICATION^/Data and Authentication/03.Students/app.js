async function solve(){
   const url = ' http://localhost:3030/jsonstore/collections/students'
    
   const table = document.querySelector('#results tbody');

   const submitBtn = document.getElementById('submit');

   const response = await fetch(url);
   
   const data = await response.json();
   Object.values(data).forEach(s => {
    const firstName = s.firstName;
    const lastName = s.lastName;
    const facultyNumber = s.facultyNumber;
    const grade = Number(s.grade);

    const tr = document.createElement('tr');

    const firstNameCell = tr.insertCell(0);
    firstNameCell.innerText = firstName;

    const lastNameCell = tr.insertCell(1);
    lastNameCell.innerText = lastName;

    const facultyNumberCell = tr.insertCell(2);
    facultyNumberCell.innerText = facultyNumber;

    const gradeCell = tr.insertCell(3);
    gradeCell.innerText = grade;

    table.appendChild(tr);
   })

   submitBtn.addEventListener('click',onClickSubmit);
   async function onClickSubmit(ev){
    ev.preventDefault();
    const firstNameInput = document.getElementsByName('firstName')[0];
    const LastNameInput = document.getElementsByName('lastName')[0];
    const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
    const gradeInput = document.getElementsByName('grade')[0];

    if(isNaN(gradeInput.value)){
        return alert('Wrong grade format');
    }
    if(firstNameInput.value !== '' && 
    LastNameInput.value !== '' && 
    facultyNumberInput.value !== '' && 
    gradeInput.value !== ''){
        const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                firstName : firstNameInput.value,
                lastName : LastNameInput.value,
                facultyNumber : Number(facultyNumberInput.value),
                grade : Number(gradeInput.value)
            })
        });
        const tr = document.createElement('tr');
    
        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstNameInput.value;
    
        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = LastNameInput.value;
    
        const facultyNumberCell = tr.insertCell(2);
        facultyNumberCell.innerText = facultyNumberInput.value;
    
        const gradeCell = tr.insertCell(3);
        gradeCell.innerText = gradeInput.value;
    
        table.appendChild(tr);
    }
  

    firstNameInput.value = '';
    LastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';
   }

}
solve();