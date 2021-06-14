import { IResponse } from "../models/IResponse";
import UserStore from "@/stores/userStore";
import { baseUrl } from "@/env";
import { IMovie } from "@/models/IMovie";
import { IMovieCredits } from "@/models/IMovieCredits";


/*******************************
FETCH
********************************/
export async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  if (response.ok) {
    const body = await response.json();
    return body;
  }
  else {
    const error = response.statusText;
    return Promise.reject(error);
  }
}


class MovieDataServiceFetch {

  public getPopularMovies = async (): Promise<IResponse> => {
    const requestUrl = baseUrl + `/movie/popular?api_key=${UserStore.user?.requestToken}`;
    return await http<IResponse>(requestUrl);
  };

  public getTrendingMovies = async (): Promise<IResponse> => {
    const requestUrl = baseUrl + `/trending/movie/week?api_key=${UserStore.user?.requestToken}`;
    return await http<IResponse>(requestUrl);
  };

  public getTopMovies = async (): Promise<IResponse> => {
    const requestUrl = baseUrl + `/movie/top_rated?api_key=${UserStore.user?.requestToken}`;
    return await http<IResponse>(requestUrl);
  };

  public getMovieDetails = async (id: string): Promise<IMovie> => {
    const requestUrl = baseUrl + `/movie/${id}?api_key=${UserStore.user?.requestToken}`;
    return await http<IMovie>(requestUrl);
  };

  public getMovieCredits = async (id: string): Promise<IMovieCredits> => {
    const requestUrl = baseUrl + `/movie/${id}/credits?api_key=${UserStore.user?.requestToken}`;
    return await http<IMovieCredits>(requestUrl);
  };

}

export default new MovieDataServiceFetch();
