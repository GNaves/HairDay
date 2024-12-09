import { scheduleCancel } from "../../services/schedule-cancel.js"
import { scheduleDays } from "../schedules/load.js"

const periods = document.querySelectorAll(".period")

//gera um evento de click para cada item da lista (manha, tarde e noite)
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    //verifica se o alvo em que eu cliquei contem a classe cancel-icon.
    if(event.target.classList.contains("cancel-icon")){
      //obtém a li pai do elemento clicado
      const item = event.target.closest("li")
      console.log(item)
      //pega o id do agendamento para remover
      const {id} = item.dataset
      
      //verifica se existe id selecionado.
      if(id){
        //Confirma se o usuário que deletar o item.
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        )

        //apos confirmado, executa a ação de deletar o item.
        if(isConfirm){
          await scheduleCancel({ id })
          scheduleDays()
        }
      }
    }
  })
})