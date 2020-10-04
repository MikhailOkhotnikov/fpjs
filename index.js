function showStudent(ssn) {
    const student = db.find(ssn);
    if(student !== null) {
        document.querySelector(`#${elementId}`).innerHTML = 
        ` ${student.ssn},
          ${student.firstname},
          ${student.lastname}`;
    } else {
        throw new Error ('Студент не найден!');
    }
}

showStudent('444-44-4444');