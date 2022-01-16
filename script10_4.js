//Input: sodienmoi > sodiencu > 0
//Output: Số Tiền Cần Đóng
function tiendien(sodien) {
    if (sodien < 0) {
        return "Số Điện Bạn Nhập không Hợp Lệ.";
    }
    else if (sodien <= 50) {
        let b1 = Number(sodien) * 1678;
        return `Số Tiền Bạn Cần Đóng Là ${b1} Đồng`;
    }
    else if (sodien <= 100) {
        let b2 = 50*1678 + (Number(sodien) - 50)*1734;
        return `Số Tiền Bạn Cần Đóng Là ${b2} Đồng`;
    }
    else if (sodien <= 200) {
        let b3 = 50*1678 + 50*1734 + (Number(sodien) - 10)*2014;
        return `Số Tiền Bạn Cần Đóng Là ${b3} Đồng`;
    }
    else if (sodien <= 300) {
        let b4 = 50*(1678 + 1734 + 2014) + (Number(sodien) - 10)*2.536;
        return `Số Tiền Bạn Cần Đóng Là ${b4} Đồng`; 
    }
    else if (sodien <= 400) {
        let b5 = 50*(1678 + 1734 + 2014 + 2.536) + (Number(sodien) - 10)*2834;
        return `Số Tiền Bạn Cần Đóng Là ${b5} Đồng`;
    }
    else if (sodien > 400) {
        let b6 = 50*(1678 + 1734 + 2014 + 2.536 + 2834) + (Number(sodien) - 10)*2927;
        return `Số Tiền Bạn Cần Đóng Là ${b6} Đồng`;
    }
}

console.log(tiendien(40));
console.log(tiendien(-10));
console.log(tiendien(60));
console.log(tiendien(150));
console.log(tiendien(460));