import React from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="movies">
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
          </div>
        )}
      </section>
    );
  }
}

export default Home;
