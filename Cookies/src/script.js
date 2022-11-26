
function buttonStuff() {
    console.log("Button pressed");
    location.href = "welcomePage.html";
    setCookie("username", document.getElementById("fname").value, "");
    setCookie("age", document.getElementById("age").value, "");
    setCookie("gender", document.querySelector('input[name="gender"]:checked').value, "");
    setCookie("color", document.getElementById("colors").value, "");
    setCookie("counter", 0, "");
    console.log(allCookiesList());
}



function changingName(){
    document.getElementById("welcomeName").innerHTML=getCookie("username");
    document.getElementById("welcomeName").style="color:"+getCookie("color");
}

function counting(){
    var i = getCookie("counter");
    i++
    setCookie("counter", i, "");
    return i
}

function changeCounter(){
    counting();
    let text="You have visited this page " + getCookie("counter")+ " times !!"
    document.getElementById("counter").innerHTML=text;
}

function changeImage(){
    if(getCookie("gender")=="female"){
    document.getElementById("TheImg").src = "resources/female.png";
    }
}

function changing() {
    changingName();
    changeCounter();
    changeImage()
}