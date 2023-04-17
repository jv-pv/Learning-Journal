import { articles } from "./data.js";
import { hero } from "./data.js";

const heroSection = document.getElementById("hero-section");
const blogsSection = document.getElementById("blogs-container");
const viewMoreBtn = document.getElementById("view-more-btn")

viewMoreBtn.addEventListener("click", function () {
    blogsSection.innerHTML = getblogsSection();
    viewMoreBtn.style.display = "none"; // Hide the "View More" button after all blogs are shown.
});



function getHeroSection() {
    let heroHtml = ""
    const heros = hero[0]
        heroHtml += `
        <img class="hero-background" src="${heros.image}" alt="computer on desk">
        <article>
            <p>${heros.date}</p>
            <h1>${heros.title}</h1>
            <p>
                ${heros.content}
            </p>
        </article>
        `;
    return heroHtml
}

function getblogsSection(limit = articles.length) {
    let blogHtml = "";
    for (let i = 0; i < limit && i < articles.length; i++) {
        const blog = articles[i];
        blogHtml += `
        <section class="blog-One">
            <img class="blog-images" src="${blog.image}" alt="computer on desk">
            <article>
                <p>${blog.date}</p>
                <h1>${blog.title}</h1>
                <p>
                    ${blog.content}
                </p>
            </article>
        </section>
        `;
    }
    return blogHtml;
}


function render() {
    heroSection.innerHTML = getHeroSection();
    const screenWidth = window.innerWidth;
    const initialBlogsToShow = screenWidth < 780 ? 3 : 4;
    blogsSection.innerHTML = getblogsSection(initialBlogsToShow);
}


render()