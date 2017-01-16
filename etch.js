var gridDimensions = 640;
var numSquares=64;
$(document).ready(function () {


function createGrid() {
for(var i=0; i<numSquares; i++){
	for(var j=0; j<numSquares; j++){
		$("#grid").append($('<div class="square"></div>'));}}

$("div .square").css({"width": gridDimensions/numSquares+"px","height": gridDimensions/numSquares+"px"});
};
function sketch() {
$("div .square").mouseenter(function(){
$(this).css({"background":"black"});
});
};

function clearSquares() {
$(".square").css({"background": "white"});
};


function setGrid() {
numSquares = prompt("Please enter how many squares you want",64);
$('div .square').remove();
createGrid();
sketch();

};
createGrid();
sketch();

document.getElementById("clear").onclick = function(){clearSquares()};
document.getElementById("newSize").onclick = function(){setGrid()};
});

