import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.heroSubcontainer}>
            <div className={styles.imageContainer}>
              <Image
                fill
                className={styles.movieImage}
                alt="movie-image"
                src={"/image-container.png"}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                fill
                className={styles.movieImage}
                alt="movie-image"
                src={"/image-container-1.png"}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                fill
                className={styles.movieImage}
                alt="movie-image"
                src={"/image-container-2.png"}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                fill
                className={styles.movieImage}
                alt="movie-image"
                src={"/image-container-3.png"}
              />
            </div>            
            <div className={styles.logoContainer}>
              <Image
                width={600}
                height={600}
                style={{ objectFit: "cover", position: "absolute" }}
                alt="logo-transparent"
                src={"/logo-transparent.png"}
              />
            </div>
          </div>
          <div className={styles.heroTextContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.heroTitle}>
                The Best Streaming Experience
              </h2>
              <p className={styles.heroParagraph}>
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </p>
            </div>
            <button className={styles.heroButton}>
              <Image
              width={28}
              height={28}
              src={"/icons8-play-96.png"} alt={"play-icon"} />
              <p className={styles.textButton}>Start Watching Now</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
