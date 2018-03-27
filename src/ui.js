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
     Post Title
    </h2>
    <p class='post-meta'>
      last reply on 22-02-2017
    </p>
  </article>`;


export default ui;