

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "grid";
}

// keypress left and right for prev and next
document.addEventListener("keydown", function (event) {
	var x = event.which || event.keyCode;
	if (x == 37) plusSlides(-1);
	if (x == 39) plusSlides(1);
})

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swipedetect(el, callback) {

	var touchsurface = el,
		swipedir,
		startX,
		startY,
		distX,
		distY,
		threshold = 150, //required min distance traveled to be considered swipe
		restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		allowedTime = 300, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handleswipe = callback || function (swipedir) { }

	touchsurface.addEventListener('touchstart', function (e) {
		var touchobj = e.changedTouches[0]
		swipedir = 'none'
		dist = 0
		startX = touchobj.pageX
		startY = touchobj.pageY
		startTime = new Date().getTime() // record time when finger first makes contact with surface
		e.preventDefault()
	}, false)

	touchsurface.addEventListener('touchmove', function (e) {
		e.preventDefault() // prevent scrolling when inside DIV
	}, false)

	touchsurface.addEventListener('touchend', function (e) {
		var touchobj = e.changedTouches[0]
		distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
		elapsedTime = new Date().getTime() - startTime // get time elapsed
		if (elapsedTime <= allowedTime) { // first condition for awipe met
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
				swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
			}
			else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
				swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
			}
		}
		handleswipe(swipedir)
		e.preventDefault()
	}, false)
}

swipedetect(el, function (swipedir) {
	if (swipedir == 'left') plusSlides(1)
	if (swipedir == 'right') plusSlides(-1)
})

function chooseNImg(num, min, max, orientation) {
	var imgMap = new Set();

	for (i = 0; i < num; i++) {
		var number = getRandomInt(min, max);
		if (!imgMap.has(number)) {
			imgMap.add(number);
			addImgDiv(number, orientation);
		} else { --i; }
	}
}

function addImgDiv(fileNum, orientation) {
	var imgDiv = document.createElement("div");
	imgDiv.className = "mySlides fade";
	var imgDivChild = document.createElement("img");
	imgDivChild.src = "res/" + orientation + "/file_" + fileNum + ".jpg";
	imgDiv.appendChild(imgDivChild);
	el.appendChild(imgDiv);
}

window.onorientationchange = function () {
	window.location.reload();
}

function constructPage() {
	var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
	switch (orientation) {
		case "landscape-primary":
		case "landscape-secondary":
			chooseNImg(numSlides, min, max, "hor");
			break;
		case "portrait-primary":
		case "portrait-secondary":
			chooseNImg(numSlides, min, max, "ver");
			break;
		default:
			alert("not supported");
	}
}

function giddyUp(slideIndex) {
	constructPage();
	showSlides(slideIndex);
}

var slideIndex = 1;
var numSlides = 5;
var min = 1;
var max = 200;
var el = document.getElementById('touchsurface')

giddyUp(slideIndex);