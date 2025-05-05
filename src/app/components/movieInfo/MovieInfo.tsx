import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
import styles from "./movieInfo.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MovieInfo() {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.leftSide}>
        <div className={styles.descSection}>
          <h4 className={styles.heading}>Description</h4>
          <p className={styles.textDesc}>
            A fiery young man clashes with an unflinching forest officer in a
            south Indian village where spirituality, fate and folklore rule the
            lands.
          </p>
        </div>
        <div className={styles.castSection}>
          <h4 className={styles.heading}>Cast</h4>
          <div className={styles.avatarsContainer}>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
            <div className={styles.avatarContainer}>
              <Image src="/actor-1.png" alt="actor" width={100} height={100} />
            </div>
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
            <SwiperSlide className={styles.reviewCard}>
              <div className={styles.headingContainer}>
                <div className={styles.authorData}>
                  <h5 className={styles.authorName}>Aniket Roy</h5>
                  <p className={styles.authorCountry}>From India</p>
                </div>
                <div className={styles.ratingContainer}>
                  <Rating
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                    className={styles.starRating}
                    fillColor="var(--Red-45, #e50000)"
                  />
                  <p>4.5</p>
                </div>
              </div>
              <blockquote>
                <p>
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className={styles.reviewCard}>
              <div className={styles.headingContainer}>
                <div className={styles.authorData}>
                  <h5 className={styles.authorName}>Aniket Roy</h5>
                  <p className={styles.authorCountry}>From India</p>
                </div>
                <div className={styles.ratingContainer}>
                  <Rating
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                    className={styles.starRating}
                    fillColor="var(--Red-45, #e50000)"
                  />
                  <p>4.5</p>
                </div>
              </div>
              <blockquote>
                <p>
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className={styles.reviewCard}>
              <div className={styles.headingContainer}>
                <div className={styles.authorData}>
                  <h5 className={styles.authorName}>Aniket Roy</h5>
                  <p className={styles.authorCountry}>From India</p>
                </div>
                <div className={styles.ratingContainer}>
                  <Rating
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                    className={styles.starRating}
                    fillColor="var(--Red-45, #e50000)"
                  />
                  <p>4.5</p>
                </div>
              </div>
              <blockquote>
                <p>
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className={styles.reviewCard}>
              <div className={styles.headingContainer}>
                <div className={styles.authorData}>
                  <h5 className={styles.authorName}>Aniket Roy</h5>
                  <p className={styles.authorCountry}>From India</p>
                </div>
                <div className={styles.ratingContainer}>
                  <Rating
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                    className={styles.starRating}
                    fillColor="var(--Red-45, #e50000)"
                  />
                  <p>4.5</p>
                </div>
              </div>
              <blockquote>
                <p>
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className={styles.reviewCard}>
              <div className={styles.headingContainer}>
                <div className={styles.authorData}>
                  <h5 className={styles.authorName}>Aniket Roy</h5>
                  <p className={styles.authorCountry}>From India</p>
                </div>
                <div className={styles.ratingContainer}>
                  <Rating
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                    className={styles.starRating}
                    fillColor="var(--Red-45, #e50000)"
                  />
                  <p>4.5</p>
                </div>
              </div>
              <blockquote>
                <p>
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </blockquote>
            </SwiperSlide>
          </Swiper>
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
          <p className={styles.textDesc}>2022</p>
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
            <div className={styles.langTag}>
              <p>English</p>
            </div>
            <div className={styles.langTag}>
              <p>French</p>
            </div>
            <div className={styles.langTag}>
              <p>Spanish</p>
            </div>
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
                  initialValue={4.5}
                  readonly={true}
                  allowFraction={true}
                  size={20}
                  className={styles.starRating}
                  fillColor="var(--Red-45, #e50000)"
                />
                <p>4.5</p>
              </div>
            </div>
            <div className={styles.ratingCard}>
              <h4 className={styles.ratingHeading}>Streamvibe</h4>
              <div className={styles.ratingContainer}>
                <Rating
                  initialValue={4.5}
                  readonly={true}
                  allowFraction={true}
                  size={20}
                  className={styles.starRating}
                  fillColor="var(--Red-45, #e50000)"
                />
                <p>4.5</p>
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
            <div className={styles.genreTag}>
              <p>Action</p>
            </div>
            <div className={styles.genreTag}>
              <p>Adventure</p>
            </div>
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <h4 className={styles.heading}>Director</h4>
          </div>
          <div className={styles.directorCard}>
            <Image src="/actor-1.png" alt="actor" width={56} height={56} />
            <p>Rishab Shetty</p>
          </div>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.headingContainer}>
            <h4 className={styles.heading}>Music</h4>
          </div>
          <div className={styles.directorCard}>
            <Image src="/actor-1.png" alt="actor" width={56} height={56} />
            <p>Rishab Shetty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
