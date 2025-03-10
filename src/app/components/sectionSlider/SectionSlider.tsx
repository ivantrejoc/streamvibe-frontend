import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import styles from "./sectionSlider.module.css";
import { MoviesSectionProps } from "../moviesSection/MoviesSection";

export default function SectionSlider({ trendingMovies }: MoviesSectionProps) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;

  return (
    <div className={styles.sliderMainContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.sliderTitle}>Trending Now</h3>
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
            spaceBetween: 120
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 100
          }
        }}
      >
        {trendingMovies?.map((trending) => (
          <SwiperSlide key={trending.id} className={styles.slide}>
            <Link href="/" className={styles.movieOrShowCard}>
              <div className={styles.imageContainer}>
                <Image
                  fill
                  src={`${imageBaseUrl}w500${trending?.poster_path}`}
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
                  <div className={styles.iconContainer}>
                    <Image
                      width={25}
                      height={25}
                      loading="lazy"
                      src={"/social-media-icons/eye.png"}
                      alt="eye-icon"
                    />
                  </div>
                  <p className={styles.details}>2K</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
