import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

// direct api  fetching methode

const getData = async(slug)=> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`); 

  if(!res.ok){
    throw new Error("Somthing went wrong"); 
  }

  return res.json()
}

//seo management
export const generateMetadata = async({params})=> {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title:post.title,
    description:post.desc
  }
}


const SinglePostPage = async({params}) => { 

  const {slug} = params;

  //direct api fetching
  const post = await getData(slug)

  // const post = await getPost(slug)
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image className={styles.img} src={post?.img} alt='image' fill/>
      </div>
      <div className={styles.textContainer}>
          <h1 className={styles.title} >{post?.title}</h1>
          <div className={styles.detail}>
            
          {/* author details */}

          {post && <Suspense fallback={<div>Loading..</div>}> 
          <PostUser userId={post?.userId}/>
          </Suspense>}

            <div className={styles.detailText}>
              <span className={styles.detailTitle} >Published</span>
              <span className={styles.detailValue} >{post.createdAt?.toString().slice(4,16)}</span>
            </div>
          </div>
          
          <div className={styles.content}>
            {post?.desc}
          </div>

      </div>
    </div>
  )
}

export default SinglePostPage