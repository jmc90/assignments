var square = document.getElementById("square")

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

window.addEventListener("scroll", function() {
    square.style.backgroundColor = "orange"
})

window.addEventListener("keydown", function keyClick(event) {
    var key = event.which || event.keyCode
    if (key === 66) {
        square.style.backgroundColor = "blue"
    } else if (key === 82) {
        square.style.backgroundColor = "red"
    } else if (key === 89) {
        square.style.backgroundColor = "yellow"
    } else if(key === 71) {
        square.style.backgroundColor = "green"
    } else if(key === 79) {
        square.style.backgroundColor = "orange"
    } else {
        square.style.backgroundColor = "black"
    }
})
