import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'about page',
  description: 'about description',
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas thar are bigger, bolder,braver and better</h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger,bolder, braver and better. we believe in good ideas flexibility and 
          presission we are worlds our special Team best consultancy & finance solution provider, wide range of web and software development services

        </p>
        <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/about.png'} alt='About image' fill  className={styles.img}/>
      </div>
    </div>
  )
}

export default AboutPage 