"use strict";

var photoArray = [
		{filename: "memchu.jpg",
		 caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
		{filename: "quad.jpg",
		 caption: "The Stanford Quad"},
		{filename: "hoop.jpg",
		 caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
		{filename: "memorial-court.jpg",
		 caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
		{filename: "gates.jpg",
		 caption: "The Gates Building - home of Stanford Computer Science."},
		{filename: "stone-river.jpg",
		 caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
	];
	
//setting up global variables
var image = document.getElementById("photo")
var caption = document.getElementById("caption")
var forwardOverlay = document.getElementById("forwardOverlay")
var backwardOverlay = document.getElementById("backwardOverlay")
var photoSection = document.getElementById("photoSection")
var forwardLegend = document.getElementById("rightLegend")
var backwardLegend = document.getElementById("leftLegend")
var imageIndex = 1;


photoSection.style.height = "600px";
photoSection.style.width = "800px";

//preloading
var imgArray = new Array()
for(var i=0; i < photoArray.length; i++) {
    imgArray[i] = new Image();
    imgArray[i].src = photoArray[i];
}

//changes image and caption
function setImageData(){
	image.src = photoArray[imageIndex].filename;
	caption.innerHTML =  photoArray[imageIndex].caption
}

//increments image index after forward click, 
//changes image and caption
forwardOverlay.addEventListener("click", function(){
	imageIndex = (imageIndex + 1) % photoArray.length
	setImageData()
})

//decrements image index after forward click, 
//changes image and caption
backwardOverlay.addEventListener("click", function(){
	 if (imageIndex -1 < 0){
	 	imageIndex = imageIndex + photoArray.length;
	 }
	 imageIndex = (imageIndex-1) % photoArray.length;
	 setImageData()
})

//animation for forward/backward buttons
forwardOverlay.addEventListener("mouseover", function(){
	forwardLegend.innerHTML = "Go forward >";
})

forwardOverlay.addEventListener("mouseout", function(){
	forwardLegend.innerHTML = ">";
})

backwardOverlay.addEventListener("mouseover", function(){
	backwardLegend.innerHTML = "< Go Back";
})

backwardOverlay.addEventListener("mouseout", function(){
	backwardLegend.innerHTML = "<";
})

//puts gallery to center after window resize
function resizeHandler() {
  photoSection.style.top = ((window.innerHeight - parseInt(photoSection.style.height)) / 2) + "px";
  photoSection.style.left = ((window.innerWidth - parseInt(photoSection.style.width)) / 2) + "px";
}

window.addEventListener("load", resizeHandler,false)
window.addEventListener("resize", resizeHandler, false)
