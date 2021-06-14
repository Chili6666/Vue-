import { IResponse } from "../models/IResponse";
import { IMovie } from "../models/IMovie";
import { IMovieCredits } from "../models/IMovieCredits";

import { axioInstance } from "@/helper/http-common";
import UserStore from "@/stores/userStore";


class MovieDataServiceAxios {

    public getPopularMovies = async (): Promise<IResponse> => {
        const res = await axioInstance.get(`/movie/popular?api_key=${UserStore.user?.requestToken}`);
        return res?.data as IResponse;
    };

    public getTrendingMovies = async (): Promise<IResponse> => {
        const res = await axioInstance.get(`/trending/movie/week?api_key=${UserStore.user?.requestToken}`);
        return res?.data as IResponse;
    };

    public getTopMovies = async (): Promise<IResponse> => {
        const res = await axioInstance.get(`/movie/top_rated?api_key=${UserStore.user?.requestToken}`);
        return res?.data as IResponse;
    };


    public getMovieDetails = async (id: string): Promise<IMovie> => {
        const res = await axioInstance.get(`/movie/${id}?api_key=${UserStore.user?.requestToken}`);
        return res.data as IMovie;
    };

    public getMovieCredits = async (id: string): Promise<IMovieCredits> => {
        const res = await axioInstance.get(`/movie/${id}/credits?api_key=${UserStore.user?.requestToken}`);
        return res.data as IMovieCredits;
    };
}

export default new MovieDataServiceAxios();