const list = document.getElementById('list-container')


function getData(){
    axios.get('https://api.vschool.io/Jon/todo/').then(function(response){
        listTodos(response.data)
        console.log(response)
    })
}

function listTodos(arr){
    for(let i = 0; i < arr.length; i++){
        // Grab todos
        let todoId = arr[i]._id
        
        let todoContainer = document.createElement('div')
        todoContainer.classList.add('todo')
        
        let title = document.createElement('h3')
        title.textContent = arr[i].title
        if (arr[i].completed) {
            title.classList.add('done')
        } 

        let description = document.createElement('p')
        description.textContent = arr[i].description

        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.todoId = todoId
        if (arr[i].completed) {
            checkBox.checked = true
        }
        
        let price = document.createElement('p')
        price.textContent = `Price: $${arr[i].price}`

        let img = document.createElement('img')
        img.src = arr[i].imgUrl
        img.width = "100"
        img.height = "100"
        if (!arr[i].imgUrl) {
            img.classList.add('hide')
        }

        let editButton = document.createElement('button')
        editButton.textContent = "Edit"
        editButton.todoId = todoId

        let dButton = document.createElement('button')
        dButton.textContent = "Delete"
        dButton.todoId = todoId

        // Put element on the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(checkBox)
        todoContainer.appendChild(price)
        todoContainer.appendChild(img)
        todoContainer.appendChild(editButton)
        todoContainer.appendChild(dButton)

        list.appendChild(todoContainer)

        checkBox.addEventListener('change', function() {
            let complete = {}
            complete.completed = this.checked
            axios.put(`https://api.vschool.io/Jon/todo/${this.todoId}`, complete).then(function(response){
                console.log(response.data.completed)
            })
        })

        dButton.addEventListener('click', function() {
            axios.delete(`https://api.vschool.io/Jon/todo/${this.todoId}`).then(function(response){
                console.log(response.data)
            })
        })
    }
}

// Step 2: Post a new Todo
const form = document.todoForm
form.addEventListener("submit", function(event){
    event.preventDefault()
    // When the user submits
        // Grab the user input
    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let img = form.image.value
    
        // Put that input in a new object
    let newTodo = {}
    newTodo.title = title
    newTodo.description = description
    newTodo.price = price
    newTodo.imgUrl = img
        // Send a Post request
    axios.post('https://api.vschool.io/Jon/todo', newTodo).then(function(response){
        console.log(response.data) // should be new todo with an _id added
        // Then refresh page to see item added to existing list.
    })
})


getData()
