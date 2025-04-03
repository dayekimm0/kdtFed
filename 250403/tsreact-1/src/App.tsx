import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import mockPosts from "./mock/posts.json";
import Button from "./components/Button";
import Form from "./components/Form";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPosts);
    // }, 1000);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" />
        </ButtonContainer>
        <Form />
      </Container>
    </>
  );
}

export default App;
