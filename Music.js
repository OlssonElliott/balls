export function Music(root){
    const audio = document.createElement("audio");
    audio.id = "audio";
    const source = document.createElement("source");
    source.src = "./The Great Ball Song.mp3";
    source.type = "audio/mpeg";

    audio.appendChild(source);
    root.appendChild(audio);

    function play(){
        audio.play();
    }
    play();

    const playButton = document.createElement("button");
    playButton.textContent = "Play Music";
    playButton.addEventListener("click", play);
    root.appendChild(playButton);
    playButton.style.display ="none";
}