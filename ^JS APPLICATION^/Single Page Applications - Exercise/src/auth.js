const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');


export function updateAuth(){
    let Serializeduser = localStorage.getItem('user');

    if(Serializeduser){
        userNavigation.style.display = 'inline';
        guestNavigation.style.display = 'none'; 
    }else{
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline'; 
    }
}

export function logout(){
    localStorage.removeItem('user');
    updateAuth();
}
export function getToken(){
    let Serializeduser = localStorage.getItem('user');

    if(Serializeduser){
        let user = JSON.parse(Serializeduser);
        return user.accsesToken;
    }
    
}