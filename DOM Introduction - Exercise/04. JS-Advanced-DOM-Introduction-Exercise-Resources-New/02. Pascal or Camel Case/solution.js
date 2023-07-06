function solve() {
  let textInput = document.getElementById('text').value;
  let textCase = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let result = '';


  if(textCase === 'Camel Case'){
    for(let i = 0;i < textInput.length;i++){
      if(textInput[i] === ' '){
        result+=(textInput[i + 1].toUpperCase());
        i+=2;
      }
      result += textInput[i].toLowerCase();
    }

  }
  else if(textCase === 'Pascal Case'){
    result += (textInput[0].toUpperCase());
    for(let i = 1;i < textInput.length;i++){
      if(textInput[i] === ' '){
        result+=textInput[i + 1] = textInput[i + 1].toUpperCase();
        i+=2;
      }
      result += textInput[i].toLowerCase();
    }

  }
  else{
    result = 'Error!';
  }
  resultElement.textContent = result;
}