/* eslint-disable */

import { IUser } from "@/models/IUser";

class AuthService {

    public readonly usernameKey: string = 'username';
    public readonly requestTokenKey: string = 'token';

    constructor(){
        console.log('AuthSerice created')
    }

    public async login(user: IUser, rememberLoginInformation: boolean): Promise<boolean> {

        //fake login progress
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (user.username !== '' && user.requestToken !== '') {
            if (rememberLoginInformation) {
                window.localStorage.setItem(this.usernameKey, user.username);
                window.localStorage.setItem(this.requestTokenKey, user.requestToken);
            }
            console.log('***** login succeeded *****');
            return true;
        }
        else {
            return false;
        }
    }

    public logout() : void {
        console.log('**** logout ******');
        window.localStorage.removeItem(this.usernameKey);
        window.localStorage.removeItem(this.requestTokenKey);
    }
}

export default new AuthService();