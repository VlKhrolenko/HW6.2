
// 3. Сделайте функцию isEven() (even — это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное — пусть функция возвращает true, если нечетное — false.
function isEven(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4))
console.log(isEven(13))