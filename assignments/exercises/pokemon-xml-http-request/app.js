var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        var pokemon = data.objects[0].pokemon
        
        loop(pokemon)
        
    }
}


xhr.open("GET", "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/pokemon", true)

xhr.send()


var list = document.getElementById('poke')
function loop(data) {
    data.forEach(element => {
        console.log(element)
        list.innerHTML += `
        <div class="container">
            <h1>${element.name}</h1>
            <h2>${element.resource_uri}<h2>
        </div>` 
    });
}