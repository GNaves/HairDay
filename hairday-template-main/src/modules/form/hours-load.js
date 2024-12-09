import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "../form/hours-click.js"
import dayjs from "dayjs"

const hours = document.querySelector(".hours")

export function hoursLoad({ date, dailySchedules }){
  //limpa a lista de horários
  hours.innerHTML = ""

  //obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))


  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [scheduleHour, _] = hour.split(":")

    //adicionar hora na data e verifica se está no passado 
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    
    const available = !unavailableHours.includes(hour) && !isHourPast
    
    return {
      hour,
      available
    }
  })

  //renderiza os horários
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00"){
      hourHeaderAdd("Tarde")
    } else if (hour === "19:00"){
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  //adiciona o evento de click nos horários disponíveis
  hoursClick()  
}

function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}