import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { fetchAppointments } from "../../actions/appointment";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import styled from "styled-components";
import history from "../../history";

const Card = styled.div`
  width: 90vw;
  height: 25vh;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 10px;
  border-left: solid 8px #f47a20;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 600px) {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Img = styled.img`
  max-height: 30vh;
  max-width: 20vw;
  height: auto;
`;

const Button = styled.button`
  height: 4vh;
  width: 90%;
  margin-bottom: 1rem;
  border: solid 0.1em #f47a20;
  background-color: white;
  border-radius: 0.3rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 65%;

  > p {
    margin: 0.5em;
  }
`;
const Crisis = styled.p`
  font-size: 0.9rem;
  padding: 0 8vw;
`;

const NewAppButton = styled(LinkButton)`
  position: inherit;
  margin: 2vh 5vw 2vh 5vw;
`;

class Profile extends Component {
  render() {
    if (!this.props.apts) {
      return <div />;
    } else {
      return (
        <div>
          <Header heading="My Appointments" logout />
          <FlexWrap>
            {this.props.apts.map(apt => {
              const dates = this.convertDates(apt.date_and_time);
              return (
                <Card key={apt.chat_string}>
                  <div>
                    <Img src={apt.img_url} />
                  </div>
                  <TextWrap>
                    <p>{apt.name}</p>
                    <p>{dates[0]}</p>
                    <p>{dates[1]}</p>
                    <a href={"https://tlk.io/" + apt.chat_string}>
                      <Button>join chat</Button>
                    </a>
                  </TextWrap>
                </Card>
              );
            })}
          </FlexWrap>
          <NewAppButton text="new appointment" url="/topics" primary />
          <Crisis>
            Immediate crisis? Don't use this site -{" "}
            <Link to="/crisis">use these resources instead</Link>
          </Crisis>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.fetchAppointments();
  }

  convertDates = date => {
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    const dateObj = new Date(date);
    const dateStr = dateObj.toLocaleString("en-gb", dateOptions);
    const timeStr = dateObj.toLocaleString("en-gb", timeOptions);
    return [dateStr, timeStr];
  };
}

const mapStateToProps = state => {
  return {
    apts: state.userApts.apts
  };
};

export default connect(mapStateToProps, { fetchAppointments })(Profile);
