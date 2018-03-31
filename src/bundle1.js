const BASE_URI = "http://localhost:3000";


let API = {
  fetch(path){
    return new Promise((resolve,reject) => {
      let uri = '${BASE_URI/${path}';
      let request = new XMLHttpRequest();
      request.open("GET",uri,true);
      request.onload = () => {
        if(request.status >=200 && request.status < 400){
          resolve(JSON.parse(request.response));
        }
      };
      request.onerror = () => {
        reject(new Error("Something wrong with the API"));
      }

      request.send();
    });
  }
}

let Post = {
  findAll(){
    return API.fetch("posts");
  }
}

let User = {
  findRecent(){
    return API.fetch("activeUsers");
  }
}

let ui = {
  renderPosts(posts){
    let elements = posts.map((post) => {
      let {title,lastReply} = post;
      return articleTemplate(title,lastReply);
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join("");
  },

  renderActiveUsers(users){

    let target = document.querySelector(".sidebar-content");

    let elements = users.map( (user) => {
      let { name, avatar } = user;
      return activeUsersTemplate(name, avatar);
    });

    target.innerHTML = elements.join("");
  }
};

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

function activeUsersTemplate(name, avatar){

  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class="active-avatar">
    <img width="54" src="assets/images/${safeAvatar}">
    <h5 class="post-author">${safeName}</h5>
    </div>`;

  return template;
}

Post.findAll()
  .then(ui.renderPosts)
  .catch((error) => {console.log(error)});

User.findRecent()
  .then(ui.renderActiveUsers)
  .catch((error) => {console.log(error)});