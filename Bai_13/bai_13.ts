

type CallbackFunction = () => void

function phaCaphe(loaiCaphe: string, goiKhachHang: CallbackFunction): void{
    console.log(`Bat dau pha ${loaiCaphe}....`)

    setTimeout(function(){
        console.log(`${loaiCaphe} da xong`)

        goiKhachHang()
        
    }, 2000)
    
}

function camOnVaNhanCaphe(): void{
    console.log(`Cam on va toi ra lay ca phe day`)
    
}

console.log(`Em oi, cho anh 1 ly ca phe den`)

phaCaphe('Ca phe den', camOnVaNhanCaphe)

console.log(`Ok. Gio toi ra ban ngoi`)

/////////////////////
const soDienThoai: string[] = ["090", "091", "093"]

function inSo (
    so: string,
    index: number,
    mangGoc: string[]
): void {
    console.log(`[${index}/${mangGoc.length}] So: ${so}`)
    
}

soDienThoai.forEach(inSo)  //callback function

// this
// this o function thuong: this mang tinh dong, gia tri cua no se duoc quyet dinh boi cach no duoc goi
// thay doi tuy thuoc vao moi truong va ngu canh goi ham
// vd: objec().method() => this la object

// funtion() => this la doi tuong toan cuc hoac la indefined trong moi truong strict mode. nhu tac ke hoa

// function simpleFunction(){
//     console.log(`---Bat dau simple funtion---`)
    
//     console.log(`gia tri cua this la ${this}`)
    
//     if(this === undefined){
//         console.log(`Ket qua this la undefined`)
        
//     }
// }


// simpleFunction()

// const myOj = {
//     name: 'Ngu canh',
//     callFunc: simpleFunction
// }


// console.log(`Goi ham qua object`)
// myOj.callFunc()

// arrow Function() ..... this mang tinh tinh (static) va ke thua
// muon this cua moi truong o noi no duoc tao ra va giu gia tri do mai mai. giong nhu hinh xam, ko the thay doi

class TeamProblem{
    name: string;
    minNameLength: number;
    members: string[] = []

    constructor (name: string, minNamLength: number){
        this.name = name
        this.minNameLength = minNamLength
    }

    //phuong thuc thong thuong
    isValidName(name: string): boolean{
        return name.length > this.minNameLength
    }

    addMembers(newMember: string[]){
        const validMember = newMember.filter(this.isValidName)
        // map, filter, reduce, ...
        this.members = [...this.members, ...validMember]
    }
}

const badTeam = new TeamProblem('Bad team', 4)

const candidates = ['An', 'Binh', 'Phuong', 'Chien', 'Tu']

try{
    badTeam.addMembers(candidates)
}catch(e: any){
    console.error(`Da xay ra loi`, e.message)

}
console.log(badTeam.members)








