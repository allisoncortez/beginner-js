//select elements on pg (canvas,shake button)
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d')
const shakebtn = document.querySelector('.shake');
const MOVE_AMOUNT = 30;

//setup our canvas for drawing
const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT ;

let hue = 0;
// ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` //set hue to rainbow color
ctx.beginPath(); //start drawing
ctx.moveTo(x, y); //where is the line starting
ctx.lineTo(x, y); //where the line goes to, endpoint
ctx.stroke(); //look this up..



//write a draw fn()
function draw({ key }) {
    hue += 12;
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` //set hue to rainbow color
    //start path
    ctx.beginPath();
    ctx.moveTo(x,y);
    //move x and y values depending on what the user did
    // x = x - MOVE_AMOUNT 
    // y = y - MOVE_AMOUNT 
    switch (key) {
        case 'ArrowUp' :
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight' :
            x = x + MOVE_AMOUNT;
            break;
        case 'ArrowDown' :
        y = y + MOVE_AMOUNT;
        break;
        case 'ArrowLeft' :
            x = x - MOVE_AMOUNT;
            break;
        default:
            break;
    }

    ctx.lineTo(x,y);
    ctx.stroke();
}

//write handler for keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
        // console.log(e.key);
        // console.log('handling key');
    }
}
//clear/shake fn()
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        console.log('done the shake');
        canvas.classList.remove('shake');
    },
    { once: true }
    );
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebtn.addEventListener('click', clearCanvas)