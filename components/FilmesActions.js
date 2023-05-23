export const gosteiFilme = (filmeId) => {
  return {
    type: 'GOSTEI_FILME',
    payload: {
      filmeId: filmeId
    }
  };
};

export const adicionarComentario = (filmeId, comentario) => ({
  type: 'ADD_COMENTARIO',
  payload: {
    filmeId,
    comentario,
  },
});

export const adicionarComentarioSuccess = (filmeId, comentario) => ({
  type: 'ADD_COMENTARIO_SUCCESS',
  payload: {
    filmeId,
    comentario,
  },
});
