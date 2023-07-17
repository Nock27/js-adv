function getArticleGenerator(input) {

    let articles = input;
    
    return () => { 
        if(articles){
            let parentDiv = document.getElementById('content');
            let article = document.createElement('article');
            article.innerText = articles.shift();
            parentDiv.appendChild(article);
        }
}
}

// while(articles.length){
//     let parentDiv = document.getElementById('content');
//     let article = document.createElement('article');
//     article.innerText = articles.shift();
//     parentDiv.appendChild(article);
//     break;
// }