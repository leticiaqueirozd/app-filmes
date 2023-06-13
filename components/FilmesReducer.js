const initialState = [
  {
    id: 1,
    titulo: "Filme 1",
    sinopse: "Sinopse do Filme 1",
    gostei: true,
    comentario: "",
  },
  {
    id: 2,
    titulo: "Filme 2",
    sinopse: "Sinopse do Filme 2",
    gostei: false,
    comentario: "",
  },
  {
    id: 3,
    titulo: "Filme 3",
    sinopse: "Sinopse do Filme 3",
    gostei: false,
    comentario: "",
  },
];

const filmesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOSTEI_FILME":
      console.log(action.type);
      return {
        ...state.map((filme) => {
          console.log(filme);
          console.log("/");
          if (filme.id === action.payload.filmeId) {
            return { ...filme, gostei: true };
          }
          console.log(filme);
          return filme;
        }),
      };
    case "ADD_COMENTARIO_SUCCESS":
      return {
        ...state.filmes.map((filme) => {
          if (filme.id === action.payload.filmeId) {
            return { ...filme, comentario: action.payload.comentario };
          }
          return filme;
        }),
      };
    default:
      return state;
  }
};

export default filmesReducer;
