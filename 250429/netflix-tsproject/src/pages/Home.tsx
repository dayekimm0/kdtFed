import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

const Banner = styled.div<IBgPhoto>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 30px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
  color: ${({ theme }) => theme.white.darker};
`;

const Title = styled.h2`
  font-size: 4rem;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 1.6rem;
  line-height: 1.4;
`;

const Slider = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<IBgPhoto>`
  width: auto;
  height: 200px;
  background: url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
  cursor: pointer;
  &:first-child {
    transform-origin: left center;
  }
  &:last-child {
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.white.darker};
    font-size: 1.6rem;
    text-align: center;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.black.lighter};
  color: ${({ theme }) => theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.div<IBgPhoto>`
  width: 100%;
  height: 400px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
`;

const MovieTitle = styled.h3`
  font-size: 2.8rem;
  margin: 20px;
`;

const MovieOverView = styled.p`
  margin: 20px;
  font-size: 1.6rem;
  line-height: 1.2;
`;

interface IBgPhoto {
  bgPhoto: string | undefined;
}

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -50,
    transition: { delay: 0.5, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.5, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  const history = useNavigate();

  const modalMatch = useMatch("/movies/:movieId");

  const { scrollY } = useScroll();

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const inCreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history("/");
  };

  const clickedMovie =
    modalMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +modalMatch?.params.movieId!);

  console.log(clickedMovie);
  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={inCreaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      layoutId={movie.id + ""}
                      bgPhoto={makeImagePath(movie.backdrop_path || "", "w500")}
                    >
                      <Info
                        variants={infoVariants}
                        whileHover="hover"
                        transition={{ type: "tween" }}
                      >
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {modalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  layoutId={modalMatch.params.movieId}
                  style={{ top: scrollY.get() + 64 }}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        bgPhoto={makeImagePath(
                          clickedMovie.backdrop_path || "",
                          "w500"
                        )}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
