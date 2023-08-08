function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    
    const state = {
        player: 'Sarasfati',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        wizard: {
            width: 170,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats: {
            width: 75,
            height: 75,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 8,
        },
        fireball: {
            width: 70,
            height: 40,
            speed: 12,
            nextSpawnTimestamp: 0,
            fireRate: 500,
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
    }

    return state;
}