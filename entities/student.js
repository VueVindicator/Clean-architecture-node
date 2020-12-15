class Student {
    constructor(id = null, firstName, lastName, email, enrollments) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = `${firstName} ${lastName}`
        this.email = email
        this.enrollments = null
    }
}

module.exports = Student

// function Student({id = null, firstName, lastName, email, enrollments} = {}) {
//     return Object.freeze({
//         firstName,
//         lastName,
//         email,
//         enrollments
//     })
// }