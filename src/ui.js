var xss = require('xss-filters');

let ui = {
  renderPosts(posts){
    let elements = posts.map((post) => {
      let {title,lastReply} = post;
      return articleTemplate(title,lastReply);
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join("");
  }
}

function articleTemplate(title,lastReply) {
  let safeTitle = xss.inHTMLData(title);
  let safeReply = xss.inHTMLData(lastReply);
  let template = `<article class='post'>
    <h2 class='post-title'>
     ${safeTitle}
    </h2>
    <p class='post-meta'>
      ${safeReply}
    </p>
  </article>`;
  return template;
}

export default ui;