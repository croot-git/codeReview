function solution(k, dungeons) {
    var answer = -1;

    // TODO : Testcase 마지막꺼 오류..
    dungeons.sort((a,b) => b[0] - a[0])
    const calc = (hp,list,count)=>{
        // 효율적인 던전 선별
        list = list.filter(([enter, cost]) => (hp >= enter))
        if (list.length === 0) {
            answer = count
            return 
        }
        
        const expact = list.map(([enter,cost])=> {
                return list.filter((next)=>(next[0] <= (hp - cost))).length
            })
        let enterIdx = 0
        expact.forEach((num, i) => {
            enterIdx = (expact[enterIdx] < num)? i : enterIdx
        })

        // 던전입장
        if (enterIdx >= 0) {
            const enter = list.splice(enterIdx, 1)[0]
            count += 1
            hp -= enter[1]
        } else {
            answer = count
            return 
        }
        
        // 다음 던전
        if (hp > 0 && list.length > 0) {
            calc(hp, list, count)
        } else {
            answer = count
            return 
        }
    }

    calc(k, dungeons, 0)

    return answer;
}