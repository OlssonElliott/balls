export function ResetGame(root){
    document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {location.reload();}
    });
}