let state = initState();
let game = initGameObjesct();

game.startScreen.addEventListener('click',(e) => {
game.startScreen.classList.add('hidden');
game.gameScreen.classList.remove('hidden');
})