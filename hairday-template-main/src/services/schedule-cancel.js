import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
  try {
    //criando a rota de deletar agendamentos.
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento deletado com sucesso!")
  } catch (error) {
    alert("Não foi possível cancelar o agendamento, tente novamente!")
    console.log(error)
  }
}