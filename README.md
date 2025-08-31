# GxMed

## 🏥 Descrição

O **GxMed** é uma aplicação desenvolvida em **C# (.NET)** com **Entity Framework Core** e **PostgreSQL**. Este repositório contém o **backend** da aplicação, responsável pela lógica de negócios e acesso ao banco de dados.

---

## 🛠️ Requisitos

Antes de rodar o projeto localmente, certifique-se de ter os seguintes softwares instalados:

- [.NET SDK 6.0 ou superior](https://dotnet.microsoft.com/download/dotnet)
- [Visual Studio Code](https://code.visualstudio.com/) (ou outro editor de sua preferência)
- [PostgreSQL](https://www.postgresql.org/download/) (ou utilize o banco hospedado na Render)
- [Git](https://git-scm.com/)

---

## 🗄️ Configuração do Banco de Dados

### Usando o PostgreSQL Local

1. Instale o PostgreSQL em sua máquina local.
2. Crie um banco de dados chamado `gxmedDatabase`.
3. Configure a connection string no arquivo `appsettings.Development.json`:


{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=gxmedDatabase;Username=seu_usuario;Password=sua_senha"
  }
}


git clone https://github.com/juliocesar744/GxMed.git
cd GxMed/backend
dotnet restore
dotnet run

cd GxMed/frontend
npm install
npm run dev
