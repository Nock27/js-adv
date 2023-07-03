function extract(content) {
    let contentElement = document.getElementById(content);
    let patern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(patern);
    let result = [];
     for(const match of matches){
        result.push(match[1]);
     }
     return result.join('; ');
}