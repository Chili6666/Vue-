/* eslint-disable */
//https://github.com/gintsgints/quarkus-fullstack/blob/master/webapp/src/store/index.ts
import { reactive, inject } from 'vue'

export class UserStore {
    //#region _____Fields__________

    private _isAuthenticated = false;

    //#endregion

    //#region _____Ctor____________

    constructor() {
        console.log("***** State created *****");
    }

    //#endregion

    //#region _____Public Interface_________

    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    public async login(username: string, token: string): Promise<boolean> {

        if (this._isAuthenticated)
            return true;

        //fake login progress
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (username === "A" && token !== '') {
            this._isAuthenticated = true;
            return true;
        }
        else {
            this._isAuthenticated = false;
            return false;
        }
    }

    public async logout() {
        this._isAuthenticated = false;
    }
    //#endregion
}


export const stateSymbol = Symbol('userStore')

//create a new reactive state instance
export const createUserStore = () => { return reactive(new UserStore()) }

//Dependency injection
export const useUserStore = () => inject(stateSymbol) as UserStore