console.log(`Hello from node.js`);


let diemHienTai = '100'

let diemBonus = 10

let totalScore = diemBonus + Number(diemHienTai)

console.log(`Diem: ${totalScore}`);

//npx tsc --init

//ts-node .\bai_9.ts

//========= Syntax ==============
// tenbien: kieu du lieu = gia_tri

//kieu du lieu nguyen thuy
//string
let customerName: string = 'Phan Thi Hong Nhung'

//number
let orderID: number = 123
//boolean
let isPaid: boolean = false
//any: co the la bat cu loai du lieu nao
let userName: any = 'Phan Nhung'

// mot dong code nao do trong logic lam thay doi
userName = 123

//console.log(userName.toUpperCase()) //loi vi userName = 123 ko the dung ham upper case

//void   return ra gia tri minh ko biet la kieu gi
function printReceipt(orderID: number): void{
    console.log(`In hoa don ${orderID}`)
}

printReceipt(1)

//=========
function tinhTong(a: number, b: number): number{
    return a + b
}

const sum = tinhTong(3, 5)
console.log(sum)

//array
// kieu_du_lieu[]

let menu: string[] = ['latte', 'cappuchino']

let score: number[] = [3, 4, 5]

// object
// dang object
let coffeeOrder : {
    orderID: number;
    customerName: string;
    isPaid: boolean;
    itemCount: number
}

coffeeOrder = {
    orderID: 120,
    customerName: 'Jane',
    isPaid: true,
    itemCount: 3
}

console.log(`coffeeOrder`, coffeeOrder)

// 

let specialOrder : {
    orderID1: number;
    items: string[];
    specialInstruction?: string
}

specialOrder = {
    orderID1: 10,
    items: ['espresso'],
    specialInstruction: 'ok'
}

console.log(`Special Order: `, specialOrder)

//==============

const customerOrder: {
    orderID: number;
    status: string
} = {
    orderID: 123,
    status: 'done'
}

console.log(`Customer Order`, customerOrder)


//============ hoa don ===============

const storeMenu: {
    id: number;
    name: string;
    price: number
}[] = [
    {id: 1, name: 'Ca phe den', price: 25000},
    {id: 2, name: 'Ca phe sua', price: 35000},
    {id: 3, name: 'Banh ngot', price: 30000}
]

const newCustomerOrder: {
    orderID: number;
    customerName: string;
    items: {name: string, price: number}[];
    status: string;
    note?: string
} = {
    orderID: 123456,
    customerName: 'Nhung Phan',
    items: [],
    status: 'Pending',
    note: 'it da, nhieu cafe'
}

function calculateOrderTotal(order: {items: {price: number}[]}): number{
    let total = 0
    for(const item of order.items){
        total += item.price
    }
    return total
}

function processPayment(totalAmount: number, method: string, amountGiven: number): string{
    
    if (method === 'card'){
        return `Thanh toan thanh con ${totalAmount} bang the`
    }else if (method === 'cash'){
        const change = amountGiven - totalAmount
        if (change < 0){
            return `Khach dua thieu ${Math.abs(change)}`
        }
        return `Thanh toan thanh cong. voi so tien ${change}`
    
    }
    return `Phuong thuc thanh toan khong hop le`
}

newCustomerOrder.items.push({name: storeMenu[1]!.name, price: storeMenu[1]!.price}) //them store menu ca phe sua vao items

newCustomerOrder.items.push({name: storeMenu[2]!.name, price: storeMenu[2]!.price})  // them banh vao items

const totalAmount = calculateOrderTotal(newCustomerOrder)

console.log(totalAmount)

const paymentResult = processPayment(totalAmount, 'card', 0)
console.log(paymentResult)


//tao .gitignore // bo qua phan setting thu vien chi push code
//Bai_9/node_modules/ 
//sau do dung 'git add .'
// tiep tuc 'git commit -m 'hoan thanh bai 9' '
// va 'git push'















