import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import Image from "next/image";
import styles from "./categoriesSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <div className={styles.categoriesMainContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.categoriesTitle}>
          Explore our wide variety of categories
        </h2>
        <p className={styles.categoriesHeading}>
          Whether you&apos;re looking for a comedy to make you laugh, a drama to
          make you think, or a documentary to learn something new
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={150}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        className={styles.carouselContainer}
        breakpoints={{
          720: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100
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
        <SwiperSlide className={styles.categoryCard}>
          <Link href="/">
            <div className={styles.imagesContainer}>
              <div className={styles.frame1}>
                <Image
                  fill
                  src={"/thumbnails/action/action-1.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame2}>
                <Image
                  fill
                  src={"/thumbnails/action/action-2.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame3}>
                <Image
                  fill
                  src={"/thumbnails/action/action-3.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame4}>
                <Image
                  fill
                  src={"/thumbnails/action/action-4.png"}
                  alt="action-movie"
                />
              </div>
            </div>
            <div className={styles.categoryTitleContainer}>
              <h3 className={styles.categoryTitle}>Action</h3>
              <div className={styles.iconContainer}>
                <Image
                  src={"/arrow-small-right.png"}
                  height={25}
                  width={25}
                  alt="right-arrow"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.categoryCard}>
          <Link href="/">
            <div className={styles.imagesContainer}>
              <div className={styles.frame1}>
                <Image
                  fill
                  src={"/thumbnails/adventure/adventure-1.png"}
                  alt="adventure-movie"
                />
              </div>
              <div className={styles.frame2}>
                <Image
                  fill
                  src={"/thumbnails/adventure/adventure-2.png"}
                  alt="adventure-movie"
                />
              </div>
              <div className={styles.frame3}>
                <Image
                  fill
                  src={"/thumbnails/adventure/adventure-3.png"}
                  alt="adventure-movie"
                />
              </div>
              <div className={styles.frame4}>
                <Image
                  fill
                  src={"/thumbnails/adventure/adventrure-4.png"}
                  alt="adventure-movie"
                />
              </div>
            </div>
            <div className={styles.categoryTitleContainer}>
              <h3 className={styles.categoryTitle}>Adventure</h3>
              <div className={styles.iconContainer}>
                <Image
                  src={"/arrow-small-right.png"}
                  height={25}
                  width={25}
                  alt="right-arrow"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.categoryCard}>
          <Link href="/">
            <div className={styles.imagesContainer}>
              <div className={styles.frame1}>
                <Image
                  fill
                  src={"/thumbnails/comedy/comedy-1.png"}
                  alt="comedy-movie"
                />
              </div>
              <div className={styles.frame2}>
                <Image
                  fill
                  src={"/thumbnails/comedy/comedy-2.png"}
                  alt="comedy-movie"
                />
              </div>
              <div className={styles.frame3}>
                <Image
                  fill
                  src={"/thumbnails/comedy/comedy-3.png"}
                  alt="comedy-movie"
                />
              </div>
              <div className={styles.frame4}>
                <Image
                  fill
                  src={"/thumbnails/comedy/comedy-4.png"}
                  alt="comedy-movie"
                />
              </div>
            </div>
            <div className={styles.categoryTitleContainer}>
              <h3 className={styles.categoryTitle}>Comedy</h3>
              <div className={styles.iconContainer}>
                <Image
                  src={"/arrow-small-right.png"}
                  height={25}
                  width={25}
                  alt="right-arrow"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.categoryCard}>
          <Link href="/">
            <div className={styles.imagesContainer}>
              <div className={styles.frame1}>
                <Image
                  fill
                  src={"/thumbnails/drama/drama-1.png"}
                  alt="drama-movie"
                />
              </div>
              <div className={styles.frame2}>
                <Image
                  fill
                  src={"/thumbnails/drama/drama-2.png"}
                  alt="drama-movie"
                />
              </div>
              <div className={styles.frame3}>
                <Image
                  fill
                  src={"/thumbnails/drama/drama-3.png"}
                  alt="drama-movie"
                />
              </div>
              <div className={styles.frame4}>
                <Image
                  fill
                  src={"/thumbnails/drama/drama-4.png"}
                  alt="drama-movie"
                />
              </div>
            </div>
            <div className={styles.categoryTitleContainer}>
              <h3 className={styles.categoryTitle}>Drama</h3>
              <div className={styles.iconContainer}>
                <Image
                  src={"/arrow-small-right.png"}
                  height={25}
                  width={25}
                  alt="right-arrow"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.categoryCard}>
          <Link href="/">
            <div className={styles.imagesContainer}>
              <div className={styles.frame1}>
                <Image
                  fill
                  src={"/thumbnails/horror/horror-1.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame2}>
                <Image
                  fill
                  src={"/thumbnails/horror/horror-2.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame3}>
                <Image
                  fill
                  src={"/thumbnails/horror/horror-3.png"}
                  alt="action-movie"
                />
              </div>
              <div className={styles.frame4}>
                <Image
                  fill
                  src={"/thumbnails/horror/horror-4.png"}
                  alt="action-movie"
                />
              </div>
            </div>
            <div className={styles.categoryTitleContainer}>
              <h3 className={styles.categoryTitle}>Horror</h3>
              <div className={styles.iconContainer}>
                <Image
                  src={"/arrow-small-right.png"}
                  height={25}
                  width={25}
                  alt="right-arrow"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
