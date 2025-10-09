

//================================
//       BAI 2: String & Number 
//================================
// ---- Sting method ----
// length

// Mat khau ko duoc < 8 va > 16 ky tu

const matKhauKhongHopLe = ' 12345 '

const viPhamDoDai = (matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16)

if(viPhamDoDai){
    console.log("Loi mat khau ko du dai");
}

console.log(`Do dai cua mat khau la: ${matKhauKhongHopLe.length}`)

// .trim() - bo khoang trang

const tenNguoiDungUI = ' Phan Thi Hong Nhung '
const tenNguoiDungMoi = 'Phan Thi Hong Nhung'
const tenDaTrim = tenNguoiDungUI.trim()

console.log(`ten da trim: ${tenDaTrim}`)

console.log(tenNguoiDungMoi.toLowerCase().includes(tenDaTrim.toLowerCase()))

// indexof() - vi tri ky tu

const tieuDe =  'Automation Testing'
const viTri = tieuDe.indexOf('Testing')
console.log(`Tu Testing bat dau o vi tri: ${viTri}`)

const urlHienTai = "https://example.com/login?status=success"

const ketQuaTimKiem = urlHienTai.indexOf('error')

console.log(`Ket qua cua indexOf ${ketQuaTimKiem}`)

if (ketQuaTimKiem === -1){
    console.log('URL KO CHUA THAM SO LOI, DANG NHAP THANH CONG')
}else{
    console.log(" DANG NHAP THAT BAI")
}


// .include() - kiem tra chua chuoi con
// .toLowerCase() / .toUpperCase() - chuyen thanh chu hoa chu thuong

// tim kiem lower case upper casea

const tuKhoaTimKiem = 'Iphone 17'
const tieuDeSanPhamUI = 'Apple Iphone 17 Pro Max'


const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
console.log(`Tu khoa tim kiem: ${tuKhoaTimKiem}, tieu de: ${tieuDeSanPhamUI}`)

console.log(coChuaTuKhoa)

// .replace() / .relpaceAll() - thay the ky tu

const giaTienThucTeUI = 'Gia niem yet: 1,250.99 USD'
const chuoiDaLamSachGiaNiemYet = giaTienThucTeUI.replace('Gia niem yet: ', "")
const chuoiDaLamSachUSD = chuoiDaLamSachGiaNiemYet.replace(' USD', "")
const chuoiDaLamSachDauPhay1 = chuoiDaLamSachUSD.replace(',', "")

const chuoiDaLamSach = giaTienThucTeUI.replace('Gia niem yet: ',"").replace(' USD', "").replace(',', "")

console.log(chuoiDaLamSachGiaNiemYet)
console.log(chuoiDaLamSachUSD)
console.log(chuoiDaLamSachDauPhay1)
console.log(chuoiDaLamSach)

const dateString = '2025-12-25'

console.log(dateString.replaceAll('-', '/'))

// .slice() - cat chuoi

const urlTrangThanhCong = 'https://example.com/order-sucess/id=ORD-83947372-2025&status=paid'

const viTriBatDau = urlTrangThanhCong.indexOf('id=') + 3

const viTriKetThuc = urlTrangThanhCong.indexOf('&')

const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc)

console.log(`Ma don hang nhan duoc la ${maDonHang}`)



// .split() - tach chuoi thanh danh sach (mang)

const breadCrumbText = 'Trang chu > Dien Thoai > Apple'

const breadCrumbArray = breadCrumbText.split(' > ')
console.log('ARRAY BREADCRUMB ', breadCrumbArray)
console.log(breadCrumbArray.length)

// ----- Number ------
// .toFixed() - lam tron so thap phan (tra ve string)


// Math.random() - tao so ngau nhien
// ramdom tron js tra ve so thap phan ngẫu nhiên 0<= và <1
console.log(Math.random())

// const soNgauNhien = Math.floor(Math.random() * (max + 1))

const soNgauNhien = Math.floor(Math.random() * 101)
console.log(`so ngau nhien ${soNgauNhien}`)

// so ngau nhien tu 50 den 100
const min = 50
const max = 100
const soNgauNhienTrongKhoang = Math.floor(Math.random() * (max - min + 1) + min)
console.log(soNgauNhienTrongKhoang)



// Math.floor() - lam tron xuong
console.log(Math.floor(2.45))
console.log(Math.floor(2.999))

// Math.ceil() - lam tron len
console.log(Math.ceil(2.45))
console.log(Math.ceil(2.999))

// Math.round() - lam tron binh thuong
console.log(Math.round(2.45))
console.log(Math.round(2.999))




const tamTinhTextUI = 'Tam tinh: 1,250,500.75 VND'
const tongCongTextUI = 'Tong cong (da giam): 1,125,450.75 VND'


const chuoiDaClear1 = tamTinhTextUI.replace('Tam tinh: ', "").replaceAll(',', "").replace(' VND', "")
console.log(chuoiDaClear1)


const chuoiDaClear2 = tongCongTextUI.replace('Tong cong (da giam): ', "").replaceAll(',', "").replace('.',"").replace(' VND', "")
console.log(chuoiDaClear2)



// ------ Ep kieu du lieu --------
// Tai sao phai ep kieu du lieu? Vi chuoi lay tu web luon la String
// - Number(value): nghiem ngat, chuoi phai sach
// - parseInt(value): lay so nguyen tu dau chuoi, bo qua dau cach dau tien nhung ko bo qua dau cach o giua
// - parseFloat(value): lay so thap phan tu dau chuoi



//cac buoc lay du lieu
//b1: Lay du lieu tho tu UI (100% la String)
// b2: so che du lieu bang cac phuong thuc chuoi
// b3: ep kieu bang cong cu thich hop
// b4: thuc hien tinh toan

// parseInt()

const soLuongText = '15.000 30sam 30 pham'
console.log(parseInt(soLuongText))

// parseFloat()

console.log(parseFloat(soLuongText))


// toan tu tang/giam (Increment/Decrement Operators) ++x    x++
// hau to x++  => tra ve gia tri cu roo moi tang
let veXemPhim = 10

let veHienTai = veXemPhim++

let veHienTaiTienTo = ++veXemPhim

console.log(`ve hien tai bay gio la so: ${veHienTai}`)

console.log(`thu tu bay gio la: ${veXemPhim}`)



// tien to ++x  => tang gia tri bien len 1 roi tra ve gia tri

console.log(`Tong so ve da ban: ${veHienTaiTienTo}`)

let attempts = 0
const MAX_ATTEMPTS = 3

function performClickWithRetry(){
    console.log(`Bat dau thu hien click lan thu: ${attempts + 1}`)
    const isSuccess = false

    if(!isSuccess){
        if(++attempts >= MAX_ATTEMPTS){
            console.error(`Da thu ${attempts} va van that bau. Dung lai`)
        }else{
            console.log(`-> click that bai, so lan da thu ${attempts}`)
        }
    }
}

performClickWithRetry()

performClickWithRetry()

performClickWithRetry()

performClickWithRetry()

// so sanh == (so sanh long leo: chi can gia tri bang nhau la dc, ko quan tam den kieu gia tri. vd: '10' = 10, False = 0 = "")
// so sanh === (so sanh nghiem ngat: can ca gia tri va kieu gia tri giong nhau. vd '10' != 10)

const reponseAPI = {
    product: "Laptop",
    quantity: false //loi, gia tri nen = 0
}

const soLuongMongDoi = 0
if(reponseAPI.quantity == soLuongMongDoi){
    console.log(`PASSSS`)
}else{
    console.log(`FAIL`)
}


// ------- Toan tu logic ------
// && (AND)
// || (OR)
// ! (NOT)


/* Muc do uu tien cua cac toan tu
| Muc do uu tien | Loai toan tu | Toan tu |
| :--- | :--- | :--- |
| **Cao nhat** (1) | Dau ngoac (Grouping) | `(...)` |
| 2 | Truy cap thuoc tinh, loi goi ham | `.` `()` `[]` |
| 3 | Phu dinh, Tang/Giam (Unary) | `!` `++` `--` `typeOf()` |
| 4 | Nhan/Chia/Chia lay du | `*` `/` `%` |
| 5 | Cong/Tru | `+` `-` | 
| 6 | So sanh quan he | `>` `<` `>=` `<=` |
| 7 | So sanh bang (nghiem ngat) | `===` `!==` |
| 8 | Logic AND | `&&` |
| 9 | Logic OR | `||` |
| 10 | Toan tu ba ngoi | `? : ` |
| **Thap nhat** (11) | Gan | `=` `+=` `-=` |
*/



