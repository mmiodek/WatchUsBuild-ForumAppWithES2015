import Post from "./post.js";
import ui from "./ui.js";
// let Post = {
//   findAll(){
//     return new Promise((resolve,reject) => {
//       let uri = "http://localhost:3000/posts";
//       let request = new XMLHttpRequest();
//       request.open("GET",uri,true);
//       request.onload = () => {
//         if(request.status >=200 && request.status < 400){
//           resolve(JSON.parse(request.response));
//         }
//       };
//       request.onerror = () => {
//         reject(new Error("Something wrong with the API"));
//       }

//       request.send();
//     });
//   }
// }

// let ui = {
//   renderPosts(posts){
//     let elements = posts.map((post) => {
//       return articleTemplate;
//     });

//     let target = document.querySelector(".container");
//     target.innerHTML = elements;
//   }
// }

let articleTemplate = `<article class='post'>
    <h2 class='post-title'>
     Post Title
    </h2>
    <p class='post-meta'>
      last reply on 22-02-2017
    </p>
  </article>`;
  
Post.findAll()
  .then(ui.renderPosts)
  .catch((error) => {console.log(error)});