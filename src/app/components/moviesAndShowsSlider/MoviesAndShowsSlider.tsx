import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import styles from "./moviesAndShowSlider.module.css";
import Link from "next/link";
import Image from "next/image";
import Movie from "@streambive/app/api/models/movie.model";
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
  console.log("TRENDINGS: ", trendings);

  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.sliderMainContainer}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        {trendings?.map((trending) => (
          <SwiperSlide
            key={trending.id}
            className={styles.swiperSlide}
            style={{
              background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url("${imageBaseUrl}${trending.backdrop_path}") lightgray 50% / cover no-repeat`,
              display: "flex",
              width: "100%",
              height: "100%",
              padding: "3.125rem 3.125rem 6.725rem 3.125rem",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "3.125rem",
              flexShrink: "0",
              boxSizing: "border-box"
            }}
          >
            <div className={styles.infoContainer}>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>
                  {trending.original_title || trending.original_name}
                </h3>
                <p className={styles.paragraph}>{trending.overview}</p>
              </div>
              <div className={styles.buttonsContainer}>
                <Link href={"/"} passHref legacyBehavior>
                  <a
                    className={styles.playButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/social-media-icons/play.png"}
                      width={28}
                      height={28}
                      alt="play-icon"
                      loading="lazy"
                    />
                    Play Now
                  </a>
                </Link>
                <button className={styles.actionButton}>
                  <Image
                    src={"/plus.png"}
                    width={28}
                    height={28}
                    alt="plus-icon"
                    loading="lazy"
                  />
                </button>
                <button className={styles.actionButton}>
                  <Image
                    src={"/social-media-icons/hand-thumb-up.png"}
                    width={28}
                    height={28}
                    alt="hand-up-icon"
                    loading="lazy"
                  />
                </button>
                <button className={styles.actionButton}>
                  <Image
                    src={"/social-media-icons/speaker-wave.png"}
                    width={28}
                    height={28}
                    alt="speaker-wave-icon"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
