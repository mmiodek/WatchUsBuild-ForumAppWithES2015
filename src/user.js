import API from "./api"

let User = {
  findAll(){
    return API.fetch("activeUsers");
  }
}

export default User;