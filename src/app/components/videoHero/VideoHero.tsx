import Link from "next/link";
import Image from "next/image";
import styles from "./videoHero.module.css";

interface VideoHeroProps {
  title: string;
  synopsis: string;
  imagePath: string;
  videoPath: Video;
}

type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export default function VideoHero({
  title,
  synopsis,
  imagePath,
  videoPath
}: VideoHeroProps) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;
  const backgroundImage = `${imageBaseUrl}w1280${imagePath}`;
  const youtubeBaseUrl = "https://www.youtube.com/watch?v=";
  const videoKey = videoPath.key;
  const youtubeTrailerUrl = `${youtubeBaseUrl}${videoKey}`;

  return (
    <section className={styles.mainContainer}>
      <div
        className={styles.videoHero}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{synopsis}</p>
          </div>
          <div className={styles.buttonsContainer}>
            <Link href={youtubeTrailerUrl} passHref legacyBehavior>
              <a
                className={styles.playButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/social-media-icons/play.png"}
                  width={28}
                  height={28}
                  sizes="(max-width: 720px) 1.5rem, 1.5rem"
                  alt="play-icon"
                  loading="lazy"
                />
                Play Now
              </a>
            </Link>
            <div className={styles.actionButtonsContainer}>
              <button className={styles.actionButton}>
                <Image
                  src={"/plus.png"}
                  width={28}
                  height={28}
                  sizes="(max-width: 720px) 1.5rem, 1.5rem"
                  alt="plus-icon"
                  loading="lazy"
                />
              </button>
              <button className={styles.actionButton}>
                <Image
                  src={"/social-media-icons/hand-thumb-up.png"}
                  width={28}
                  height={28}
                  sizes="(max-width: 720px) 1.5rem, 1.5rem"
                  alt="hand-up-icon"
                  loading="lazy"
                />
              </button>
              <button className={styles.actionButton}>
                <Image
                  src={"/social-media-icons/speaker-wave.png"}
                  width={28}
                  height={28}
                  sizes="(max-width: 720px) 1.5rem, 1.5rem"
                  alt="speaker-wave-icon"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
