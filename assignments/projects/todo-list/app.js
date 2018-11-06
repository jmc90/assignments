var list = document.getElementById('list-container')


function getData(){
    axios.get('https://api.vschool.io/Jon/todo/').then(function(response){
        listTodos(response.data)
        console.log(response.data)
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
        var description = document.createElement('p')
        var button = document.createElement('button')
        // Put the Todo title inside of that element
        title.textContent = arr[i].title
        description.textContent = arr[i].description
        button.textContent = "Delete"
        //strike through
        if (arr[i].completed) {
            title.classList.add('done')
        } 
        
        // Put element on the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(button)

        list.appendChild(todoContainer)


    }
}

// Step 2: Post a new Todo
var form = document.todoForm
form.addEventListener("submit", function(event){
    event.preventDefault()
    // When the user submits
        // Grab the user input
    var title = todoForm.title.value
        // Put that input in a new object
    var newTodo = {}
    newTodo.title = title
        // Send a Post request
    axios.post('https://api.vschool.io/Jon/todo', newTodo).then(function(response){
        console.log(response.data) // should be new todo with an _id added
        // Then refresh page to see item added to existing list.
    })
})

getData()
