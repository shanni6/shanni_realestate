import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "462f4e378fmsh5f5398ce2ab002dp1a014fjsn11a9118b7698",
      },
    });
    return data;
}