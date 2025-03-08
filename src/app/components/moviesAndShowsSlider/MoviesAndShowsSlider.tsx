import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import styles from "./moviesAndShowSlider.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MoviesAndShowsSlider() {
  const movies = [
    {
      id: 1,
      movieName: "Inception",
      synopsis:
        "A thief with the ability to enter people's dreams is tasked with planting an idea into the mind of a businessman.",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 2,
      movieName: "The Matrix",
      synopsis:
        "A hacker discovers the truth about reality and joins the fight against the rulers of a simulated world.",
      trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 3,
      movieName: "Interstellar",
      synopsis:
        "A group of astronauts embarks on a mission through a wormhole in search of a new habitable planet.",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 4,
      movieName: "The Dark Knight",
      synopsis:
        "Batman faces his greatest challenge yet as he goes up against the Joker, a criminal mastermind who spreads chaos.",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 5,
      movieName: "Avengers: Endgame",
      synopsis:
        "The Avengers assemble once more to undo the devastation caused by Thanos and restore balance to the universe.",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 6,
      movieName: "Jurassic Park",
      synopsis:
        "A billionaire creates a theme park with cloned dinosaurs, but things go wrong when the creatures escape.",
      trailer: "https://www.youtube.com/watch?v=lc0UehYemQA",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 7,
      movieName: "Titanic",
      synopsis:
        "A romance blossoms aboard the ill-fated Titanic as two lovers from different social classes find each other.",
      trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 8,
      movieName: "Gladiator",
      synopsis:
        "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
      trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 9,
      movieName: "The Lord of the Rings: The Fellowship of the Ring",
      synopsis:
        "A young hobbit, Frodo, embarks on a dangerous journey to destroy the One Ring and defeat the dark lord Sauron.",
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    },
    {
      id: 10,
      movieName: "Star Wars: A New Hope",
      synopsis:
        "A young farm boy joins a rebel alliance to take down the tyrannical Galactic Empire and its ultimate weapon.",
      trailer: "https://www.youtube.com/watch?v=vZ734NWnAHA",
      backgroundImage:
        "https://images.alphacoders.com/606/thumb-1920-606545.jpg"
    }
  ];

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
        {movies?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className={styles.swiperSlide}
            style={{
              background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${movie.backgroundImage}) lightgray 50% / cover no-repeat`,
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
                <h3 className={styles.title}>{movie.movieName}</h3>
                <p className={styles.paragraph}>{movie.synopsis}</p>
              </div>
              <div className={styles.buttonsContainer}>
                <Link href={movie.trailer} passHref legacyBehavior>
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
