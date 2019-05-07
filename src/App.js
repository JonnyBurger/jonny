import React, {Component} from 'react';
import styled from 'styled-components';
import {SocialIcon} from 'react-social-icons';
import Projects from './Projects';
import {mobile} from './Project';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 50vh;
	width: 100%;
`;

const Header = styled.header`
	flex-direction: column;
	align-items: center;
	display: flex;
	justify-content: center;
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
`;

const MobileBreak = styled.div`
	display: none;
	${mobile`
		display: block;
	`};
`;

class App extends Component {
	render() {
		return (
			<div>
				<Container>
					<Header>
						<Heading>Jonny Burger</Heading>
						<Subtitle>Zurich Switzerland</Subtitle>
					</Header>
					<Icons>
						<SocialIcon
							url="mailto:hi@jonny.io"
							color="#333"
							style={{width: 40, height: 40}}
						/>
						<SocialIcon
							url="https://github.com/JonnyBurger"
							color="#333"
							style={{width: 40, height: 40}}
						/>
						<SocialIcon
							url="https://twitter.com/JNYBGR"
							color="#333"
							style={{width: 40, height: 40}}
						/>
						<SocialIcon
							url="https://www.linkedin.com/feed/"
							color="#333"
							style={{width: 40, height: 40}}
						/>
					</Icons>
				</Container>

				<Description>
					I'm a self-taught JavaScript developer with 8 years of experience
					building apps that people actually end up using.
					<br />
					These are the projects that I am most proud of:
				</Description>

				<Projects />
			</div>
		);
	}
}

export default App;
