import { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Pagination from "react-js-pagination";
import YouTube from "react-youtube";
import {
  searchContents,
  IGetMovieResult,
  searchGenres,
  getReviews,
  getVideos,
} from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  color: ${({ theme }) => theme.white.darker};
  padding: 60px 30px 0;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

const SearchBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ReadyImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.white.lighter};
  border-radius: 8px;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 3rem;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.red};
  padding: 10px;
  border-radius: 8px;
`;

const MovieOverView = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.white.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.white.lighter};
`;

const MovieDate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate);
    padding: 10px;
    border-radius: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 1.4rem;
  padding: 10px;
  background: ${({ theme }) => theme.black.lighter};
  border-radius: 8px;
`;

const MovieRate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate);
    padding: 10px;
    border-radius: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate);
    padding: 10px;
    border-radius: 8px;
  }
`;

const ReviewSection = styled.div`
  background: ${({ theme }) => theme.white.lighter};
  color: ${({ theme }) => theme.black.darker};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  li {
    margin: 10px 0;
    padding: 10px;
  }
`;

const ReviewTitle = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 1.6rem;
  line-height: 1.2;
`;

const GenreSection = styled.div`
  background: var(--rate);
  padding: 10px;
  border-radius: 8px;
  display: block;
  font-size: 1.4rem;
`;

const YoutubeContent = styled.div`
  margin-top: 40px;
`;

const Tabs = styled.div``;

const Tab = styled.span``;

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: inline-block;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: background 0.3s;
        &:hover {
          background: ${({ theme }) => theme.red};
        }
      }
    }
  }
`;

interface Obj {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface ContentState {
  [key: number]: string[];
}

const Search = () => {
  const [videos, setVideos] = useState<ContentState>({});
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMovieResult>({
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  console.log(movieData);

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]), //함수에 대한 반환값으로 줘야함
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["videos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  return (
    <Container>
      {movieLoading && genreLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={movie.id}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg
                    src={makeImagePath(movie.backdrop_path)}
                    alt="img"
                  />
                ) : (
                  <ReadyImg>Ready for Images...</ReadyImg>
                )}
                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <GenreSection>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData?.genres.find((item: Obj) => item.id === id)
                            .name
                      )
                      .join(", ")}
                  </GenreSection>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>💭 Review</h3>
                {reviewLoading ? (
                  <div>Loading Reviews...</div>
                ) : (
                  <ul>
                    {reviewData &&
                    reviewData[index].results &&
                    reviewData[index].results.length > 0 &&
                    Array.isArray(reviewData[index].results) ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={index}>
                            <div>{review.author}</div>
                            <ReviewTitle>{review.content}</ReviewTitle>
                          </li>
                        )
                      )
                    ) : (
                      <ReviewTitle>Not yet Reviews</ReviewTitle>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <YoutubeContent>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{
                      width: "100%",
                      height: "600px",
                      playerVars: {
                        autoplay: 0, //자동재생 여부 판단
                        modestbranding: 1, // 컨트롤바에 유튜브 로고 표시 여부 판단
                        loop: 0, // 무한재생 여부 판단
                        playlist: videos[movie.id][0], // 반복무한재생 하고자 하는 플레이리스트
                      },
                    }}
                  />
                ) : (
                  <div>No Available</div>
                )}
              </YoutubeContent>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={4}
            />
          </StyledPagination>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Search;
