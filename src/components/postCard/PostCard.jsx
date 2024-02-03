import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';


const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={'/post.jpg'} alt='priority' fill className={styles.img}/>
            </div>
            <span className={styles.date}>01-04-12</span> 
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus et omnis nam animi ut dolorum commodi? Saepe tempore voluptatum consectetur, veniam delectus iusto dolorem, aperiam itaque porro amet excepturi et?</p>
            <Link className={styles.link} href={'/blog/post'}>Read More</Link>  
        </div> 
    </div> 
  ) 
}

export default PostCard