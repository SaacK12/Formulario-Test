function enviar()
{   //Variables.
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let captchaRespuesta = grecaptcha.getResponse();
    let usuario = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            }
        console.log(captchaRespuesta);
if (!nombre || !email || !asunto || !mensaje|| captchaRespuesta === "") //Si el Captcha no devuelve ningun token.
{
    alert("complete los datos y el captcha");
}
else{ 
    console.log(usuario);
    alert("Enviado!")
emailjs.send("service_eajnwps","template_sdrwghq");
}
}