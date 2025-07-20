const container = document.querySelector(".container");
 const squareSize = 100 / 16;
for(let i = 0; i<256; i++){
    let square = document.createElement("div")
    square.addEventListener("mouseover",function(){
        square.style.backgroundColor = "black";
    })
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    square.setAttribute("id",`square_${i+1}`);
    container.appendChild(square);
}