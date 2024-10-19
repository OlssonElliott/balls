import { playerControls } from "./Playercontrols.js";
import { npcPatrollBall } from "./npcPatrollBall.js";
import { chaseBall } from "./NpcChaseBall.js";



function theGame(){
    const root = document.getElementById("root");
    playerControls();
    npcPatrollBall();

}

theGame();






