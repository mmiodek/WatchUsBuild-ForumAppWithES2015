import API from "./api";

let User = {
  findRecent(){
    return API.fetch("activeUsers");
  }
}

console.log(User);

export default User;