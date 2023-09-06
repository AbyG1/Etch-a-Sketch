const containerDiv = document.querySelector('#container');



const sizeButton = document.querySelector('#grid-size');

createDiv(16);




sizeButton.addEventListener('click',() => {
    let size;
    do {
       size = prompt("Enter a size between 0 and 100"); 
    } while (size < 1 || size > 100)
     
    console.log(size);
    createDiv(size);
})
 


function createDiv(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.style.width = `${800/size}px`;
            gridDiv.style.height = `${800/size}px`;
            containerDiv.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover',() => {
            gridDiv.style.setProperty('background-color','violet');
        })
        
    }
    
}
}








