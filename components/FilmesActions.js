export const gosteiFilme = (filmeId) => {
    return {
      type: 'GOSTEI_FILME',
      payload: {
        filmeId: filmeId
      }
    };
  };