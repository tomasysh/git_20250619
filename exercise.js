

const students =[{
    name: 'Tomas',
    gender: 'male',
}];

// TODO: 這個班級是否有男生
students.some((student) => student.gender === 'male');

// TODO: 這班級是否全部是男生
students.every((student) => student.gender === 'male');

function sumFunction() {
    return 100
};