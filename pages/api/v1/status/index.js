import database from "infra/database.js";

const status = async (request, response) => {
  const result = await database.query("SELECT 1 + 1 as sum;");

  console.log("Result -> ", result.rows);

  response.status(200).json({
    resposta: "Tudo está funcionando!",
  });
};

export default status;
