import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    //requisição para realizar o agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      //definindo a configuração desta requisição.
      method: 'POST',
      headers: {
        //tipo do conteúdo.
        "Content-Type": "application/json"
      },
      //definindo o conteúdo que queremos enviar.
      body: JSON.stringify({ id, name, when })
    })

    alert("agendamento realizado com sucesso!")
  } catch (error) {
    alert("Não foi possível agendar tente novamente mais tarde")
    console.log(error)
  }
}