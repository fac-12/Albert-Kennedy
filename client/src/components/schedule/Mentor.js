import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchMentors, updateMentor } from "../../actions/appointment";

class MentorForm extends Component {
  componentDidMount() {
    this.props.fetchMentors();
  }

  render() {
    if (!this.props.mentors) {
      return <div />;
    }
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {_.map(this.props.mentors, mentor => (
          <Field
            name="mentor"
            type="radio"
            key={mentor.id}
            label={mentor.name}
            desc={mentor.description}
            img={mentor.img_url}
            value={mentor.id.toString()}
            component={this.renderField}
          />
        ))}
        <button type="submit">next</button>
      </form>
    );
  }
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="radio" {...field.input} />
        <p>{field.desc}</p>
        <img src={field.img} alt="Mentor"></img>
      </div>
    );
  }
  onSubmit(values) {
    this.props.updateMentor(values);
  }
}

const mapStateToProps = state => {
  return {
    mentors: state.mentors.mentor_list

  };
};

export default reduxForm({
  form: "MentorForm"
})(connect(mapStateToProps, { updateMentor, fetchMentors })(MentorForm));
