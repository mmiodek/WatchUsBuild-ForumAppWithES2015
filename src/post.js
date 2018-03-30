import API from "./api";

let Post = {
  findAll(){
    return API.fetch("posts");
  }
}

console.log(Post);

export default Post;