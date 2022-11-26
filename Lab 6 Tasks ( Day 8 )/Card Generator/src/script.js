let generate = document.getElementById("generateButton");

generate.addEventListener("click", function () {
    console.log("Button Pressed");
    setCookie("img",getCheckedImg(),"");
    setCookie("pMessage",getMessage(),"");
    window.open("/popUp.html","height=900","width=1600");
})

function getCheckedImg() {
    let checkedImg = document.querySelector('input[name="radioSelect"]:checked').value;
    return checkedImg;
}

function getMessage() {
    let pMessage = document.getElementById("pMessage").value;
    return pMessage;
}