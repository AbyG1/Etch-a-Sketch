const containerDiv = document.querySelector('#container')

for(let i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    containerDiv.appendChild(gridDiv);
    
    gridDiv.addEventListener('mouseover',() => {
        gridDiv.classList.add('black');
    })
    
}





