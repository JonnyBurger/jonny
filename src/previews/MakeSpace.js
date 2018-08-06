import React from 'react';

import styled from 'styled-components';
import {AnimateChildren} from '../animate-children';

const Container = styled.div`
	height: 60px;
	width: 100px;
	background: #444;
	display: flex;
	transform: rotateY(10deg);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
	flex-direction: column;
	padding: 10px;
`;

const StrategyContainer = styled.div`
	height: 4px;
	margin-bottom: 2px;
	flex-direction: row;
	display: flex;
	align-items: center;
`;

const Circle = styled.div`
	background: #00cbff;
	width: 4px;
	height: 4px;
	border-radius: 2px;
	opacity: 0.7;
`;

const Space = styled.div`
	width: 3px;
`;

const Size = styled.div`
	background: rgba(255, 255, 255, 0.5);
	width: 16px;
	height: 2px;
	opacity: 0.7;
`;

const Name = styled.div`
	background: rgba(255, 255, 255, 0.2);
	width: 40px;
	height: 2px;
	opacity: 0.7;
	margin-left: 5px;
`;

const Triangle = styled.div`
	color: #a2ff16;
	font-size: 6px;
	margin-left: 0.5px;
`;

const Band = styled.div`
	background: #a2ff16;
	font-size: 6px;
	width: 6px;
	height: 3px;
	opacity: 0.5;
	margin-top: 1px;
	margin-left: 3px;
	display: inline-block;
`;

const Header = ({style = {}, ...props}) => {
	return (
		<StrategyContainer style={{...style, marginBottom: 5}} {...props}>
			<Triangle>$</Triangle>
			<Band />
			<Band
				style={{
					background: 'rgba(255, 255, 255, 0.4)',
					width: 14,
					marginLeft: 1
				}}
			/>
		</StrategyContainer>
	);
};

const Strategy = props => {
	return (
		<StrategyContainer {...props}>
			<Circle />
			<Space />
			<Size />
			<Name />
		</StrategyContainer>
	);
};

export default () => {
	return (
		<div style={{perspective: 500}}>
			<Container>
				<AnimateChildren>
					<Header />
					<Strategy />
					<Strategy />
					<Strategy />
					<Strategy />
					<Strategy />
					<Strategy />
				</AnimateChildren>
			</Container>
		</div>
	);
};
