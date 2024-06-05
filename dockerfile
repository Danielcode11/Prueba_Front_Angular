# Usar la imagen oficial de Node.js para la construcción
FROM node:20 AS build

# Crear y definir el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación Angular
RUN npm run build --prod

# Usar la imagen oficial de Nginx para servir la aplicación
FROM nginx:1.19

# Copiar los archivos de build de Angular desde la etapa de construcción
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Exponer el puerto 4200
EXPOSE 4200

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]