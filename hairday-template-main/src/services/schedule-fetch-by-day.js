import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }){
  try {
    //fazendo requisição 
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    //converte a requisição para json
    const data = await response.json()

    //Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter(( schedule ) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia selecionado")
    console.log(error)
  }
}