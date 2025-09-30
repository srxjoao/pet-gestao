# 🐾 Pet Gestão

Um projeto em **Node.js + TypeScript** para gerenciamento de informações relacionadas a pets, com execução automatizada para desenvolvimento.

## 🚀 Tecnologias

- **Node.js** – Ambiente de execução JavaScript
- **TypeScript** – Superset de JavaScript com tipagem estática
- **Nodemon** – Reinício automático em ambiente de desenvolvimento
- **ts-node** – Execução de arquivos TypeScript sem compilação prévia

## 📂 Estrutura do Projeto

```
pet-gestao/
├─ src/               # Código-fonte em TypeScript
├─ package.json       # Dependências e scripts
├─ tsconfig.json      # Configuração do TypeScript
└─ ...
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) 18+  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)  

## 🛠️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/srxjoao/pet-gestao.git
cd pet-gestao
npm install
```

## ▶️ Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O comando acima utiliza **nodemon** e **ts-node**, monitorando alterações no diretório `src/`.

## 📜 Scripts Disponíveis

| Comando      | Descrição                                      |
|--------------|------------------------------------------------|
| `npm run dev`| Inicia o projeto em modo desenvolvimento       |

## 🧩 Configuração

A configuração do TypeScript está definida em `tsconfig.json`.  
A entrada principal do projeto é `src/index.ts`.

## 📌 Licença

Este projeto está licenciado sob a licença **ISC**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
