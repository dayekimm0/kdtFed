import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 200px;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  gap: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const City = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const Weather = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 1.8rem;
`;

const WeatherBox = ({ weather }) => {
  let cityName = "";
  switch (weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 서초구";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Seoul":
      cityName = "대한민국 서울";
      break;
  }
  return (
    <Container>
      <City>⌖ {weather?.name}</City>
      <Weather>
        🌍 온도 : {weather?.main.temp} ℃ | 습도 : {weather?.main.humidity} %
      </Weather>
      <Desc>🌈 현재 날씨 : {weather?.weather[0].main} </Desc>
    </Container>
  );
};

export default WeatherBox;
