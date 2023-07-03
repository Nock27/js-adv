function colorize() {
    let rowElemenmts = document.getElementsByTagName('tr');
    let rows = Array.from(rowElemenmts);
    rows.forEach((x,i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal';
        }
    });
}