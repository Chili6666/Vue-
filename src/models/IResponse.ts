import {IMovie} from "./IMovie";

//describe the common result from DB Movie request
export interface IResponse{
    page : number;
    results : IMovie[];
    total_pages : number;
    total_results : number;
}