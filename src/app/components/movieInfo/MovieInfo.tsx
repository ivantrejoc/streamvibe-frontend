import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
import styles from "./movieInfo.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Cast,
  Crew,
  Review,
  Spokenlanguage
} from "@streambive/app/api/models/movieDetail.model";
import { Genre } from "@streambive/app/api/models/genre.model";

interface MovieInfo {
  description: string;
  casting: Cast[];
  director?: Crew;
  music?: Crew;
  reviews: Review[];
  releaseYear: string;
  languages: Spokenlanguage[];
  rating: number;
  genres: Genre[];
}

export default function MovieInfo({
  description,
  casting,
  director,
  music,
  reviews,
  releaseYear,
  languages,
  rating,
  genres
}: MovieInfo) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;
  const imdbRating = (rating / 10) * 5;
  const streamVibeRating = imdbRating + 0.75;
  
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.leftSide}>
        <div className={styles.descSection}>
          <h4 className={styles.heading}>Description</h4>
          <p className={styles.textDesc}>{description}</p>
        </div>
        <div className={styles.castSection}>
          <h4 className={styles.heading}>Cast</h4>
          <div className={styles.avatarsContainer}>
            {casting?.map((actor) => {
              const profileImage = `${imageBaseUrl}w185${actor.profile_path}`;
              return (
                <div key={actor.id} className={styles.avatarContainer}>
                  <Image
                    src={profileImage}
                    alt="actor"
                    width={80}
                    height={80}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.reviewsSection}>
          <div className={styles.topContainer}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Reviews</h4>
            </div>
            <button className={styles.actionButton}>
              <Image
                src={"/plus.png"}
                width={28}
                height={28}
                sizes="(max-width: 720px) 1.5rem, 1.5rem"
                alt="plus-icon"
                loading="lazy"
              />
              Add Your Review
            </button>
          </div>
          {reviews && reviews.length > 0 ? (
            <Swiper
              slidesPerView={2}
              spaceBetween={200}
              navigation={true}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              modules={[Navigation, Pagination, Autoplay, Keyboard]}
              className={styles.carouselContainer}
              // breakpoints={{
              //   720: {
              //     slidesPerView: 2,
              //     spaceBetween: 50,
              //     centeredSlides: true
              //   },
              //   1024: {
              //     slidesPerView: 2,
              //     spaceBetween: 100
              //   },
              //   1280: {
              //     slidesPerView: 3,
              //     spaceBetween: 120
              //   },
              //   1440: {
              //     slidesPerView: 4,
              //     spaceBetween: 100
              //   }
              // }}
            >
              {reviews.map((review) => {
                return (
                  <SwiperSlide key={review.id} className={styles.reviewCard}>
                    <div className={styles.headingContainer}>
                      <div className={styles.authorContainer}>
                        <h5 className={styles.authorName}>
                          {review.author_details.username}
                        </h5>
                      </div>
                      <div className={styles.ratingContainer}>
                        <Rating
                          initialValue={review.author_details.rating}
                          readonly={true}
                          allowFraction={true}
                          size={20}
                          className={styles.starRating}
                          fillColor="var(--Red-45, #e50000)"
                        />
                        <p>{review.author_details.rating}</p>
                      </div>
                    </div>
                    <blockquote className={styles.reviewQuote}>
                      <p>{review.content}</p>
                    </blockquote>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div>
              <p>No reviews</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <Image
              src={"/icons8-calendar-96.png"}
              width={28}
              height={28}
              sizes="(max-width: 720px) 1.5rem, 1.5rem"
              alt="plus-icon"
              loading="lazy"
              className={styles.rightSideIcons}
            />
            <h4 className={styles.heading}>Released Year</h4>
          </div>
          <p className={styles.textDesc}>{releaseYear}</p>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <Image
              src={"/icons8-idioma-96.png"}
              width={28}
              height={28}
              sizes="(max-width: 720px) 1.5rem, 1.5rem"
              alt="plus-icon"
              loading="lazy"
              className={styles.rightSideIcons}
            />
            <h4 className={styles.heading}>Available Languages</h4>
          </div>
          <div className={styles.langContainer}>
            {languages?.map((language, index) => {
              return (
                <div key={index} className={styles.langTag}>
                  <p>{language.english_name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <Image
              src={"/icons8-star-96.png"}
              width={28}
              height={28}
              sizes="(max-width: 720px) 1.5rem, 1.5rem"
              alt="plus-icon"
              loading="lazy"
              className={styles.rightSideIcons}
            />
            <h4 className={styles.heading}>Ratings</h4>
          </div>
          <div className={styles.ratingsContainer}>
            <div className={styles.ratingCard}>
              <h4 className={styles.ratingHeading}>IMDb</h4>
              <div className={styles.ratingContainer}>
                <Rating
                  initialValue={imdbRating}
                  readonly={true}
                  allowFraction={true}
                  size={20}
                  className={styles.starRating}
                  fillColor="var(--Red-45, #e50000)"
                />
                <p>{rating.toFixed(2)}</p>
              </div>
            </div>
            <div className={styles.ratingCard}>
              <h4 className={styles.ratingHeading}>Streamvibe</h4>
              <div className={styles.ratingContainer}>
                <Rating
                  initialValue={streamVibeRating}
                  readonly={true}
                  allowFraction={true}
                  size={20}
                  className={styles.starRating}
                  fillColor="var(--Red-45, #e50000)"
                />
                <p>{(rating + 0.75).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <Image
              src={"/icons8-four-squares-96.png"}
              width={28}
              height={28}
              sizes="(max-width: 720px) 1.5rem, 1.5rem"
              alt="plus-icon"
              loading="lazy"
              className={styles.rightSideIcons}
            />
            <h4 className={styles.heading}>Genres</h4>
          </div>
          <div className={styles.genresContainer}>
            {genres?.map((genre) => {
              return (
                <div key={genre.id} className={styles.genreTag}>
                  <p>{genre.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <h4 className={styles.heading}>Director</h4>
          </div>
          <div className={styles.directorCard}>
            <Image
              src={`${imageBaseUrl}w185${director?.profile_path}`}
              alt="actor"
              width={56}
              height={56}
            />
            <p>{director?.name}</p>
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <h4 className={styles.heading}>Music</h4>
          </div>
          <div className={styles.directorCard}>
            <Image
              src={`${imageBaseUrl}w185${music?.profile_path}`}
              alt="actor"
              width={56}
              height={56}
            />
            <p>{music?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
