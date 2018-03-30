import Post from "./post.js";
import User from "./user.js"
import ui from "./ui.js";

  
Post.findAll()
  .then(ui.renderPosts)
  .catch((error) => {console.log(error)});

User.findRecent()
  .then(ui.renderActiveUsers)
  .catch((error) => {console.log(error)});