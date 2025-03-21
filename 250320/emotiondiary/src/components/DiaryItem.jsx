import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div``;

const DiaryContent = styled.div``;

const ImgBg = styled.div``;

const Img = styled.img``;

const InfoSection = styled.div``;

const ButtonSection = styled.div``;

const DiaryItem = ({ id, emotionId, content, date }) => {
  console.log(id);
  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg>
          <Img src="" alt="" />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <div>date</div>
        <div>content</div>
      </InfoSection>
      <ButtonSection>
        <Button text="수정하기" onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default DiaryItem;
