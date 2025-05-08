import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import Image from "next/image";
import styles from "./categoriesSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Genre } from "@streambive/app/api/models/genre.model";

interface CategoryProps {
  categories: Genre[];
}
export default function CategoriesSection({ categories }: CategoryProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section id="categories" className={styles.categoriesMainContainer}>
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
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        className={styles.carouselContainer}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }}
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id} className={styles.categoryCard}>
            <Link href="/">
              <div className={styles.imagesContainer}>
                <div className={styles.frame1}>
                  <Image
                    fill
                    src={"/thumbnails/action/action-1.png"}
                    alt="action-movie"
                    loading="lazy"
                  />
                </div>
                <div className={styles.frame2}>
                  <Image
                    fill
                    src={"/thumbnails/action/action-2.png"}
                    alt="action-movie"
                    loading="lazy"
                  />
                </div>
                <div className={styles.frame3}>
                  <Image
                    fill
                    src={"/thumbnails/action/action-3.png"}
                    alt="action-movie"
                    loading="lazy"
                  />
                </div>
                <div className={styles.frame4}>
                  <Image
                    fill
                    src={"/thumbnails/action/action-4.png"}
                    alt="action-movie"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.categoryTitleContainer}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <div className={styles.iconContainer}>
                  <Image
                    src={"/arrow-small-right.png"}
                    height={25}
                    width={25}
                    alt="right-arrow"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
