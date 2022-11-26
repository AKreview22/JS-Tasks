window.addEventListener("keydown", function (pressedEvent) {

    if (pressedEvent.key.length == 1) {
        alert("Ascii of " + pressedEvent.key + " is " + pressedEvent.key.charCodeAt(0));
    } else {
        alert("You Pressed: " + pressedEvent.key);
    }
});
