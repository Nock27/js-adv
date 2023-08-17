function attachEvents() {
    const locationInputElement = document.getElementById('location');
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const forecastElement = document.getElementById('forecast');
    const submitBtn = document.getElementById('submit');
    let currentForcast = document.getElementById('current')
    let code = '';

    submitBtn.addEventListener('click', () => {
        forecastElement.style.display = 'block'

        fetch(baseUrl)
        .then(res => {
            return res.json();
        })
        .then(data => {
            
            data.forEach(element => {
                if(element.name == locationInputElement.value){
                    code = element.code;

                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                        .then(res => {
                            return res.json();
                        })  
                        .then(data => {
                            console.log(data); //con
                           
                            
                            let forecast = document.createElement('div').classList.add('forecasts');
                            let picture = document.createElement('span').classList.add('condition-symbol');
                            let fullCondition = document.createElement('span').classList.add('condition');
                            let city = document.createElement('span').classList.add('forecast-data');
                            let degree = document.createElement('span').classList.add('forecast-data');
                            let condition = document.createElement('span').classList.add('forecast-data');
                            picture.textContent;
                            city.textContent = data.name;
                            degree.textContent;
                            condition.textContent;

                            fullCondition.appendChild(city);
                            fullCondition.appendChild(degree);
                            fullCondition.appendChild(condition);
                            forecast.appendChild(picture);
                            forecast.appendChild(fullCondition);







                        })
                        .catch(err => {
                            console.log('Error');
                        })

                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                        .then(res => {
                            return res.json();
                        })  
                        .then(data => {
                            console.log(data); //con
                        })
                    
                }
            });
        })
        .catch(err => {
            console.log("Error");
        })
        
        

    })
    
}

attachEvents();