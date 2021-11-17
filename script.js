// console.log(Math.floor(Math.random() * 10) + 1);

// let num = +prompt('son kiriting');
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
// console.log(random(0, num ));

// console.log(random(5, 15));

// function numsolve() {
//     let a = (0, 30)
//     let b = (0, 30)

// }


let num = +prompt('Choose the number which you want to solve?')
while (isNaN(num) || num == 0) {
    num = +prompt('Try again?')
}


for (let i = 1; i <= num; i++) {
    // let num1 = Math.floor(Math.random() * 1000)
    // let num2 = Math.floor(Math.random() * 1000)
    let num1 = random(0, 1000)
    let num2 = random(0, 1000)
    let answer;
    let myAnswer;
    if (num1 >= num2 && num2 !== 0) {
        answer = num1 / num2
        myAnswer = +prompt(num1 + ' / ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer == '') {
            num = +prompt(num1 + ' / ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} / ${num2}\nSizning javob: ${myAnswer}\nTo'gri javob: ${Math.round(answer)}`);
    } else if (num1 * num2 <= 1000) {
        answer = num1 * num2
        myAnswer = +prompt(num1 + ' * ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer == '') {
            num = +prompt(num1 + ' * ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} * ${num2}\nSizning javob: ${myAnswer}\nTo'gri javob: ${answer}`);
    } else if (num1 >= num2 && num1 - num2 >= 0) {
        answer = num1 - num2
        myAnswer = +prompt(num1 + ' - ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer == '') {
            num = +prompt(num1 + ' - ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} - ${num2}\nSizning javob: ${myAnswer}\nTo'gri javob: ${answer}`);
    } else {
        answer = num1 + num2
        myAnswer = +prompt(num1 + ' + ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer == '') {
            num = +prompt(num1 + ' + ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} + ${num2}\nSizning javob: ${myAnswer}\nTo'gri javob: ${answer}`);
    }

}
