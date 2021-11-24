const User = require("./User.js");
const Blog = require("./Blog.js");
const Comment = require("./Comment.js");

User.hasMany(Blog);

Blog.belongsTo(User);

Blog.hasMany(Comment);

Comment.belongsTo(Blog);

Comment.belongsTo(User);

User.hasMany(Comment);


module.exports={User, Blog, Comment};