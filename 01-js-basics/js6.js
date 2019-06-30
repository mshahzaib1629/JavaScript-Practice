function doBindings() {
    document.getElementById("myButton").onclick = myButtonClick;
}

function myButtonClick() {
    alert("myButton Click handled properly.");
}

window.onload = doBindings;

