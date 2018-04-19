const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

let sum = 0;
const average = (...grades) => {
    grades.forEach(grade => sum + grade);
    return (
        sum / grades.length
    );
};

