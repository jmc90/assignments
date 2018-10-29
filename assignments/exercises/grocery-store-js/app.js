var shopper = {
    name: "Jon Mcneil",
    age: 28,
    isHungry: true,
    saySomething: function(foodType) {
        if (this.isHungry) {
            return "I want to eat some " + foodType + "!!!"
        } else {
            return "I am not hungry"
        }
    },
    groceryCart: ["apples", "bananas", "pizza", "milk", "bread", "other stuff"]
 }

 console.log(shopper.saySomething(shopper.groceryCart[2]))