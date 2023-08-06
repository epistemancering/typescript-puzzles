function countingValleys(steps: number, path: string): number {
    // Write your code here
    let level = 0
    let valleys = 0
    for (let character of path) {
        if (character === "U") {
            ++level
            if (!level) {
                ++valleys
            }
        } else {
            --level
        }
    }
    return valleys
}

let examples = [
    { steps: 8, path: "DDUUUUDD", correct: 1 },
    { steps: 8, path: "UDDDUDUU", correct: 1 }
]
let score = 0
let results: string[] = []
for (let index in examples) {
    let output = countingValleys(examples[index].steps, examples[index].path)
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