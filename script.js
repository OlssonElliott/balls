import { npcPatrollBall } from "./npcPatrollBall.js";
import { playerControls } from "./Playercontrols.js";
import { npcChaseBall } from "./NpcChaseBall.js";



function theGame(){
    const root = document.getElementById("root");
    playerControls(root);
    npcPatrollBall(root);
    npcChaseBall(root);

}

theGame();






