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
	background: #f84a4a;
	height: 10px;
	width: 100%;
`;

const Lower = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	background: rgba(0, 0, 0, 0.05);
`;

const Sidebar = styled.div`
	background: white;
	flex: 1;
`;

const Middle = styled.div`
	flex: 3;
`;

const CoverContainer = styled.div`
	height: 30%;
	background: rgba(0, 0, 0, 0.04);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Disc = styled.div`
	background: rgba(0, 0, 0, 0.1);
	width: 70%;
	height: 70%;
	border-radius: 50%;
`;

export default () => {
	return (
		<div style={{perspective: 500}}>
			<Container>
				<Header />
				<Lower>
					<AnimateChildren>
						<Sidebar style={{borderRight: '1px solid rgba(0, 0, 0, 0.1)'}} />
						<Middle />
						<Sidebar style={{borderLeft: '1px solid rgba(0, 0, 0, 0.1)'}}>
							<CoverContainer>
								<Disc />
							</CoverContainer>
						</Sidebar>
					</AnimateChildren>
				</Lower>
			</Container>
		</div>
	);
};
