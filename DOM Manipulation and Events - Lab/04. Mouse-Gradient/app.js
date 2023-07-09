function attachGradientEvents() {
   let gradientBoxElement = document.getElementById('gradient-box');
   let resultElement = document.getElementById('result');
   const gradientMousePercentage = (e) => {
    let percent = Math.floor((e.offsetX / e.target.offsetWidth)* 100)
    resultElement.textContent = `${percent}%`;
   }
   gradientBoxElement.addEventListener('mousemove',gradientMousePercentage);
}