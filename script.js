const container = document.getElementById("sketchpad-container");
const grid = [];
let squares = 900;
let columns = Math.sqrt(squares);

for(let i=0;i<squares;i++)
{
    grid[i] = document.createElement('div');
    grid[i].classList.add('grid-item');
    grid[i].addEventListener('mousedown',function(){grid[i].classList.add('black');});
    grid[i].addEventListener('mouseover', function(event)
    {
        if(event.buttons==1)
        {
            grid[i].classList.add('black');
            console.log(event.buttons);
        }
    });
    container.appendChild(grid[i]); 
}

let auto = "auto ";
for(let i=1;i<columns;i++)
{
    auto+="auto ";
}
container.style.cssText=`grid-template-columns:${auto};`;

function black(num){
    grid[i].classList.add('black');
}