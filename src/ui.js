let ui = {
  renderPosts(posts){
    let elements = posts.map((post) => {
      return articleTemplate;
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements;
  }
}

let articleTemplate = `<article class='post'>
    <h2 class='post-title'>
      ${safeTitle}
    </h2>
    <p class='post-meta'>
      last reply on ${safeLastReply}
    </p>
  </article>`;


export default ui;