
// ==========================
// while - vong lap
// ==========================

/* let bien_dieu_kien
while(dieu_kien){
    khoi lenh thuc thi
    gia tri cap nhap de lam thay doi bien dieu kien
}
 */

let giaGame = 1000000
let soTienTietKiem = 0
let soTuan = 0

while(soTienTietKiem < giaGame){
    console.log(`Tuan: ${soTuan + 1}. Dang co: ${soTienTietKiem}`)
    soTienTietKiem += 150000
    soTuan++
    console.log(`Bo vao tiet kiem 150k`)
}

console.log(`Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua Game`)

// ==============================
// For - vong lap
// ==============================

/*
for (1. Diem xuat phat; 2. Dieu kien dung; 3. Buoc tiep theo){
    khoi lenh thuc thi
}
*/

for(let i = 0; i < 5; i++){
    console.log(`Dang thuc hien vong lap thu: ${i}`)
}

for(let i = 0; i <= 5; i++){
    if(i === 3){
        console.log(`Bo qua so 3`)
        continue   // neu la break se dung lai o khi i = 3
    }
    console.log(`So hien tai la ${i}`)
}


const products = ['apple', 'orange', 'grape']

for(let i = 0; i <= products.length; i++){
    if(products[i] === 'orange'){
        console.log(`Orange o vi tri thu ${i}`)
        break
    }
    console.log(`Dang thuc hien vong lap thu ${i}`)
}

// =======================
// Phuong thuc mang
// =======================

// .push() - them vao cuoi mang

const testCases = ['logIn', 'logOut']
testCases.push(`Add to cart`)
console.log(`Mang bay gio se la: ${testCases} va do dai cua mang la ${testCases.length}`)

// .pop() - xoa phan tu o cuoi mang

const tasks = ['Task A', 'Task B', 'Task C']
const newTask = tasks.pop()

console.log(`Mang moi la ${tasks}`)
console.log(`Gia tri da xoa ${newTask}`)


// =========================
// For ... of - vong lap - dung khi tim 1 gia tri trong mang
// =========================


/*
for(const item of array){} - dung duoc break nhung ko ho tro index
*/
const possibleBanner = ['#promo-popup', '.cookie-banner', '[data-ad="true"]']
const visibleBanner = '.cookie-banner'

for(const selector of possibleBanner){
    console.log(`Dang kiem tra selector: ${selector}`)
    if(selector === visibleBanner){
        console.log(`Da tim thay banner`)
        break
    }
}


// map  filter cung cap ca index, mang, gia tri item
// forEach ko dung break duoc co ho tro index

function tinhTong(a, b){
    const sum = a + b
    return sum
}


const sum = tinhTong(4, 5)
console.log(sum);




/////////////////
const tickets = ['Thuong', 'Thuong', 'VIP', 'Thuong', 'VIP']


for(const ticket of tickets){
    console.log(`Dang kiem tra ve: ${ticket}`);


    if(ticket === 'VIP'){
        console.log(`MOI BAN VAO`)
        break
       
    }
}


// ForEach ko co break
// forEach(function(item)){
// }


let foundVIP = false


tickets.forEach(function(item){
    if(foundVIP){
        console.log(`Da tim thay VIP, nhung van lam viec tiep: ${item}`)
        return
    }


    console.log(`Dang kiem tra ve ${item}`)
    if (item === 'VIP'){
        console.log(`=> DA TIM THAY VE VIP MOI VAO`)
        foundVIP = true
    }
   
})


// BT1: Phan tich log server
/*
Muc tieu: Ban co mot mang cac chuoi log tu server. Ban can tim dong log dau tien ghi nhan mot luot dang nhap that bai (Status=FAIL)
cua dich vu xac thuc nguoi dung (service=USER_AUTH)
Quy trinh xu ly:
Tim dong log phu hop dau tien
Tu dong log do, dung cac ky thuat xu ly chuoi de trich xuat ra ma nguoi dung (uid) va ma loi (err_code)
Ngay sau khi trich xuat thanh cong, dung lai va khong xu ly cac dong log con lai
 */
const logEntries = [
    't=1m service=PAYMENT status=OK uid=101',
    't=2m service=USER_AUTH status=FAIL uid=205 err_code=401',
    't=3m service=INVENTORY status=OK uid=302',
    't=4m service=USER_AUTH status=OK uid=205',
    't=5m service=USER_AUTH status=FAIL uid=404 err_code=404',
]




let failedLoginInfo = null


for (const log of logEntries){
    if(log.includes('service=USER_AUTH') && log.includes('status=FAIL')){
        console.log(`Tim thay dong log tiem nang: ${log}`)
       
        const parts = log.split(" ")
        console.log(`Sau khi tach chuoi: ${parts}`)
        let uid = null
        let errCode = null
        for(const part of parts){
            if (part.startsWith('uid=')){
                uid = part.replace('uid=', '')
            }
            if(part.startsWith('err_code=')){
                errCode = part.slice('err_code='.length)
            }
        }
        failedLoginInfo = {uuid: uid, errCode: errCode}
        console.log(`Da tim that lgo thich hop`)
        break
       
    }
}
console.log(`Thong tin da tim thay la`, failedLoginInfo)




// .map()


const numbers = [1, 2, 3, 4, 5, 6]


const doubleNumber = numbers.map(function(number){
    return number * 2
})


console.log(`Mang ban dau`, numbers)
console.log(`Mang sau bien doi`, doubleNumber)




////==============================================


const dailySales = [50, 65, 60, 80, 75]


const saleTrends = dailySales.map(function(currentItem, index, array){
    if(index === 0){
        return `Ngay 1: ${currentItem} {Bat dau}`
    }
    const previousSale = array[index - 1]
    const change = currentItem - previousSale


    return `Ngay ${index + 1}: ${currentItem} Thay doi ${+change}`


})


console.log(saleTrends)












