import { useAPI } from './API';
import { AuthContext } from "../store/authContext";
import User from '../entities/user'

export default class LoginService {
    baseUrl: string;
    constructor (baseUrl: string) {
        this.baseUrl = baseUrl || 'http://locahost:8080';
    }

    // async doLogin(username: string, password: string) : Promise<User> {
    //     let resp = await useAPI().get(`${this.baseUrl}/user/username`)

    //     AuthContext

    //     return {
    //         username: '',
    //         email: '',
    //         id: 0,
    //     }
    // }
}