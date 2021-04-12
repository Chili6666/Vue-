/* eslint-disable */
//https://github.com/gintsgints/quarkus-fullstack/blob/master/webapp/src/store/index.ts

import { reactive, inject } from 'vue'
import { IUser } from "@/models/IUser";

export class UserStore {

    private _user: IUser | null = null;

    constructor() {
        console.log("***** State created *****");
    }

    public get isAuthenticated(): boolean {
        return this._user != null;
    }

    public SetUser(user: IUser) {
        this._user = user;
    }

    public RemoveUser(): void {
        this._user = null;
    }
}


//create a new reactive state instance
const reactiveStore = reactive(new UserStore())

export const stateSymbol = Symbol('userStore')

//Dependency injection
export const useUserStore = () => inject(stateSymbol) as UserStore

export default reactiveStore;