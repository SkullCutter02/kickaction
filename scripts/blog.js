const blogsContainer = document.querySelector("section");
const blogModalContainer = document.getElementById("blog-modal-container");
const blogModal = document.getElementById("blog-modal");
const blogOverlay = document.querySelector(".blog-overlay");

blogOverlay.addEventListener("click", () => {
  blogModalContainer.classList.add("disabled");
});

fetch("../data/blog.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "";

    data.blogs.forEach((blog) => {
      output += `
          <article>
            ${
              blog.imagesLink?.length > 0
                ? `
                <img class="blog-article-preview-image" src="${blog.imagesLink[0]}">
              `
                : ""
            }
            <div>
              <p class="blog-article-date">${blog.date}</p>
              <h1 class="blog-article-title">${blog.title}</h1>
              <p class="blog-article-description">${blog.body}</p>
            </div>
          </article>
        `;
    });

    blogsContainer.innerHTML = output;

    const blogArticles = document.querySelectorAll("article");

    for (let i = 0; i < blogArticles.length; i++) {
      blogArticles[i].addEventListener("click", () => {
        blogModal.innerHTML = `
        <h1 class="blog-article-title">${data.blogs[i].title}</h1>
        <p class="blog-article-date">${data.blogs[i].date}</p>
        ${
          data.blogs[i].imagesLink?.length > 0
            ? `
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              ${data.blogs[i].imagesLink?.map(
                (imageLink) => `
                <li class="glide__slide">
                  <img src="${imageLink}" alt="${imageLink}">
                </li>
              `
              )}
            </ul>
            <div class="glide__arrows" data-glide-el="controls">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                prev
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                next
              </button>
            </div>
          </div>`
            : ""
        }
          <p class="blog-article-description blog-article-modal-description">${
            data.blogs[i].body
          }</p>
        `;

        blogModalContainer.classList.remove("disabled");

        new Glide(".glide", {
          type: "carousel",
          startAt: 0,
          perView: 1,
          animationDuration: 700,
        }).mount();
      });
    }
  });
