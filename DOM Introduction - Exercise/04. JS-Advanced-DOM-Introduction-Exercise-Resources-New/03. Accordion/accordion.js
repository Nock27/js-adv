function toggle() {
    console.log("To do");
    let extraText = document.getElementById("extra");
    let buttonText = document.getElementsByClassName("button")[0];
   
        if(buttonText.textContent === "More"){
        extraText.style.display = 'block'; 
        buttonText.textContent = 'Less';
        }else if(buttonText.textContent === "Less"){
        extraText.style.display = 'none'; 
        buttonText.textContent = 'More';
    }

}
