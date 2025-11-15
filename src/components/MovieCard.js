let movieCard = document.querySelector(".moviecard");
export async function createMovieCard(data) {
  movieCard.innerHTML = "";
  const backgroundPoster = await data?.Search?.[0]?.Poster || "fallback-image.jpg";
  movieCard.style.backgroundImage =`url(${backgroundPoster})`;
  // Info section
  const infoSection = document.createElement("div");
  infoSection.className = "infosection";

  // Header
  const header = document.createElement("div");
  header.className = "header";

  // Poster container + image
  const poster = document.createElement("div");
  poster.className = "poster";

  const posterImg = document.createElement("img");
  posterImg.src = `${data.Search[0].Poster}`;
  posterImg.alt = "Movie poster";

  poster.appendChild(posterImg);

  // Header info section
  const headerInfo = document.createElement("div");
  headerInfo.className = "headerinfo";

  const movieTitle = document.createElement("h1");
  movieTitle.textContent = `${data.Search[0].Title}`;

  const movieDetails = document.createElement("h4");
  movieDetails.textContent = `${data.Search[0].Year}`;

  const minutes = document.createElement("span");
  minutes.className = "minutes";
  minutes.textContent = "134 minutes";

  const type = document.createElement("p");
  type.className = "type";
  type.textContent = "Action, Sci-Fi Drama";

  // Append header info elements
  headerInfo.appendChild(movieTitle);
  headerInfo.appendChild(movieDetails);
  headerInfo.appendChild(minutes);
  headerInfo.appendChild(type);

  // Append header elements
  header.appendChild(poster);
  header.appendChild(headerInfo);

  // Movie description
  const description = document.createElement("div");
  description.className = "description";

  const descText = document.createElement("p");
  descText.className = "text";
  descText.textContent =
    "Description of the movie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus accusantium, facilis ratione consectetur sit quibusdam voluptatibus tempora tenetur eius neque fuga consequatur quam nihil? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ex quod illo deleniti ullam quo. Qui enim aperiam, praesentium atque maiores consequuntur provident dolorem odio.";

  // Append description
  description.appendChild(descText);

  // Build info section
  infoSection.appendChild(header);
  infoSection.appendChild(description);

  // Add info to card
  movieCard.appendChild(infoSection);
}
