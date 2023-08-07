function jumpingOnClouds(c: number[]): number {
    // Write your code here
    let cloud = 0
    let jumps = 0
    let last = c.length - 1
    while (cloud !== last) {
        let next = cloud + 2
        if (c[next] === 0) {
            cloud = next
        } else {
            ++cloud
        }
        ++jumps
    }
    return jumps
}

let examples = [
    { c: [0, 1, 0, 0, 0, 1, 0], correct: 3 },
    { c: [0, 0, 1, 0, 0, 1, 0], correct: 4 },
    { c: [0, 0, 0, 0, 1, 0], correct: 3 }
]
let score = 0
let results: string[] = []
for (let index in examples) {
    let output = jumpingOnClouds(examples[index].c)
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