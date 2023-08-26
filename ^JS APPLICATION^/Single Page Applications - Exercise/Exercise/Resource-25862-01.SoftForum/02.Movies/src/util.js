
const views = [...document.querySelectorAll('.view-section')];

function hideAll(){
    views.forEach(x => x.style.display = 'none');
}
export function showView(section){
    hideAll();
    section.style.display = 'block';
}

export function spinner(){
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;'

    return element;
}