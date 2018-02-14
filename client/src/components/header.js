import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import arrow from "../assets/curvearrow.png";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
	width: 100%;
	height: 66px;
	display: flex;
	align-items: center;
`;

const Logo = styled.img`
	width: 80px;
	height: auto;
`;

const Heading = styled.h2`
	font-size: 30px;
	font-weight: 300;
	text-align: center;
	width: 90%;
	margin: 1rem auto;
`;

const Text = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-align: center;
	width: 90%;
	margin: 0.5rem auto;
`;

const Arrow = styled.img`
	position: fixed;
	top: 130px;
	left: 15px;
	width: 80px;
`;

const Wrapper = styled.div`
	min-height: 200px;
	margin-bottom: 1em;
`;
const Header = props => {
	return (
		<Wrapper>
			<NavBar>
				<Link to="/">
					<Logo src={logo} alt="Albert Kennedy Trust logo" />
				</Link>
			</NavBar>
			<Arrow src={arrow} alt="Curved arrow" />
			<Heading>{props.heading}</Heading>
			<Text>{props.text}</Text>
			<h2 className="header__text">{props.headerText}</h2>
		</Wrapper>
	);
};

export default Header;
