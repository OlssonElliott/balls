function npcPatrollBall(){
    const npcs = document.createElement("div");
    npcs.id = "npcs";
    
    root.appendChild(npcs);
    
    let npcX = 500;
    let npcY = 300;
    
    function updateNpc(){
        npcs.style.left = npcX + "px";
        npcs.style.top = npcY + "px";
    }
    
    
    function moveNpc(x, y){
        npcX += x;
        npcY += y;
        updateNpc();
    }
    
    function npcPattern(){
        let distance = 2;
        let steps = 50;
        let delay1 = steps * steps;
        let delay2 = delay1 + delay1;
        let delay3 = delay2 + delay1;
        let delayTotal = delay3 + delay1;
        
        //höger
            for (i = 0; i < steps; i++){
                setTimeout(()  => {
                    moveNpc(distance, 0);
                }, i * steps);
            }
    
    
        
        setTimeout(() => {
            for (i = 0; i < steps; i++){
                setTimeout(()  => {
                    moveNpc(0, distance);
                }, i * steps);
            }
        }, delay1);
    
        //vänster
    
        setTimeout(() => {
            for (i = 0; i < steps; i++){
                setTimeout(()  => {
                    moveNpc(-distance, 0);
                }, i * steps);
            }
        }, delay2);
    
        //ner
    
        setTimeout(() => {
            for (i = 0; i < steps; i++){
                setTimeout(()  => {
                    moveNpc(0, -distance);
                }, i * steps);
            }
        }, delay3);
        
        setTimeout(() => {
            npcPattern();
        }, delayTotal);
        
    }
    
    npcPattern();
}

