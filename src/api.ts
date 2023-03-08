import axios from "axios";
import { movies } from "./Models/movietype";

const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";

export const getproductslist = (id: number):Promise<movies[]> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/" + id + API)
    .then((res) => res.data);
};
