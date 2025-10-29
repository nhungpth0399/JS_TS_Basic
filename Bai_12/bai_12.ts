// generic o trong TS

//
function traVeSo(arg: number): number{
    return arg
}

function traVeChuoi(arg: string): string{
    return arg
}

function traVeGiaTriBatKy(arg: any): any{
    return arg
}

let output = traVeGiaTriBatKy('xin chao')

// output.toFixed(output) // .toFixed() la ham chi dung cho kieu du lieu number
// Generic type: => 1 chai nuoc rong (ko quy dinh phai chua nuoc gi)
// Trong type script cai chai nhu vay duoc ky hieu bang dau ngoac nhon <T>. e.g: Promise<string> (U,V,...)

function traVeGiaTriDynamic<T>(arg: T): T{
    return arg
}

// do chai nuoc khoang // string vao chai

let outputString = traVeGiaTriDynamic<string>('Chao moi nguoi')
console.log(outputString.toLocaleUpperCase())

// do nuoc cam vao chai (number)

let outputNumber = traVeGiaTriDynamic<number>(100)
console.log(outputNumber.toFixed(2))

// T: placeholder
// syntax
// trong function
// function tenHam<T, U, ...>(thamso1: T, thamso2: U, ...): Kieu tra ve{
//      than ham
// }

function taoCapGiaTri<T, U>(key: T, value: U): {key: T, value: U}{
    return {key: key, value: value}
}

let ex1 = taoCapGiaTri<string, number>('Ten', 18)
console.log(ex1.key.toLocaleLowerCase())
console.log(ex1)

// doi voi interface
// interface ITenInterface<T>{
//     propertyname: T
// }

// type TenType<T> = {
//     propertyname: T
// }

interface Result<TData>{
    isSuccess: boolean;
    error?: string;
    data: TData
}

let userResult: Result<string> = {isSuccess: true, data: 'Lay du lieu thanh cong'}
console.log(userResult)


let productResult: Result<{id: number, name: string}> = {
    isSuccess: false,
    data: {id: 12, name: 'laptop'}
}
console.log(productResult)

// Generic trong class
// class TenLop<T>{
//     constructor(value: T)
//     method(value: T)
// }

class DataStorage<T>{
    private data: T

    constructor(initialData: T){
        this.data = initialData
    }

    getData(): T{
        return this.data
    }
}

const stringStorage = new DataStorage<string>('Hello generics')

console.log(stringStorage.getData().toLocaleUpperCase())

// cach doc file json (dung truc tiep bang JS/TS), xlsx (phai qua thu vien thu 3)
// xlsx: neu data lon, co the can luu data o nhieu sheet, nhieu dong thi xlsx phai doc het data roi moi do theo dieu kien
// json: co the parse sang Record<
//     catagory: 'lich su'
// >
// json chinh la object o trong TS => Data
// .stream()  .chunk() => doc dile theo tung doan hoac theo cach
//
// promotion: {
//     promotionA: [
//         {
//             // thong tin khac
//             // {{dataA}}
//         }
//     ]
//     promotionB: [
//         {

//         }
//     ]
// }

// template => promotionA gan lai dataA

// test case dang nhap su dung data dau vao tu file JSON, xlsx => check voi cac truong hop user khac nhau









