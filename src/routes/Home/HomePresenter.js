import styled from "styled-components";
import Loader from "Components/Loader";
import Movie from "Components/Movie";

const Section = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Movies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
`;

const HomePresenter = ({ isLoading, movies }) => (
  <Section>
    {isLoading ? (
      <Loader />
    ) : (
      <Movies>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            background_image={movie.background_image}
            description_full={movie.description_full}
            genres={movie.genres}
            id={movie.id}
            language={movie.language}
            large_cover_image={movie.large_cover_image}
            medium_cover_image={movie.medium_cover_image}
            small_cover_image={movie.small_cover_image}
            summary={movie.summary}
            synopsis={movie.synopsis}
            title={movie.title}
            url={movie.url}
            year={movie.year}
          ></Movie>
        ))}
      </Movies>
    )}
  </Section>
);

export default HomePresenter;
