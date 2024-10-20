import {getChaseNpcX, getChaseNpcY,} from "./NpcChaseBall.js";
import {getposX, getposY} from "./Playercontrols.js";

let chaseNpcX = getChaseNpcX();
let chaseNpcY = getChaseNpcY();
let playerPosX = getposX();
let playerPosY = getposY();

export function ChaseCollisionGameOver(root){
    //hämta info
    const npcChaseBall = document.getElementById("npcChaseBall");
    const ballWidth = npcChaseBall.offsetWidth;
    const ballHeight = npcChaseBall.offsetHeight;

    //game over text
    let text = document.createElement("h1");
        text.id = "GameOverText";
        text.textContent = "GAME OVER";
        root.appendChild(text);
        text.style.display = "none";

    let subtext = document.createElement("h3");
        subtext.id ="SubGameOverText";
        subtext.textContent = "Press space to try again."
        root.appendChild(subtext);
        subtext.style.display = "none";


    
    function updatePosition(){
        chaseNpcX = getChaseNpcX();
        chaseNpcY = getChaseNpcY();
        playerPosX = getposX();
        playerPosY = getposY();
    }

    function checkCollision(){
        if (Math.abs(playerPosX - chaseNpcX) < ballWidth && Math.abs(playerPosY - chaseNpcY) < ballHeight) {text.style.display = "block"; subtext.style.display = "block";}
    }


    setInterval(updatePosition, 20);
    setInterval(checkCollision, 20);
}
