import Movie from "@streambive/app/api/models/movie.model";
import SectionSlider from "../sectionSlider/SectionSlider";
import styles from "./moviesSection.module.css";
import { MustWatchSlider } from "../mustWatchSlider";

export interface MoviesSectionProps {
  data: SectionData[];
}

export type SectionData = {
  title: string;
  movies: Movie[];
};
export default function MoviesSection({ data }: MoviesSectionProps) {
  return (
    <div className={styles.moviesSectionMainContainer}>
      <div className={styles.moviesHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Movies</h2>
        </div>
      </div>
      <div className={styles.moviesSwipersContainer}>
        {data?.map((section, index) => (
          <SectionSlider
            key={index}
            title={section.title}
            movies={section.movies}
          />
        ))}
        <MustWatchSlider title={data[0].title} movies={data[0].movies} />
      </div>
    </div>
  );
}
