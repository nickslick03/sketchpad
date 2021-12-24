const sketchpadContainer = document.getElementById("sketchpad-container");
const style = document.createElement("style");
const body = document.querySelector("body");
let grid = [];
let columns = 25;
let squares = columns*columns;
let color = "black";

function setColumns()
{
    if(grid.length>0)
    for(let i=0;i<squares;i++)
    {
        sketchpadContainer.removeChild(grid[i]); 
    }
    grid = [];
    
    columns = document.getElementById("columns").value;
    if(columns === '')
    {
        columns = 25;
    }
    squares = columns*columns;

    let auto = "auto ";
    for(let i=1;i<columns;i++)
    {
        auto+="auto ";
    }
    sketchpadContainer.style.cssText=`grid-template-columns:${auto};`;
    
    for(let i=0;i<squares;i++)
    {
        grid[i] = document.createElement('div');
        grid[i].classList.add('grid-item');
            
        grid[i].addEventListener('mousedown',function()
        {
            grid[i].style.cssText=`background-color:${color}`;
        });
        grid[i].addEventListener('mouseover', function(event)
        {
            if(event.buttons==1)
            {
                grid[i].style.cssText=`background-color:${color}`;
            }
        });
        sketchpadContainer.appendChild(grid[i]);
    }
    style.innerHTML = `.grid-item:hover{background-color:${color}}`;
    body.appendChild(style);
}

function changeColor()
{
    for(let i=0;i<squares;i++)
    {
        grid[i].addEventListener('mousedown',function()
        {
            grid[i].style.cssText=`background-color:${color}`;
        });
        grid[i].addEventListener('mouseover', function(event)
        {
            if(event.buttons==1)
            {
                grid[i].style.cssText=`background-color:${color}`;
            }
        });
    }
    style.innerHTML = `.grid-item:hover{background-color:${color}}`;
}

var colors = document.getElementById('color-container').childNodes;

colors.forEach(function(e)
    {
        e.addEventListener('click', function()
        {
            color = e.id;
            changeColor();
        });
    });

setColumns();

function reset()
{
    location.reload();
}

