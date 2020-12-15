const Student = require('../entities/student.js')

module.exports = function addStudent(StudentDatabase, UniversityCRM) {
    async function Execute(firstName, lastName, email) {
        const checkStudent = await StudentDatabase.getByEmail(email)

        if(!firstName || !lastName || !email) {
            return new Error('Please pass in the required fields')
        }

        if(checkStudent) {
            return new Error('Student exists in the database already')
        }

        const newStudent = new Student(
            firstName,
            lastName,
            email
        )

        newStudent = await StudentDatabase.addStudent(newStudent)

        // notify university CRM service here
    }

    return Object.freeze({
        Execute
    })
}