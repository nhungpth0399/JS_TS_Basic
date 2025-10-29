
// class trong typescript
// readonly: khi dung cho 1 thuoc tinh thi bien nay chi co the doc ko the ghi de
// private: dung cho thuoc tinh chi muon su dung trong class, 
//          neu class child extends tu class parent thi se ko truy cap duoc thuoc tinh

class Animal {
    readonly name: string

    private age: number

    constructor(name: string, age: number){
        this.age = age
        this.name = name
    }

//     changeName(newName: string){
//         this.name = newName
//     }

    printName(){
        return this.name
    }
}


const dog = new Animal('Buddy', 5)
console.log(dog.printName())
// console.log(dog.age) // loi vi age la thuoc tinh private ko the goi ngoai class

// protected: class child co the truy cap den thuoc tinh co protected o class parent (chi truy cap trong class parent va class child)

class GameCharacter{
    protected health: number

    constructor(health: number){
        this.health = health
    }

    protected takeDamage(amount: number): void{
        this.health -= amount
        console.log(`Bi mat ${amount} damage, con lai ${this.health}`)
        
    }
}


class Warrior extends GameCharacter{
    attack(target: GameCharacter): void{
        console.log(`Warrior attack!`)

        // target.takeDamage(10) // ko the goi truc tiep nen TH nay warning
        
    }

    defendAndAttack(): void{
        console.log(`Warrior attacks with a special move`)
        this.takeDamage(5)  // phai goi qua this. moi dung duoc
        
    }
}

const warrior = new Warrior(100)

// warrior.takeDamege(10) //nhu nay la loi nha
warrior.defendAndAttack()  // phai goi qua ham trong class child

//===========================

interface IOrder {
    id: number;
    total: number
}

interface IUserWithOrders {
    name: string;
    orders?: IOrder[]
}

const userWithData: IUserWithOrders = {
    name: 'Sam',
    orders: [{id: 101, total: 100}]
}

const userWithoutData: IUserWithOrders = {
    name: 'Jane',
}

// cach 1:

type UserReturn = number | undefined // tao 1 type cho user de check co order hay khong

function getFirstOrder(user: IUserWithOrders): UserReturn {
    if(user.orders && user.orders.length > 0){
        const firstOrder = user.orders[0]

        if(firstOrder){
            return firstOrder.id
        }
    }

    return undefined
}

const idSam = getFirstOrder(userWithData)
console.log(`User co order co id la`, idSam)

const idJane = getFirstOrder(userWithoutData)
console.log(`User ko co order la`, idJane)

// cach 2: dung dau ? truoc cac gia tri co the la undefined
// optional chaining


const idSam1 = userWithData.orders?.[0]?.id
console.log(idSam1)

const idJane1 =  userWithoutData.orders?.[0]?.id
console.log(idJane1)

//========== ket noi db =============
// viet mot class khoi tao viec ket not db 
// app nho ket noi db 
// async await => tra ra Promise => se dung await de hung cai Promise
// generic <T>

interface IInitializeable{
    isReady: boolean;
    setUp(): Promise<void>
}

interface ILoggable{
    log(message: string): void
}

interface IDataAccess{
    connect(): void
    query(sql: string): void
}

class BaseService implements IInitializeable, ILoggable {
    isReady: boolean = false

    protected serviceName: string

    constructor(name: string){
        this.serviceName = name
    }

    async setUp(): Promise<void> {
        console.log(`[${this.serviceName} Dang khoi tao dich vu]`)
        
        await new Promise(resolve => setTimeout(resolve, 500))

        this.isReady = true

        this.log('Khoi tao hoan tat')
    }

    log(message: string): void {
        console.log(`[LOG-${this.serviceName}]: ${message}`)
        
    }
}

class DatabaseService extends BaseService implements IDataAccess{
    private connectString: string

    constructor(dbName: string, connect: string){
        super(dbName)
        this.connectString = connect
    }

    connect(): void {
        if(!this.isReady){
            this.log('Chua san sang, vui long chay set up truoc')
            return 
        }
        this.log(`Da ket noi DB qua: ${this.connectString}`)
    }

    query(sql: string): void {
        if(!this.isReady){
            this.log('Dich vu chua khoi dong')
            return
        }

        this.log(`Thuc thi SQL: ${sql}`)
    }

    // override lai phuong thuc cua parent
    log(message: string): void {
        console.log(`[DB-${this.serviceName}]: ${message}`)
        
    }
}

async function runService() {
    const dbService = new DatabaseService('UserDb', 'mongoDb://localhost:27017')

    await dbService.setUp()

    dbService.connect()

    dbService.query('Select * From USER')
}

runService()

// {
//     "message": "Success",
//     "response": [
//       {
//         "id": 371,
//         "name": "Test3107",
//         "category_id": 122,
//         "price": 1200,
//         "release_date": "2025/07/30",
//         "status": 1,
//         "image": []
//       },
//       {
//         "id": 372,
//         "name": "Testing API V7906",
//         "category_id": 139,
//         "price": 110,
//         "release_date": "2025/02/28",
//         "status": 1,
//         "image": [
//           {
//             "id": 61,
//             "path": "public/images/0rS5miO4nPAv9unVQ0XomaUjJENCt6E1R1eN0aRq.png"
//           }
//         ]
//       },

interface IImageAPI{
    id: number;
    path: string
}


interface IBookAPI{
    id: number;
    name: string;
    category_id: number;
    price: number;
    release_date: string;
    status: number;
    image: IImageAPI[]
}

interface IResponseAPI{
    message: string;
    response: IBookAPI[]
}

// cac task vu: doc file, ket noi db, call api,... la bat dong bo nen phai dung async, await
// bat dong bo la cac hanh dong xay ra trong thoi gian minh ko biet truoc duoc

async function fetchBooks(): Promise<IResponseAPI> {
    
    const apiUrl = 'https://api.anhtester.com/api/books'

    try{
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        })
        if(!response.ok){
            throw new Error(`Loi API: ${response.status} ${response.statusText}`)
        }
        const data: IResponseAPI = await response.json()
        return data

    }catch(error){
        console.error('Khong the lay du lieu sach', error)
        throw error
    }
}

// bai toan lay image.path() => han vao bien imageUrl (la image, .url) neu khong co thi tra ra khong co anh
async function displayBooks() {
    
    try{
        console.log(`Dang tai danh sach sach`)

        const apiData = await fetchBooks()

        apiData.response.forEach(book => {

            const imageUrl = book.image.length > 0 ? book.image[0]?.path : 'Khong co anh'
            console.log(`- ID: ${book.id}, Ten: ${book.name}, Gia: ${book.price}`)
            console.log(`Hinh anh ${imageUrl}`)
            
        })
        
    }catch(error){
        console.log(`Da xay ra loi`)
        
    }
}

displayBooks()

// Login xong Post API thi se co 2 lan call api
// 1 call lay token
// 2 goi POST de tao danh sach
// https://blog.thanhnamnguyen.dev/cac-cach-fetch-api-su-dung-javascript















