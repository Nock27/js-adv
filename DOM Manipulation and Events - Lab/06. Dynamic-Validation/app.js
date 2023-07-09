function validate() {
    let emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailInput.addEventListener("change", (e) => {
        if((!emailRegex.test(e.target.value))){
            e.target.className = 'error';
        }else{
            e.target.className = 'none';
        }
      });
}