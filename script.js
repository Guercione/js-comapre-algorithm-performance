function test(n, p) {
    let k = 0
    let result = 0
    let arrNumber = ("" + n).split("")

    arrNumber.forEach(function (num, i) {
        let finalResult = 1

        for (let c = 1; c <= p + i; c++)
            finalResult *= parseInt(num)

        result += finalResult
    })

    while (k * n < result) k++

    return k * n === result ? k : -1
}


console.log(test(695, 2))