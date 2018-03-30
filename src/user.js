import API from "./api"

let Post = {
  findAll(){
    return API.fetch("activeUsers");
  }
}

export default Post;