const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#sizeBtn");
const resetBtn = document.querySelector("#resetBtn");
const squareSize = 100 / 16;




function createGrid(){
    let nSquare = -1;
    while (nSquare <0 || nSquare >100){
       nSquare = prompt("Enter a number less than 100 and greater");
    }
    

    function grid(number){
        container.innerHTML = "";
        let squareSize = 100 / number;
        for(let i = 0; i<(number*number); i++){
            let square = document.createElement("div")
            square.addEventListener("mouseover",function(){
                square.style.backgroundColor = "black";
            })
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        square.setAttribute("id",`square_${i+1}`);
        container.appendChild(square);
        }


    }
    grid(nSquare);
    resetBtn.addEventListener("click",()=> grid(nSquare))
   

}





sizeBtn.addEventListener("click",() => createGrid())
