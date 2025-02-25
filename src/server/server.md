Server Es la carpeta con el BACKEND del e-commerce

server.js usa express, mongose y cors

   - Express para crear el servidor, recibir datos para hacer fetch
        - Hace de endopoint(RUTA) para recibir datos

   - Cors es para poder mandarle los datos recibidos con Express y mandarlo al FrontEND (react)

   - Mongoose para conectar la base de datos
        - Se importa el schema y model que esta dentro de la ruta (./model/product.js)
        - Se crea un archivo aparte que sirva para insertar nuevos elementos a la base de datos el cual tambien
          se conecta a la base de datos momentaneamente y recibe el model de schema en el otro archivo