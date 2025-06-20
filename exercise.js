



// TODO: 這個班級是否有男生
// students.some((student) => student.gender === 'male');

// TODO: 這班級是否全部是男生
// students.every((student) => student.gender === 'male');

// students = [{ name: 'tomas', gender: 'male'}, { name: 'grace', gender: 'female'}]



// reduce 壓縮成為你想要的結果
// 一個數字，也可以能一個物件
// reference: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// 跑第 1 次的時候 accumulator: 0, currentValue: 1, result: 1
// 跑第 2 次的時候 accumulator: 1, currentValue: 2, result: 3
// 跑第 3 次的時候 accumulator: 3, currentValue: 3, result: 6
// 跑第 4 次的時候 accumulator: 6, currentValue: 4, result: 10

console.log(sumWithInitial);
// Expected output: 10



// NOTE: reduce demo: 依照 gender 分類學生
const students =[{
        name: 'Tomas',
        gender: 'male',
    },
    { name: 'Grace',
        gender: 'female'
    }
];

// OUTPUT
const initStudents = {
    male: [],
    female: []
};

students.reduce((accu, currStudent) => {
    if (currStudent.gender === 'male') {
        return {
            ...accu,
            male: [...accu.male, currStudent],
        };
    } else {
        return {
            ...accu,
            female: [...accu.female, currStudent],
        };
    }
}, initStudents);