//1 первые буквы слов большими
let str = 'I am in the easycode';
let newStr = '';

for (let i = 0; i < str.length; i++) {
    newStr += (str[i-1] == ' ') ? str[i].toUpperCase() : str[i];
}
console.log(newStr);

//2 строка в обратном порядке
let rever = 'tseb eht ma i';
let newRever = '';

for ( a = 0; a < rever.length-1; a--) {
    newRever += rever[a];
}
console.log(newRever);

//3 факториал 10
let f = 10;
let res = 1;

while (f) {
    res *= f--;
}
console.log(res);

//4 считаем до 10ти
let count = 'считаем до 10: ';

for (let a = 1; a <= 10; a++) {
    count += a;
    if (a != 10) {
        count += ', ';
    }
}
console.log(count);

// 5. удалены пробелы. все слова с большой

let str = 'javaScript is a pretty good language';
let strCamel = '';

for (let i = 0; i < str.length; i++) {
    if (str[i-1] == ' ') {
        strCamel += str[i].toUpperCase();
    } else if (str[i] !== ' '){
        strCamel += str[i];
    }
}
console.log(strCamel);
// 6. найти нечетные
for (let a = 1; a <= 15; a++) {
    if (a%2 == 1) {
        console.log(a);
    }
}