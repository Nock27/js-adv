import { html,render } from "../node_modules/lit-html/lit-html.js";

   const url = 'http://localhost:3030/jsonstore/advanced/table'
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const tbodyElement = document.querySelector('tbody');
   const match = document.getElementById('searchField');
   const trTemplate = (data) => html`
  
     ${data.map(td => html`
     <tr>
     <td>${td.firstName}</td>
     <td>${td.email}</td>
     <td>${td.course}</td>
     </tr>
     `)}

   `;


async function get(url){
   const response = await fetch(url)
   const towns = await response.json();
   return towns;
}

window.addEventListener('load',getData)
  async function getData(){
     let data = Object.values(await get(url));
      render(trTemplate(data),tbodyElement);
     
  }


   function onClick(e) {
      e.preventDefault();
      const info = Array.from(document.querySelectorAll('tbody tr td'))
      info.map(td => td.parentElement.className = '')
      
      info.map(td => {
         if(td.textContent.toLowerCase().includes(match.value.toLowerCase())){
            td.parentElement.className = 'select';
         }
      })
      
   }

