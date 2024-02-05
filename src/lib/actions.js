"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";


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