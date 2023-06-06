CREATE TABLE Paciente(cpf_paciente VARCHAR(12), id_prontuario PRIMARY KEY, nome VARCHAR(100), idade INTEGER, telefone VARCHAR(20), alta BOOLEAN);

CREATE TABLE Leito(leito_id INT PRIMARY KEY, ocupado BOOLEAN NOT NULL, tipo VARCHAR(30));

CREATE TABLE Internacao(id_internacao PRIMARY KEY, id_prontuario FOREIGN KEY,
id_leito FOREIGN KEY, Classif_fugulin VARCHAR(50), origem VARCHAR(50), data_internacao DATETIME, motivo_permanencia VARCHAR(60), especialidade VARCHAR(30)

FOREIGN KEY (id_prontuario) REFERENCES Paciente(d_prontuario)
FOREIGN KEY (id_leito) REFERENCES Leito(leito_id));
