import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import styles from "./mustWatchSlider.module.css";
import { SectionData } from "../moviesSection/MoviesSection";

export default function MustWatchSlider({ title, moviesOrShows }: SectionData) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;

  return (
    <div className={styles.sliderMainContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.sliderTitle}>{title}</h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={150}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Pagination, Keyboard]}
        className={styles.carouselContainer}
        breakpoints={{
          720: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
            centeredSlides: true
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 100
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 100
          }
        }}
      >
        {moviesOrShows?.map((movieOrShow) => {
          const movieOrShowParsedId = movieOrShow?.id.toString();
          return (
            <SwiperSlide key={movieOrShowParsedId} className={styles.slide}>
              <Link
                href={
                  movieOrShow.media_type === "movie"
                    ? `/movie/${movieOrShowParsedId}`
                    : `/tv-show/${movieOrShowParsedId}`
                }
                className={styles.movieOrShowCard}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill
                    src={`${imageBaseUrl}w500${movieOrShow?.poster_path}`}
                    alt="action-movie"
                    loading="lazy"
                  />
                </div>
                <div className={styles.infoContainer}>
                  <div className={styles.durationContainer}>
                    <div className={styles.iconContainer}>
                      <Image
                        width={25}
                        height={25}
                        loading="lazy"
                        src={"/social-media-icons/clock.png"}
                        alt="clock-icon"
                      />
                    </div>
                    <p className={styles.details}>1h30min</p>
                  </div>
                  <div className={styles.watchersContainer}>
                    <div className={styles.ratingContainer}>
                      <Rating
                        initialValue={(movieOrShow.vote_average / 10) * 5}
                        readonly={true}
                        allowFraction={true}
                        size={20}
                        className={styles.starRating}
                        fillColor="var(--Red-45, #e50000)"
                      />
                    </div>
                    <p className={styles.details}>
                      {movieOrShow.vote_count.toString().slice(0, 2)}k
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
