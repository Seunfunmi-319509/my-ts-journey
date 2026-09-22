function findMax(numbers) {
    let max = numbers[0]
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}

function findMin(numbers) {
    let min = numbers[0]
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    return min
}

function averageNumber(numbers) {
    result = 0;
    for (let i=0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result / numbers.length
}

console.log(findMax([12, 5, 88, 3, 45, 88, -7]))
console.log(findMin([12, 5, 88, 3, 45, 88, -7]))
console.log(Math.round(averageNumber([12, 5, 88, 3, 45, 88, -7])))