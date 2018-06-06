import React from 'react';
import { connect } from 'react-redux';
import LifeGoalIndividual from './LifeGoalIndividual';

const LifeGoalsList = (props) => {
  return (
    <div>
      {props.lifeGoals.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Set Some Goals!</span>
        </div>
      ) : (
        props.lifeGoals.map(goal => {
          return <LifeGoalIndividual key={goal.id} {...goal} />;
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lifeGoals: state.lifeGoals
});

export default connect(mapStateToProps)(LifeGoalsList);
