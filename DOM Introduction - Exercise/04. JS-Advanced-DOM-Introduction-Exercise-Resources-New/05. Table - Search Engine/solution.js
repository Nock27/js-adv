function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let tableRows = document.querySelectorAll('tbody tr');
     let textInput = document.getElementById('searchField');
      for(let row of tableRows){
         row.classList.remove('select');
         if(row.innerHTML.includes(textInput.value) && textInput.value !== ''){
            row.className = 'select';
         }
      }
      textInput.value = '';
   }
   }
