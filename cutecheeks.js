window.onload = choosePic;

var myPix = new Array("cutecheeks/cutecheeks1.jpg","cutecheeks/cutecheeks2.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
