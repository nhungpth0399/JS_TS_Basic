


import { LoginPage } from "../page-objects/LoginPage.js"
import { HomePage } from "../page-objects/HomePage.js"
import { BasePage } from "../page-objects/BasePage.js"


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

