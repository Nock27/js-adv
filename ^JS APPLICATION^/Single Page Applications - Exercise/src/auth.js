const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');


export function updateAuth(){
    let serializeduser = localStorage.getItem('user');

    if(serializeduser){
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
    let serializeduser = localStorage.getItem('user');

    if(serializeduser){
        let user = JSON.parse(serializeduser);
        return user.accessToken;
    }
    
}