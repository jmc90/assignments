function getData(){
    axios.get('https://api.vschool.io/Jon/todo/').then(function(response){
        listTodos(response.data)
    })
}

function listTodos(arr){
    for(var i = 0; i < arr.length; i++){

        // Create container for specific Todo
        var todoContainer = document.createElement('div')
            // Add a class to that container (if you want)
        todoContainer.classList.add('todo')

        // Create an html element
        var title = document.createElement('h3')

        // Put the Todo title inside of that element
        title.textContent = arr[i].title
    
        // Put element on the DOM
        todoContainer.appendChild(title)

        document.getElementById('list-container').appendChild(todoContainer)
    }
}



getData()