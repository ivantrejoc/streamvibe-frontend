import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import styles from "./moviesAndShowSlider.module.css";
import Link from "next/link";
import Image from "next/image";
import Movie from "@streambive/app/api/models/movieOrShow.model";
import { useEffect, useState } from "react";

interface TrendingProps {
  trendings: Movie[];
}
export default function MoviesAndShowsSlider({ trendings }: TrendingProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (trendings?.length > 0) {
      setIsLoading(false);
    }
  }, [trendings]);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.sliderMainContainer}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        {trendings?.map((trending) => {
          const backgroundImage = `${imageBaseUrl}w1280${trending.backdrop_path}`;
          const trendingStringId = trending.id.toString();
          return (
            <SwiperSlide
              key={trendingStringId}
              className={styles.swiperSlide}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>
                    {trending.original_title || trending.original_name}
                  </h3>
                  <p className={styles.paragraph}>{trending.overview}</p>
                </div>
                <div className={styles.buttonsContainer}>
                  <Link
                    href={
                      trending.media_type === "movie"
                        ? `/movie/${trendingStringId}`
                        : `/tv-show/${trendingStringId}`
                    }
                    className={styles.playButton}
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
