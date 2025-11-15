import {API_KEY} from "../../config/config.js"
import { API_URL } from "../../config/config.js";
import { createMovieCard } from "../components/MovieCard.js";
export async function renderMovies(term){
    const res = await fetch(`${API_URL}?s=${term}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    createMovieCard(data);
}