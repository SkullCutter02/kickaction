const blogsContainer = document.querySelector("section");

fetch("../data/blog.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "";

    data.blogs.forEach((blog) => {
      output += `
          <article>
            <h1 class="blog-article-title">${blog.title}</h1>
            <p class="blog-article-date">${blog.date}</p>
            <p class="blog-article-description">${blog.body}</p>
          </article>
        `;
    });

    blogsContainer.innerHTML = output;
  });
