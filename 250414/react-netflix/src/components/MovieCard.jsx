import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 50%;
  position: absolute;
  top: 22px;
  left: 14px;
`;

const Genre = styled.div`
  position: absolute;
  top: 60px;
  left: 14px;
  display: flex;
  gap: 4px;
`;

const Vote = styled.span`
  position: absolute;
  bottom: 22px;
  right: 10px;
`;

const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--accent);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

const MovieCard = ({ item }) => {
  const { genresMovie } = useSelector((state) => state.movie);

  return (
    <Wrapper>
      <Overlay className="overlay"></Overlay>
      <Img
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "성인" : "전체"}</Adult>
      <Genre>
        {item.genre_ids.map((id, index) => (
          <Badge key={index}>
            {genresMovie.find((item) => item.id === id).name}
          </Badge>
        ))}
      </Genre>
      <Vote>⭐️ 영화평점 : {item.vote_average.toFixed(2)}</Vote>
    </Wrapper>
  );
};

export default MovieCard;
