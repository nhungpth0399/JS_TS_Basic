

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






