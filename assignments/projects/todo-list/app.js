const list = document.getElementById('list-container')

function editButtonText(button) {
    if (button.textContent === "Edit") {
        button.textContent = "Submit"
    } else {
        button.textContent ="Edit"
    }
}

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
        if (arr[i].completed) {
            description.classList.add('done')
        }

        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.todoId = todoId
        if (arr[i].completed) {
            checkBox.checked = true
        }

        let checkBoxText = document.createElement('span')
        checkBoxText.textContent = ': '
        
        let price = document.createElement('h4')
        price.textContent = `Price: $${arr[i].price}`
        if (!arr[i].price) {
            price.classList.add('hide')
        }

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

        let titleEditInput = document.createElement('input')
        titleEditInput.type = 'text'
        titleEditInput.value = arr[i].title
        titleEditInput.classList.add('hide')
        

        let descripEditInput = document.createElement('input')
        descripEditInput.type = 'text'
        descripEditInput.value = arr[i].description
        descripEditInput.classList.add('hide')

        let priceEditInput = document.createElement('input')
        priceEditInput.type = 'text'
        priceEditInput.value = arr[i].price
        priceEditInput.classList.add('hide')

        let imgEditInput = document.createElement('input')
        imgEditInput.type = 'text'
        imgEditInput.value = arr[i].imgUrl
        imgEditInput.classList.add('hide')
        

        // Put element on the DOM
        todoContainer.appendChild(checkBox)
        todoContainer.appendChild(checkBoxText)
        todoContainer.appendChild(title)
        todoContainer.appendChild(titleEditInput)
        todoContainer.appendChild(description)
        todoContainer.appendChild(descripEditInput)
        todoContainer.appendChild(price)
        todoContainer.appendChild(priceEditInput)
        todoContainer.appendChild(img)
        todoContainer.appendChild(imgEditInput)
        todoContainer.appendChild(editButton)
        todoContainer.appendChild(dButton)

        list.appendChild(todoContainer)

        editButton.addEventListener('click', function() {
            title.classList.toggle('hide')
            titleEditInput.classList.toggle('hide')
            if (!titleEditInput.classList.contains('hide')) {
                titleEditInput.style.display = "block"
            } else {
                titleEditInput.style.display = "none"
            }

            description.classList.toggle('hide')
            descripEditInput.classList.toggle('hide')
            if (!descripEditInput.classList.contains('hide')) {
                descripEditInput.style.display = "block"
            } else {
                descripEditInput.style.display = "none"
            }
            if (!arr[i].description) {
                descripEditInput.placeholder = "Enter Description.."
            }

            if (arr[i].price) {
                price.classList.toggle('hide')
            }
            priceEditInput.classList.toggle('hide')
            if (!priceEditInput.classList.contains('hide')) {
                priceEditInput.style.display = "block"
            } else {
                priceEditInput.style.display = "none"
                
            }
            if (!arr[i].price) {
                priceEditInput.placeholder = "Enter Price.."
            }

            if (arr[i].imgUrl) {
                img.classList.toggle('hide')
            }
            imgEditInput.classList.toggle('hide')
            if (!imgEditInput.classList.contains('hide')) {
                imgEditInput.style.display = "block"
            } else {
                imgEditInput.style.display = "none"
            
            }
            if (!arr[i].img) {
                imgEditInput.placeholder = "Enter Image URL.."
            }

            editButtonText(editButton)

            let editTodo = {}
            editTodo.title = titleEditInput.value
            editTodo.description = descripEditInput.value
            editTodo.price = priceEditInput.value
            editTodo.imgUrl = imgEditInput.value
                
            axios.put(`https://api.vschool.io/Jon/todo/${this.todoId}`, editTodo).then(function(response){
                console.log(response.data)
            })
        })

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
    
    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let img = form.image.value
    
    let newTodo = {}
    newTodo.title = title
    newTodo.description = description
    newTodo.price = price
    newTodo.imgUrl = img
        // Send a Post request
    axios.post('https://api.vschool.io/Jon/todo', newTodo).then(function(response){
        console.log(response.data._id)
        // Then refresh page to see item added to existing list.
    })
})


getData()
