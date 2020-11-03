var bigpic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", changePic);
}

function changePic() {
    var newPic = this.src;
    bigpic.setAttribute("src", newPic);
}