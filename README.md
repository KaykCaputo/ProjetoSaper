# 🏥 Projeto Saper - Sistema de Controle e Reserva de Leitos

Um sistema voltado para a **gestão eficiente de leitos hospitalares**, permitindo o **cadastro de pacientes**, **gerenciamento da ocupação dos leitos**, **visualização geral por status** e a possibilidade de **dar alta** aos pacientes de forma prática.

## 🔗 Recursos

* **[ERD - Diagrama Entidade-Relacionamento](https://lucid.app/lucidchart/67d9cad5-ae58-413d-a89a-deeb503fe604/edit?viewport_loc=-412%2C28%2C3408%2C1716%2C0_0&invitationId=inv_cb6ae705-8f7e-43c3-90e3-60a2d2d39094)**
* **[Protótipo de Telas (UI/UX)](https://www.canva.com/design/DAFktkgpFVA/rYvingvrfnDFrG8YryfboQ/edit?utm_content=DAFktkgpFVA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**

---

## 📌 Objetivo

A gestão de leitos é um dos pontos críticos para o bom funcionamento de hospitais e clínicas. Este sistema visa oferecer **monitoramento em tempo real da situação dos leitos**, ajudando a reduzir a ociosidade e melhorar o planejamento da internação e alta de pacientes.

---

## ✅ Funcionalidades

* [ ] **Cadastro de pacientes**
* [ ] **Cadastro de leitos**
* [ ] **Visão geral do status dos leitos**
* [ ] **Dar alta a pacientes internados**

---

## 📟 Cadastro de Pacientes

Ao cadastrar um paciente, os seguintes dados devem ser informados:

* Número do prontuário
* Nome completo
* Idade
* Especialidade
* Data de internação
* **Motivo da permanência**
* **Classificação de Fugulin**
* **Origem**

### Tabelas de Apoio

#### 🛎️ Motivo da Permanência

| Motivo                         |
| ------------------------------ |
| Leito de enfermaria            |
| Leito de terapia intensiva     |
| Parecer de outra especialidade |
| Transferência externa          |
| Social                         |
| Hemodiálise                    |
| Outros (descrever)             |

#### �� Classificação de Fugulin

| Nível de cuidado             |
| ---------------------------- |
| Cuidados mínimos             |
| Cuidados intermediários      |
| Cuidados de alta dependência |
| Cuidados semi-intensivos     |
| Cuidados intensivos          |

#### 🚑 Origem

| Origem             |
| ------------------ |
| SAMU               |
| Demanda Espontânea |

---

## 🖥️ Visão Geral dos Leitos

Os leitos serão visualizados com **códigos de cores**, baseando-se no **tempo de permanência do paciente**, conforme abaixo:

| Cor         | Tempo de Permanência    |
| ----------- | ----------------------- |
| 🟩 Verde    | ≤ 24 horas              |
| 🟨 Amarela  | > 24 horas e ≤ 72 horas |
| 🔴 Vermelha | > 72 horas              |

---
👥 Equipe

Desenvolvido por: [Kayk Caputo](https://github.com/KaykCaputo) , [André Gustavo](https://github.com/AndreXP1) , [João Pedro ](https://github.com/JPKP-Kuhn) , [João Schmitt](https://github.com/joaovs2004) , [Leonardo Victor](https://github.com/LeonardoVictorMuller)

