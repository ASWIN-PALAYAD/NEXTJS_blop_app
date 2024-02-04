import Image from 'next/image';
import styles from './singlePost.module.css';


const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image className={styles.img} src={'/post.jpg'} alt='image' fill/>
      </div>
      <div className={styles.textContainer}>
          <h1 className={styles.title} >Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} 
            src={'/post.jpg'} alt='user image'
              width={50} height={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle} >Author</span>
              <span className={styles.detailValue} >aswin</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle} >Published</span>
              <span className={styles.detailValue} >09-98-43</span>
            </div>
          </div>
          
          <div className={styles.content}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa assumenda officia laboriosam enim laudantium sed obcaecati quidem voluptatum consequuntur. Reprehenderit, illum omnis. Odio nihil hic voluptas cupiditate, vero aliquam iure.
          </div>

      </div>
    </div>
  )
}

export default SinglePostPage