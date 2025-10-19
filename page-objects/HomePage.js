import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
    welComeMessage = '#welcome-message'

    constructor(page){
        super(page, '/home')
    }

    async getWelcomMessage(){
        console.log(`ACTION: Lay noi dung tu ${this.welComeMessage}`);
        return 'Chao mung ban quay tro lai'
        
    }
}