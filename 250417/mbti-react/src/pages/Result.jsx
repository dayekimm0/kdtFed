import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light);
  background: url("https://i.pinimg.com/736x/66/5d/53/665d530753fd00e1dd3830f5a463d640.jpg")
    center/cover no-repeat;
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
  color: var(--light);
  padding: 8px 14px;
  margin-bottom: 20px;
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

const Result = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기 😻</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src={resultdata[0].image}
            alt="메인캣이미지"
          />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는
          <br /> {resultdata[0].best}형 {resultdata[0].name} 고양이입니다.
        </Desc>
        <Button variant="secondary">테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
