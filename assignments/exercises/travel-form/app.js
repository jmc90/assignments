document.info.addEventListener("submit", function(e){
    e.preventDefault()
  
    var firstName = document.info.firstName.value
    var lastName = document.info.lastName.value
    var age = document.info.age.value

    var gender = document.info.gender.value
    var location = document.info.location.value

    var checkedDiet = [];
    var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedDiet.push(checkedBoxes[i].value);
    }
    checkedDiet = checkedDiet.join(", ")

   

    alert(`First name: ${firstName}\n Last name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary restricitions: ${checkedDiet}`)
  })
