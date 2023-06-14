const initialState = {
    filmesGostados: [],
  };
  
  const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GOSTEI_FILME':
        return {
          ...state,
          filmesGostados: [...state.filmesGostados, action.payload.movieId],
        };
      default:
        return state;
    }
  };
  
  export default usuarioReducer;
  