const lifeGoalsReducerDefaultState = [];

export default (state = lifeGoalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LIFEGOAL':
      return [...state, action.lifeGoal];
    default:
      return state;
  }
}
