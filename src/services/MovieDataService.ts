import { useFetch } from "@/env";
import { IMovie } from "@/models/IMovie";
import { IMovieCredits } from "@/models/IMovieCredits";
import { IResponse } from "@/models/IResponse";
import MovieDataServiceAxios from "@/services/MovieDataServiceAxios";
import MovieDataServiceFetch from "@/services/MovieDataServiceFetch";

//common dataservive for accessing the moviedata. It can be switched between the Axios and Fetch
class MovieDataService {
    public getPopularMovies = async (): Promise<IResponse> => {
        if (useFetch)
            return MovieDataServiceFetch.getPopularMovies();
        return MovieDataServiceAxios.getPopularMovies();
    };

    public getTrendingMovies = async (): Promise<IResponse> => {
        if (useFetch)
            return MovieDataServiceFetch.getTrendingMovies();
        return MovieDataServiceAxios.getTrendingMovies();
    };

    public getTopMovies = async (): Promise<IResponse> => {
        if (useFetch)
            return MovieDataServiceAxios.getTopMovies();
        return MovieDataServiceAxios.getTopMovies();
    };


    public getMovieDetails = async (id: string): Promise<IMovie> => {
        if (useFetch)
            return MovieDataServiceAxios.getMovieDetails(id);
        return MovieDataServiceAxios.getMovieDetails(id);
    };

    public getMovieCredits = async (id: string): Promise<IMovieCredits> => {
        if (useFetch)
            return MovieDataServiceAxios.getMovieCredits(id);
        return MovieDataServiceAxios.getMovieCredits(id);
    };
}

export default new MovieDataService();