import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo_white.png";
// import arrow from "../assets/curvearrow.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

const NavBar = styled.nav`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7c53a2;
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
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  width: 90%;
  margin: 0.5rem auto;
`;

const Wrapper = styled.div`
  min-height: 30vh;
  width: 100vw;
`;

const P = styled.p`
  padding: 0.2rem;
  margin: 0.5rem;
  color: white;
  font-size: 1rem;
  text-decoration: underline;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar>
          <Link to="/">
            <Logo src={logo} alt="Albert Kennedy Trust logo" />
          </Link>
          {this.props.logout ? (
            <Link to="/" onClick={this.logout.bind(this)}>
              <P>Log out</P>
            </Link>
          ) : (
            <Link to="/crisis">
              <P>I'm in crisis</P>
            </Link>
          )}
        </NavBar>
        <Heading>{this.props.heading}</Heading>
        <Text>{this.props.text}</Text>
        <h2 className="header__text">{this.props.headerText}</h2>
      </Wrapper>
    );
  }

  logout() {
    this.props.logoutUser();
  }
}

export default connect(null, { logoutUser })(Header);
