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



const dir="up";

function movePlayer(direction){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Player has moved " + direction);
        }, 2000);
    });
}
movePlayer(dir).then((message) => {
    console.log(message);
});
movePlayer().catch((err) => {
  console.error(err);
});
