import React from 'react';
import styled from 'styled-components';
import {AnimateChildren} from '../animate-children';

const Container = styled.div`
	height: 90px;
	width: 120px;
	background: white;
	display: flex;
	transform: rotateY(10deg);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
	flex-direction: column;
	overflow: hidden;
`;

const Header = styled.div`
	background: red;
	height: 15px;
	width: 100%;
`;

const Lower = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const LowerContent = styled.div`
	width: 50%;
	margin-left: auto;
	margin-right: auto;
	flex: 1;
`;

const Title = styled.div`
	background: rgba(0, 0, 0, 0.4);
	height: 6%;
	margin-top: 3%;
`;

const Subtitle = styled.div`
	width: 50%;
	background: rgba(0, 0, 0, 0.2);
	height: 4%;
	margin-top: 2%;
	margin-bottom: 10%;
`;

const ContentLine = styled.div`
	background: rgba(0, 0, 0, 0.1);
	height: 3%;
	margin-bottom: 2%;
`;

const Figure = styled.div`
	background: #00cbff;
	height: 40%;
	margin-top: 6%;
`;

export default () => {
	return (
		<div style={{perspective: 500}}>
			<Container>
				<Header />
				<Lower>
					<LowerContent>
						<AnimateChildren>
							<Title />
							<Subtitle />
							<ContentLine />
							<ContentLine />
							<ContentLine />
							<ContentLine />
							<ContentLine />
							<ContentLine />
							<Figure />
						</AnimateChildren>
					</LowerContent>
				</Lower>
			</Container>
		</div>
	);
};
