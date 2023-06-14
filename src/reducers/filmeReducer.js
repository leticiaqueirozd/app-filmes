const initialState = {
    movies: [
      { id: 1, titulo: "Filme 1", sinopse: "Sinopse do Filme 1" },
      { id: 2, titulo: "Filme 2", sinopse: "Sinopse do Filme 2" },
      { id: 3, titulo: "Filme 3", sinopse: "Sinopse do Filme 3" },
    ],
  };
  
  const filmeReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default filmeReducer;
  