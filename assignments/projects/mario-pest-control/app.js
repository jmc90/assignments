var bill = document.pestBill

bill.addEventListener('submit', function(event){
    event.preventDefault()
    /**
     * Remove any extra spaces
     */
    
    var goomba = bill.goomba.value * 5 
    var bomb = bill.bomb.value * 7
    var cheep = bill.cheep.value  * 11
    var subTotal = Number(goomba) + Number(bomb) + Number(cheep)

    var total = document.getElementById("total-coins")
    
    /**
     * Good job using `textContent` instead of `innerHTML`!
     */
    total.textContent = ` Total is ${subTotal} coins`

})
 

