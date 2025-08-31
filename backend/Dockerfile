# Usa a imagem oficial do .NET SDK
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

# Copia o arquivo csproj e restaura
COPY backend/backend.csproj ./backend/
RUN dotnet restore ./backend/backend.csproj

# Copia o restante do código
COPY backend/. ./backend/

# Compila
WORKDIR /src/backend
RUN dotnet publish -c Release -o /app/publish

# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "backend.dll"]