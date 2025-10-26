

let product: {
    id: string;
    name: string;
    price: number;
    tags?: string[];
    calculateTax(rate: number): number
} = {
    id: 'abc-123',
    name: 'Laptop',
    price: 1500,
    tags: ['electronic'],
    calculateTax(rate: number){
        return this.price * rate
    }
}

const tax = product.calculateTax(2)
console.log(`tax`, tax)

// type alias - type

type Product = {
    id: string;
    name: string;
    price: number;
    tags?: string[];
    calculateTax(rate: number): number
}

// su dung tao kieu
const product2:Product = {
    id: 'abc-124',
    name: 'Mouse',
    price: 3000,
    tags: ['electronic'],
    calculateTax(rate: number){
        return this.price * rate
    }
}

console.log(product2.calculateTax(3))

// dac tinh cua type alias so the su dung nhu sau:

// union types: dung khi muon gioi han gia tri cua cac bien

type OrderStatus = 'Pending' | 'Processing' | 'Delevered'
type TestCaseStatus = 'Passed' | 'Failed'

let currentStatus: OrderStatus = 'Pending'  //lay mot trong cac gia tri cua type

console.log(`currentStatus`, currentStatus)

let result: TestCaseStatus = 'Passed'

// kieu giao: dung & giua 2 type
type BasicInfo = {
    id: number;
    name: string
}

type ContactInfo = {
    email: string;
    phone: string
}

type CustomerInfo = BasicInfo & ContactInfo

const newCustomer: CustomerInfo = {
    id: 101,
    name: 'Nhung',
    email: 'nhung@gmail.com',
    phone: '12345'
}

// interface 
// tuong tu type
// voi nguoi moi se dung chu yeu la interface khi define object va class type
// cac truong hop con lai thi dung type


interface IVehicle {
    model: string;
    year: number;
    start(): void
}

const myCar: IVehicle = {
    model: 'civic',
    year: 2022,
    start:() => console.log(`started car`)
    
}

myCar.start()

// ke thua: extends 

type FileType = 'pdf' | 'epub'

interface IBook {
    title: string;
    author: string
}

interface IEbook extends IBook {
    fileType: FileType;
    fileSize: 512
}

const myBook: IEbook = {
    title: 'chao ngay moi',
    author: 'Nhung',
    fileType: 'epub',
    fileSize: 512
}

// 1 class con chi ke thua duoc 1 class cha
// 1 class con co the implement nhieu interface

interface IPrintable {
    print(): void
}

interface IStorable{
    save(): string
}

interface IPDFDocument extends IPrintable, IStorable, IBook {
    pageCount: number
}

// const pdfFile: IPDFDocument = {

// }

// chua bai tap 1:12 tuyen duong (nao can chua xem lai sau)
// Dau bai 11 la merge branch tren github vao main



