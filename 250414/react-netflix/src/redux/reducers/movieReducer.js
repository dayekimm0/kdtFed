let initialState = {
  nowPlayingMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
  genresMovie: [],
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovie: payload.nowPlayingMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
        genresMovie: payload.genresMovie,
        loading: false,
      };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
