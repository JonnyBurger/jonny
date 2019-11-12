import React from "react";
import { mix } from "polished";
import styled from "styled-components";
import { AnimateChildren } from "../animate-children";

const Container = styled.div`
  height: 120px;
  width: 60px;
  background: white;
  display: flex;
  transform: rotateY(10deg);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(-45deg, rgb(88, 81, 219), rgb(64, 93, 230));
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sticker = styled.div`
  background: white;
  border-radius: 2px;
  font-size: 8px;
  padding: 4px 8px;
  flex-direction: row;
  display: flex;
`;

const Ball = styled.div`
  height: 8px;
  width: 8px;
  background: white;
  border-radius: 50%;
  margin-left: 1px;
  margin-right: 1px;
`;

export default () => {
  const label = "STICKER".split("");
  return (
    <div style={{ perspective: 500 }}>
      <Container>
        <Content>
          <AnimateChildren>
            <Sticker style={{ left: 30, top: 20 }}>
              <span>
                {label.map((character, i) => {
                  return (
                    <span
                      key={character}
                      style={{
                        color: mix(i / (label.length - 1), "#e95950", "#bc2a8d")
                      }}
                    >
                      {character}
                    </span>
                  );
                })}
              </span>
            </Sticker>
            <div style={{ height: 5 }} />
            <div style={{ flexDirection: "row", display: "flex" }}>
              <AnimateChildren>
                <Ball
                  style={{
                    background: "linear-gradient(to right, #e95950, #bc2a8d)"
                  }}
                />
                <Ball
                  style={{
                    background: "linear-gradient(to right, #74b9ff, #55efc4)"
                  }}
                />
                <Ball
                  style={{
                    background: "linear-gradient(to right, #e95950, #fccc63)"
                  }}
                />
                <Ball
                  style={{
                    background:
                      "linear-gradient(to right, rgb(131, 192, 98), rgb(152, 215, 122))"
                  }}
                />
              </AnimateChildren>
            </div>
          </AnimateChildren>
          <div style={{ height: "20%" }} />
        </Content>
      </Container>
    </div>
  );
};
