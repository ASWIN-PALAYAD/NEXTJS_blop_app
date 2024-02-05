import { Post, User } from "./models";
import { connectToDb } from "./utils";

//temp data
// const users = [
//     {id:1, name:'john'},
//     {id:2, name:'jane'}
// ]

// const posts = [
//     {id:1, title:'post 1', body:'...sdhfdsf', userId:1},
//     {id:2, title:'post 2', body:'fsklfjhsdfhsdf', userId:1},
//     {id:3, title:'post 2', body:'fsklfjhsdfhsdf', userId:2},
//     {id:4, title:'post 2', body:'fsklfjhsdfhsdf', userId:2}
// ]

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const posts = await Post.findOne({slug});
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const getAllUsers = async() => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fetch all users")
    }
}
