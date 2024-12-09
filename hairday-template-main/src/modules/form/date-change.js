import { scheduleDays } from "../schedules/load"

//selecionar o input de data
const selectedDate = document.querySelector("#date")

//Recarrega a lista de horários quando o input de datas mudar
selectedDate.onchange = () => {
  scheduleDays()
}