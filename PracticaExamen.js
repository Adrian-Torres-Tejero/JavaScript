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

