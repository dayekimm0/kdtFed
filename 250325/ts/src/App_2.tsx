import React from "react";
import styled from "styled-components";
import { motion, stagger } from "framer-motion";

//스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: var(--light-color);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;

const boxVarients = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 90,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    // transition: {
    //   type: "spring",
    //   delay: 1,
    //   bounce: 0.8,
    //   duration: 3,
    // },
  },
};

// variants
// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };

//컨텐츠
function App() {
  return (
    <Wrapper>
      <Box variants={boxVarients} initial={"start"} animate={"end"}>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
