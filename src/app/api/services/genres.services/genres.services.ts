import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getApiGenres = async () => {
  try {
    const apiGenres = await axios.get(`${URL}/genre/movie/list`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (apiGenres.status !== 200) {
      throw new Error(apiGenres.statusText);
    }
    const genres = apiGenres.data.genres;
    return genres;
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
