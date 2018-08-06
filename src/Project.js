import React from 'react';
import styled, {css} from 'styled-components';

export const mobile = (...args) => css`
	@media (max-width: 800px) {
		${css(...args)};
	}
`;

const Container = styled.div`
	flex: 1;
	max-width: 800px;
	margin: auto;
	flex-direction: row;
	display: flex;
	justify-content: center;
	align-items: center;
	${mobile`
		display: block;
		margin-bottom: 80px;
	`};
`;

const Left = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	${mobile`
		width: 100%;
	`};
`;

const Right = styled.div`
	display: block;
	${mobile`
		flex: 1;
		padding-left: 20px;
		padding-right: 20px;
	`};
`;

const Title = styled.h3`
	font-family: 'Roboto Condensed';
	margin-bottom: 0;
`;

const Description = styled.p`
	margin-top: 3px;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.4);
`;

const Ul = styled.ul`
	padding-left: 0;
`;

const Li = styled.li`
	list-style-type: none;
	font-size: 14px;
	&:before {
		content: '⬩   ';
		margin-right: 5px;
	}
`;

export default ({
	timeline,
	feature,
	title,
	description,
	accomplishments = []
}) => {
	return (
		<Container>
			<Left>{feature}</Left>
			<Right>
				<Title>{title}</Title>
				<Description>
					<span style={{width: 100, display: 'inline-block'}}>{timeline}</span>
					{description} <span style={{width: 20, display: 'inline-block'}} />
				</Description>
				<Ul>
					{accomplishments.map(a => {
						return <Li key={a}>{a}</Li>;
					})}
				</Ul>
			</Right>
		</Container>
	);
};
