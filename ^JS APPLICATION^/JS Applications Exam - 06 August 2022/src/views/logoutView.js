


export const logoutView = (ctx) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
     fetch('http://localhost:3030/users/logout',{
        headers: {
            "X-Authorization" : user.accessToken
        }
    })
        .then(() => {
            localStorage.removeItem('user')
            ctx.page.redirect('/')
        })
    }
