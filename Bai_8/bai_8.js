


// demo vi du 1 chuong trinh se lam block luong chinh cua chung ta

// function tinhToanNang(){
//     console.log(`Bat dau tinh toan nang ... ca chuong trinh se bi treo`);
//     const startTime = Date.now()
//     while(Date.now() - startTime < 3000){     // date.now() - startTime < 3s thi ket thuc chuong trinh
        
//         // khoa chinh chuong trinh
//     }   
//     console.log(`Tinh toan nang da xong`);
// }

// console.log(`Chuong trinh bat dau`);

// setInterval(() => console.log(`Tich tac ...`), 1000)  // cu 1s in ra Tich tac ...

// tinhToanNang() // bi treo vi ham setInterval()

// console.log(`Chuong trinh ket thuc`);


// === promise (loi hua hen) ===
// Xu ly bat dong bo: la xu ly cac luong co the lam treo chuong trinh bang promise va then()
function choDoiThongMinh(){
    console.log(`Giao viec va nhan loi hua`);
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log(`Viec cho da hoan thanh`);
            resolve()
        }, 3000)
    })
    
}

console.log(`Chuong trinh bat dau`);

//setInterval(() => console.log(`Tich tac ...`), 1000)  // chuong trinh ko co diem dung

choDoiThongMinh().then(() =>{
    console.log(`Da xu ly xong tu loi hua promise`);
    
})

console.log(`Chuong trinh da chay xong phan khoi tao`);


// Promise() va then()

function kiemTraTuoi(tuoi){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(tuoi > 18){
                resolve('Ban da du tuoi bo phieu')
            }else{
                reject('Ban chua du tuoi')
            }
        }, 5000)
    })
}

kiemTraTuoi(19).then((ketqua) =>{
    console.log(`Thanh cong`, ketqua);
    
}, lyDoLoi =>{
    console.error(`That bai`, lyDoLoi);
    
})

// .catch() dung de bat loi
// .finally() dung de dong file de do ton dung luong hoac bo nho

kiemTraTuoi(16).then((ketqua) =>{
    console.log(`Thanh cong`, ketqua);
    
}).catch( lyDoLoi =>{
    console.error(`That bai`, lyDoLoi);
    
}).finally(() =>{
    console.log(`Luon chay`);
    
})


// 

function LayIDNguoiDung(){
    //ham nay hua se tra ve 1 so sau 5s
    return new Promise(resolve => setTimeout(() => resolve(1), 5000))
}


function LayThongTinTuID(id){
    return new Promise(resolve => setTimeout(() =>{
        resolve({id: id, ten: 'Jane'})
    }, 1000))
}

console.log(`Bat dau chuoi hanh dong`);

LayIDNguoiDung().then(id =>{
    //b1 sau 5s promise thanh cong, id co gia tri la 1
    console.log(`Lay duoc id nguoi dung`, id);

    return LayThongTinTuID(id)
    
}).then(nguoidung =>{
    //b2 cho den khi layThongTinTuID hoan thanh (them 1s)
    console.log(`Lay duoc thong tin nguoi dung`, nguoidung.ten);
    
})

// callback hell (dia nguc callback)
// async await
// async => dat truoc 1 ham de bao rang: ham nay se xu ly bat dong bo va tra ve luon Promise
// await => no ra lenh tam dung viec thuc thi ham cho den khi giai quyet vad tra ve ket qua


async function layThongTinUser() {
    console.log(`Bat dau quy trinh`);
    
    const id = await LayIDNguoiDung()  // giong then()

    const tenNguoiDung = await LayThongTinTuID(id)

    console.log(tenNguoiDung.ten);
    
}

layThongTinUser()


//

// async function taiDuLieu() {
//     console.log(`Dang tai`);
//     //fetch tuong tu postman
//     const ketqua = await fetch('url')
//     const duLieu = await ketqua.json()

//     console.log(`Tai xong`);
    
//     return duLieu
// }

// su dung khi chay 1 chuong trinh ko biet truoc ket qua, ko biet pass fail nhu nao, fail thi fail lam sao
// try {

//     }catch (error){
        
//     }

async function layDanhSachBook() {
    try {
        console.log(`Bat dau goi API`);
        
        const response = await fetch('https://api.anhtester.com/api/books')

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const bookData = data.response

        const first50Books = bookData.slice(0, 50)

        console.log(`Data se la`, data);

        console.log(`50 cuon sach dau tien la`, first50Books);
        console.log(`Do dai cua mang`, first50Books.length);

        return first50Books
        
    }catch (error){
        console.log(`Loi khi goi API`, error.message)
        throw error
        
    }
}

layDanhSachBook()

//1. loc sach dang ban co status = 1
//2. loc sach co gia cao > 200000
//3. loc sach vua dang ban co anh

// filter

async function lamBaiTap() {
    
}


const sachDangBan = books.filter()






