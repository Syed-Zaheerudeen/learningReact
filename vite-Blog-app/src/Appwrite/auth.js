import { Client, Account, ID } from "appwrite";
import conf  from "../envConfig/conf";


export class AuthServices {
    
    client;
    account;


    constructor() {
        this.client = new Client()
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.projectId);    
        this.account = new Account(this.client);
    }


    async createAccount(email,password,name) {
         try {

            const res = await this.account.create(ID.unique(),email,password,name);

            if(res) {
                this.loginUser(email,password);
            }

            return res;

         } catch (error) {
            throw error;
         }
    }
    
    async loginUser(email,password) {
        try {
            
            return await this.account.createEmailPasswordSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    async logOut() {
        
        try {
            
            return await this.account.deleteSessions();

        } catch (error) {
            throw error
        }


    }

    async getCurrentUser() {
       
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

}


export default new AuthServices();
