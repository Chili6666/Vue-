/* eslint-disable */

import {IUser} from "@/models/user";

class AuthService {

    public async login(user: IUser): Promise<boolean> {

        //fake login progress
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (user.username !== '' && user.requestToken !== '') 
            return true;
        else 
            return false;
    }
}

export default new AuthService();