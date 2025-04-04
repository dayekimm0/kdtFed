import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const Load = styled.div`
  font-size: 2.4rem;
  background: var(--border);
  color: var(--light);
  padding: 8px 16px;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const Result = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  }
  return (
    <Container>
      <Title>{title}</Title>
      {item === null ? (
        <Load>누가 이길까요? 😁</Load>
      ) : (
        <Img src={item?.img} alt={title} />
      )}
      <Result>{result}</Result>
    </Container>
  );
};

export default Box;
