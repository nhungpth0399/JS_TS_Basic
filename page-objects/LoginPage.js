
import { BasePage } from "./BasePage.js"

export class LoginPage extends BasePage {
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