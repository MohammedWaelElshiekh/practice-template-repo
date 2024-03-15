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
