function enviar()
{
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let usuario = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            }
        
if (!nombre || !email || !asunto || !mensaje)
{
    alert("complete los datos y el captcha");
}
else{ 
    console.log(usuario);
}
}
