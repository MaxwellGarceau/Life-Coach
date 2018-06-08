const lifeGoalsReducerDefaultState = [];

export default (state = lifeGoalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LIFEGOAL':
      return [...state, action.lifeGoal];
    case 'EDIT_LIFEGOAL':
      return state.map((goal) => {
        if (goal.id === action.id) {
          return {
            ...goal,
            ...action.updates
          };
        } else {
          return goal;
        }
      });
    case 'REMOVE_LIFEGOAL':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'GET_LIFEGOALS':
      return action.goals;
    default:
      return state;
  }
}
