console.log('Ôn tập Js cơ bản');
let a = 1;
var b = 5;
console.log(`Tổng 2 số ${a} và ${b} = ${a+b}`);

function tich2so(a, b){
   return a*b;
}
console.log(tich2so(2, 6))
const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
];

// Hàm kiểm tra cầu thủ hợp lệ
function isValidPlayer(player) {
    return typeof player?.name === 'string' && typeof player?.goals === 'number' && player.goals >= 0;
}

// Biến lưu cầu thủ có số bàn thắng nhiều nhất
let topScorer = { name: '', goals: 0 };

// Biến lưu danh sách cầu thủ hợp lệ
const validPlayers = players.filter(player => {
    if (isValidPlayer(player)) {
        // Kiểm tra và cập nhật cầu thủ ghi nhiều bàn thắng nhất
        if (player.goals > topScorer.goals) {
            topScorer = player;
        }
        return true;
    }
    return false;
});

console.log("Danh sách cầu thủ hợp lệ:", validPlayers);
console.log("Cầu thủ ghi nhiều bàn thắng nhất:", topScorer);
