import {IArtist} from "@/models/IArtist";

export interface IMovieCredits
{
    id : number;
    cast : IArtist[];
}