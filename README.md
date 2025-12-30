# JavaScript
![Logo de JavaScript](https://imgs.search.brave.com/o1_AwwGCf6dXLaMMQkHZ5yOuxT57KiVN9nTfKWVnmFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/MTI3LzU4Ny9zbWFs/bC9qYXZhc2NyaXB0/LWxvZ28tamF2YXNj/cmlwdC1pY29uLXRy/YW5zcGFyZW50LWZy/ZWUtcG5nLnBuZw) 
## Descripción
### Este ejercicio consiste en que el usuario introduzca sus datos y sus aficiones, si falta algun dato por añadir o los datos estan mal escritos el programa avisa al usuario
---
### PracticaExamen.js
```javaScript
let nombre = document.getElementById('nombre')
let apellidos = document.getElementById('apellidos')
let email = document.getElementById('email')
let edad = document.querySelector('input[name="edad"]') 


document.getElementById('boton').addEventListener('click',main)

function main(){
    let relacion = document.querySelectorAll('input[name="empleo"]:checked')
    let seleccionado = document.querySelectorAll('input[type="checkbox"]:checked')
    let aficiones = Array.from(seleccionado).map(e => e.name)
    
    
    validaciones(relacion)

    construirTexto(relacion,aficiones)
}

function validaciones(relacion){
    if(nombre.value=="" || apellidos.value=="" || email.value=="" || edad.value=="" || relacion.value=="")
    {
        alert("Tienen que tener informacion")
        return
    }
    let edades = parseInt(edad.value)
    if(edades<16 || edades>99)
    {
        alert("Edad incorrecta(tiene que estar entre 16 y 99)")
        return 
    }

    if(!email.value.includes("@")||!email.value.includes("."))
    {
        alert("Email incorrecto")
        return 
    }

    if (!document.querySelector('input[name="empleo"]:checked')) {
    alert("No está marcada la relación laboral");
    return 
}

}

function construirTexto(relacion,aficiones){
    let ul = document.querySelector('ul')
    let li = document.createElement('li') 
    li.textContent = `${nombre.value} ${apellidos.value} con ${email.value} de ${edad.value} años es ${relacion[0].value} y ${aficiones.length > 0 ? aficiones.join(", ") : "no tiene aficiones :/"}`
    ul.appendChild(li)
}
```
---
### PracticaExamen.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validar y añadir datos</title>
</head>
<body>
    <label for="nombre">Nombre   <input type="text" name="nombre" id="nombre"></label><br>
    <label for="apellidos">Apellido<input type="text" name="apellidos" id="apellidos"></label><br>
    <label for="email">Email   <input type="text" name="email" id="email"></label><br>
    <label for="edad">Edad   <input type="text" name="edad"></label><br><br>
    Relación laboral <br>
    <label for="nombre"><input type="radio" name="empleo" id="empleado" value="empleado">Empleado</label>
    <label for="nombre"><input type="radio" name="empleo" id="desempleado" value="desempleado">Desempleado</label>
    <label for="nombre"><input type="radio" name="empleo" id="estudiante" value="estudiante">Estudiante</label>
    <label for="nombre"><input type="radio" name="empleo" id="jubilado" value="jubilado">Jubilado</label><br><br>
    Intereses <br>
    <label for="nombre"><input type="checkbox" name="cine" id="cine" value="cine">Cine</label>
    <label for="nombre"><input type="checkbox" name="deporte" id="deporte">Deporte</label>
    <label for="nombre"><input type="checkbox" name="musica" id="musica">Música</label>
    <label for="nombre"><input type="checkbox" name="videojuego" id="videojuego">Videojuegos</label><br><br>
    <input type="submit" value="Añadir sujeto" id="boton">

    <ul>
    <li>David Mateos con email david@email.com de 35 años es empleado y le gusta la música, cine</li>
    <li>Voldemort con email nagini@email.com de 95 años es jubilado y no tiene aficiones :/</li>
    </ul>
    <br><br>
    VALIDACIONES <br>
        0. Si no supera todas las validaciones no debe añadir el texto <br>
        1. Los campons Nombre, apellidos, email, edad, relación laboral deben tener información <br>
        2. Edad tiene que estar comprendida entre 16 y 99 años <br>
        3. email debe contener @ y . para considerarse email valido <br>
        4. Si no tiene aficiones debe mostrar "y no tiene aficiones :/ " <br>
        5. Se debe mostrar en formato ALERT el tipo de error que se encuente <br>
            <strong>5.1 Faltan campos por rellenar <br></strong>
            <strong>5.2 Tiene edad no comprendida entre 16-99 <br></strong>
            <strong>5.3 El email no tiene el formato adecuado <br></strong>
            <strong>5.4 No esta marcada la relación laboral <br></strong>
    <script src="repasoExamen.js"></script>
</body>
</html>
```
---
