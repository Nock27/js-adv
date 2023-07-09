function deleteByEmail() {
    let emailElement = document.querySelector('input[name="email"]');
    let tableElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    for(let element of tableElements){
        if(element.textContent == emailElement.value){
            element.parentElement.remove();
            resultElement.textContent = 'Deleted.'
        }
        else{
            resultElement.textContent = 'Not found.'
        }
    }
  
}