import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getShowsNewReleases = async () => {
  try {
    const apiShowReleases = await axios.get(
      `${URL}/discover/tv?sort_by=first_air_date.desc`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    if (apiShowReleases.status !== 200) {
      throw new Error(apiShowReleases.statusText);
    }
    const showReleases = apiShowReleases.data.results;
    return showReleases;
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

export const getTopRatedShows = async () => {
  try {
    const apiTopRatedShows = await axios.get(`${URL}/tv/top_rated`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (apiTopRatedShows.status !== 200) {
      throw new Error(apiTopRatedShows.statusText);
    }
    const topRatedShows = apiTopRatedShows.data.results;
    return topRatedShows;
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
