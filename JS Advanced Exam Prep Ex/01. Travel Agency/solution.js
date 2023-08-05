window.addEventListener('load', solution);

function solution() {
  let fullNameElemenet = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement =document.getElementById('phone');
  let adddressElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  
  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;


  let prevewInfoUlElement = document.getElementById('infoPreview');

  submitButton.addEventListener('click', () => {
    if(emailElement.value && fullNameElemenet.value !== ''){
    let fullNameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    let phoneNumLi = document.createElement('li');
    let addressLi = document.createElement('li');
    let postalCodeLi = document.createElement('li');
    //Original values
    originalFullName = fullNameElemenet.value;
    originalEmail = emailElement.value;
    originalPhoneNumber = phoneNumberElement.value;
    originalAddress = adddressElement.value;
    originalPostalCode = postalCodeElement.value;

    fullNameLi.textContent = `Full Name: ${fullNameElemenet.value}`;
    emailLi.textContent = `Email: ${emailElement.value}`;
    phoneNumLi.textContent = `Phone Number: ${phoneNumberElement.value}`;
    addressLi.textContent = `Address: ${adddressElement.value}`;
    postalCodeLi.textContent = `Postal Code: ${postalCodeElement.value}`;

    prevewInfoUlElement.appendChild(fullNameLi);
    prevewInfoUlElement.appendChild(emailLi);
    prevewInfoUlElement.appendChild(phoneNumLi);
    prevewInfoUlElement.appendChild(addressLi);
    prevewInfoUlElement.appendChild(postalCodeLi);
    

    fullNameElemenet.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    adddressElement.value = '';
    postalCodeElement.value = '';


    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    editButton.addEventListener('click', () => {
      fullNameElemenet.value = originalFullName;
      emailElement.value = originalEmail;
      phoneNumberElement.value = originalPhoneNumber;
      adddressElement.value = originalAddress;
      postalCodeElement.value = originalPostalCode;

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

      fullNameLi.remove()
      phoneNumLi.remove()
      addressLi.remove()
      postalCodeLi.remove()
      emailLi.remove()
    })

    continueButton.addEventListener('click', () => {
      let blockDiv = document.getElementById('block')
      blockDiv.innerHTML = '';
      let h3Element = document.createElement('h3');
      h3Element.textContent = 'Thank you for your reservation!';
      blockDiv.appendChild(h3Element);
    })

  }

  })
}
