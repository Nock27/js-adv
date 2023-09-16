

export const deleteView = (ctx) => {
    const token = getToken();
    fetch(`http://localhost:3030/data/offers/${ctx.params.offerId}`,{
        method:"DELETE",
        headers: {
            "content-type" : "application/json",
            "X-Authorization" : token
        }
    })
    .then(() => ctx.page.redirect('/dashboard'));
}
const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.accessToken;
}