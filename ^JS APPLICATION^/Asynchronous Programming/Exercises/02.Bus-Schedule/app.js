function solve() {
let departBtn = document.getElementById('depart');
let arriveBtn = document.getElementById('arrive');
let infoSpan = document.querySelector('.info')
let currentStop = 'depot'
let baseUrl = `http://localhost:3030/jsonstore/bus/schedule/`;

    function depart() {
        let url = `${baseUrl}${currentStop}`
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                infoArr = data;
                infoSpan.textContent = `Next stop ${infoArr.name}`;
                currentStop = infoArr.next;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
    }

    function arrive() {
        let url = `${baseUrl}${currentStop}`
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            infoArr = data;
            let previousStop = infoSpan.textContent.split(' stop ')[1];
            infoSpan.textContent = `Arriving at ${previousStop}`;
            currentStop = infoArr.next;
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        })
        .catch(err => {
            infoSpan.textContent = 'Error'
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();