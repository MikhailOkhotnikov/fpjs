const find = curry((db, id) => {
    let obj = db.find(id);
    if(obj === null) {
        throw new Error('Объект не найден!');
    }
    return obj;
});

const csv = student =>
    `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info;
});

let showStudent = run(
    append('#student-info'),
    csv,
    find(db)
);

showStudent(444-44-4444);