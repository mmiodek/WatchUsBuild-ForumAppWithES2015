let Post = {
  findAll(){
    return new Promise((resolve,reject) => {
      let uri = "http://localhost:3000/posts";
      let request = new XMLHttpRequest();
      request.open("GET",uri,true);
      request.onload = () => {
        if(request.status >=200 && request.status < 400){
          resolve(request.response);
        }
      };
//erere
      request.send();
    });
  }
}

let ui = {
  renderPosts(posts){
    console.log(posts);
  }
}

Post.findAll().then(ui.renderPosts);