import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 600;
`;

const Loading = styled.div`
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const MoviesGrid = styled.div`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: -50px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

const PosterBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center/cover no-repeat;
`;

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(ALL_MOVIES);

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <Header>
            <Title>Movies List</Title>
          </Header>
          <MoviesGrid>
            {data.allMovies.map((movie) => (
              <PosterContainer key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <PosterBg background={movie.medium_cover_image} />
                </Link>
              </PosterContainer>
            ))}
          </MoviesGrid>
        </Container>
      )}
    </>
  );
};

export default Home;
