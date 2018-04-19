let sum = 0;
const average = (...grades) => {
    grades.forEach(grade => sum + grade);
    return (
        sum / grades.length
    );
};
