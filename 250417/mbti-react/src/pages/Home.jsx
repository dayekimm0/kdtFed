import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

//스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light);
`;
const Header = styled.div`
  color: var(--accent);
  font-size: 4rem;
  margin-bottom: 20px;
`;
const Contents = styled.div`
  color: var(--dark);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;
const Title = styled.div`
  font-size: 3rem;
`;
const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 4px solid var(--border);
  }
`;
const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent);
  color: var(--light);
  padding: 8px 14px;
  border-radius: 8px;
`;

// 출력
const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 집사는?🫡</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src="/cat/ggompang.jpeg"
            alt="메인캣이미지"
          />
        </LogoImg>
        <Desc>MBIT를 기반 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
