function changing() {
    addImg(getCookie("img"));
    addMessage(getCookie("pMessage"));
    addCloseButton();
}

function addImg(imageName) {
    const div = document.createElement("div");
    const selectedImage = document.createElement("img");
    selectedImage.src = "images/" + imageName + ".jpg";
    selectedImage.width = "500";
    div.appendChild(selectedImage);
    div.style = "text-align:center";
    document.body.appendChild(div);
}

function addMessage(pMessage) {
    const par = document.createElement("p");
    let messageNode = document.createTextNode(pMessage);
    par.appendChild(messageNode);
    par.style = "text-align:center; color:cornflowerblue";
    document.body.appendChild(par);
}

function addCloseButton() {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = "Close preview";
    
    button.onclick = function () {
        window.close();
    };
    
    div.appendChild(button);
    div.style = "text-align:center";
    document.body.appendChild(div);

}
