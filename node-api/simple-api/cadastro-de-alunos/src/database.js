const sequence = {

    _id: 1,
    get id() { return this._id++}
}

const students = {}

function saveStudent(student){
    if(!student.id) student.id = sequence.id
    students[student.id] = student

    return student
}

function getStudentsById(id){
    return students[id];
}

function getAllStudents(){
    return Object.values(students);
}

function deleteStudents(id){
    const student = students[id]
    delete students[id]
    return student
}

module.exports = {saveStudent, getAllStudents, getStudentsById, deleteStudents}


