# crear el dockerfile y ocker ignore  (sin f mayus)

# crear imagen
- docker build -t dockerExpress .        (pilas con el punto, es para ejecutar todas las entencias)

# GEstionar docker
- docker images (se puede ver las imagenes extras de doker hub como node)
- docker run -t -p 4000:3000 docker-express  (-t para ver mnesajes o info por consola)

## generar proceso 
- docker run -d -p 4000:3000 docker-express 
