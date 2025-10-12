// function(tham so){}


// bieu thuc ham
// const tenBien = function(thamso){
//     return ket qua
// }

const tinhHieu = function(a, b){
    return a - b
}

const ketQua = tinhHieu(8, 5)
console.log(ketQua);

// arrow function
// const tenBien = (thamso) =>{
//     return ketQua
// }
// neu ham don gian co the bo dau {} const bien = (thamso) => a * b

const tinhNhan = (a, b) =>{ 
    return a * b
}

console.log(tinhNhan(2, 3));

// co the goi function truoc khi define (hoisting)

console.log(tong(1, 4));

function tong(a, b){
    return a + b
}


