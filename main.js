

function initializeGame(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Game initialized");
        }, 2000);
    });
}
initializeGame()
.then((message) => {
    console.log(message);
});
initializeGame().catch((err) => {
  console.error(err);
});

function movePlayer(direction){
    switch (direction) {
        case "forward":
            moves++;
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved forward")
                }
            ).then(message => {console.log(message)})
            
        case "backward":
            moves++;
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved backward")
                }
            ).then(message => {console.log(message)})
            
        case "right":
            moves++;
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved right")
                }
            ).then(message => {console.log(message)})
            
        case "left":
            moves++;
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved left")
                }
            ).then(message => {console.log(message)})
            
    
        default:
            break;
    }
}

function calculateScore(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Player's score is "+ Math.floor(Math.random() * 10));
        }, 2000);
    });
}
calculateScore()
.then((message) => {
    console.log(message);
});
calculateScore().catch((err) => {
  console.error(err);
});