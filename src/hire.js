import React from "react";
import styled from "styled-components";

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
    <div
      style={{
        maxWidth: 800,
        paddingLeft: 28,
        paddingRight: 28,
        margin: "auto",
      }}
    >
      <Paragraph>
        Thank you for your interest! <strong>I am not for hire</strong>. I am
        focused on <ExternalLink href="/">Remotion</ExternalLink> and don't want
        to change it anytime soon.
        <br />
        <br />
        If you want to realize your Remotion project, find a freelancer on our{" "}
        <ExternalLink href="https://remotion.dev/experts">
          Experts
        </ExternalLink>{" "}
        page.
        <br />
        <br /> For other types of projects, I recommend{" "}
        <ExternalLink target="_blank" href="https://axelra.com">
          Axelra
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink target="_blank" href="https://foronered.com">
          For One Red
        </ExternalLink>
        . Please direct your serious inquiries directly to them.
      </Paragraph>
    </div>
  );
};
