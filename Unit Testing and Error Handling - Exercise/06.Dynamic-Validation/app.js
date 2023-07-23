function validate() {
   let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let emailInputElement = document.getElementById('email');
   emailInputElement.addEventListener('change',() => {
    if(pattern.test(emailInputElement.value)){
        emailInputElement.className = 'none';
       }
       else if(!pattern.test(emailInputElement.value)){
        emailInputElement.className = 'error';
       }
   })
 }