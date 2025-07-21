# Etch-A-Sketch

This is a recreation of the Etch-A-Sketch toy using JavaScript, HTML and CSS

## How it Works

The interface includes two buttons, Reset and Grid Size, and a grid of squares. When the user's mouse
passes over a square an event listner changes the DOM so that the squares color is changed to black.
The Reset button when clicked, reverts the color of all squares back to grey. The Grid Size button prompts
the user for a number _n_ and then creates and n by n grid of squares.

### Logic

This button is attached to an event listner which calls the function createGrid().
createGrid() handles all the logic of the application.

#### createGrid()

```
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
```

#### Breakdown

    - prompts user to enter a number between 0 and 100, it then checks if it's valid if not it will prompt the user again
    - Then we call the helper function **grid(n)** with n being the number the user entered
        -grid takes in a number which represents the number of rows and columns
        -it clears the container holding the squares's inner html so we dont overlap with a previous grid
        -
