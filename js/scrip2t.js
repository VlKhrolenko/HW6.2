// 2. Сделайте функцию getDigitsSum (digit — это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(a) {
    let sum = 0;
    let numStr = String(Math.abs(a));

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr.charAt(i));
    }

    return sum;
}
console.log(getDigitsSum(1234));