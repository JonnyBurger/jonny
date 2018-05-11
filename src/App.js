import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-family: Roboto Condensed;
  text-align: center;
  font-size: 3em;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Icons = styled.div`
  a {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <header>
          <Heading>Jonny Burger</Heading>
        </header>
        <Icons>
        <SocialIcon url="mailto:hi@jonny.io" color="#333" style={{width: 40, height: 40}}></SocialIcon>
        <SocialIcon url="https://github.com/JonnyBurger" color="#333" style={{width: 40, height: 40}}></SocialIcon>
        <SocialIcon url="https://twitter.com/JNYBGR" color="#333" style={{width: 40, height: 40}}></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/feed/" color="#333" style={{width: 40, height: 40}}></SocialIcon>
        </Icons>
      </Container>
    );
  }
}

export default App;
