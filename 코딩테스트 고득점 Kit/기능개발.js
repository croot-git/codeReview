// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    var answer = [];
    
    while (progresses.length) {

        if (progresses[0] >= 100) {
            let count = 1
            progresses.shift()
            speeds.shift()
            while (progresses[0] >= 100) {
                if (!progresses[0]) { break }
                ++count
                progresses.shift()
                speeds.shift()
            }
            answer.push(count)
        }
        
        progresses = progresses.map((task, idx) => {
            return (task < 100)? task + speeds[idx] : task
        })
    }
    
    return answer;
}