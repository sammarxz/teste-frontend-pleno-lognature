# DDD

## Linguagem Ubíqua
- **Quadro:** Representa um quadro Kanban, que pode ser criado pelos usuários para organizar tarefas em colunas com base em seu status.
- **Coluna:** Representa uma coluna em um quadro Kanban, que contém tarefas com o mesmo status.
- **Tarefa:** Representa uma tarefa que pode ser adicionada a um quadro Kanban e que pode ter subtarefas vinculadas a ela. Uma tarefa pode ter um título, descrição, status (por exemplo: "a fazer", "em progresso", "concluída") e outras propriedades relevantes.
- **Status:** O estado atual de uma tarefa, que pode ser "pendente", "em andamento" ou "concluída", por exemplo.

## User Stories
- Como usuário, quero ser capaz de criar um quadro Kanban para organizar minhas tarefas por status.
- Como usuário, quero ser capaz de adicionar colunas a um quadro Kanban para representar diferentes status de tarefas.
- Como usuário, quero ser capaz de adicionar tarefas a um quadro Kanban, informando seu título, descrição e status.
- Como usuário, quero ser capaz de atualizar o título, descrição e status de uma tarefa em um quadro Kanban.
- Como usuário, quero ser capaz de adicionar subtarefas a uma tarefa em um quadro Kanban, informando seu título e status.
- Como usuário, quero ser capaz de atualizar o título e o status de uma subtarefa em uma tarefa em um quadro Kanban.

## Contextos Delimitados
### Contexto de Quadro
Este contexto lida com a criação, atualização e gerenciamento de quadros Kanban.
Ele é responsável por manter as informações relacionadas aos quadros, como os títulos, as colunas associadas e as permissões de acesso dos usuários.

### Contexto de Tarefa
Este contexto lida com a criação, atualização e gerenciamento de tarefas em um quadro Kanban.
Ele é responsável por manter as informações relacionadas às tarefas, como os títulos, as descrições, os status e outras propriedades relevantes.
Ele também pode lidar com as subtarefas vinculadas a uma tarefa.

## Objetos de Valor
1. Título: Pode ser um objeto de valor que representa o título de uma tarefa, coluna ou quadro. Pode ter propriedades como valor de texto, comprimento máximo e validações de formato.
2. Descrição: Pode ser um objeto de valor que representa a descrição de uma tarefa. Pode ter propriedades como valor de texto, comprimento máximo e validações de formato.
3. Status: Pode ser um objeto de valor que representa o status de uma tarefa ou coluna em um quadro Kanban. Pode ter propriedades como valor de texto, enumeração de status válidos e validações de transições de status.
4. Subtarefa: Pode ser um objeto de valor que representa uma subtarefa vinculada a uma tarefa específica. Pode ter propriedades como título, status e outras informações relevantes.

## Serviços de Domínio
Os Serviços de Domínio são responsáveis por implementar a lógica de negócio complexa que não se encaixa naturalmente em uma única entidade ou agregado. Eles são usados para orquestrar operações entre entidades, agregados ou objetos de valor, e podem ser invocados por diferentes partes da aplicação.

1. **Serviço de Criação de Board:** Responsável por criar um novo quadro Kanban (board) com suas respectivas colunas e configurações iniciais. Pode receber como entrada as informações necessárias para criar o quadro e suas colunas, e pode realizar as validações e regras de negócio pertinentes.
2. **Serviço de Criação de Tarefa:** Responsável por criar uma nova tarefa em um quadro Kanban específico, vinculando-a à coluna apropriada e definindo suas propriedades iniciais. Pode receber como entrada as informações da tarefa e o quadro Kanban em que ela deve ser criada, e pode realizar as validações e regras de negócio relevantes.
3. **Serviço de Movimentação de Tarefa:** Responsável por mover uma tarefa de uma coluna para outra em um quadro Kanban, atualizando seu status e outras propriedades relacionadas. Pode receber como entrada a tarefa a ser movida, a coluna de origem e a coluna de destino, e pode aplicar as validações e regras de negócio adequadas.
4. **Serviço de Atualização de Subtarefa:** Responsável por atualizar o status ou outras propriedades de uma subtarefa vinculada a uma tarefa específica. Pode receber como entrada a subtarefa a ser atualizada, as informações de atualização e as validações necessárias.

## Repositórios
Os Repositórios são responsáveis por persistir e recuperar entidades e agregados do domínio em um mecanismo de armazenamento, como um banco de dados ou um serviço de armazenamento. Eles são utilizados para abstrair a camada de persistência do domínio, permitindo que a lógica de negócio seja isolada das preocupações de armazenamento.

- **Repositório de Quadro Kanban:** Responsável por persistir e recuperar os quadros Kanban criados, bem como suas colunas e configurações associadas. Pode fornecer métodos para criar, atualizar, excluir e buscar quadros Kanban no mecanismo de armazenamento.
- **Repositório de Tarefa:** Responsável por persistir e recuperar as tarefas criadas, juntamente com suas propriedades e vínculos com quadros Kanban e subtarefas. Pode fornecer métodos para criar, atualizar, excluir e buscar tarefas no mecanismo de armazenamento.
- **Repositório de Subtarefa:** Responsável por persistir e recuperar as subtarefas criadas, juntamente com suas propriedades e vínculos com tarefas. Pode fornecer métodos para criar, atualizar, excluir e buscar subtarefas no mecanismo de armazenamento.