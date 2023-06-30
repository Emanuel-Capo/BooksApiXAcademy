<h1 align = "center"> API REST DE LIBRERÍAS Y LIBROS </h1>
<p>Comando para correr server de forma local: <b>npm run start:dev</b></p>
</br>

<h3 align = "center">USUARIOS (Ruta: localhost:8090/user/)</h3>

*Login:*
>Método: POST</br>
Ruta: localhost:8090/user/login</br>
Body:
```
{
    "user": email registrado,
    "password": password registrado
}
```
>La api cuenta con un usuario Admin inicial:
```
{
    "user": "admin@mail.com",
    "password": "admin"
}
```
>Las autenticaciones se hacen por Bearer Token

*Obtener un usuario por id:*
>Método: GET</br>
Ruta: localhost:8090/user/:userId

*Obtener todos los usuarios:*
>Método: GET</br>
Ruta: localhost:8090/user/

*Crear un usuario:*
>Método: POST</br>
Ruta: localhost:8090/user/</br>
Body:
```
{
    "name": "Lionel",
    "lastname": "Messi",
    "email": "lm10@mail.com",
    "password": "123456"
}
```
>Nota: Los usuarios creados van a tener rol User

*Editar un usuario:*
>Método: PUT</br>
Ruta: localhost:8090/user/:userId</br>
Auth: Sólo si el mismo usuario se encuentra autenticado, se pede editar</br>
Body: (Se pueden enviar todos los campos o solo los que se quieran editar)
```
{
    "name": "Lionel",
    "lastname": "Messi",
    "email": "lm10@mail.com",
    "password": "123456"
}
```

*Borrado lógico de un usuario:*
>Método: DELETE</br>
Ruta: localhost:8090/user/:userId</br>
Auth: Sólo el usuario con rol Admin puede borrar usuarios

</br></br>


<h3 align = "center">LIBRERÍAS (Ruta: localhost:8090/library/)</h3>

*Obtener una librería por id:*
>Método: GET</br>
Ruta: localhost:8090/library/:libraryId

*Obtener todas las librerías:*
>Método: GET</br>
Ruta: localhost:8090/library/

*Crear una librería:*
>Método: POST</br>
Ruta: localhost:8090/library/</br>
Auth: Sólo usuarios autenticados pueden crear librerías</br>
Body:
```
{
    "name" : "El Librote",
    "location" : "Av. Libertador 1460",
    "phone" : "3514563344"
}
```

*Crear un libro:*
>Método: POST (Se envía id de la librería por params)</br>
Ruta: localhost:8090/library/:libraryId/book</br>
Auth: Sólo usuarios autenticados pueden crear libros</br>
Body:
```
{
    "isbn" : 547334,
    "title" : "TLOTR",
    "author" : "Tolkien",
    "year" : "1954",
}
```

*Editar una librería:*
>Método: PUT</br>
Ruta: localhost:8090/library/:libraryId</br>
Auth: Sólo usuarios autenticados pueden editar librerías</br>
Body: (Se pueden enviar todos los campos o solo los que se quieran editar)
```
{
    "name" : "El Librote",
    "location" : "Av. Libertador 1460",
    "phone" : "3514563344"
}
```

*Borrado lógico de una librería:*
>Método: DELETE</br>
Ruta: localhost:8090/library/:libraryId</br>
Auth: Sólo usuarios autenticados pueden borrar librerías</br>

</br></br>


<h3 align = "center">LIBROS (Ruta: localhost:8090/book/)</h3>

*Obtener un libro por id:*
>Método: GET</br>
Ruta: localhost:8090/book/:bookId

*Obtener todos los libros:*
>Método: GET</br>
Ruta: localhost:8090/book/

*Crear un libro:*
>Método: POST (Se envía id de la librería por params)</br>
Ruta: localhost:8090/book/:libraryId</br>
Auth: Sólo usuarios autenticados pueden crear libros</br>
Body:
```
{
    "isbn" : 547334,
    "title" : "TLOTR",
    "author" : "Tolkien",
    "year" : "1954",
}
```

*Editar un libro:*
>Método: PUT</br>
Ruta: localhost:8090/book/:bookId</br>
Auth: Sólo usuarios autenticados pueden editar libros</br>
Body: (Se pueden enviar todos los campos o solo los que se quieran editar)
```
{
    "isbn" : 547334,
    "title" : "TLOTR",
    "author" : "Tolkien",
    "year" : "1954",
}
```

*Borrado lógico de un libro:*
>Método: DELETE</br>
Ruta: localhost:8090/library/:libraryId</br>
Auth: Sólo usuarios autenticados pueden borrar libros</br>
