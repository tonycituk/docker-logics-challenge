# Docker challenge 🎉🔖
<a href="https://gitmoji.dev">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

Api para el zoologico animales bonitos. 

## Problema:
El zoologico "Animales Bonitos" esta perdiendo el control de los cuidadores y los animales debido al aumento del personal y de los animales en el zoologico. A veces, las personas encargadas de pedir comida no logran contactar a los proveedores, lo que provoca que el zoologico se quede sin alimentos. Ademas, se ha perdido el control y el conocimiento sobre que animales se encuentran en los diferentes recintos/habitats.

## Propuesta:
Una aplicacion web/movil que les permita:

- Gestionar los contactos de los proveedores.
- Gestionar a los cuidadores del zoologico.
- Gestionar los recintos/habitats del zoologico.
- Gestionar a los animales.
- Controlar y visualizar que habitats estan a cargo de cada cuidador del zoologico.
- Controlar y visualizar que animales residen en cada uno de los recintos/habitats.
- Habra un administrador (usuario de la aplicacion/sistema que necesitara autenticacion) que podra:

- Gestionar la relacion entre cuidadores y habitats.
- Gestionar la relacion entre habitat y animales.
- Registrar nuevos proveedores.

## Restricciones del Proyecto:
La parte del frontend sera desarrollada por una empresa externa.
El equipo de Automatizacion solo se encargara de desarrollar la seccion del backend del proyecto.

## Operacion
> Asegure que los ports 3000 & 8000 estan disponibles.

#### Poner el programa en marcha
Use el comando:
> docker-compose up --build

#### Nueva cuenta
Para crear una nueva cuenta usar postman:
> localhost:3000/register method post body.raw.json 
{
    "email": "nuevo@mail.com",
    "username": "nuevo",
    "password": "nuevo"
}

#### Logearse 
Abra el navegador, vaya localhost:3000 e introduzca los datos pertinentes.


Made with 💗 and </>.