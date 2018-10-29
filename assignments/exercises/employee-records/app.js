var employees = []

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
    }
}

var employee1 = new Employee("Jon", "Student", "Broke af", "Full Time Hobo")
var employee2 = new Employee("Bob", "CEO", "Rich af")
var employee3 = new Employee("Joe", "Average Employee", "40,000/year")


function addToEmployees(employee) {
    employees.push(employee)
}

addToEmployees(employee1)
addToEmployees(employee2)
addToEmployees(employee3)

console.log(employees)