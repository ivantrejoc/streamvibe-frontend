import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getMoviesNewReleases = async () => {
  try {
    const apiMoviesReleases = await axios.get(`${URL}/movie/now_playing?`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (apiMoviesReleases.status !== 200) {
      throw new Error(apiMoviesReleases.statusText);
    }
    const moviesReleases = apiMoviesReleases.data.results;
    return moviesReleases;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || "Internal Server Error",
      };
    }
    return {
      status: 500,
      message: "Unexpected error",
    };
  }
};

export const getTopRatedMovies = async () => {
  try {
    const apiTopRatedMovies = await axios.get(`${URL}/movie/top_rated?`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (apiTopRatedMovies.status !== 200) {
      throw new Error(apiTopRatedMovies.statusText);
    }
    const topRatedMovies = apiTopRatedMovies.data.results;
    return topRatedMovies;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || "Internal Server Error",
      };
    }
    return {
      status: 500,
      message: "Unexpected error",
    };
  }
};
