function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    let map: number[] = []
    for (let index in ar) {
        if (map[ar[index]]) {
            map[ar[index]] += .5
        } else {
            map[ar[index]] = .5
        }
    }
    let pairs = 0
    for (let index in map) {
        pairs += Math.floor(map[index])
    }
    return pairs
}

let examples = [
    { n: 7, ar: [1, 2, 1, 2, 1, 3, 2], correct: 2 },
    { n: 9, ar: [10, 20, 20, 10, 10, 30, 50, 10, 20], correct: 3 }
]
let score = 0
let results: string[] = []
for (let index in examples) {
    let output = sockMerchant(examples[index].n, examples[index].ar)
    let comparison
    if (output == examples[index].correct) {
        comparison = "pass"
        ++score
    } else {
        comparison = "fail"
    }
    results.push(index + " " + comparison + "\noutput:  " + output + "\ncorrect: " + examples[index].correct)
}
console.log(score + "/" + examples.length)
console.log(results.join("\n\n"))