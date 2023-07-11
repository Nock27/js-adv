function encodeAndDecodeMessages() {
    let sendingMessageElement = document.querySelectorAll('textarea')[0];
    let recivingMessageElement = document.querySelectorAll('textarea')[1];
    let encodeAndSendItButtonElement = document.querySelectorAll('button')[0];
    let decodeAndReadItElement = document.querySelectorAll('button')[1];

    encodeAndSendItButtonElement.addEventListener('click',encoding);
    decodeAndReadItElement.addEventListener('click',decoding);

    function encoding(e) {
        let text = sendingMessageElement.value;
        let coded = '';
        for(let i = 0;i < text.length;i++){
            coded += String.fromCharCode(text[i].charCodeAt() + 1)
        }
        recivingMessageElement.value = coded;
        sendingMessageElement.value = '';
    };

    function decoding(e) {
        let text = recivingMessageElement.value;
        let decoded = '';
        for(let i = 0;i < text.length;i++){
            decoded += String.fromCharCode(text[i].charCodeAt() - 1)
        }
        recivingMessageElement.value = decoded;
    };

}