const container = document.querySelector(".container");
for(let i = 0; i<576; i++){
    let square = document.createElement("div")
    square.setAttribute("id",`square_${i+1}`);
    container.appendChild(square);
}