

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

// 2. Tinh triu tuong: hien thi cho nguoi dung biet nguoi dung co the lam gi, chu ko can biet lam nhu the nao
// VD: Dieu khien TV.

class CoffeeMachine {
    #cleanmachine(){
        console.log(`Ve sinh may`);
        
    }
    makeCoffee(){
        this.#cleanmachine()
        console.log(`Ca phe da san sang!`);
        
    }
}

const machine = new CoffeeMachine()
//nguoi dung chi can biet dung ham nay
machine.makeCoffee()


// 3. Tinh ke thua: class con co the ke thua class cha (toi uu code)
// Dung tu khoa extend de ke thua
// Dung super(bien) de goi tu ham cha
// Ke thua thi ke thua toan bo thuoc tinh cua class cha,
// trong truong hop muon thay doi thuoc tinh hoac method nao do thi chung ta co the ghi de

class Animal {
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} dang an`);
        
    }
}

class Dog extends Animal {
    constructor(name, color){
        super(name) //goi contructor cua lop cha
        this.color = color
    }

    bark(){
        console.log(`Go go go`);
        
    }
}

const myDog = new Dog('Kitty', 'yellow')
myDog.eat()

myDog.bark()

// 4. Tinh da hinh: cung mot hanh dong nhung thuc hien bang nhung cach khac nhau
// VD cung la Di chuyen. Con nguoi thi di bang chan, ca boi bang vay, chim bay bang canh
// JS ko ho tro da ke thua

class Shape {
    draw(){
        console.log(`Ve hinh dang chung`);
        
    }
}

class Circle extends Shape {
    draw(){
        console.log(`Ve mot hinh tron`);
        
    }
}

class Square extends Shape {
    draw(){
        console.log(`Ve mot hinh vuong`);
        
    }
}

const shapes = [new Circle(), new Square(), new Shape()]

shapes.forEach(shape => shape.draw())

// xay dung mot project automation theo page object
// 
// page-object
// -- BasePage.js => class cha chua cacs hanh dong chung
// -- LoginPage.js => class cho trang dang nhap
// -- HomePage.js => class cho trang chu
// tests
// login.test.js // kich ban test
// export => import

// file basePage.js

class BasePage {
    constructor(page, url){
        this.page = page
        this.url = url
    }

    async navigateTo(){
        console.log(`ACTION: dang dieu huong toi trang ${this.url}`);
        
    }
}

// file LoginPage.js
// Playwright => se co mot gia tri la page

class LoginPage extends BasePage {
    // locator (vi tri cac element tren UI)
    userNameInput = '#username'
    passwordInput = '#password'
    loginButton = '#login-button'

    constructor(page){
        super(page, '/login')
    }

    async enterUsername(username){
        // this.page.locator(this.userNameInput).fill(username)
        console.log(`ACTION: Nhap username ${username} vao o ${this.userNameInput}`);
        
    }

    async enterPassword(password){
        console.log(`ACTION: Nhap password ${password} vao o ${this.passwordInput}`);
        
    }

    async clickLoginButton(){
        console.log(`ACTION: Click vao o ${this.loginButton}`);
        
    }

    async login(username, password){
        console.log(`WORKFLOW - THUC HIEN DANG NHAP VOI USER ${username}`);
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
        
    }
}


class HomePage extends BasePage {
    welComeMessage = '#welcome-message'

    constructor(page){
        super(page, '/home')
    }

    async getWelcomMessage(){
        console.log(`ACTION: Lay noi dung tu ${this.welComeMessage}`);
        return 'Chao mung ban quay tro lai'
        
    }
}

// file login.test.js

async function runLoginTest() {
    console.log(`BAT DAU KICH BAN - DANG NHAP THANH CONG`);
    
    // gia lap doi tuong 'page'
    const fakePage = {name: 'Fake page'}

    const loginPage = new LoginPage(fakePage)
    const homePage = new HomePage(fakePage)

    //1. Dieu huong toi trang dang nhap

    await loginPage.navigateTo()

    // 2. Thuc hien hanh dong dang nhap

    await loginPage.login('Nhung', '1234567')

    //3. Chuyen sang trang chu va lay ket qua

    homePage.navigateTo()
    const message =  await homePage.getWelcomMessage()

    if (message.includes('Chao mung ban quay tro lai')){
        console.log(`TEST PASSED`);
        
    }else{
        console.log(`TEST FAILED`);
        
    }
}


runLoginTest()

//==================

class BankAccount {
    #balance

    constructor(soDuBanDau){
        if(soDuBanDau > 0){
            this.#balance = soDuBanDau
        }else{
            this.#balance = 0
        }
    }

    get balance(){
        console.log(`-> better duoc goi: lay so du`);
        return this.#balance
    }

    set balance(soTien){
        console.log(`-> setter duoc goi`);
        this.#balance = soTien
    }

    rutTien(soTien){
        if(soTien > this.#balance){
            console.error('Loi ko du so du')
        }
        this.#balance -= soTien
    }
}

const taiKhoanBank =  new BankAccount(50000)
console.log(taiKhoanBank.balance)

taiKhoanBank.balance = -20000
console.log(taiKhoanBank.balance)


