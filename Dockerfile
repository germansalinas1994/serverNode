# Utilizamos la imagen oficial de MySQL como base
FROM mysql:latest

# Variables de entorno para configurar MySQL
ENV MYSQL_ROOT_PASSWORD=12345678
ENV MYSQL_DATABASE=dbveterinaria
