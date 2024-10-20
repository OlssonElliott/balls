export function npcPatrollBall(root){
    const npcs = document.createElement("div");
    npcs.id = "npcPatrollBall";
    
    root.appendChild(npcs);
    let npcX = 500;
    let npcY = 500;
    let originX = npcX;
    let originY = npcY;
    let direction = "right";

    
    function updateNpc(){
        npcs.style.left = npcX + "px";
        npcs.style.top = npcY + "px";
    }
    
    
    function npcMovement(){
        let stepDistance = 2;
        let patrolDistance = 200;


        switch (direction){
            case "right":
                npcX += stepDistance;
            if (npcX >= originX + patrolDistance) direction = "down";
                break;
            case "down":
                npcY += stepDistance;
                if (npcY >= originY + patrolDistance) direction ="left";
                break;
            case "left":
                npcX -= stepDistance;
                if (npcX <= originX - patrolDistance) direction ="up";
                break;
            case "up":
                npcY -= stepDistance;
                if (npcY <= originY - patrolDistance) direction ="right";
                break;
        }
        updateNpc();
    }
    setInterval(npcMovement, 10);
}

