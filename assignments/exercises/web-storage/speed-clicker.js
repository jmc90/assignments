var count = localStorage.getItem("count") || 0;
document.getElementById("count").textContent = count

document.getElementById("btn").addEventListener("click", function() {
    count++
    localStorage.setItem("count", count)
    document.getElementById("count").textContent = count
})

document.getElementById("dBtn").addEventListener("click", function() {
    count--
    localStorage.setItem("count", count)
    document.getElementById("count").textContent = count
})