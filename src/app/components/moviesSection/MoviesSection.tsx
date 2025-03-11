import Movie from "@streambive/app/api/models/movieOrShow.model";
import SectionSlider from "../sectionSlider/SectionSlider";
import styles from "./moviesSection.module.css";
import { MustWatchSlider } from "../mustWatchSlider";

export interface MoviesSectionProps {
  sectionTitle: string;
  trendingAndReleases: SectionData[];
  topRated: SectionData;
}

export type SectionData = {
  title: string;
  moviesOrShows: Movie[];
};
export default function MoviesSection({ sectionTitle,
  trendingAndReleases,
  topRated
}: MoviesSectionProps) {


  return (
    <div className={styles.moviesSectionMainContainer}>
      <div className={styles.moviesHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>{sectionTitle}</h2>
        </div>
      </div>
      <div className={styles.moviesSwipersContainer}>
        {trendingAndReleases?.map((section, index) => (
          <SectionSlider
            key={index}
            title={section.title}
            moviesOrShows={section.moviesOrShows}
          />
        ))}
        <MustWatchSlider title={topRated.title} moviesOrShows={topRated.moviesOrShows} />
      </div>
    </div>
  );
}
