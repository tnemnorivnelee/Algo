const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// W 개 방이 있는 H 층 건물
// HW 호가 되는 것
// 6(층) 12(방수) 10(번째손님)
// -> 10%6 = 4 -> 층수
// -> 10/6 = 1.xxx -> 몫에서 올림(ceil) -> 2 -> 한자리 -> 02호
// 30(층) 50(방수) 72(번째손님)
// -> 72%30 = 12 -> 층수
// -> 72/30 = 2.xxx -> 몫에서 올림(ceil) -> 3 -> 한자리 -> 03호


const count =  Number(input[0]);


for (let i = 0; i < count; i++) {
    const data = input[i + 1].split(' ').map(Number);

    const floor = data[0];
    const room = data[1];
    const guest = data[2];

    console.log((guest % floor === 0 ? floor : guest % floor) * 100 + Math.ceil(guest / floor));
}


