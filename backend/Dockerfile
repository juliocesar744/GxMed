# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copia os arquivos do projeto
COPY . .

# Restaura dependências
RUN dotnet restore "./backend.csproj"

# Compila o projeto em modo release
RUN dotnet publish "./backend.csproj" -c Release -o /app/publish

# Etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Copia os artefatos da etapa anterior
COPY --from=build /app/publish .

# Define a porta (Railway usa variável PORT, mas vamos expor uma default)
EXPOSE 8080

# Comando de execução
ENTRYPOINT ["dotnet", "backend.dll"]
