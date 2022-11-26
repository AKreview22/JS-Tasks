var button = document.getElementById("registerBTN");

button.addEventListener("click", function () {
    console.log("working");
    matches = document.querySelectorAll("input");
    if (confirm("Do you wanna continue?")) {
        matches[0].value = "";
        matches[1].value = "";
    }

})


var timeoutEvent = new Event("timeout");
document.addEventListener("timeout", function () {
    console.log("timout Working");
    var timeout;
    document.onmousemove = function () {
        clearTimeout(timeout);
        
        timeout = setTimeout(function () {
            alert("move your mouse");
        }, 5000);
        
    }
});

document.dispatchEvent(timeoutEvent);

