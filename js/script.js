// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так — пусть функция возвращает true, если не так — false.
//
// 3. Сделайте функцию isEven() (even — это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное — пусть функция возвращает true, если нечетное — false.
function isNumberInRange (a) {
    if (a > 0 && a < 10){
        return true
    }
    else
    {
        return false
    }
}
console.log(isNumberInRange(4))
console.log(isNumberInRange(14))


