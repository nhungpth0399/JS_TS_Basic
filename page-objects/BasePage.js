export class BasePage {
    constructor(page, url){
        this.page = page
        this.url = url
    }

    async navigateTo(){
        console.log(`ACTION: dang dieu huong toi trang ${this.url}`);
        
    }
}
