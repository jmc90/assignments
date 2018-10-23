var addForm = document.add
var subForm = document.subtract
var multForm = document.multiply
var sumPara = document.getElementById("sumParagraph")
var diffPara = document.getElementById("diffParagraph")
var prodPara = document.getElementById("prodParagraph")

addForm.addEventListener('submit', function(event){
    event.preventDefault()
    var x = addForm.add1.value
    var y = addForm.add2.value
    var sum = Number(x) + Number(y)
    
    sumPara.textContent = `The sum is ${sum}`

})

subForm.addEventListener('submit', function(event){
    event.preventDefault()
    var x = subForm.sub1.value
    var y = subForm.sub2.value
    var diff = Number(x) - Number(y)
    
    diffPara.textContent = `The difference is ${diff}`

})

multForm.addEventListener('submit', function(event){
    event.preventDefault()
    var x = multForm.mult1.value
    var y = multForm.mult2.value
    var prod = Number(x) * Number(y)
    
    prodPara.textContent = `The product is ${prod}`

})