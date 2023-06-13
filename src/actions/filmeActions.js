export const filmeGostei = (movieId) => {
    return {
      type: 'GOSTEI_FILME',
      payload: {
        movieId,
      },
    };
  };
  