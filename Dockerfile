# Establecer la imagen base
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . /app

# Instalar las dependencias de la aplicación
RUN npm install

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 5002

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]