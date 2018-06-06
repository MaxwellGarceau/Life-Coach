import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddLifeGoal } from '../actions/life-goals';

class NewLifeGoal extends React.Component {
  constructor (props) {
    super(props);

    // Props are being passed in from EditLifeGoal
    this.state = {
      goalColor: this.props.goalColor,
      goalTitle: this.props.goalTitle,
      goalDescription: this.props.goalDescription
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const lifeGoal = {
      goalColor: this.state.goalColor,
      goalTitle: this.state.goalTitle,
      goalDescription: this.state.goalDescription
    };
    this.props.startAddLifeGoal(lifeGoal);
    this.handleExitPage();
  }
  handleExitPage = () => {
    this.props.history.push("/life-goals");
  }
  setGoalColor = (e) => {
    this.setState({ goalColor: e.target.classList[0] });
  }
  handleTitleOnChange = (e) => {
    this.setState({ goalTitle: e.target.value });
  }
  handleTextAreaOnChange = (e) => {
    this.setState({ goalDescription: e.target.value });
  }
  render (props) {
    return (
      <section>
        <h1>New Life Goal</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.handleTitleOnChange} type="text" placeholder="Title" value={this.state.goalTitle} />
          <textarea onChange={this.handleTextAreaOnChange} placeholder="Description" value={this.state.goalDescription} />
          <div>
            <div>Calendar Color for Goal</div>
            <span className="calendar__row--bg-color-red button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-light-blue button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-dark-blue button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-pink button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-teal button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-light-green button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-yellow button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-orange button button__goal-color" type="text" onClick={this.setGoalColor}></span>
            <span className="calendar__row--bg-color-purple button button__goal-color" type="text" onClick={this.setGoalColor}></span>
          </div>
          <div>
              <button type="submit">Submit</button>
              <button onClick={this.handleExitPage} type="button">Cancel</button>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddLifeGoal: (lifeGoal) => dispatch(startAddLifeGoal(lifeGoal))
})

export default connect(undefined, mapDispatchToProps)(NewLifeGoal);
