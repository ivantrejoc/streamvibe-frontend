import Movie from "@streambive/app/api/models/movie.model";
import SectionSlider from "../sectionSlider/SectionSlider";
import styles from "./moviesSection.module.css";
import { MustWatchSlider } from "../mustWatchSlider";

export interface MoviesSectionProps {
  trendingAndReleases: SectionData[];
  topRated: SectionData;
}

export type SectionData = {
  title: string;
  movies: Movie[];
};
export default function MoviesSection({
  trendingAndReleases,
  topRated
}: MoviesSectionProps) {
  return (
    <div className={styles.moviesSectionMainContainer}>
      <div className={styles.moviesHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Movies</h2>
        </div>
      </div>
      <div className={styles.moviesSwipersContainer}>
        {trendingAndReleases?.map((section, index) => (
          <SectionSlider
            key={index}
            title={section.title}
            movies={section.movies}
          />
        ))}
        <MustWatchSlider title={topRated.title} movies={topRated.movies} />
      </div>
    </div>
  );
}
