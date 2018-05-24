let students_converted = null

const app = new Vue ({
    el: '#allStudents',
    data: {
        students: null
    },
    methods: {
        getStudents: function(){
            fetch('http://localhost:3000/students.json').then(function(response){
                return response.text()
            }).then(function(response){
                students_converted = JSON.parse(response) 
                app.students = students_converted
            })
        },
        deleteStudent: function(stud){
            this.students.splice(stud, 1)
            console.log(stud)
            $.post(`http://localhost:3000/students/${stud.id}.json`, {
                    _method: 'DELETE'
                }).then(function () {
                console.log('Student was deleted')
            })
        },
        editStudent: function(stud){
            let student_hash = {name: stud.name, location: stud.location}
            console.log(student_hash)
            fetch(`http://localhost:3000/students/${stud.id}.json`, {
                _method: 'PATCH',
                body: JSON.stringify(student_hash)
            }).then
        }

    },
    beforeMount: function(){
        this.getStudents()
    }

})