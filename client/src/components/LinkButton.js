import React from "react";
import history from "../history";
import styled from "styled-components";

const Button = styled.button`
	background: ${props => (props.primary ? "#f47a20" : "white")};
	border: 2px solid #f47a20;
	border-radius: 5px;
	width: 100vw;
	height: 60px;
	font-size: 16px;
	margin: 5px;
`;

const LinkButton = props => {
	return (
		<Button onClick={() => history.push(props.url)} {...props}>
			{props.text}
		</Button>
	);
};

export default LinkButton;
