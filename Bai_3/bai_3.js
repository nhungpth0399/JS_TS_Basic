
// =======================================
// If else: bieu thuc dieu kien
// =======================================

/* if (dieukien 1){
    hanh dong A
}else(dieukien 2){
    hanh dong B
}else if(dieukien 3){
    hanh dong C
}else{
    hanh dong D
}
*/


// Toan tu 3 ngoi 
// dieu_kien ? gia tri neu dung : gia tri neu sai

const isLogIn = true
let message

if(isLogIn){
    message = 'User is successful log in'
}else{
    message = 'User is log out'
}

console.log(message)

const message2 = isLogIn ? 'User is successful log in' : 'User is log out'
console.log(message2)

//==============================
const orderStatus = 'Pending'

let iconColor

if(orderStatus === 'Success'){
    iconColor = 'Green'
}else if(orderStatus === 'Pending'){
    iconColor = 'Orange'
}else{
    iconColor = 'red'
}

console.log(`Mau icon la: ${iconColor}`)

const iconColor2 = orderStatus === 'Success' ? 'Green' :
                    orderStatus === 'Pending' ? 'Orange' :
                    'red'
                
console.log(iconColor2)


// ===========================
// Switch case .... thuong su dung de kiem tra bien duy nhat voi nhieu gia tri
// ===========================

/* switch (bien_can_kiem_tra){
    case gia_tri1:
        code thuc thi
        break;
    case gia_tri2:
        code thuc thi
        break;
    
    default:
        code thuc thi khi khong co case nao khop
}
*/

const env = 'dev'

let baseUrl
let userName
let password

switch(env){
    case 'dev':
        baseUrl = 'dev.example'
        userName = 'dev-user'
        password = '1234'
        break;
    case 'staging':
        baseUrl = 'stage.example'
        userName = 'stg-user'
        password = '1234'
        break;
    default:
        console.log(`Loi moi truong ko tim thay`)
}

console.log(`Cau hinh duoc thiet lap voi URL: ${baseUrl}, ${userName}, ${password}`)

//thuong dung khi su check browser

// ==========================================
// truthy va falsy
// ==========================================

//toan tu logic || &&
/* co 6 gia tri JS xem la falsy =>
1. false
2. 0
3. ''
4. null
5. undefined
6. NaN
*/

// check dieu kien if(), ||, && la dua tren falsy va truthy
// neu la falsy => false
// neu la truthy => true

let userNameTF = null

const userToDisplay =  userNameTF || 'Guest'
console.log(userToDisplay)

let userNameEmpty = ''
const userToDisplay2 =  userNameEmpty || 'Default'
console.log(userToDisplay2)

//=============
/* gia tri truthy dac biet
1. []
2. "0"
3. "false"
4. {}
*/
const errorMessage = []

const report = errorMessage ? "Co loi can xem lai" : "Tat ca deu pass"

console.log(report)
















