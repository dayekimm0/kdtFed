import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMovieResult } from "../api";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  background: ${({ theme }) => theme.black.darker};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

interface IBgPhoto {
  bgPhoto: string | undefined;
}

// const rowVarients = {
// hidden: {
//   x: window.innerWidth + 10,
// },
// visible
// }

// const Banner = styled.div<IBgPhoto>`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   background: url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
//   color: ${({ theme }) => theme.white.darker};
// `;

const Title = styled.h2`
  font-size: 4rem;
`;

const Overview = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
`;

const Slider = styled.div``;

const Row = styled.div``;

const Box = styled.div``;

const Info = styled.div``;

const ModalBox = styled.div``;

const Overlay = styled.div``;

const MovieCover = styled.div``;

const MovieTitle = styled.h2``;

const MovieOverView = styled.p``;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  console.log(data, isLoading);
  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* <Banner>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner> */}
          <Slider>
            <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row>
            <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row>
            <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
