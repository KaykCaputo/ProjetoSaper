# ProjetoSaper

--Tema: Sistema de controle e reserva de leitos--

ERD: https://lucid.app/lucidchart/67d9cad5-ae58-413d-a89a-deeb503fe604/edit?viewport_loc=-412%2C28%2C3408%2C1716%2C0_0&invitationId=inv_cb6ae705-8f7e-43c3-90e3-60a2d2d39094

O sistema deve ser capaz de exibir para os médicos a sua lista de atendimento do dia, mostrando, de forma clara, quantos pacientes constam em sua lista e se sua chegada a clinica já foi confirmada, ou não. Os médicos poderiam visualizar, de qualquer lugar, como esta sua agenda de atendimentos para o dia. Para iniciar um atendimento, podem chamar o próximo paciente através do clique em um botão do sistema. Para registrar o atendimento os médicos informaram qual o diagnostico da consulta e o receituário informado. Apos a confirmação do registro da consulta, estas informações serão enviadas para o email do paciente.

### Requisitos 

- [ ] Cadastro de médico;
- [ ] Cadastro de pacientes;
- [ ] Configurar agenda de atendimento de médico;
- [ ] Marcar consulta;
- [ ] Confirmar presença;
- [ ] Confirmar autorização do plano de saúde;
- [ ] Registrar consulta;
- [ ] Visualizar protuário;
- [ ] Gerenciar fila de atendimento.

## Sistema de Controle e reserva de leitos

A gestão de leitos é um assunto muito importante para um hospital ou clínica,  pois através da visualização e monitoramento constante do uso das camas, ou seja, os leitos ocupados, disponíveis, reservados, em limpeza, dentre outros, pode-se combater a ociosidade dos leitos ao aprimorar o planejamento para o seu uso.


### Requisitos

- [ ] Cadastro de pacientes;
- [ ] Cadastro de leitos;
- [ ] Visão geral dos leitos;
- [ ] Dar alta a um paciente;

Ao se cadastrar um paciente e informar dados pesssoais (``número do prontuário``, ``nome do paciente,`` ``idade``, ``especiliadade``, ``data de internação``), os dados acerca da sua permanência, classificação Fugulin e Origem precisam ser informados. Estes dados estão listados conforme categorias abaixo:

| Motivo da permanência          | Classificaçnao de Fugulin    | Origem             |
| :----------------------------- | :--------------------------- | :----------------- |
| Leito de enfermaria            | Cuidados mínimos             | SAMU               |
| Leito de terapia intensiva     | Cuidados intermediários      | Demanda Espontânea |
| Parecer de outra especialidade | Cuidados de alta dependência |                    |
| Transferência externa          | Cuidados semi-intensivos     |                    |
| Social                         | Cuidados intensivos          |                    |
| Hemodiálise                    |                              |                    |
| Outros (descrever)             |                              |                    |

Na visualização dos leitos, cores de acordo com o tempo de perman6encia do paciente devem seguir as seguintes características:

| Verde                                   | Amarela                              | Vermelha   |
| --------------------------------------- | ------------------------------------ | ---------- |
| Se tempo de permanência for ≤ 24 horas. | Permanência > 24 horas e ≤ 72 horas. | ≥ 72 horas |


