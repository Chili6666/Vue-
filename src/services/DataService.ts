import { IResponse } from "../models/IResponse";
import { axioInstance } from "@/helper/http-common";
import UserStore from "@/stores/userStore";


class MovieDataService {

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
}

export default new MovieDataService();