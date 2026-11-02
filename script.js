    //  УРОВЕНЬ А
        console.log('ЗАДАНИЕ 1');


function welcome() {
    console.log('Добро пожаловать на урок JavaScript');
}

welcome();
welcome();


    //Задание 2
        console.log('ЗАДАНИЕ 2');


function square(number) {
    return number * number;
} 

console.log(square(4));
console.log(square(7));
console.log(square(10));


    //Задание 3
        console.log('ЗАДАНИЕ 3');


function sum(a, b) {
    return a + b;
}

console.log(sum('15 + 25 = ', 15, 25));
console.log(sum(11, 11));


    //Задание 4
        console.log('ЗАДАНИЕ 4');


function rectahgleArea(width, height) {
    return width * height;
}

console.log('S =', rectahgleArea(5, 8));


        //УРОВЕНЬ В
    //Задание 5
        console.log('Задание 5');



function check(number) {
    if (number % 2 === 0) {
        return 'Четное';
    } else {
        return 'Нечетное';
    }
}

console.log(check(12));
console.log(check(79));


    //Задание 6
        console.log('Задание 6');


function checkAge(age) {
    if (age >=18) {
        return 'Совершеннолетний';
    } else {
        return 'Несовершеннолетний';
    }
}

console.log(checkAge(2));
console.log(checkAge(22));


    //Задание 7
        console.log('Задание 7');


function average (a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(average(76, 85, 80, 45));


    //Задание 8
        console.log('Задание 8');


function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

console.log(findMax(12, 45, 30)); 


    //Задание 10
        console.log('Задание 10');


function discount(price) {
    if (price > 10000) {
       return price * 0.90;
    } else {
       return 'Скидки нет';
    }
}

console.log(discount(20000));


        //УРОВЕНЬ С
    //Задание 12
        console.log('Задание 12');       
    
function getStudentLevel(score) {
    if (score >= 0 && score <= 49) {
    return 'Очень плохо'; }
        else if (score >= 50 && score <= 69) {
        return 'Плохо'; }
            else if (score >= 70 && score <= 89) {
            return 'Хорошо'; }
                else if (score >= 90 && score <= 100) {
                return 'Отлично'; }
                    else {
                        return 'false'
                    }
}

console.log(getStudentLevel(88));


    //Задание 13
        console.log('Задание 13');    



function generatePassword (length) {
    let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789!@#&?';
    let password = '';

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length);
            password += chars[index];
}

    return password;
}

let length = Number(prompt('Введите длину пароля:'));

console.log(generatePassword(length));


    //Задание 14
        console.log('Задание 14');    

function taxiprice(km) {
    return 500 + 120 * km;
}

console.log(taxiprice(3));


    //Задание 14
        console.log('Задание 14');   


function withdraw(balance, amount) {
    if (amount <= 0) {
        console.log("Сумма должна быть больше 0");
        return;
    }

    if (amount > balance) {
        console.log("Недостаточно средств");
        return;
    }

    return balance - amount;
}

console.log(withdraw(50000, 20000)); 
console.log(withdraw(50000, 60000));
console.log(withdraw(50000, 0));     