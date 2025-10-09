alert("Nhung xinh") 


//=========================
// BAI 1: Biến
//=========================

let yourName
yourName = "Nhung Phan"
const trangthai = "xinh ngoan yeu"
let time = 2025


//dau +
console.log("Test case: " + yourName + " la co gai" + trangthai)


// dau ,
console.log("Test case: ", yourName, " la co gai", trangthai)


//dau 
console.log(`Test case: ${yourName} la co gai ${trangthai} nhat nam ${time + 1}`)


// 2 áo, mỗi áo 25000, VAT 10%, in giá phải trả


let giaAo = 25000
let soLuong = 2
let tongTienAo = giaAo * soLuong
let VAT = 0.1
const total = tongTienAo + tongTienAo * VAT

console.log(`Tong gia tien ban can tra ${tongTienAo * (1+ VAT)} `)

console.log("Tong tien hang: ", total, "VND")





