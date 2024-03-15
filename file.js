function movePlayer(direction){
    switch (direction) {
        case "forward":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved forward")
                }
            )
            
        case "backward":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved backward")
                }
            )
            
        case "right":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved right")
                }
            )
            
        case "left":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved left")
                }
            )
            
    
        default:
            break;
    }
}
