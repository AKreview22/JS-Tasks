let container = window.getComputedStyle(document.getElementById("container"))
let width = parseInt(container.getPropertyValue("width"));
let height = parseInt(container.getPropertyValue("height"));

let icon1 = document.getElementById("icon1");

function setIcon1() {
    icon1.style.top = (height / 2) + "px";
    icon1.style.left="15px";
};
setIcon1();


let topIcon = document.getElementById("top");

function setTopIcon() {
    topIcon.style.left = (width / 2) + "px";
    topIcon.style.top= "20px";
};
setTopIcon();


let icon2 = document.getElementById("icon2");
function setIcon2() {
    iconWidth = parseInt(window.getComputedStyle(icon2).getPropertyValue("width"));
    icon2.style.top = (height / 2) + "px";
    icon2.style.left = (width - 35) + "px";

};
setIcon2();

let moveButton = document.getElementById("moveBtn");

moveButton.addEventListener("click", function () {

    if (moveButton.innerText == "Move") {
        go();
        moveButton.innerText = "Stop";
    } else {
        stop();
        moveButton.innerText = "Move";
    }
})


let normalMove = 10,
    reverseMove = 450,
    move = 10,
    s, i = 0;

function go() {
    icon1.style.left = (normalMove + "px");
    icon2.style.left = (reverseMove + "px");
    topIcon.style.top = (normalMove + "px");
    
    normalMove += move;
    reverseMove += -move;

    i += 10;
    if (i == 450) {
        move *= -1;
        i = 0;
    }
    s = setTimeout(go, 30);

}

function stop() {
    clearTimeout(s);
}


function reset() {
    stop();
    moveButton.innerText = "Move";

    setIcon1();
    setIcon2();
    setTopIcon();
    normalMove = 10;
    reverseMove = 450;
    move = 10;
    i = 0;
}
