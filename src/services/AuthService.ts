/* eslint-disable */

import { IUser } from "@/models/IUser";
import UserStore from "@/stores/userStore";

export const USER_NAME_KEY: string = 'username';
export const REQUEST_TOKEN_KEY: string = 'token';

class AuthService {

    constructor() {
        console.log('AuthSerice created')
    }

    public async login(user: IUser, rememberLoginInformation: boolean): Promise<boolean> {

        //fake login progress
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (user.username !== '' && user.requestToken !== '') {
            if (rememberLoginInformation) {
                window.localStorage.setItem(USER_NAME_KEY, user.username);
                window.localStorage.setItem(REQUEST_TOKEN_KEY, user.requestToken);
            }
            console.log('***** login succeeded *****');
            UserStore.SetUser(user);
            return true;
        }
        else {
            return false;
        }
    }

    public logout(): void {
        console.log('**** logout ******');
        window.localStorage.removeItem(USER_NAME_KEY);
        window.localStorage.removeItem(REQUEST_TOKEN_KEY);
    }
}


export default new AuthService();