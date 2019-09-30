//з1(2б)
document.getElementById('block').onmousemove = function(elem) {
   	var x = elem.offsetX;
  	var y = elem.offsetY;
    document.getElementById('x').textContent=(x +'x'+ y);
}
//з2(2б)
document.getElementById('double').ondblclick = function(elem){
		this.src ='img/car3.gif';
}
//з8(2б)
document.getElementById('zoomer').onclick = function(elem){
	this.height = '150';
	this.width = '300';
}
//з16(2б)
document.getElementById('hover').onmouseover = function(elem){
	this.src ='img/background.gif';
}
document.getElementById('hover').onmouseout = function(elem){
	this.src ='img/glitch.gif';
}