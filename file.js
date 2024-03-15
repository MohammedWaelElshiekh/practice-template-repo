function movePlayer(direction){
    switch (direction) {
        case "forward":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved forward")
                }
            ).then(message => {console.log(message)})
            
        case "backward":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved backward")
                }
            ).then(message => {console.log(message)})
            
        case "right":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved right")
                }
            ).then(message => {console.log(message)})
            
        case "left":
            return new Promise(
                (resolve,reject) =>{
                    setTimeout(resolve,1500, "the player has moved left")
                }
            ).then(message => {console.log(message)})
            
    
        default:
            break;
    }
}

