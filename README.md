GxMed
Descrição

O GxMed é uma aplicação desenvolvida em C# (.NET) com Entity Framework Core e PostgreSQL. Este repositório contém o backend da aplicação, responsável pela lógica de negócios e acesso ao banco de dados.

Requisitos

Antes de rodar o projeto localmente, certifique-se de ter os seguintes softwares instalados:

.NET SDK 6.0 ou superior

Visual Studio Code
 (ou outro editor de sua preferência)

PostgreSQL
 (ou utilize o banco hospedado na Render)

Git

Configuração do Banco de Dados
Usando o PostgreSQL Local

Instale o PostgreSQL em sua máquina local.

Crie um banco de dados chamado GxMed.

Configure a connection string no arquivo appsettings.Development.json:

{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=GxMed;Username=seu_usuario;Password=sua_senha"
  }
}


Aplique as migrações para criar as tabelas no banco:

dotnet ef database update

Usando o PostgreSQL na Render

Crie um banco de dados PostgreSQL na Render
.

Obtenha a connection string fornecida pela Render.

Configure a connection string no arquivo appsettings.Development.json:

{
  "ConnectionStrings": {
    "DefaultConnection": "Host=seu_host;Port=5432;Database=GxMed;Username=seu_usuario;Password=sua_senha"
  }
}


Aplique as migrações para criar as tabelas no banco:

dotnet ef database update

Rodando a Aplicação Localmente

Clone o repositório:

git clone https://github.com/juliocesar744/GxMed.git
cd GxMed

Vá até a pasta do backend, depois disso, digite o seguinte comando para restaurar as dependências:
dotnet restore


Rodar a aplicação:
dotnet run

Depois vá até a pasta frontend e digite o seguinte comando para instalar as dependências:
npm i

Rodar a aplicação:
npm run dev
