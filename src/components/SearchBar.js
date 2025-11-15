import { renderMovies } from "../api/movies.js";
let searchTerm = document.querySelector("#search");
searchTerm.addEventListener(("keydown"),(e)=>{
    if(e.key==="Enter"){
        console.log(searchTerm.value);
        renderMovies(searchTerm.value);
    }
})
export default searchTerm;