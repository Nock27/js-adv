function getInfo() {
    let busNumber = document.getElementById('stopId').value
    let stopName = document.getElementById('stopName')
    let busList = document.getElementById('buses')
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busNumber}`
    if(busNumber.length != 0){
    fetch(url)
            .then(res => res.json())
            .then((data) => {
            let dataArr = Object.entries(data);
                let busObj = dataArr[0][1];
                busList.innerHTML = '';
                for(let bus in busObj){
                    let newLiElement = document.createElement('li');
                    newLiElement.textContent = `Bus ${bus} arrives in ${busObj[bus]} minutes`;
                    busList.appendChild(newLiElement);
                }
                stopName.textContent = dataArr[1][1];
            })
            .catch(err => {
                stopName.textContent = 'Error';
                busList.innerHTML = '';
            })
    }else{
        stopName.textContent = 'Error';
    }
   

}