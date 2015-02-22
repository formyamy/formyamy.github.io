window.onload = choosePic;

var myPix = new Array("cutecheeks1.jpg","cutecheeks2.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
