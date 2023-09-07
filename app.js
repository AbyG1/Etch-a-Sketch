const containerDiv = document.querySelector('#container');

let divArray = [];


const sizeButton = document.querySelector('#grid-size');

modifyDiv(16);





sizeButton.addEventListener('click',() => {
    
    let size;
    do {
       size = prompt("Enter a size between 0 and 100"); 
    } while (size < 1 || size > 100)
     
    removeDiv();
    modifyDiv(size);
})
 


function createDiv(size) { 
            const gridDiv = document.createElement('div');
            gridDiv.style.width = `${800/size}px`;
            gridDiv.style.height = `${800/size}px`;
            return gridDiv
           
        
    }
    




function modifyDiv(size) {
    const noOfGrid = size * size;
    for(let i = 0; i < noOfGrid; i++) {
        
            divArray.push(createDiv(size));
            containerDiv.appendChild(divArray[i]);
            divArray[i].addEventListener('mouseover',() => {
            divArray[i].style.setProperty('background-color','black');
            
        })
    }
   
}

    function removeDiv() {
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        }
        
        divArray = [];
    }
    
    









