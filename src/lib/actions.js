"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcrypt'


//add post 
export const addPost = async(formData) => {
    

    const {title,slug,desc,userId} = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,slug,desc,userId
        });
        await newPost.save();
        console.log('saved to db');
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);
        return {error:"Somthing went wrong"}
    }

};

//delete post 
export const deletePost = async(formData) => {
    
   const {id} = formData;
   try {
    connectToDb();
    await Post.findOneAndDelete(id);
    console.log('delted from db');
    revalidatePath('/blog');
   } catch (error) {
    console.log(error);
    return {error:"sothing went wrong"}
   }
    
}

export const handleGithubLogin = async() => {             
    "use server"
    await signIn("github");
    
  }

  export const handleLogout = async() => {             
    "use server"
    await signOut();
    
  }

  export const register = async(formData) => {
    const {username,email,password,passwordRepeat,img} = Object.fromEntries(formData);
    console.log(username,email,password,passwordRepeat);


    if(passwordRepeat !== password){
        return "Password doesnot match"
    }

    try {
        connectToDb();

        const user = await User.findOne({username});
        if(user){
            return "user already exist"
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashPassword,
            img
        });
        await newUser.save();
        console.log('user saved to db');
    } catch (error) {
        console.log(error);
        return {error:'Somthing went wrong'}
    }
  }