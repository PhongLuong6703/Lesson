/*
Viết chương trình tính số thế kỷ của 1 năm
TH1: Chia hết cho 100
TH2: Không chia hết cho 100
*/

function tinhTheKy(year) {
    if (year % 100 === 0) {
        let c = parseInt(Number(year)/100);
        console.log(`Năm ${year} Thuộc Thế Kỷ ${c}`);
    }
    else {
        let b = Math.round(parseInt(Number(year))/100 + 1);
        console.log(`Năm ${year} Thuộc Thế Kỷ ${b}`);
    }
}

console.log(tinhTheKy(2000));
console.log(tinhTheKy(2021));

