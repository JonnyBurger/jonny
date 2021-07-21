import React from "react";
import styled from "styled-components";
import { AnimateChildren } from "../animate-children";
import { Arc } from "./Arc";

const Container = styled.div`
  height: 60px;
  width: 120px;
  background: white;
  display: flex;
  transform: rotateY(10deg);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <div style={{ perspective: 500 }}>
      <Container>
        <Content>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <AnimateChildren>
              <svg style={{ width: 120, height: 60 }} viewBox="0 0 120 60">
                <defs>
                  <linearGradient id="lg">
                    <stop stopColor="#4290f5" offset="0" />
                    <stop stopColor="#42e9f5" offset="1" />
                  </linearGradient>
                </defs>
                <Arc delay={0} rotation={30}></Arc>
                <Arc delay={1} rotation={150}></Arc>
                <Arc delay={2} rotation={270}></Arc>
              </svg>
            </AnimateChildren>
          </div>
        </Content>
      </Container>
    </div>
  );
};
