// Click Event
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("clickText").innerText = "Button was clicked!";
});

// Mouseover Event
document.getElementById("box").addEventListener("mouseover", function () {
    this.style.backgroundColor = "orange";
});

// Keydown Event
document.getElementById("keyboard").addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
});

// Change Event
document.getElementById("dropdown").addEventListener("change", function () {
    document.getElementById("output").innerText = "You selected: " + this.value;
});