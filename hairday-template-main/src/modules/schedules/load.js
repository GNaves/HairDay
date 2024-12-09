import { hoursLoad } from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"

// seleciona o input de data
const selectedDate = document.querySelector("#date")

export async function scheduleDays(){
  //renderiza horas disponíveis
  const date = selectedDate.value

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })
  
  //exibe os agendamentos
  schedulesShow({ dailySchedules })

  //renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules })
}