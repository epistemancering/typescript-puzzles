function jumpingOnClouds(c: number[]): number {
    // Write your code here
    let cloud: number = 0
    let jumps: number = 0
    let last: number = c.length - 1
    while (cloud !== last) {
        let next: number = cloud + 2
        if (c[next] === 0) {
            cloud = next
        } else {
            ++cloud
        }
        ++jumps
    }
    return jumps
}

let examples: { c: number[], correct: number }[] = [
    { c: [0, 1, 0, 0, 0, 1, 0], correct: 3 },
    { c: [0, 0, 1, 0, 0, 1, 0], correct: 4 },
    { c: [0, 0, 0, 0, 1, 0], correct: 3 }
]
let score: number = 0
let results: string[] = []
for (let index in examples) {
    let output: number = jumpingOnClouds(examples[index].c)
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