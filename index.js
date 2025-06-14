let slideShow = 1
let videoMedia = 1
const buttonLeft = document.getElementById('arrow-left');
const buttonRight = document.getElementById('arrow-right');
const editingContainer = document.getElementById("editing-container");
const arrowLeftEdit = document.getElementById("arrow-left-edit");
const arrowRightEdit = document.getElementById("arrow-right-edit");


document.getElementById("photo1").onclick = function() {
    slideshowSelect(1);
}

document.getElementById("photo2").onclick = function() {
    slideshowSelect(2);
}

document.getElementById("photo3").onclick = function() {
    slideshowSelect(3);
}

document.getElementById("video1").onclick = function() {
    videoSelect(1);
}

document.getElementById("video2").onclick = function() {
    videoSelect(2);
}

document.getElementById("video3").onclick = function() {
    videoSelect(3);
}

function slideshowHide() {
    document.getElementById(`slideshow1`).style.display = "none";
    document.getElementById(`slideshow2`).style.display = "none";
    document.getElementById(`slideshow3`).style.display = "none";
}

function videoHide() {
    document.getElementById(`video-media1`).style.display = "none";
    document.getElementById(`video-media2`).style.display = "none";
    document.getElementById(`video-media3`).style.display = "none";
}

function slideshowShow(x) {
    slideshowHide();
    const element = document.getElementById(`slideshow${x}`);
    element.style.display = "flex";
    element.scrollLeft = 0;

    document.querySelectorAll('.photo-thumbnail').forEach(thumb => {
        thumb.classList.remove('selected');
    });

    const selectedThumb = document.getElementById(`photo${x}`);
    if (selectedThumb) {
        selectedThumb.classList.add('selected');
    }
}

function videoShow(x) {
    videoHide();

    const element = document.getElementById(`video-media${x}`);
    element.style.display = "flex";
}

function slideshowSelect(a) {
    slideShow = a;
    slideshowShow(slideShow);
}

function videoSelect(b) {
    // Pause all players
    Object.values(vimeoPlayers).forEach(player => {
        player.pause().catch(() => {}); // Avoid unhandled errors
    });

    videoMedia = b;
    videoShow(videoMedia);
}

buttonLeft.onclick = () => {
    scrollLeft();
};

buttonRight.onclick = () => {
    scrollRight();
}

function scrollLeft() {
    const slideshow = document.getElementById(`slideshow${slideShow}`);
    slideshow.scrollLeft -= 700;
}

function scrollRight() {
    const slideshow = document.getElementById(`slideshow${slideShow}`);
    slideshow.scrollLeft += 700;
}

arrowLeftEdit.onclick = () => {
    editingContainer.scrollLeft -= 500;
};

arrowRightEdit.onclick = () => {
    editingContainer.scrollLeft += 500; 
};

const vimeoPlayers = {
  1: new Vimeo.Player('vimeo-drama'),
  2: new Vimeo.Player('vimeo-wedding'),
  3: new Vimeo.Player('vimeo-legends')
};


slideshowShow(1);
videoShow(1);