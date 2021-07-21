import React from "react";
import styled from "styled-components";

const Subtitle = styled.h2`
  font-family: Roboto Condensed;
  font-size: 15px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  line-height: 24px;
`;

const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid;
`;

export default () => {
  return (
    <div style={{ width: 800, margin: "auto" }}>
      <Paragraph>
        Thank you for your interest! <strong>I am not for hire</strong>. I am
        focused on <ExternalLink href="/">my own projects</ExternalLink> and
        don't want to change it anytime soon.
        <br />
        <br /> I do work part-time at{" "}
        <ExternalLink target="_blank" href="https://axelra.com">
          Axelra
        </ExternalLink>
        . We are a strong team based in Zurich mainly focused on React Native.
        Please direct your serious inquiries directly to Axelra.
      </Paragraph>
    </div>
  );
};
