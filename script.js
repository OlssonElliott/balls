import { npcPatrollBall } from "./npcPatrollBall.js";
import { playerControls } from "./Playercontrols.js";
import { npcChaseBall } from "./NpcChaseBall.js";
import { ChaseCollisionGameOver } from "./ChaseCollision.js";
import { ResetGame } from "./ResetGame.js";




function theGame(){
    const root = document.getElementById("root");
    playerControls(root);
    npcPatrollBall(root);
    npcChaseBall(root);
    ChaseCollisionGameOver(root);
    ResetGame(root);
}

theGame();






