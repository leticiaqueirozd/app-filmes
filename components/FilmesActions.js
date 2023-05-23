export const gosteiFilme = (filmeId) => ({
  type: 'GOSTEI_FILME',
  payload: {
    filmeId
  }
});

export const adicionarComentario = (filmeId, comentario) => ({
  type: 'ADD_COMENTARIO',
  payload: {
    filmeId,
    comentario
  }
});
