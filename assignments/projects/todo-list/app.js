const list = document.getElementById('list-container')


function getData(){
    axios.get('https://api.vschool.io/Jon/todo/').then(function(response){
        listTodos(response.data)
        console.log(response.data)
    })
}

function listTodos(arr){
    for(let i = 0; i < arr.length; i++){

        // Create container for specific Todo
        let todoContainer = document.createElement('div')
        // Add a class to that container (if you want)
        todoContainer.classList.add('todo')
        // Create an html element
        let title = document.createElement('h3')
        let description = document.createElement('p')
        let price = document.createElement('p')
        let img = document.createElement('img')
        let button = document.createElement('button')
        // Put the Todo title inside of that element
        title.textContent = arr[i].title
        description.textContent = arr[i].description
        price.textContent = `Price: $${arr[i].price}`
        img.setAttribute('src', arr[i].imgUrl)
        img.setAttribute('width', '100px')
        img.setAttribute('height', '100px')
        button.textContent = "Delete"
        //strike through
        if (arr[i].completed) {
            title.classList.add('done')
        } 
        
        // Put element on the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(price)
        todoContainer.appendChild(img)
        todoContainer.appendChild(button)

        list.appendChild(todoContainer)
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
