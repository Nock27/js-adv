function create(words) {
   let arrOfString = words;
   let divParent = document.getElementById('content');
   for(let string of arrOfString){
      let newElement = document.createElement('div');
      let newParagraph = document.createElement('p');
      // let text = document.createTextNode(string);
      newParagraph.style.display = 'none';
      newParagraph.textContent = string;
      // newParagraph.appendChild(text);
      newElement.appendChild(newParagraph);
      newElement.addEventListener('click', (e) => {
         e.currentTarget.childNodes[0].style.display = 'block';
      })
      divParent.appendChild(newElement);
   }
}