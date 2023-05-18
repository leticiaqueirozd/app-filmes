const initialState = {
    filmes: [
      { id: 1, titulo: 'Filme 1', sinopse: 'Sinopse do Filme 1', gostei: false },
      { id: 2, titulo: 'Filme 2', sinopse: 'Sinopse do Filme 2', gostei: false },
      { id: 3, titulo: 'Filme 3', sinopse: 'Sinopse do Filme 3', gostei: false },
    ],
  };
  
  const filmesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GOSTEI_FILME':
        return {
          ...state,
          filmes: state.filmes.map((filme) => {
            if (filme.id === action.payload.filmeId) {
              return { ...filme, gostei: true };
            }
            return filme;
          }),
        };
      default:
        return state;
    }
  };
  
  export default filmesReducer;