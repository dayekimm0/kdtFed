import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  background: var(--accent);
  color: var(--light);
  font-size: 2rem;
  margin: 20px 0 20px 14px;
  padding: 10px 14px;
  width: 190px;
  text-align: center;
  border-radius: 4px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovie, topRatedMovie, upComingMovie, loading } =
    useSelector((state) => state.movie);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" cssOverride={override} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <>
        {nowPlayingMovie.results && (
          <Banner movie={nowPlayingMovie?.results[8]} />
        )}
        <Title>NowPlaying Movie</Title>
        <MovieSlide movies={nowPlayingMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </>
    );
  }
};

export default Home;
