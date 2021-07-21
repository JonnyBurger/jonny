import React, { Component } from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Projects from "./Projects";
import Privacy from "./privacy";
import Hire from "./hire";
import "./App.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40vh;
  width: 100%;
`;

const Header = styled.a`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  color: inherit;
  text-decoration: none;
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

const Subtitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-family: Roboto Condensed;
  opacity: 0.4;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Roboto Condensed;
  line-height: 32px;
  text-align: center;
`;

const Run = styled.div`
  width: 40px;
  height: 40px;
  background: var(--social-button);
  display: inline-block;
  border-radius: 50%;
  padding-top: 4px;
  box-sizing: border-box;
  padding-left: 11px;
  padding-top: 5px;
`;

const ExternalLink = styled.a`
  color: inherit;
  opacity: 0.65;
  text-decoration: none;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header href="/">
            <Heading>Jonny Burger</Heading>
            <Subtitle>Zurich Switzerland</Subtitle>
          </Header>
          <Icons>
            <SocialIcon
              url="mailto:hi@jonny.io"
              color="var(--social-button)"
              style={{ width: 40, height: 40 }}
            />
            <SocialIcon
              url="https://github.com/JonnyBurger"
              color="var(--social-button)"
              style={{ width: 40, height: 40 }}
            />
            <SocialIcon
              url="https://youtube.com/c/JonnyBurger"
              color="var(--social-button)"
              style={{ width: 40, height: 40 }}
            />
            <SocialIcon
              url="https://twitter.com/JNYBGR"
              color="var(--social-button)"
              style={{ width: 40, height: 40 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/jonny-burger-4115109b/"
              color="var(--social-button)"
              style={{ width: 40, height: 40 }}
            />
            <a href="https://jonny.run">
              <Run>
                <span role="img" aria-label="Runner">
                  🏃🏻
                </span>
              </Run>
            </a>
          </Icons>
        </Container>

        <BrowserRouter>
          <Switch>
            <Route
              path="/privacy"
              render={() => {
                return (
                  <div>
                    <Description>Privacy Policy</Description>
                    <Privacy />
                  </div>
                );
              }}
            ></Route>
            <Route
              path="/hire"
              render={() => {
                return (
                  <div>
                    <Description>Hire</Description>
                    <Hire />
                  </div>
                );
              }}
            ></Route>
            <Route
              render={() => (
                <div>
                  <Description>
                    I'm an indie hacker working on projects that combine
                    engineering, art and business. <br></br>{" "}
                    <ExternalLink href="/hire">
                      Not available for hire
                    </ExternalLink>
                    , reach out to{" "}
                    <ExternalLink target="_blank" href="https://axelra.com">
                      Axelra
                    </ExternalLink>{" "}
                    instead.
                  </Description>

                  <Projects />
                </div>
              )}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
