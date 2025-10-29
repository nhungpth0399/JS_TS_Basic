
import { LoginPage } from "../pages/LoginPage.js";
import { DataReader } from "../services/DataReader.js";
import type { ILoginData } from "../types/login-data.js";


async function runLoginTest() {

    const dataReader = new DataReader()
    const loginPage = new LoginPage()

    //doc file json
    const loginCredentials = await dataReader.readJsonFile<ILoginData>('../data/login-credentials.json')
    if(loginCredentials.length === 0){
        console.log(`Khong co du lieu test de chay. Ket thuc`)
        return
    }

}

runLoginTest()






