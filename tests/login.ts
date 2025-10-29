

import { LoginPage } from "../pages/LoginPage.ts";
import { DataReader } from "../services/DataReader.ts";
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

    let testCaseNumber = 1
    
    for(const credential of loginCredentials){
        console.log(`Bat dau voi testcase ${testCaseNumber}, User: ${credential.username}`)
        await loginPage.navigate()
        await loginPage.login(credential)

        const isPassed = await loginPage.verifyLoginResult(credential.expected)

        if(isPassed){
            console.log(`>>>> KET QUA PASSED`)
        }else{
            console.log(`>>>> KET QUA FAILED`);
            
        }

        console.log(`KET THUC TEST CASE ${testCaseNumber}`);
        
        testCaseNumber++
    }

}

runLoginTest()






