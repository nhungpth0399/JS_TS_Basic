

//class trong JS
// nguoi khai bao class hay su dung class goi la instance => giong nhu nguoi su dung ban thiet ke

// class TenClass {
//     //1 class fields (khai bao thuoc tinh mac dinh (co the co hoac khong))
//     tenThuocTinhMacDinh = 'gia tri'

//     //2 ham khoi tao (Constructor)
//     constructor(thamso1){
//         this.thuocTinh1 = thamso1
//     }

//     //3 Method (phuong thuc - hanh vi)
//     tenPhuongThuc(){

//     }
// }



class Car{
    //1 class field
    inEngineOn = false
    
    //constructor: nhan cac thong tin rieng cua tung chiec xe
    constructor(brand, color){
        this.brand = brand
        this.color = color
    }

    //3
    startEngine = () =>{
        this.inEngineOn = true
        console.log(`Dong co xe ${this.brand} da duoc khoi dong`);
        
    }
    displayBrand = () =>{
        console.log(`Day la chiec xe cua ${this.brand} mau ${this.color}`);
        
    }
}


// su dung
const car1 = new Car('Toyota', 'den')
console.log(car1.inEngineOn);

car1.displayBrand()

car1.startEngine()
console.log(`isEngine sau khi start ${car1.inEngineOn}`);


const car2 =  new Car('Ford', 'trang')
console.log(car2.inEngineOn);

car2.displayBrand()


//
class NguoiDung {
    constructor(email, tenHienThi = 'Khach', vaiTro = 'user'){
        this.email = email
        this.tenHienThi = tenHienThi
        this.vaiTro = vaiTro
    }

    gioiThieu(){
        console.log(`This o day la`, this);
        console.log(`Ten ${this.tenHienThi}, Email ${this.email}, Vai tro ${this.vaiTro}`);
        
    }

}

const user1 = new NguoiDung('user1@gmail.com')
user1.gioiThieu()

const user2 = new NguoiDung('user2@gmail.com', 'User2')
user2.gioiThieu()


// thuoc tinh quan trong cua huong doi tuong
// 1. Tinh dong goi. VD: vien thuoc con nhong: vo thuoc - class, bao boc thanh phan ben trong - private
// nguyen tac khi code => moi ham chi lam 1 cong viec chinh

class BankAccout{
    #balance = 0 // thuoc tinh private, chi su dung trong class, ko the goi khi o ngoai class

    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Nap thanh cong ${amount}`);
            
        }
    }

    getBalance(){
        return this.#balance
    }
}

const myAccount = new BankAccout()
myAccount.deposit(100)

console.log(myAccount.getBalance());






