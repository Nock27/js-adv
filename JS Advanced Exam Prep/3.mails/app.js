function solve() {
    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let textAreaElement = document.getElementById('message');

    let addToTheListButtonElement = document.getElementById('add');
    let resetTheListButtonElement = document.getElementById('reset');

    let listOfMailsElement = document.getElementById('list');

    
    //Add button
    addToTheListButtonElement.addEventListener("click", addToTheListButtonElement, false);
        addToTheListButtonElement.addEventListener('click', function () {
            let h4TitleElement = document.createElement('h4');
            let h4EmailElement = document.createElement('h4');
            let spanElement = document.createElement('span');
            let listElement = document.createElement('li');
            let divelement = document.createElement('div');

            let sendBtnElement = document.createElement('button');
            let deleteBtnElement = document.createElement('button');
    
            divelement.setAttribute('id', 'list-action');
    
            sendBtnElement.setAttribute('type', 'submit');
            sendBtnElement.setAttribute('id', 'send');
            sendBtnElement.textContent = 'Send';
    
            deleteBtnElement.setAttribute('type', 'submit');
            deleteBtnElement.setAttribute('id', 'delete');
            deleteBtnElement.textContent = 'Delete';
    
            divelement.appendChild(sendBtnElement);
            divelement.appendChild(deleteBtnElement);
    
            h4TitleElement.textContent = `Title: ${titleElement.value}`;
            h4EmailElement.textContent = `Recipient Name: ${recipientNameElement.value}`;
            spanElement.textContent = textAreaElement.value;
            titleElement.value = '';
            recipientNameElement.value = '';
            textAreaElement.value = '';

    
            listElement.appendChild(h4TitleElement);
            listElement.appendChild(h4EmailElement);
            listElement.appendChild(spanElement);
            listElement.appendChild(divelement);
            if(!(h4TitleElement.textContent == '' || h4EmailElement.textContent.length == '' || spanElement.textContent.length == ''))
    {   
        listOfMailsElement.appendChild(listElement);

    }

            //-------------------------
            sendBtnElement.addEventListener('click', function () {
                let ulElement = document.getElementsByClassName('sent-list')[0];
                let liElement = document.createElement('li');
        
                let toSpanElement = document.createElement('span')
                let titleSpanElement = document.createElement('span')
        
                toSpanElement.textContent = h4EmailElement.textContent;
                titleSpanElement.textContent = h4TitleElement.textContent;
        
                let divElement = document.createElement('div');
                divElement.setAttribute('class', 'btn');
        
                let buttonElement = document.createElement('button');
                buttonElement.textContent = 'Delete';
                buttonElement.setAttribute('type' , 'submit');
                buttonElement.setAttribute('class', 'delete')
        
                divElement.appendChild(buttonElement);
                liElement.appendChild(toSpanElement);
                liElement.appendChild(titleSpanElement);
                liElement.appendChild(divElement);
                ulElement.appendChild(liElement)
                listElement.remove();
                
            //--------------------------------------
            //let buttonElement = document.querySelectorAll('button.delete');
            //--------------------------------------------
            buttonElement.addEventListener('click',() => {

                let firstLiElementInsideSentList = document.querySelector('ul.sent-list li');
                let listItemforDeleteElement = document.createElement('li');
                let spanToForDeleteElement = document.createElement('span');
                let spanTitleForDeleteElement = document.createElement('span');

                spanToForDeleteElement.textContent = h4EmailElement.textContent
                spanTitleForDeleteElement.textContent = h4TitleElement.textContent
                
                listItemforDeleteElement.appendChild(spanToForDeleteElement);
                listItemforDeleteElement.appendChild(spanTitleForDeleteElement);
                
                let deleteList = document.getElementsByClassName('delete-list')[0];
                deleteList.appendChild(listItemforDeleteElement);

                firstLiElementInsideSentList.remove();
            })
         
            })
            deleteBtnElement.addEventListener('click',() => {
                let listItemforDeleteElement = document.createElement('li');
                let spanToForDeleteElement = document.createElement('span');
                let spanTitleForDeleteElement = document.createElement('span');
                let deleteList = document.getElementsByClassName('delete-list')[0];


                let liElement = document.querySelector('#list li');


                spanToForDeleteElement.textContent = h4EmailElement.textContent
                spanTitleForDeleteElement.textContent = h4TitleElement.textContent

                listItemforDeleteElement.appendChild(spanToForDeleteElement);
                listItemforDeleteElement.appendChild(spanTitleForDeleteElement);
                deleteList.appendChild(listItemforDeleteElement);
                liElement.remove();
            })

            
        });
    
    //Reset button
    resetTheListButtonElement.addEventListener('click',() => {
        recipientNameElement.value = '';
        titleElement.value = '';
        textAreaElement.value = '';
    })

}
solve()

