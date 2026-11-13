const status = (request, response) => {
  response.status(200).json({
    "resposta": "Tudo está funcionando!"
  });
}

export default status;