import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

//direct api fetching

const getData = async()=> {
  const res = await fetch("http://localhost:3000/api/blog/",{cache:'no-store',next:{revalidate:30000}});
  console.log(res);

  if(!res.ok){
    throw new Error("Somthing went wrong");
  }

  return res.json()
}

const BlogPage = async() => { 

  // direct api fetching
  const posts = await getData();

  // const posts = await getPosts()


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