export const lifeGoalsReducerDefaultState = [{
  id: 'errands-123',
  goalColor: 'calendar__row--bg-color-grey',
  goalDescription: 'Default option for non life goals.',
  goalTitle: 'Errands'
}];

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
      return [...state, ...action.goals];
    default:
      return state;
  }
}
