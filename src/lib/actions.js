"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'


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

  export const register = async(previousState,formData) => {
    const {username,email,password,passwordRepeat,img} = Object.fromEntries(formData);
    console.log(username,email,password,passwordRepeat);


    if(passwordRepeat !== password){
        return {error:'Password doesnot match'}
    }

    try {
        connectToDb();

        const user = await User.findOne({username});
        console.log('user' + user);
        if(user){
            return {error:'User already exist'}
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
        return {success : true}
    } catch (error) {
        console.log(error);
        return {error:'Somthing went wrong'}
    }
  };

  export const login = async (previousState,formData) => {
    const {username, password } = Object.fromEntries(formData);
    console.log(username,password);
    try {
        await signIn("credentials",{username,password});
    } catch (error) {
        console.log(error.message);
        if(error?.message.includes("CredentialsSignin")){
            return{error:"Invalid username or password"}
        }
        throw error
    }
  }