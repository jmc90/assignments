// Create an array of pets' names.
// Display the pets' names in <li>s.
// Only display names of pets if their owners are older than 20.
// Only display pets who have nicknames.
// Create an array of everyone that has at least one dog and sort them by age.


const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

// Create an array of pets' names.
const findPets = (array) => {
  let animalNames = []
  array.forEach(element => {
      element.pets.forEach(pet => {
          if (pet.type === "dog") {
              animalNames.push(pet.name)
          }
      })
  })
  return animalNames
}

// console.log(findPets(peopleAndPets))

// Display the pets' names in <li>s.

// const createPetListItems = (array) => {
//     let animalsNamesLi = []
//     array.forEach(element => {
//        element.pets.forEach(pet => {
//             if (pet.type === "dog") {
//                 animalsNamesLi.push(`<li>${pet.name}</li>`) 
//             }
//         })
//     })
//     return animalsNamesLi
// }

// console.log(createPetListItems(peopleAndPets))

// Only display names of pets if their owners are older than 20.

// const createPetListItems20 = (array) => {
//     let animalsNamesLi = []
//     array.forEach(element => {
//         if (element.age > 20) {
//             element.pets.forEach(pet => {
//                 if (pet.type === "dog") {
//                     animalsNamesLi.push(`<li>${pet.name}</li>`) 
//                 }
//             })
//        }
       
//     })
//     return animalsNamesLi
// }

// console.log(createPetListItems20(peopleAndPets))

// Only display pets who have nicknames.

const createPetListWithNickNames = (array) => {
    let animalsNamesLi = []
    array.forEach(element => {
        element.pets.forEach(pet => {
            if (pet.type === "dog") {
                if(pet.nickNames.length > 0) {
                    animalsNamesLi.push(`<li>${pet.name}</li>`) 
                }
            }
        })
       
    })
    return animalsNamesLi
}

console.log(createPetListWithNickNames(peopleAndPets))

// // Create an array of everyone that has at least one dog and sort them by age.

