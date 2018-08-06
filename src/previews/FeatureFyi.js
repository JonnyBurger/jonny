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
`;

const Lower = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const LowerContent = styled.div``;

const Title = styled.div`
	text-align: center;
	height: 6%;
	font-size: 8px;
	margin-top: 3%;
`;

const FigureContainer = styled.div`
	width: 50%;
	height: 40%;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-top: 7%;
`;

const Figure = styled.div`
	background: rgba(0, 0, 0, 0.1);
	height: 100%;
	flex: 1;
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Input = styled.div`
	height: 15%;
	width: 80%;
	background: white;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Tags = styled.div`
	width: 50%;
	height: 10%;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5px;
	text-align: center;
	margin-top: -6px;
`;

const Tag = styled.div`
	height: 3px;
	width: 10px;
	display: inline-block;
	margin-left: 2px;
	margin-right: 2px;
	background: #666;
`;

export default () => {
	return (
		<div style={{perspective: 500}}>
			<Container>
				<Lower>
					<Title>×</Title>
					<FigureContainer>
						<AnimateChildren>
							<Figure>
								<Input />
							</Figure>
							<div style={{width: 4}} />
							<Figure>
								<Input />
							</Figure>
						</AnimateChildren>
					</FigureContainer>
					<Tags>
						<AnimateChildren>
							<Tag />
							<Tag />
							<Tag />
							<Tag />
						</AnimateChildren>
					</Tags>
				</Lower>
			</Container>
		</div>
	);
};
