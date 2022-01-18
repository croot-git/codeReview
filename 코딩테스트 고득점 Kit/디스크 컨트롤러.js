// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
    var answer = 0;

    const len = jobs.length
    let queue = []
    let time = 0
    let done = 0

    while (done < len) {
        for (let i=0; i<jobs.length; i++) {
            if (jobs[i][0] <= time) {
                queue.push(jobs.splice(i, 1, [Infinity, 0])[0])
            }
        }
        
        if (queue.length > 0) {
            const curTask = queue.sort((a,b) => a[1] - b[1]).shift()
            time += curTask[1]
            answer += time - curTask[0]
            done += 1
        } else {
            time += 1
        }
    }

    return Math.floor(answer / len);
}