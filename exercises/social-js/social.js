var student = {
    name: "Jon",
    age : 28,
    hasGiBill: true,
    address: {
        city: "Boston",
        state: "Massachusetts",
        street: "123 something st",
        zip: 12345
    },
    hobbies: ["coding", "snowboarding", "jiu jitsu", "boxing"],
    friends: [
        {
            name: "Jordan",
            age: 27,
            address: {
                adress1:{
                    city: "Boston",
                    state: "Massachusetts",
                    street: "123 something st",
                    zip: 12345
                },
                address2: {
                    city: "Boston",
                    state: "Massachusetts",
                    street: "123 something st",
                    zip: 12345
                }                
            }
        }
    ],
    introduce: function() {
        if(this.hasGiBill) {
            console.log("Hello, my name is " + this.name + " and I enjoy " + this.hobbies[0] + "!")
        }
    },
    qualifications: [
        {
            skill: "HTML",
            isProficient: true,
            projects: [
                {
                    url: "https://www.fake.com",
                    description: "landing page",
                    hoursWorkedOn: 5,
                },
                {
                    url: "https://www.fake.com",
                    description: "portfolio website",
                    hoursWorkedOn: 10,
                }
            ]
        }
    ]
}