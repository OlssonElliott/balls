export function playerControls(){

    const ball = document.createElement("div");
    ball.id = "ball";
    root.appendChild(ball);
    
    //ball position
    let posX = 30;
    let posY = 30;

    
    //update ball position
    function updatePosition(){
        ball.style.left = posX + "px";
        ball.style.top = posY + "px";
        }

    //move ball 
    function moveBall(x, y){
        posX += x;
        posY += y;
        updatePosition();
    }
    
    let keypress = {w: false, a: false, s: false, d: false};
    
    //set move direction, (to skip key repeat delay)
    let moveDistance = 2;
    function moveDirection(){
        if (keypress.w){moveBall(0, -moveDistance)}
        if (keypress.s){moveBall(0, moveDistance)}
        if (keypress.a){moveBall(-moveDistance, 0)}
        if (keypress.d){moveBall(moveDistance, 0)}
    }
    setInterval(moveDirection, 1);
    setInterval(updatePosition, 1);
    
    //start moving
    document.addEventListener("keydown", (e) => {
    const tangent = e.key;
    
    switch (tangent) {
        case "w":
            keypress.w = true;
            break;
        case "s":
            keypress.s = true;
            break;
        case "a":
            keypress.a = true;
            break;
        case "d":
            keypress.d = true;
            break;
    }
    
    });
    
    //stop moving
    document.addEventListener("keyup", (e) => {
       const tangent = e.key;
        
        switch (tangent) {
            case "w":
                keypress.w = false;
                break;
            case "s":
                keypress.s = false;
                break;
            case "a":
                keypress.a = false;
                break;
            case "d":
                keypress.d = false;
                break;
        }
        });

}

