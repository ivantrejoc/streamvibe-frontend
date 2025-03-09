import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getApiTrending = async () => {
  try {
    const apiTrending = await axios.get(`${URL}/trending/all/week`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (apiTrending.status !== 200) {
      throw new Error(apiTrending.statusText);
    }
    const trendingMovies = apiTrending.data.results;
    return trendingMovies;
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
