// display hanger inside canvas when page loads
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.onload = function displayHanger() {
    ctx.moveTo(10,320);
    ctx.lineTo(120,320);
    ctx.stroke();

    ctx.moveTo(65,60);
    ctx.lineTo(65,320);
    ctx.stroke();

    ctx.moveTo(65,60);
    ctx.lineTo(220,60);
    ctx.stroke();
}