// const getMovies = () => {
//   return async (dispatch) => {
//     const url =
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=&70c0f37d32418fd05d8d818df14f3238language=ko-KR&page=1";
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch({ type: "nowPlaying", payload: data });
//   };
// };

import api from "../api";
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });

      const nowPlayingMovieApi = api.get(
        `movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const [nowPlayingMovie, topRatedMovie, upComingMovie] = await Promise.all(
        [nowPlayingMovieApi, topRatedMovieApi, upComingMovieApi]
      );

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        loading: false,
      });
    }
  };
};

export const movieAction = { getMovies };
