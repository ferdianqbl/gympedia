import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url: string, params?: any) => {
  try {
    const res = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY || "",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
      params: params,
    });
    return res.data;
  } catch (err: any) {
    console.log("error: ", err.message);
  }
};

export const fetchExercisesByBodypart = async (bodyPart: any) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
