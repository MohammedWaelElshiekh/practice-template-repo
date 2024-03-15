function calculateScore(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("score calculated "+ Math.floor(Math.random() * 10));
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
