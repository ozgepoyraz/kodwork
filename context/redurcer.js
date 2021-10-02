const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      const {favoriteJob} = action.payload;
      const newFavoritedList = state.favoriteJobList.includes(favoriteJob)
        ? [...state.favoriteJobList]
        : [...state.favoriteJobList, favoriteJob];

      return {
        ...state,
        favoriteJobList: newFavoritedList,
      };

    case 'REMOVE_JOB':
      console.log(action.payload.name);
      return {
        ...state,
        favoriteJobList: state.favoriteJobList.filter(
          item => item.name !== action.payload.name,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
