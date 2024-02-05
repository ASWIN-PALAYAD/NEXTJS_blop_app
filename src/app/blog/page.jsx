import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

//direct api fetching

// const getDate = async()=> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store",next:{revalidate:30000}});

//   if(!res.ok){
//     throw new Error("Somthing went wrong");
//   }

//   return res.json()
// }

const BlogPage = async() => { 

  // direct api fetching
  // const posts = await getDate();

  const posts = await getPosts()


  return (
    <div className={styles.container}>

      {posts?.map((post)=>(
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
        </div>
      ))}

    </div> 
  )
}

export default BlogPage