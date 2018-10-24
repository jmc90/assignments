var bill = document.pestBill

bill.addEventListener('submit', function(event){
    event.preventDefault()
    
    
    var goomba = bill.goomba.value * 5 
    var bomb = bill.bomb.value * 7
    var cheep = bill.cheep.value  * 11
    var subTotal = Number(goomba) + Number(bomb) + Number(cheep)

    var total = document.getElementById("totalCoins")
    
    total.textContent = ` Total is ${subTotal} coins`

})
 

