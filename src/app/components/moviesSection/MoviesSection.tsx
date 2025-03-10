import Movie from "@streambive/app/api/models/movie.model";
import SectionSlider from "../sectionSlider/SectionSlider";
import styles from "./moviesSection.module.css";

export interface MoviesSectionProps {
    trendingMovies: Movie[]
}
export default function MoviesSection({trendingMovies}: MoviesSectionProps) {
        
  return (
    <div className={styles.moviesSectionMainContainer}>
      <div className={styles.moviesHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Movies</h2>
        </div>
      </div>
      <div className={styles.moviesSwipersContainer}>
        <SectionSlider trendingMovies={trendingMovies} />
      </div>
    </div>
  );
}
