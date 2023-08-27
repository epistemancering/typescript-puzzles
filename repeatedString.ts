function repeatedString(s: string, n: number): number {
    // Write your code here
    let substrings: number = Math.floor(n / s.length)
    let remainder: number = n - s.length * substrings
    let as: number = 0
    for (let character of s) {
        if (character === "a") {
            ++as
        }
    }
    as *= substrings
    while (remainder--) {
        if (s[remainder] === "a") {
            ++as
        }
    }
    return as
}

let examples: { s: string, n: number, correct: number }[] = [
    { s: "abcac", n: 10, correct: 4 },
    { s: "aba", n: 10, correct: 7 },
    { s: "a", n: 1000000000000, correct: 1000000000000 }
]
let score: number = 0
let results: string[] = []
for (let index in examples) {
    let output: number = repeatedString(examples[index].s, examples[index].n)
    let comparison: string
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