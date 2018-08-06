import React, {Fragment} from 'react';
import {keyframes} from 'styled-components';

const animation = keyframes`
	from {
		opacity: 1;
		transform: translateY(0px);
	}
	85% {
		opacity: 1;
		transform: translateY(0px);
	}
	89% {
		opacity: 0;
		transform: translateY(0px);
	}
	90% {
		opacity: 0;
		transform: translateY(40px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
	
`;

export const AnimateChildren = ({children, delay = 0}) => {
	return (
		<Fragment>
			{React.Children.map(children, (c, i) =>
				React.cloneElement(c, {
					style: {
						...c.props.style,
						animation: `${animation} 10s ${(i * 0.4) / children.length +
							delay}s infinite`
					}
				})
			)}
		</Fragment>
	);
};
