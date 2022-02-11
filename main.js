var click = 0;
function incremennt(e) {
    var x = e.clientX - 240;
    var y = e.clientY - 160;
    var dist = Math.sqrt(y*y + x*x);
    if (dist < 50) {
        click++;
        redraw();
    }
    console.log(e)
}
var canvas = document.getElementById("canvas");
canvas.addEventListener('click', incremennt);
var ctx = canvas.getContext("2d");

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "27px Verdana";
    ctx.fillText(`Clicks: ${click}` , 190, 33);
    ctx.beginPath();
    ctx.fillStyle="rgb(133, 28, 133)";
    ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2*Math.PI);
    ctx.fill();
}
redraw();