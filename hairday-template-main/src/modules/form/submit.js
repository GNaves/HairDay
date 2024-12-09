import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import {scheduleDays} from "../schedules/load.js"

const  form = document.querySelector("form");
const clientName = document.querySelector("#client")
const selectedDate = document.querySelector("#date");

//data atual pro input
const inputDay = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputDay

//define data minima como data atual
selectedDate.min = inputDay

form.onsubmit = async (e) => {
  e.preventDefault()
  
  try {
    //recuperando nome do cliente
    const name = clientName.value.trim() 

    if(!name){
      return alert("Informe o nome do cliente!")
    }

    //recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Informe a hora!")
    }

    //recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //gera um id
    const id = new Date().getTime()

    //faz o agendamento
    await scheduleNew({ 
      id, 
      name, 
      when
    })

    //recarrega os agendamentos 
    await scheduleDays()

    //limpa o input de nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento ")
    console.log(error)
  }
}