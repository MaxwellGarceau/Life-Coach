import React from 'react';
import { Link } from 'react-router-dom';

const LifeGoalIndividual = ({ goalColor, goalTitle, goalDescription, id }) => {
  return (
    <Link className="list-item" to={`goals/edit/${id}`}>
      <div className={goalColor}>
        <h2>{goalTitle}</h2>
        <p>{goalDescription}</p>
      </div>
      <button>Change Your Goal</button>
    </Link>
  );
}

export default LifeGoalIndividual;
