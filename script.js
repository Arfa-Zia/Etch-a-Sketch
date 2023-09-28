// All the DOM methods are created
const container = document.querySelector('#container');
const newGrid = document.querySelector('#new-grid');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser')
let blackGradient = document.querySelector('#black-gradient')
let color = document.querySelector('#color');
let rainbow = document.querySelector('#rainbow');
let newGridSize;

// Main Function that creates grid of 16x16
function GridSize(num=16){

    console.log(num);
    let  sizeOfGrid= num * num;
    for(let i=0; i<sizeOfGrid ; i++){
    const grid = document.createElement('div')
    grid.classList.add('grid-box');
    grid.style.backgroundColor = "white"
    grid.style.width = "calc( 472px  / " + num + " )" ;
    container.appendChild(grid);

    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor =  " black ";
     });
    }
    
}
// Function that clears grid
function clearGrid(){

  const clearGrid = document.querySelectorAll('.grid-box');
  clearGrid.forEach((element) => (element.style.background = "")
  );  
}
// Function to prompt user to create new grid between 1 to 100 
function createNewGrid(){
     newGridSize = +prompt ("Enter a grid size between 1 to 100");
     
     while(newGridSize < 1 || newGridSize >100 || isNaN(newGridSize)){
        newGridSize = +prompt ("Please Enter a number between 1 to 100")
     }
     
     const newGrid = document.querySelector('#container')

     while(newGrid.firstChild){
        newGrid.removeChild(newGrid.lastChild)
     }
     
     GridSize(newGridSize);
     
}
// Function to change the color of the pen
function changeColor (){
 let changeColor = document.querySelectorAll('.grid-box')
  changeColor.forEach( element => {

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = color.value
     });
    }
    )
}
// Function to erase a specific box
function toErase(){
    const toErase = document.querySelectorAll('.grid-box');
    toErase.forEach( element => (
    element.addEventListener('mouseover' , ()=> {
        element.style.background = '';
    })))
}
// Function to create Random colors 
function rainbowMode(){

    function randomColor() {

        let rValue = Math.floor( Math.random() * (256) );
        let gValue = Math.floor( Math.random() * (256) );
        let bValue = Math.floor( Math.random() * (256) );
         return "rgb( " + rValue + " , " + gValue + " , " + bValue + " )"

    }
    
    let rainbowMode = document.querySelectorAll('.grid-box'); 
    rainbowMode.forEach ( element => (
     element.addEventListener('mouseover', () => {
        element.style.backgroundColor = randomColor();
     })))
     
}
// Function to change Black gradient from white to black
function changeBlackGradient(){
         
    let blackGrad = 255;
    let changeBlackGradient = document.querySelectorAll('.grid-box')
    changeBlackGradient.forEach( element => {
        element.addEventListener('mouseover', () => {
         element.style.backgroundColor = "rgb( " + blackGrad-- + " , " + blackGrad-- + " , " + blackGrad-- + " )";
        })
    })
}
    
// All the event listener called for buttons 
newGrid.addEventListener('click' , createNewGrid )
clear.addEventListener('click' , clearGrid)
color.addEventListener('click' , changeColor)
eraser.addEventListener('click' , toErase)
rainbow.addEventListener('click' , rainbowMode)
blackGradient.addEventListener('click', changeBlackGradient)

// Final calling of main function
GridSize();