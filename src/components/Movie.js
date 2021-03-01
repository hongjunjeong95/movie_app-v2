import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieContainer = styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const SLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MovieData = styled.div`
  margin-left: 20px;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const MovieYear = styled.h5`
  margin: 0;
  font-weight: 300;
  margin-right: 10px;
  font-size: 14px;
`;

const MovieGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
`;

const MovieGenre = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

const Movie = ({
  id,
  title,
  background_image,
  medium_cover_image,
  year,
  genres,
  summary,
}) => {
  return (
    <MovieContainer className="movie">
      <SLink
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            genres,
            medium_cover_image,
            summary,
            title,
            year,
            background_image,
          },
        }}
      >
        <div>
          <Image src={medium_cover_image} alt={title} title={title} />
          <MovieData className="movie__data">
            <MovieTitle className="movie__title">{title}</MovieTitle>
            <MovieYear>{year}</MovieYear>
            <MovieGenres>
              {genres.map((genre, index) => (
                <MovieGenre key={index} className="genres__genre">
                  {genre}
                </MovieGenre>
              ))}
            </MovieGenres>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
          </MovieData>
        </div>
      </SLink>
    </MovieContainer>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
