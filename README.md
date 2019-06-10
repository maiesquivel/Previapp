# Ejercicios y prácticas generales del curso FSWD

## Intro de git
### Para comenzar
* Crea una carpeta en el escritorio o donde quieras trabajar y dale un nombre.
* Abre VSC y busca esa carpeta, VSC - abrir.
* Abre una terminal en VSC, en la barra superior está la opción Terminal - Nueva terminal.

### En la terminal
* git init
* git config user.name "usuario"
* git config user.email "email"

### Primer commit
* Crea un archivo en tu carpeta de trabajo llamado por ejemplo index.html

### En la terminal
* git add .
* git commit -m "first commit"
* git remote add origin https://github.com/pablodifirma/testgit.git (url de tu proyecto)
* git push -u origin master

## Creacion de ramas
### Para comenzar
Para crear una nueva rama en gitub, dentro de tu proyecto busca la solapa code, y allí busca el boton branch: master(deberia estar en master), hacele click y escribe el nombre de una nueva rama.

### En la terminal:
* git fetch --all

### Haciendo uso de la interfaz gráfica o ide
* Parate en la rama nueva con el boton que se encuentra en la extrema izquierda y abajo (icono de ramas), que actualmente dice master, del listado que se despliega selecciona la rama creada.
* Tus cambios se van a pushear a la rama nueva.

## Pasar cambios de dev a master
### En la terminal
* git checkout master 
* git merge dev (dev, o development o el nombre de rama usada)
* git push -u origin master