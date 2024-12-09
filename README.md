HairdDay

HairdDay é uma aplicação simples para agendamento de cortes de cabelo, desenvolvida utilizando JavaScript e Webpack. O projeto permite que os usuários escolham datas e horários disponíveis para agendar seus serviços.
⚙️ Funcionalidades

    Seleção de datas e horários disponíveis com base nos agendamentos existentes.
    Validação de horários no passado e ocupados.
    Organização dos horários por períodos: manhã, tarde e noite.
    Cancelamento de agendamentos com confirmação.
    Interface amigável e responsiva.

📂 Estrutura do Projeto

A estrutura do projeto é modular e organizada da seguinte maneira:

src/
├── assets/           # Imagens e ícones
├── modules/          # Lógica da aplicação
│   ├── form/         # Manipulação de formulários
│   ├── schedules/    # Gerenciamento de agendamentos
│   └── utils/        # Funções utilitárias
├── services/         # Comunicação com a API
├── styles/           # Arquivos de estilo (CSS)
├── libs/             # Configuração de bibliotecas (ex.: dayjs)
├── main.js           # Ponto de entrada da aplicação
└── api-config.js     # Configuração de acesso à API

🛠️ Tecnologias Utilizadas

    JavaScript ES6+
    Webpack (para empacotamento e bundling)
    Day.js (para manipulação de datas)
    CSS (para estilização)

🚀 Configuração e Execução
Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

    Node.js (v14 ou superior)
    npm ou yarn

Passo a Passo

    Clone este repositório:
    git clone https://github.com/seu-usuario/hairdDay.git
    cd hairdDay
    npm install
    npm run build
    npm run server
    npm run dev 

    
![Captura de Tela 2024-12-09 às 17 11 05](https://github.com/user-attachments/assets/1d63e86f-eb1c-486c-9cee-06e4ab906e53)

📋 Como Usar

    Escolha uma data no campo correspondente.
    Clique em um horário disponível para selecioná-lo.
    Insira o nome do cliente e confirme o agendamento.
    Para cancelar um agendamento, clique no ícone de lixeira e confirme a ação.

Scripts Disponíveis

    npm run dev: Inicia o servidor de desenvolvimento.
    npm run build: Gera os arquivos de produção.
    npm run server: Inicializa a API.



