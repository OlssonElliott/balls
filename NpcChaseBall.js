import { getposX, getposY } from "./Playercontrols.js";
export function npcChaseBall(root){

    const myChaseBall = document.createElement("div");
    myChaseBall.id = "npcChaseBall";
    root.appendChild(myChaseBall);

    let npcX = 200;
    let npcY = 200;
    let originX = npcX;
    let originY = npcY;
    let npcStepDistance = 5;
    
    
    function updateNpc(){
        myChaseBall.style.left = npcX + "px";
        myChaseBall.style.top = npcY + "px";
    }
    //funktion rörelse 

    function npcChaseMovement(){
        let playerPosX = getposX();
        let playerPosY = getposY();
        //horisontalt
        if (npcX < playerPosX) {npcX += npcStepDistance;}
        else if (npcX > playerPosX) {npcX -= npcStepDistance;}
        //vertikalt
        if (npcY < playerPosY) {npcY += npcStepDistance;}
        else  if (npcY > playerPosY){npcY -= npcStepDistance;}
        updateNpc();
    }


    //rörelseintervall
    setInterval(npcChaseMovement, 20);


    
}