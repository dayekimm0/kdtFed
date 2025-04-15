import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
`;

const Overlay = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1``;

const Genre = styled.div``;

const InfoGroup = styled.div``;

const Vote = styled.span``;

const Adult = styled.div``;

const MovieCard = ({ item }) => {
  console.log(item);
  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}`}
        alt="thumbnail"
      />
    </Wrapper>
  );
};

export default MovieCard;
