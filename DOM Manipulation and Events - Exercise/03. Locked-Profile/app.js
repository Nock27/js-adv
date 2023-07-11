function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click',onClick));
    function onClick(e) {
        let profile = e.target.parentNode;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        let hiddenInfo = profile.querySelector('div');
        let button = profile.querySelector('button');
        
        if(button.textContent == 'Show more' && isActive){
            hiddenInfo.style.display = 'inline';
            button.textContent = 'Hide it'
        }else if(button.textContent == 'Hide it' && isActive){
            hiddenInfo.style.display = 'none';
            button.textContent = 'Show more'
        }
        
    }
}