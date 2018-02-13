import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import arrow from "../assets/curvearrow.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

const NavBar = styled.nav`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
              Log out
            </Link>
          ) : (
            <Link to="/crisis">I'm in crisis</Link>
          )}
        </NavBar>
        <Arrow src={arrow} alt="Curved arrow" />
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
