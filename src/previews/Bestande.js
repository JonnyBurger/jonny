import React from 'react';
import styled from 'styled-components';
import {AnimateChildren} from '../animate-children';

const Container = styled.div`
	height: 120px;
	width: 60px;
	background: white;
	display: flex;
	transform: rotateY(10deg);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
	flex-direction: column;
	overflow: hidden;
`;

const Header = styled.div`
	background: #2ecc71;
	height: 15px;
	width: 100%;
`;

const Content = styled.div`
	flex: 1;
	display: flex;
`;

const TimetablePanel = styled.div`
	height: 20%;
	width: 25%;
	background: #3498db;
	position: absolute;
	border-radius: 2px;
`;

export default () => {
	return (
		<div style={{perspective: 500}}>
			<Container>
				<Header />
				<Content>
					<AnimateChildren>
						<TimetablePanel style={{left: 30, top: 20}} />
						<TimetablePanel style={{left: 10, top: 60}} />
						<TimetablePanel style={{left: 40, top: 90}} />
					</AnimateChildren>
				</Content>
			</Container>
		</div>
	);
};
